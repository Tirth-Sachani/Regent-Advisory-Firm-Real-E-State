const fs = require('fs');
const path = require('path');

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

const { GoogleGenAI } = require('@google/genai');

async function test() {
  const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const ai = new GoogleGenAI({ apiKey: geminiKey });
  
  const models = ['gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-2.0-flash-lite', 'gemini-flash-latest'];
  for (const model of models) {
    try {
      console.log(`Testing model: ${model}`);
      const response = await ai.models.generateContent({
        model: model,
        contents: "Hello, say test."
      });
      console.log(`✅ Success with ${model}:`, response.text.trim());
      return; // Stop on first successful model!
    } catch (err) {
      console.error(`❌ Failed with ${model}:`, err.message || err);
    }
  }
}

test();
