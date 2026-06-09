import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(req: NextRequest) {
  let name = "";
  let email = "";
  let phone = "";
  let request = "";
  let conversationHistory: any[] = [];
  let bookingDate = "";
  let bookingTime = "";
  let bookingDay = "";

  try {
    const body = await req.json();
    name = body.name || "";
    email = body.email || "";
    phone = body.phone || "";
    request = body.request || "";
    conversationHistory = body.conversationHistory || [];
    bookingDate = body.bookingDate || "";
    bookingTime = body.bookingTime || "";
    bookingDay = body.bookingDay || "";

    if (!name || !email || !request) {
      return NextResponse.json(
        { error: 'Name, email, and scheduling request are required.' },
        { status: 400 }
      );
    }

    const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!geminiKey) {
      console.warn("Gemini API key is not configured. Running rule-based fallback.");
      return NextResponse.json(runRuleBasedVerification(name, email, phone, request, conversationHistory, bookingDate, bookingTime, bookingDay));
    }

    const ai = new GoogleGenAI({ apiKey: geminiKey });

    const systemInstruction = `You are Olivia, Regent Estate's AI Appointment Verification Specialist.
Your job is to collect missing information and verify leads.

IMPORTANT RULES
1. Never reject incomplete requests.
2. Never stop the conversation because one field is missing.
3. Ask only ONE missing question at a time.
4. Remember all previous answers from the conversation history.
5. Maintain conversation state.
6. Speak politely and professionally.
7. Focus only on real estate advisory and scheduling.
8. Output ONLY a structured JSON response matching the schema.`;

    const chatContent = [
      {
        role: 'user',
        parts: [
          {
            text: `Client Information Collected:
- Full Name: ${name}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Initial Request: ${request}
- Selected Preferred Date: ${bookingDate || 'Not selected'}
- Selected Preferred Day: ${bookingDay || 'Not selected'}
- Selected Preferred Time: ${bookingTime || 'Not selected'}

Conversation history so far (use this history to remember previously provided answers and maintain state):
${JSON.stringify(conversationHistory || [])}

Required Fields to check and collect:
1. location
2. property_type (e.g., Apartment, Villa, Commercial, Office, Land)
3. budget (approximate budget range)
4. preferred_date

Determine if any of the Required Fields are missing. Check the initial request, conversation history, and any selected values. Note: if "Selected Preferred Date", "Selected Preferred Day" and "Selected Preferred Time" are provided, then preferred_date has already been collected!
If any required field is missing, set "completed" to false, list the missing field names in "missing_fields", and ask only ONE missing question at a time in "message".
Example follow-up format when location is provided but property_type is missing:
"Thank you. What type of property are you interested in?\n\n- Apartment\n- Villa\n- Commercial\n- Office\n- Land"

If all required fields are successfully collected, set "completed" to true, "missing_fields" to [], and set "message" to:
"Appointment ready for confirmation. Would you like to confirm this appointment?"
Also populate the "summary" object with the collected values. Generate a detailed summary of the appointment. For the "date" field in the summary, make sure to format it as "${bookingDay}, ${bookingDate} at ${bookingTime}" if they were selected in the form, or use the gathered date.

Evaluate spam or authenticity. If the message is completely random text, advertising, or abusive, set "is_spam" to true and ask them to verify details.

Output in one of these two JSON formats exactly:

If completed is false:
{
  "message": "What is your approximate budget?",
  "missing_fields": ["budget"],
  "lead_score": 45,
  "completed": false,
  "is_spam": false
}

If completed is true:
{
  "message": "Appointment ready for confirmation. Would you like to confirm this appointment?",
  "completed": true,
  "lead_score": 88,
  "is_spam": false,
  "summary": {
    "client_name": "${name}",
    "location": "London",
    "budget": "£500,000",
    "property_type": "Apartment",
    "date": "${bookingDay}, ${bookingDate} at ${bookingTime}",
    "urgency": "Hot Lead",
    "intent": "Property Viewing"
  }
}`
          }
        ]
      }
    ];

    const modelsToTry = [
      'gemini-2.5-flash',
      'gemini-3.5-flash',
      'gemini-2.0-flash',
      'gemini-flash-latest'
    ];
    let responseText = '';
    let lastError = null;

    for (const modelName of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: chatContent,
          config: {
            systemInstruction,
            responseMimeType: 'application/json',
            temperature: 0.1,
          },
        });
        if (response && response.text) {
          responseText = response.text;
          break;
        }
      } catch (err: any) {
        console.warn(`Model ${modelName} failed during verification:`, err.message || err);
        lastError = err;
      }
    }

    if (!responseText) {
      throw lastError || new Error('All Gemini models failed to verify appointment.');
    }

    // Clean markdown code blocks if model output contains them despite MIME type configuration
    let cleanText = responseText.trim();
    if (cleanText.startsWith('```')) {
      cleanText = cleanText.replace(/^```(json)?/, '').replace(/```$/, '').trim();
    }

    const result = JSON.parse(cleanText);
    return NextResponse.json(result);

  } catch (error: any) {
    console.error('Gemini verification failed. Executing high-fidelity rule-based fallback. Error:', error.message || error);
    try {
      const fallbackResult = runRuleBasedVerification(
        name,
        email,
        phone,
        request,
        conversationHistory,
        bookingDate,
        bookingTime,
        bookingDay
      );
      return NextResponse.json(fallbackResult);
    } catch (fallbackErr: any) {
      return NextResponse.json(
        { error: 'Internal server error during verification.', details: fallbackErr.message },
        { status: 500 }
      );
    }
  }
}

// High-fidelity rule-based state machine fallback
function runRuleBasedVerification(
  name: string,
  email: string,
  phone: string,
  request: string,
  conversationHistory: any[],
  bookingDate: string,
  bookingTime: string,
  bookingDay: string
) {
  const allUserMessages = [
    request,
    ...(conversationHistory || [])
      .filter((m: any) => m.role === 'user')
      .map((m: any) => m.content)
  ].map(txt => txt.toLowerCase());

  let location: string | null = null;
  let propertyType: string | null = null;
  let budget: string | null = null;
  let date: string | null = bookingDate ? `${bookingDay ? bookingDay + ', ' : ''}${bookingDate}${bookingTime ? ' at ' : ''}${bookingTime}` : null;

  // Heuristics for location
  const locationKeywords = ['london', 'surat', 'delhi', 'mumbai', 'mayfair', 'richmond', 'manchester', 'birmingham'];
  // Heuristics for property type
  const typeKeywords = ['apartment', 'villa', 'commercial', 'office', 'land', 'house', 'flat', 'penthouse'];
  // Heuristics for budget
  const budgetPattern = /(?:[\£\$\₹]?[0-9]+[0-9,\.]*\s*(?:crore|lakh|million|thousand|m|k|cr|l)?)/gi;

  // Parse location, propertyType, budget and date from initial request and history
  for (const msg of allUserMessages) {
    // Check location
    for (const loc of locationKeywords) {
      if (msg.includes(loc)) {
        location = loc.charAt(0).toUpperCase() + loc.slice(1);
      }
    }
    // Check property type
    for (const t of typeKeywords) {
      if (msg.includes(t)) {
        propertyType = t.charAt(0).toUpperCase() + t.slice(1);
      }
    }
    // Check budget
    const budgetMatch = msg.match(budgetPattern);
    if (budgetMatch && budgetMatch.length > 0) {
      budget = budgetMatch[0];
    }
    // Check preferred date
    const dateKeywords = ['thursday', 'morning', 'afternoon', 'evening', 'tomorrow', 'next week', 'monday', 'tuesday', 'wednesday', 'friday', 'saturday', 'sunday', 'next thursday'];
    for (const dk of dateKeywords) {
      if (msg.includes(dk)) {
        date = dk.charAt(0).toUpperCase() + dk.slice(1);
      }
    }
  }

  // Determine missing fields
  const missing_fields: string[] = [];
  if (!location) missing_fields.push('location');
  if (!propertyType) missing_fields.push('property_type');
  if (!budget) missing_fields.push('budget');
  if (!date) missing_fields.push('preferred_date');

  if (missing_fields.length > 0) {
    // Ask for one missing field at a time
    let message = "";
    const nextMissing = missing_fields[0];
    if (nextMissing === 'location') {
      message = "Thank you, " + name + ". To help me find the perfect property for you, could you please let me know the preferred location for your viewing?";
    } else if (nextMissing === 'property_type') {
      message = "Thank you. What type of property are you interested in?\n\n- Apartment\n- Villa\n- Commercial\n- Office\n- Land";
    } else if (nextMissing === 'budget') {
      message = "Thank you. What is your approximate budget range?";
    } else {
      message = "Thank you. What date or time window would you prefer?";
    }

    return {
      message,
      missing_fields,
      lead_score: 55,
      completed: false,
      is_spam: false
    };
  }

  return {
    message: "Appointment ready for confirmation. Would you like to confirm this appointment?",
    completed: true,
    lead_score: 85,
    is_spam: false,
    summary: {
      client_name: name,
      location: location || "London",
      budget: budget || "£500,000",
      property_type: propertyType || "Apartment",
      date: date || "next Thursday morning",
      urgency: "Warm Lead",
      intent: "Property Viewing"
    }
  };
}
