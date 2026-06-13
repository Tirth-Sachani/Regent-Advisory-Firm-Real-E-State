const { GoogleGenAI } = require('@google/genai');

async function test() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: "Hello",
      config: {
        systemInstruction: "You are Olivia",
        temperature: 0.85,
        topP: 0.9,
        maxOutputTokens: 300,
        presencePenalty: 0.5,
        frequencyPenalty: 0.4,
        responseMimeType: 'application/json'
      }
    });
    console.log(response.text);
  } catch (e) {
    console.error("ERROR:", e);
  }
}

test();
