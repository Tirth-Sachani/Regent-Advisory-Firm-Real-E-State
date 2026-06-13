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

async function inspectImages() {
  try {
    const res = await fetch(supabaseUrl + "/rest/v1/properties?select=id,title,images,location&limit=15", {
      headers: {
        "apikey": supabaseServiceRoleKey,
        "Authorization": `Bearer ${supabaseServiceRoleKey}`
      }
    });
    const props = await res.json();
    console.log("Sample Properties and their Images:");
    props.forEach(p => {
      console.log(`ID: ${p.id} | Title: ${p.title} | Location: ${p.location} | Images:`, p.images);
    });
  } catch (err) {
    console.error(err);
  }
}

inspectImages();
