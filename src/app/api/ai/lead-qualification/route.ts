import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function POST(req: NextRequest) {
  try {
    const { contactInfo, timeline, primaryInterest, sessionId, userId } = await req.json();

    if (!contactInfo || !contactInfo.email) {
      return NextResponse.json({ error: 'Email contact information is required.' }, { status: 400 });
    }

    const supabase = createAdminClient();

    // 1. Calculate an initial qualification score based on inputs
    let score = 50; // Base score
    if (timeline && (timeline.toLowerCase().includes('immediate') || timeline.toLowerCase().includes('1-3 months'))) {
      score += 30; // High urgency
    }
    if (contactInfo.phone) {
      score += 15; // Higher intent if phone is provided
    }

    const qualificationData = {
      user_id: userId || null,
      session_id: sessionId || null,
      contact_info: contactInfo,
      qualification_score: Math.min(score, 100),
      timeline: timeline || 'Not specified',
      primary_interest: primaryInterest || 'General Inquiry',
      status: 'New'
    };

    // 2. Insert into lead_qualifications table
    const { data, error } = await supabase
      .from('lead_qualifications')
      .insert([qualificationData])
      .select()
      .single();

    if (error) {
      console.error('Error inserting lead qualification:', error);
      // Even if DB fails, we want to return a success to the user so their experience isn't blocked,
      // but we log it internally.
      return NextResponse.json({ 
        success: true, 
        message: 'Lead captured, but database logging failed.',
        qualification_score: qualificationData.qualification_score
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Lead qualification successfully recorded.',
      data: data
    });

  } catch (error: any) {
    console.error('Lead Qualification Error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing lead qualification.' },
      { status: 500 }
    );
  }
}
