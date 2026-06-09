import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function GET(req: NextRequest) {
  try {
    const supabase = createAdminClient();
    const { data: properties, error } = await supabase
      .from('properties')
      .select('*')
      .order('title', { ascending: true });

    if (error) {
      console.error('Error fetching properties from Supabase:', error);
      throw error;
    }

    return NextResponse.json({
      success: true,
      count: properties ? properties.length : 0,
      properties
    });
  } catch (error: any) {
    console.error('Properties Fetch Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error fetching properties.', details: error.message },
      { status: 500 }
    );
  }
}
