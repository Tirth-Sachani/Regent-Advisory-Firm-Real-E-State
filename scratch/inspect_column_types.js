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

async function inspectColumnTypes() {
  try {
    const res = await fetch(supabaseUrl + "/rest/v1/", {
      headers: {
        "apikey": supabaseServiceRoleKey,
        "Authorization": `Bearer ${supabaseServiceRoleKey}`
      }
    });
    const spec = await res.json();
    const appointmentsProps = spec.definitions.appointments.properties;
    console.log("Column types for appointments:");
    for (const prop in appointmentsProps) {
      console.log(`${prop}: type=${appointmentsProps[prop].type}, format=${appointmentsProps[prop].format}`);
    }
  } catch (err) {
    console.error(err);
  }
}

inspectColumnTypes();
