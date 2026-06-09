const fs = require('fs');
const path = require('path');

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
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error("Missing env variables");
  process.exit(1);
}

async function inspectData() {
  try {
    const res = await fetch(supabaseUrl + "/rest/v1/properties?select=id,title,price", {
      headers: {
        "apikey": supabaseServiceRoleKey,
        "Authorization": `Bearer ${supabaseServiceRoleKey}`
      }
    });
    if (res.ok) {
      const data = await res.json();
      console.log(`Properties in db: ${data.length}`);
      console.log(data.slice(0, 5));
    } else {
      console.error("Failed to query properties:", res.status);
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

inspectData();
