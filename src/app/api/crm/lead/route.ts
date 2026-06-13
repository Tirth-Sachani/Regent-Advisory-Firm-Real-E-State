import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const { name, email, phone, propertyId } = payload;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required to contact an advisor.' },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    // CRM Lead registration. Try to save using new columns (property_id, lead_source).
    // If it fails because columns don't exist yet, catch the error and save to intent_tier fallback.
    let leadData: any = null;
    let errorDetail = null;

    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([
          {
            contact_name: name,
            email: email,
            phone: phone || null,
            lead_score: 85, // Advisor inquiries default to high lead score
            intent_tier: 'Hot Lead',
            assigned_advisor: 'Olivia (Senior Advisor)',
            priority: 'High',
            status: 'New Lead',
            property_id: propertyId || null,
            lead_source: 'AI Recommendation Engine'
          }
        ])
        .select()
        .single();

      if (error) {
        console.warn('Direct CRM lead insert failed (likely missing custom columns). Retrying fallback...', error.message);
        errorDetail = error;
      } else {
        leadData = data;
      }
    } catch (err) {
      console.warn('Direct CRM lead exception caught. Retrying fallback...', err);
    }

    // Fallback: serialize property ID and lead source into standard fields
    if (!leadData) {
      const serializedIntent = `Advisor Request | Property: ${propertyId || 'General'} | Source: AI Recommendation Engine`;
      const { data, error } = await supabase
        .from('leads')
        .insert([
          {
            contact_name: name,
            email: email,
            phone: phone || null,
            lead_score: 85,
            intent_tier: serializedIntent.slice(0, 255), // safety limit
            assigned_advisor: 'Olivia (Senior Advisor)',
            priority: 'High',
            status: 'New Lead'
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Fallback CRM lead insertion also failed:', error.message);
        throw error;
      }
      leadData = data;
    }

    // Insert internal notification for Mayfair office
    const notificationMessage = `Advisor Contact Request
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Property ID: ${propertyId || 'General Enquiry'}
Lead Source: AI Recommendation Engine
Timestamp: ${new Date().toISOString()}`;

    await supabase
      .from('notifications')
      .insert([
        {
          title: `CRM Lead: ${name} (AI Recommendation advisor inquiry)`,
          message: notificationMessage,
          channels: ['Admin Dashboard', 'Email', 'WhatsApp']
        }
      ]);

    // Mock Dispatch Console Log
    console.log('--- CRM DISPATCH: EMAIL & WHATSAPP NOTIFICATION ---');
    console.log(`To: advisor@regentestate.com\nSubject: CRM Lead - ${name}\n\n${notificationMessage}`);
    console.log('----------------------------------------------------');

    return NextResponse.json({
      success: true,
      message: 'CRM Lead successfully registered.',
      leadId: leadData?.id
    });

  } catch (error: any) {
    console.error('CRM Lead API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error registering CRM lead.', details: error.message },
      { status: 500 }
    );
  }
}
