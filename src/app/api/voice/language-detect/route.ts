import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(req: NextRequest) {
  let text = '';
  try {
    try {
      const body = await req.json();
      text = body.text || '';
    } catch (e) {
      // Ignore parse error, text will remain empty and trigger the check below
    }

    if (!text) {
      return NextResponse.json({ error: 'Text is required for language detection.' }, { status: 400 });
    }

    const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!geminiKey) {
      console.warn("Gemini API key is missing. Defaulting to English.");
      return NextResponse.json({ language: 'English', confidence: 1.0 });
    }

    const ai = new GoogleGenAI({ apiKey: geminiKey });
    const prompt = `Analyze the language of the following text:
"${text}"

Return STRICTLY a JSON object matching this structure:
{
  "language": "LanguageName",
  "confidence": 0.95
}
Where "language" is one of: "English", "Gujarati", "Hindi", "Spanish", "French", "German", "Arabic", "Portuguese", "Italian", "Chinese", "Japanese", or another standard language. Return ONLY JSON. Do not include markdown codeblocks or other comments.`;

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
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
            temperature: 0.1
          }
        });
        if (response && response.text) {
          responseText = response.text;
          break;
        }
      } catch (err: any) {
        console.warn(`Model ${modelName} failed in language-detect:`, err.message || err);
        lastError = err;
      }
    }

    if (!responseText) {
      throw lastError || new Error('Failed to detect language with all Gemini models.');
    }

    let cleanText = responseText.trim();
    if (cleanText.startsWith('```')) {
      cleanText = cleanText.replace(/^```(json)?/, '').replace(/```$/, '').trim();
    }
    const result = JSON.parse(cleanText);
    return NextResponse.json({
      success: true,
      language: result.language || 'English',
      confidence: result.confidence || 0.9
    });

  } catch (error: any) {
    console.warn('Language Detection API warning/rate limit fallback activated. Error details:', error.message || error);
    
    const lowerText = text.toLowerCase();
    let language = "English";
    
    // Fallback script-based and vocabulary regex checks
    if (/[\u0a80-\u0aff]/.test(text)) {
      language = "Gujarati";
    } else if (/[\u0900-\u097f]/.test(text)) {
      language = "Hindi";
    } else if (lowerText.includes("propiedad") || lowerText.includes("buscar") || lowerText.includes("estoy")) {
      language = "Spanish";
    } else if (lowerText.includes("bonjour") || lowerText.includes("cherche")) {
      language = "French";
    } else if (lowerText.includes("hallo") || lowerText.includes("suche")) {
      language = "German";
    }
    
    return NextResponse.json({
      success: true,
      language,
      confidence: 0.85,
      fallback: true
    });
  }
}
