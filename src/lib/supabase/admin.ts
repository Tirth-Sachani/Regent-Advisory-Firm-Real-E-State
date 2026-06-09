import { createClient } from '@supabase/supabase-js';

/**
 * Creates a highly privileged Supabase Administrative Client.
 * Strictly reserved for isolated server-side processes (e.g., cron jobs, data migrations, webhooks).
 * Bypasses Row-Level Security (RLS). NEVER import or use this in any client-side context!
 */
export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      'Database Initialization Error: Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.'
    );
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
