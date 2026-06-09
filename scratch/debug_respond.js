const fs = require('fs');
const path = require('path');

// Load environment variables
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

// Set up alias or require tsx to require typescript directly
require('tsx/cjs');

async function debugRoute() {
  try {
    const routePath = path.resolve(process.cwd(), 'src/app/api/voice/respond/route.ts');
    const { POST } = require(routePath);
    
    // Mock NextRequest
    const mockReq = {
      json: async () => ({
        transcript: "મારે લંડનમાં ૨ બેડરૂમનો ઘર ખરીદવો છે, બજેટ ૧૦ મિલિયન છે",
        conversationHistory: [],
        activeLanguage: "Gujarati"
      })
    };
    
    console.log("Calling POST handler directly...");
    const response = await POST(mockReq);
    console.log("Response status:", response.status);
    const body = await response.json();
    console.log("Response body:", body);
  } catch (err) {
    console.error("Direct execution crashed:", err);
  }
}

debugRoute();
