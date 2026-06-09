import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, chatHistory = [] } = body;

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const normalizedMsg = message.toLowerCase().trim();
    const supabase = createAdminClient();

    // 1. Fetch properties from Supabase to serve as the live knowledge context
    const { data: properties, error: dbError } = await supabase
      .from('properties')
      .select('*');

    if (dbError) {
      console.error('Error fetching properties for Olivia:', dbError);
    }

    // 2. Pre-filter properties locally based on query relevance to keep prompt context highly efficient
    const matchedProps: any[] = [];
    if (properties) {
      for (const prop of properties) {
        let score = 0;
        if (normalizedMsg.includes(prop.location.toLowerCase())) score += 3;
        if (normalizedMsg.includes(`${prop.bedrooms} bed`) || normalizedMsg.includes(`${prop.bedrooms} bedroom`)) score += 2;
        
        const styleKeywords = ['apartment', 'penthouse', 'villa', 'bungalow', 'house', 'office', 'showroom', 'warehouse', 'farmhouse', 'plot', 'land'];
        for (const kw of styleKeywords) {
          if (normalizedMsg.includes(kw) && prop.title.toLowerCase().includes(kw)) {
            score += 2;
          }
        }
        
        if (score > 0) {
          matchedProps.push({ prop, score });
        }
      }
    }
    matchedProps.sort((a, b) => b.score - a.score);
    // Take the top 10 most relevant properties to feed as context
    const contextProperties = matchedProps.length > 0 
      ? matchedProps.slice(0, 10).map(m => m.prop) 
      : (properties ? properties.slice(0, 10) : []);

    // 3. Dynamic File-System Parsing (reads the updated markdown file from public/system-prompt.md)
    let systemInstruction = "";
    try {
      const promptPath = path.resolve(process.cwd(), 'public/system-prompt.md');
      systemInstruction = fs.readFileSync(promptPath, 'utf8');
    } catch (promptErr) {
      console.error('Error reading system-prompt.md for Olivia:', promptErr);
      systemInstruction = `You are Olivia, a highly successful Senior Wealth Advisory Lead. Be exceptionally intelligent, humanly natural, keep responses under 3 sentences.`;
    }

    // 4. Context Memory Allocation, Sanitization & Anti-Greeting Loop Injection
    const isShortGreeting = ['hi', 'hello', 'hey', 'yo', 'good morning', 'good afternoon', 'good day'].includes(normalizedMsg);
    const hasHistory = chatHistory.length > 0;
    
    let antiGreetingInjection = "";
    if (isShortGreeting && hasHistory) {
      antiGreetingInjection = "\n\nCRITICAL CONVERSATIONAL STATE: The user has submitted a short greeting, but this is a continuation of an ongoing chat. Under no circumstances should you repeat your opening greeting or introduce yourself again. Respond naturally, acknowledging that you are already mid-conversation, and ask what asset category they wish to focus on next.";
    }

    // 5. Check for Gemini API Key and run Gemini call if available
    const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    
    if (geminiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey: geminiKey });
        
        // Prepare content for Gemini including the pre-filtered property list and history injection
        const promptContent = `
Client Message: "${message}"${antiGreetingInjection}

Available Properties Context (IDs, Titles, Locations, Prices, Bed/Bath configurations):
${contextProperties.map(p => `- ID: "${p.id}", Title: "${p.title}", Location: "${p.location}", Price: "${p.price}", ${p.bedrooms} Beds, ${p.bathrooms} Baths, Features: [${p.features.join(', ')}]`).join('\n')}

Generate the required JSON output matching the response format specification.
`;

        const response = await ai.models.generateContent({
          model: 'gemini-1.5-flash',
          contents: promptContent,
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.85,
            topP: 0.9,
            maxOutputTokens: 300,
            presencePenalty: 0.5,
            frequencyPenalty: 0.4,
            responseMimeType: 'application/json' // Forces structured JSON response
          }
        });

        const textResponse = response.text || '';
        const parsed = JSON.parse(textResponse.trim());

        // Map recommended property IDs back to actual property objects
        const recommendedProperties = (parsed.recommendedPropertyIds || [])
          .map((id: string) => properties?.find(p => p.id === id))
          .filter(Boolean);

        return NextResponse.json({
          reply: parsed.reply,
          properties: recommendedProperties.slice(0, 3),
          leadCapture: !!parsed.leadCapture
        });

      } catch (geminiError: any) {
        console.error('Gemini API execution failed, falling back to rule-based response:', geminiError);
      }
    }

    // 6. High-fidelity Rule-Based Fallback (if no API Key or call fails)
    let responseText = "";
    let recommendedProperties: any[] = [];
    let leadCaptureRequired = false;

    if (isShortGreeting) {
      if (hasHistory) {
        responseText = "Hey there! Let me know what asset category or metric you want to focus on next.";
      } else {
        responseText = "Welcome to Regent Advisory. I'm Olivia. Are we optimizing for immediate commercial rental cash flow today, or capital growth via premium residential properties?";
      }
    } else if (normalizedMsg.includes('contact') || normalizedMsg.includes('phone') || normalizedMsg.includes('call') || normalizedMsg.includes('number') || normalizedMsg.includes('telephone')) {
      responseText = "I can dig out the private allocation dossier and arrange a call for us. Would you like me to register your contact details to block out some time on my calendar?";
      leadCaptureRequired = true;
    } else if (normalizedMsg.includes('office') || normalizedMsg.includes('address') || normalizedMsg.includes('headquarters') || normalizedMsg.includes('located') || normalizedMsg.includes('where are you')) {
      responseText = "Regent Estate Advisory is headquartered at 1 Berkeley Square, Mayfair, London, W1J 6EA. However, let's focus on your portfolio targets. Are we checking residential growth zones or commercial yields today?";
    } else if (normalizedMsg.includes('viewing') || normalizedMsg.includes('schedule') || normalizedMsg.includes('book') || normalizedMsg.includes('visit') || normalizedMsg.includes('appointment')) {
      responseText = "I'd be glad to coordinate a discrete viewing. Let's schedule a brief 10-minute briefing call with my advisory squad above to map out the logistics.";
      leadCaptureRequired = true;
    } else {
      if (contextProperties.length > 0) {
        recommendedProperties = contextProperties.slice(0, 3);
        const locationsList = Array.from(new Set(recommendedProperties.map(p => p.location))).join(' and ');
        responseText = `I have refined our exclusive off-market portfolio and identified ${recommendedProperties.length} exceptional opportunities in ${locationsList}. Shall we schedule a briefing call?`;
      } else {
        responseText = "I manage an array of off-market townhouses, riverfront duplexes, and premium workspaces across prime UK zones. Could you specify your yield target or desired location?";
      }
    }

    return NextResponse.json({
      reply: responseText,
      properties: recommendedProperties,
      leadCapture: leadCaptureRequired
    });

  } catch (error: any) {
    console.error('Chatbot API Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
