import { createBrowserClient } from '@supabase/ssr';

/**
 * Creates a Supabase client for use within browser (client-side) components.
 * Reuses the single instance in client context to optimize connection caching.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}
