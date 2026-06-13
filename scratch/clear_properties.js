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

async function clearProperties() {
  try {
    const headers = {
      "apikey": supabaseServiceRoleKey,
      "Authorization": `Bearer ${supabaseServiceRoleKey}`,
      "Content-Type": "application/json"
    };

    console.log("1. Removing referencing property recommendations...");
    const recsRes = await fetch(supabaseUrl + "/rest/v1/property_recommendations?id=not.is.null", {
      method: "DELETE",
      headers
    });
    console.log("Recommendations cleared. Status:", recsRes.status);

    console.log("2. Deleting referencing appointments...");
    const apptsRes = await fetch(supabaseUrl + "/rest/v1/appointments?id=not.is.null", {
      method: "DELETE",
      headers
    });
    console.log("Appointments cleared. Status:", apptsRes.status);

    console.log("3. Deleting referencing leads...");
    const leadsRes = await fetch(supabaseUrl + "/rest/v1/leads?id=not.is.null", {
      method: "DELETE",
      headers
    });
    console.log("Leads cleared. Status:", leadsRes.status);

    console.log("4. Deleting all properties from the properties table...");
    const propsRes = await fetch(supabaseUrl + "/rest/v1/properties?id=not.is.null", {
      method: "DELETE",
      headers
    });
    console.log("Properties deleted. Status:", propsRes.status);

    if (propsRes.status >= 200 && propsRes.status < 300) {
      console.log("✅ Successfully cleared all properties from database!");
    } else {
      console.error("❌ Failed to delete properties:", await propsRes.text());
    }

  } catch (err) {
    console.error("Error during database truncation:", err);
  }
}

clearProperties();
