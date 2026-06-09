const { createClient } = require('@supabase/supabase-js');
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

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error("Error: Missing Supabase environment variables!");
  process.exit(1);
}

console.log("Connecting to Supabase URL:", supabaseUrl);
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

async function check() {
  console.log("Checking 'appointments' table...");
  const { data, error } = await supabase.from('appointments').select('*').limit(1);
  if (error) {
    console.error("Error querying appointments:", error.message, error);
  } else {
    console.log("SUCCESS: 'appointments' table is accessible! Sample data:", data);
  }
  
  console.log("Checking 'leads' table...");
  const { data: leads, error: leadsError } = await supabase.from('leads').select('*').limit(1);
  if (leadsError) {
    console.error("Error querying leads:", leadsError.message, leadsError);
  } else {
    console.log("SUCCESS: 'leads' table is accessible! Sample data:", leads);
  }

  console.log("Checking 'notifications' table...");
  const { data: notifs, error: notifsError } = await supabase.from('notifications').select('*').limit(1);
  if (notifsError) {
    console.error("Error querying notifications:", notifsError.message, notifsError);
  } else {
    console.log("SUCCESS: 'notifications' table is accessible! Sample data:", notifs);
  }
}

check();
