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
import { properties } from '../src/data/properties';

async function seedProperties() {
  try {
    const supabase = createAdminClient();
    console.log('Connecting to Supabase...');
    console.log(`Loaded ${properties.length} high-fidelity properties from local code.`);

    console.log('Seeding properties table...');
    const { error } = await supabase
      .from('properties')
      .upsert(properties, { onConflict: 'id' });

    if (error) {
      console.error('Error seeding properties:', error.message);
      if (error.message.includes('relation "properties" does not exist')) {
        console.log('Note: Please make sure you have executed the schema.sql script in your Supabase SQL Editor first!');
      }
    } else {
      console.log('Success! All 42 realistic properties have been uploaded and stored in Supabase!');
    }
  } catch (err: any) {
    console.error('Unexpected error running seed script:', err.message);
  }
}

seedProperties();
