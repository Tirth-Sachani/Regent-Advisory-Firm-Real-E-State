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

import { POST } from '../src/app/api/ai/appointment-verification/route';
import { NextRequest } from 'next/server';

async function runLocalVerification() {
  const payload = {
    name: "Tirth",
    email: "john@example.com",
    phone: "+91 9876543210",
    request: "Would love to book a viewing for next Thursday morning.",
    conversationHistory: [
      { role: "user", content: "Would love to book a viewing for next Thursday morning." },
      { role: "assistant", content: "Thank you for reaching out, Tirth. To help me arrange the perfect viewing for you next Thursday morning, could you please let me know your preferred location, budget, and the type of property you are interested in?" },
      { role: "user", content: "london" }
    ]
  };

  const req = new NextRequest('http://localhost:3000/api/ai/appointment-verification', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  try {
    console.log('Calling POST handler...');
    const response = await POST(req);
    console.log('Response status:', response.status);
    const json = await response.json();
    console.log('Response JSON:', JSON.stringify(json, null, 2));
  } catch (err: any) {
    console.error('Handler threw exception:', err.message || err);
  }
}

runLocalVerification();
