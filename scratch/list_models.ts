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

async function listModels() {
  const geminiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!geminiKey) {
    console.log('No Gemini API key found.');
    return;
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey: geminiKey });
    console.log('Listing models...');
    const response = await ai.models.list();
    console.log('Available models response:', JSON.stringify(response));
  } catch (err: any) {
    console.error('Error listing models:', err.message || err);
  }
}

listModels();
