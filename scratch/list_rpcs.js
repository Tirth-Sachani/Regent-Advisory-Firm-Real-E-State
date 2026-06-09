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
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function listRpcs() {
  try {
    const res = await fetch(supabaseUrl + "/rest/v1/", {
      headers: {
        "apikey": supabaseServiceRoleKey,
        "Authorization": `Bearer ${supabaseServiceRoleKey}`
      }
    });
    const spec = await res.json();
    const paths = Object.keys(spec.paths || {});
    const rpcs = paths.filter(p => p.startsWith("/rpc/"));
    console.log("Database RPCs:");
    console.log(rpcs);
  } catch (err) {
    console.error("Error:", err);
  }
}

listRpcs();
