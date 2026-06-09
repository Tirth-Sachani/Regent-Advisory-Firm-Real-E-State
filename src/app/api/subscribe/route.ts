import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const supabase = createAdminClient();

    // Try to insert the subscription email. On conflict (since email is unique), we can ignore or let it fail gracefully.
    const { data, error } = await supabase
      .from('subscriptions')
      .upsert([{ email }], { onConflict: 'email' })
      .select();

    if (error) {
      console.error('Error inserting subscription into Supabase:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Subscription API Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
