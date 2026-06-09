import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, name, email, phone, natureOfInquiry, message, propertyId } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from('inquiries')
      .insert([
        {
          first_name: firstName || null,
          last_name: lastName || null,
          name: name || null,
          email,
          phone: phone || null,
          nature_of_inquiry: natureOfInquiry || null,
          message: message || null,
          property_id: propertyId || null,
        }
      ])
      .select();

    if (error) {
      console.error('Error inserting inquiry into Supabase:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Inquiry API Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
