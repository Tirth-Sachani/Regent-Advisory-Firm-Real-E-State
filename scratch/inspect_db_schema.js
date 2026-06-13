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

async function inspectSchema() {
  try {
    const res = await fetch(supabaseUrl + "/rest/v1/", {
      headers: {
        "apikey": supabaseServiceRoleKey,
        "Authorization": `Bearer ${supabaseServiceRoleKey}`
      }
    });
    const spec = await res.json();
    
    const tables = ['properties', 'leads', 'appointments'];
    for (const table of tables) {
      if (spec.definitions[table]) {
        console.log(`\n=== Columns for table: ${table} ===`);
        const props = spec.definitions[table].properties;
        for (const prop in props) {
          console.log(`${prop}: type=${props[prop].type}, format=${props[prop].format || ''}, description=${props[prop].description || ''}`);
        }
      } else {
        console.log(`Table ${table} not found in schema definitions.`);
      }
    }
  } catch (err) {
    console.error('Error inspecting schema:', err);
  }
}

inspectSchema();
