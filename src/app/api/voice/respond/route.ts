import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { GoogleGenAI } from '@google/genai';

export async function POST(req: NextRequest) {
  let transcript = '';
  let activeLanguage = '';
  let properties: any[] = [];
  try {
    let conversationHistory = [];
    let userId = null;
    try {
      const body = await req.json();
      transcript = body.transcript || '';
      conversationHistory = body.conversationHistory || [];
      userId = body.userId || null;
      activeLanguage = body.activeLanguage || '';
    } catch (e) {
      // Ignore JSON parse errors
    }

    if (!transcript) {
      return NextResponse.json({ error: 'Transcript query is required.' }, { status: 400 });
    }

    const supabase = createAdminClient();

    // 1. Fetch properties from database for potential dynamic context
    const { data: rawProperties } = await supabase
      .from('properties')
      .select('*')
      .limit(20);
    properties = rawProperties || [];

    const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!geminiKey) {
      throw new Error('Gemini API key is not configured.');
    }

    const ai = new GoogleGenAI({ apiKey: geminiKey });

    const systemInstruction = `You are Olivia, the elite AI Real Estate Advisor at Regent Estate.
Personality characteristics:
- Conversational, natural, friendly, human-like, and professional.
- Use a luxury brand tone.
- Do NOT sound like standard text-based chatbot or tech support. Speak like an experienced high-net-worth real estate consultant.

Language rules:
- Always respond in the language the client speaks (e.g. Gujarati if they speak Gujarati, Hindi if they speak Hindi, Spanish if they speak Spanish, etc.).
- Maintain language memory: if the client started in a language, stay in that language unless they explicitly request to change (e.g., "Speak English").

Capabilities:
1. Property Search: If the client asks about buying, renting, or viewing a property, consult the provided properties context and briefly explain the matching listings in their language.
2. Appointment Booking: If the client expresses interest in viewings or consulting, guide them politely to gather required fields: location, property type, budget, date, day, time.
3. Lead Qualification: Automatically assess timeline, budget, location, property type, name/phone and compute a lead score (0-100) and urgency tier ("Hot Lead", "Warm Lead", "Cold Lead").

Available properties for search context:
${JSON.stringify(properties.map(p => ({ id: p.id, title: p.title, location: p.location, price: p.price, description: p.description })))}

Respond STRICTLY in a JSON object with this exact structure:
{
  "response": "Conversational reply to user in their spoken language",
  "detected_language": "English/Gujarati/Hindi/Spanish/etc.",
  "intent": "Property Search/Appointment Booking/Rental Inquiry/Budget Planning/General Information/etc.",
  "lead_score": 85,
  "urgency": "Hot Lead/Warm Lead/Cold Lead",
  "recommended_property_ids": ["prop-001", "prop-002"],
  "booking_details": {
    "location": "London",
    "property_type": "Apartment",
    "budget": "£2M",
    "date": "2026-06-15",
    "day": "Monday",
    "time": "10:00 AM",
    "completed": false
  }
}
Where "recommended_property_ids" is an array containing up to 3 property ID strings (e.g., "prop-109", "prop-002") from the provided search context that match the user's inquiry, or an empty array if no properties are relevant.
Generate ONLY JSON. No markdown codeblocks.`;

    const chatContent = [
      {
        role: 'user',
        parts: [
          {
            text: `Client spoken transcript: "${transcript}"
Active Language Memory (if any): "${activeLanguage || ''}"
Conversation History so far:
${JSON.stringify(conversationHistory)}`
          }
        ]
      }
    ];

    const modelsToTry = [
      'gemini-2.5-flash',
      'gemini-2.0-flash',
      'gemini-1.5-flash',
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
            temperature: 0.7
          }
        });
        if (response && response.text) {
          responseText = response.text;
          break;
        }
      } catch (err: any) {
        console.warn(`Model ${modelName} failed in voice response:`, err.message || err);
        lastError = err;
      }
    }

    if (!responseText) {
      throw lastError || new Error('Failed to generate response using Gemini models.');
    }

    let cleanText = responseText.trim();
    if (cleanText.startsWith('```')) {
      cleanText = cleanText.replace(/^```(json)?/, '').replace(/```$/, '').trim();
    }

    const result = JSON.parse(cleanText);

    // 2. Log database record - Catch and fail gracefully if table is not created yet
    try {
      const { error: dbError } = await supabase
        .from('voice_conversations')
        .insert([
          {
            user_id: userId || null,
            language: result.detected_language || activeLanguage || 'English',
            transcript: transcript,
            response: result.response,
            intent: result.intent,
            lead_score: result.lead_score || 50
          }
        ]);

      if (dbError) {
        if (dbError.code === '42P01') {
          console.warn("Table public.voice_conversations does not exist in schema. Please run scratch/voice_schema.sql to create it.");
        } else {
          console.error("Database logging error:", dbError.message);
        }
      }
    } catch (dbErr: any) {
      console.warn("Gracefully ignored database write error:", dbErr.message);
    }
    const recommendedPropIds = result.recommended_property_ids || result.recommendedPropertyIds || [];
    const recommendedProperties = recommendedPropIds
      .map((id: string) => properties.find(p => p.id === id))
      .filter(Boolean);

    return NextResponse.json({
      success: true,
      properties: recommendedProperties,
      ...result
    });

  } catch (error: any) {
    console.warn('Voice Respond API rate limit fallback activated. Error:', error.message || error);
    
    // Heuristic multi-language conversational fallback responses
    const lowerTranscript = transcript.toLowerCase();
    let responseText = "I'm sorry, I'm having a brief issue connecting with my server. But I would love to help you. Are you looking to buy, rent, or view properties today?";
    let detectedLang = activeLanguage || "English";
    let intent = "General Inquiry";
    
    // Check script or words to maintain language continuity
    if (/[\u0a80-\u0aff]/.test(transcript) || lowerTranscript.includes("જોઈએ") || lowerTranscript.includes("નમસ્તે")) {
      detectedLang = "Gujarati";
      responseText = "માફ કરશો, સર્વર જોડાણમાં ક્ષતિ આવી છે. પણ હું આપને મદદ કરવા તૈયાર છું. આપ પ્રોપર્ટી ખરીદવા, ભાડે લેવા કે મુલાકાત માટે સમય નક્કી કરવા માંગો છો?";
    } else if (/[\u0900-\u097f]/.test(transcript) || lowerTranscript.includes("चाहिए") || lowerTranscript.includes("नमस्ते")) {
      detectedLang = "Hindi";
      responseText = "क्षमा करें, मुझे सर्वर से जुड़ने में समस्या हो रही है। लेकिन मैं अभी भी आपकी सहायता कर सकती हूँ। क्या आप कोई प्रॉपर्टी खरीदना या किराए પર लेना चाहते हैं?";
    } else if (lowerTranscript.includes("propiedad") || lowerTranscript.includes("buscar") || lowerTranscript.includes("casa")) {
      detectedLang = "Spanish";
      responseText = "Lo siento, tengo un problema de conexión temporal. Pero me encantaría ayudarte. ¿Estás buscando comprar, rentar o visitar una propiedad hoy?";
    }

    // Heuristics for scheduling intents
    if (lowerTranscript.includes("schedule") || lowerTranscript.includes("viewing") || lowerTranscript.includes("book") || lowerTranscript.includes("નક્કી") || lowerTranscript.includes("अपॉइंटमेंट")) {
      intent = "Appointment Booking";
      if (detectedLang === "Gujarati") {
        responseText = "ચોક્કસ, મુલાકાત માટે આપની અનુકૂળ તારીખ અને સમય પસંદ કરશો?";
      } else if (detectedLang === "Hindi") {
        responseText = "बिल्कुल, कृपया अपनी पसंद की तारीख and समय स्लॉट चुनें।";
      } else {
        responseText = "Certainly! Please select your preferred date and time slot for the viewing session.";
      }
    } else if (lowerTranscript.includes("search") || lowerTranscript.includes("apartment") || lowerTranscript.includes("villa") || lowerTranscript.includes("ફ્લેટ") || lowerTranscript.includes("ફ્લેટો") || lowerTranscript.includes("घर")) {
      intent = "Property Search";
      if (detectedLang === "Gujarati") {
        responseText = "હું લાઈવ ડેટાબેઝમાંથી મેચિંગ પ્રોપર્ટી મેળવી રહી છું. આપ અમારી વેબસાઈટ પર પોર્ટફોલિયો ટેબ અથવા આઇકોન પણ જોઈ શકો છો.";
      } else if (detectedLang === "Hindi") {
        responseText = "मैं आपके लिए सर्वोत्तम विकल्प तलाश रही हूँ। आप हमारे पोर्टफोलियो में भी शानदार विकल्प देख सकते हैं।";
      } else {
        responseText = "I'm looking for matches in our portfolio. You can also view active premium properties in the search or recommendations tabs.";
      }
    }

    let recommendedProperties = [];
    if (intent === "Property Search" || lowerTranscript.includes("apartment") || lowerTranscript.includes("villa") || lowerTranscript.includes("ફ્લેટ") || lowerTranscript.includes("લંડન") || lowerTranscript.includes("london") || lowerTranscript.includes("surat") || lowerTranscript.includes("સુરત") || lowerTranscript.includes("घर")) {
      recommendedProperties = properties.filter(p => {
        const titleLoc = (p.title + " " + p.location).toLowerCase();
        return (titleLoc.includes("london") && (lowerTranscript.includes("london") || lowerTranscript.includes("લંડન"))) ||
               (titleLoc.includes("surat") && (lowerTranscript.includes("surat") || lowerTranscript.includes("સુરત") || lowerTranscript.includes("સુરતમાં"))) ||
               (titleLoc.includes("ascot") && lowerTranscript.includes("ascot")) ||
               lowerTranscript.includes(p.id.toLowerCase());
      }).slice(0, 3);
      if (recommendedProperties.length === 0 && properties.length > 0) {
        recommendedProperties = properties.slice(0, 3);
      }
    }

    return NextResponse.json({
      success: true,
      response: responseText,
      detected_language: detectedLang,
      intent: intent,
      lead_score: 75,
      urgency: "Warm Lead",
      properties: recommendedProperties,
      fallback: true
    });
  }
}
