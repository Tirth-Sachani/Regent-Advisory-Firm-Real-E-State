import fs from 'fs';
import path from 'path';

// Manually load environmental variables from .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const firstEqual = trimmed.indexOf('=');
      if (firstEqual !== -1) {
        const key = trimmed.slice(0, firstEqual).trim();
        const val = trimmed.slice(firstEqual + 1).trim();
        process.env[key] = val;
      }
    }
  });
}

import { GoogleGenAI } from '@google/genai';

async function testVerification() {
  const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  console.log('Gemini API Key loaded:', geminiKey ? 'YES (starts with ' + geminiKey.substring(0, 5) + ')' : 'NO');
  
  if (!geminiKey) return;
  
  const ai = new GoogleGenAI({ apiKey: geminiKey });
  
  const name = "John Doe";
  const email = "john@example.com";
  const phone = "+91 9876543210";
  const request = "Would love to book a viewing for next Thursday morning.";
  const conversationHistory = [
    { role: "user", content: "Would love to book a viewing for next Thursday morning." },
    { role: "assistant", content: "Where is the property located?" },
    { role: "user", content: "Surat" }
  ];

  const systemInstruction = `You are Olivia, the AI Real Estate Advisor of Regent Estate.
Your role is to verify appointment requests before they are submitted.

You must:
- Identify genuine buyers.
- Detect spam, fake names, random text, URL spam, marketing spam, or promotional inquiries.
- Collect missing critical information. The critical required fields are:
  1. purpose (e.g. buying, renting, viewing, consultation)
  2. budget (e.g. ₹1 Crore, £500k, budget range)
  3. location (city, neighborhood, or specific locality)
  4. preferred_date (date or time window like "next Thursday morning", "tomorrow 2pm")
  5. property_type (apartment, house, commercial, luxury, etc.)
- Score lead quality from 0 to 100 based on: request quality, buying intent, timeframe, specificity, and engagement.
- Determine lead authenticity score from 0 to 100.
- Determine urgency level: "Hot Lead" (e.g. buying within 30 days), "Warm Lead" (e.g. planning in next 3 months), or "Cold Lead" (just researching, no timeframe).
- Speak professionally and politely. Focus only on real estate advisory and scheduling.
- Output ONLY a structured JSON response matching the schema.`;

  const chatContent = [
    {
      role: 'user',
      parts: [
        {
          text: `Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Initial Request: ${request}

Conversation history so far:
${JSON.stringify(conversationHistory || [])}

Analyze the booking request and conversation history. Fill in all extracted fields.
Identify what is missing from the 5 required fields: purpose, budget, location, preferred_date, property_type.
If anything is missing, list the missing fields in "missing_fields" and write a professional follow-up question as Olivia in "follow_up_question". Ask for the missing details politely.
If all 5 required fields are successfully collected, set "missing_fields" to [] and "follow_up_question" to null, then generate a professional "summary" string formatted exactly like this:

Client: [Client Name]
Intent: [Intent Description]
Location: [Location]
Budget: [Budget]
Preferred Date: [Preferred Date]
Property Type: [Property Type]
Lead Score: [Lead Score]/100
Urgency: [Urgency Level]

Output the JSON response with the following schema:
{
  "authenticity_score": number, // 0-100
  "is_spam": boolean,
  "intent": string, // One of: Property Viewing, Investment Consultation, Rental Inquiry, Purchase Inquiry, Commercial Property, Luxury Property, Unknown
  "urgency": string, // One of: Hot Lead, Warm Lead, Cold Lead
  "lead_score": number, // 0-100
  "extracted_fields": {
    "purpose": string | null,
    "budget": string | null,
    "location": string | null,
    "preferred_date": string | null,
    "property_type": string | null
  },
  "missing_fields": string[], // list of missing fields
  "follow_up_question": string | null, // polite question from Olivia asking for missing details
  "summary": string | null // generated summary if no missing fields, otherwise null
}`
        }
      ]
    }
  ];

  try {
    console.log('Sending request to Gemini...');
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: chatContent,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        temperature: 0.1,
      },
    });
    console.log('Response received!');
    console.log(response.text);
  } catch (err: any) {
    console.error('Error running Gemini request:', err.message || err);
  }
}

testVerification();
