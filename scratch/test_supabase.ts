import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Manually parse .env.local
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

// Dynamically import the admin client creator after env is loaded
import { createAdminClient } from '../src/lib/supabase/admin';

async function testSupabase() {
  try {
    const supabase = createAdminClient();
    console.log('Connecting to Supabase...');
    
    // Attempt to query the properties table
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .limit(1);

    if (error) {
      console.log('Error querying properties table:', error.message);
      if (error.message.includes('relation "properties" does not exist')) {
        console.log('Diagnosis: The properties table does not exist in the database yet.');
      }
    } else {
      console.log('Success! properties table exists. Current row count:', data.length);
    }
  } catch (err: any) {
    console.error('Error running test script:', err.message);
  }
}

testSupabase();
