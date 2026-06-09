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

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing env variables");
  process.exit(1);
}

async function fetchSpec() {
  try {
    const res = await fetch(supabaseUrl + "/rest/v1/", {
      headers: {
        "apikey": supabaseAnonKey
      }
    });
    if (!res.ok) {
      console.error("Failed to fetch spec:", res.status, res.statusText);
      return;
    }
    const spec = await res.json();
    console.log("PostgREST OpenAPI Spec paths:");
    console.log(Object.keys(spec.paths));
  } catch (err) {
    console.error("Error:", err);
  }
}

fetchSpec();
