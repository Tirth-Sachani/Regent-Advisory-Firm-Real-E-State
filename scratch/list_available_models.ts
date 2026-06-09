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

async function listAvailableModels() {
  const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!geminiKey) return;
  
  try {
    const ai = new GoogleGenAI({ apiKey: geminiKey });
    const response = await ai.models.list();
    // In SDK, the list response is a paging iterable, but we can access elements or .models
    const resObj = response as any;
    const models = resObj.models || (Array.isArray(resObj) ? resObj : []);
    
    console.log('Model Names:');
    for (const m of models) {
      if (m.name.includes('gemini')) {
        console.log(`- ${m.name}`);
      }
    }
  } catch (err: any) {
    console.error('Error:', err.message || err);
  }
}

listAvailableModels();
