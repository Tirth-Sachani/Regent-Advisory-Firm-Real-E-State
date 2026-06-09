import fs from 'fs';
import path from 'path';

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

import { createAdminClient } from '../src/lib/supabase/admin';

async function checkInquiriesTable() {
  const supabase = createAdminClient();
  console.log('Checking if inquiries table exists...');
  const { data, error } = await supabase
    .from('inquiries')
    .select('*')
    .limit(1);

  if (error) {
    console.log('Error querying inquiries:', error.message);
  } else {
    console.log('Inquiries table exists and is accessible. Row count:', data.length);
  }
}

checkInquiriesTable();
