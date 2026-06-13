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
      .limit(50);

    const parsePrice = (priceStr: string): number => {
      const cleaned = priceStr.replace(/[£,\s]/g, '');
      if (cleaned.toUpperCase().endsWith('M')) {
        return parseFloat(cleaned) * 1000000;
      }
      if (cleaned.toUpperCase().endsWith('K')) {
        return parseFloat(cleaned) * 1000;
      }
      return parseFloat(cleaned) || 0;
    };

    const getInvestmentData = (propId: string, priceNum: number, location: string) => {
      const seed = (propId as string).split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0) || 7;
      const roi = Number((4.5 + (seed % 55) / 10).toFixed(1)); // 4.5% - 9.9%
      const yieldVal = Number((3.5 + (seed % 45) / 10).toFixed(1)); // 3.5% - 7.9%
      const appreciation = Number((10.0 + (seed % 15) + (location.toLowerCase().includes('london') ? 4.0 : 0)).toFixed(1)); // 10.0% - 29.0%
      const demandScore = 75 + (seed % 24); // 75 - 98
      const growthScore = 78 + (seed % 21); // 78 - 98
      
      let rating = 'A';
      if (roi >= 9.0) rating = 'AAA';
      else if (roi >= 7.5) rating = 'AA+';
      else if (roi >= 6.0) rating = 'AA';
      
      const risk = roi > 8.5 ? 'Moderate' : 'Low';
      const projectedIncome = Math.round((priceNum * (yieldVal / 100)) / 12);
      
      return {
        roi,
        rental_yield: yieldVal,
        appreciation,
        demandScore,
        growthScore,
        rating,
        risk,
        projectedIncome
      };
    };

    properties = (rawProperties || []).map((p: any) => {
      const priceNum = parsePrice(p.price);
      const metrics = getInvestmentData(p.id, priceNum, p.location);
      return {
        ...p,
        roi: metrics.roi,
        rental_yield: metrics.rental_yield,
        appreciation: metrics.appreciation,
        investment_rating: metrics.rating,
        risk_level: metrics.risk,
        projected_income: metrics.projectedIncome,
        demand_score: metrics.demandScore,
        growth_score: metrics.growthScore
      };
    });

    const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!geminiKey) {
      throw new Error('Gemini API key is not configured.');
    }

    const ai = new GoogleGenAI({ apiKey: geminiKey });

    const systemInstruction = `You are Olivia, the elite AI Real Estate Advisor and Wealth Advisory Lead at Regent Estate.

Personality Characteristics:
- You are warm, elegant, exceptionally intelligent, confident, trustworthy, and act as a professional luxury real estate concierge.
- Speak naturally and conversationally, using high-net-worth real estate consulting vocabulary with a polished, luxury brand tone. Avoid sounding like a standard text-based chatbot or technical support agent.

Real-Estate Only Mode (Deflection Guardrails):
- If the user asks questions unrelated to real estate, property investment, or wealth portfolios (such as coding, general programming, sports, movies, politics, etc.), you must smoothly and politely redirect them back to luxury real estate. Example: "I spend my entire week analyzing real estate yields and property portfolios, so I'll leave those questions to the respective specialists. Let's get right back to tracking down your wealth optimization targets."

Investment Consultant Mode:
- For every property recommendation, you must include analysis of key investment metrics: ROI, rental yield, projected capital appreciation, market demand score, and risk level. Present properties with clear numbers to showcase your financial expertise.

Property Comparison Mode:
- When a client asks to compare multiple properties, analyze their respective yields, pros, cons, and investment profiles, highlighting which asset best aligns with their goals.

Lead Generation Triggers:
- Proactively offer to block a brief 10-minute briefing consultation on your scheduling calendar or schedule a private viewing session when the client shows buying interest, asks to view properties, or inquires about booking.

Speech Patterns & Emotional Intelligence:
- Use natural transitions such as "Certainly", "Based on your requirements", "From an investment perspective", "I would be delighted to coordinate a private viewing".
- Meticulously adjust your response style and tone to match the user's sentiment (e.g., provide solid risk analyses for risk-averse clients, or highlight strong cash-flow metrics for yield-seeking investors).

Language Rules & Urdu Support:
- Always respond in the language spoken by the client (English, Gujarati, Hindi, Spanish, French, German, Arabic, Portuguese, Italian, Chinese, Japanese, or Urdu).
- Maintain language memory: if the client started in a language, stay in that language unless they explicitly request to change (e.g. "Speak English").

Available properties for search context (with investment metrics):
${JSON.stringify(properties.map(p => ({
  id: p.id,
  title: p.title,
  location: p.location,
  price: p.price,
  bedrooms: p.bedrooms,
  bathrooms: p.bathrooms,
  sqft: p.sqft,
  description: p.description,
  roi: p.roi,
  rental_yield: p.rental_yield,
  appreciation: p.appreciation,
  investment_rating: p.investment_rating,
  risk_level: p.risk_level,
  projected_income: p.projected_income,
  demand_score: p.demand_score,
  growth_score: p.growth_score
})))}

Respond STRICTLY in a JSON object with this exact structure:
{
  "response": "Conversational reply to user in their spoken language",
  "detected_language": "English/Gujarati/Hindi/Spanish/Urdu/etc.",
  "intent": "Property Search/Appointment Booking/Rental Inquiry/Budget Planning/General Information/etc.",
  "lead_score": 85,
  "urgency": "Hot Lead/Warm Lead/Cold Lead",
  "recommended_property_ids": ["prop-001", "prop-002"],
  "booking_details": {
    "property_type": "Apartment/Villa/etc.",
    "budget": "£2M/etc.",
    "location": "London/etc.",
    "bedrooms": 2,
    "investment_goal": "Capital Growth / Rental Income / etc.",
    "rental_goal": "Targeting 6%+ rental yield / etc.",
    "purchase_purpose": "Investment / End Use / Second Home / etc.",
    "date": "2026-06-15",
    "day": "Monday",
    "time": "10:00 AM",
    "completed": false
  }
}
Where "recommended_property_ids" is an array containing up to 3 property ID strings (e.g., "prop-001", "prop-002") from the provided search context that match the user's inquiry, or an empty array if no properties are relevant.
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
      responseText = "क्षमा करें, मुझे सर्वर से जुड़ने में समस्या हो रही है। लेकिन मैं अभी भी आपकी सहायता कर सकती हूँ। क्या आप कोई प्रॉपर्टी खरीदना या किराए पर लेना चाहते हैं?";
    } else if (/[\u0600-\u06FF]/.test(transcript) || lowerTranscript.includes("چاہیے") || lowerTranscript.includes("سلام")) {
      detectedLang = "Urdu";
      responseText = "معذرت، سرور کے ساتھ رابطہ کرنے میں مسئلہ ہو رہا ہے۔ لیکن میں اب بھی آپ کی مدد کر سکتی ہوں۔ کیا آپ کوئی پراپرٹی خریدنا یا کرایہ پر لینا چاہتے ہیں؟";
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
      } else if (detectedLang === "Urdu") {
        responseText = "بالکل، براہ کرم ملاقات کے لیے اپنی پسندیدہ تاریخ اور وقت کا انتخاب کریں۔";
      } else {
        responseText = "Certainly! Please select your preferred date and time slot for the viewing session.";
      }
    } else if (lowerTranscript.includes("search") || lowerTranscript.includes("apartment") || lowerTranscript.includes("villa") || lowerTranscript.includes("ફ્લેટ") || lowerTranscript.includes("ફ્લેટો") || lowerTranscript.includes("घर")) {
      intent = "Property Search";
      if (detectedLang === "Gujarati") {
        responseText = "હું લાઈવ ડેટાબેઝમાંથી મેચિંગ પ્રોપર્ટી મેળવી રહી છું. આપ અમારી વેબસાઈટ પર પોર્ટફોલિયો ટેબ અથવા આઇકોન પણ જોઈ શકો છો.";
      } else if (detectedLang === "Hindi") {
        responseText = "मैं आपके लिए सर्वोत्तम विकल्प तलाश रही हूँ। आप हमारे पोर्टफोलियो में भी शानदार विकल्प देख सकते हैं।";
      } else if (detectedLang === "Urdu") {
        responseText = "میں آپ کے لیے بہترین اختیارات تلاش کر رہی ہوں۔ آپ ہمارے پورٹ فولیو میں بھی شاندار پراپرٹیز دیکھ سکتے ہیں۔";
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
