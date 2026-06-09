import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId, userId } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const supabase = createAdminClient();

    // Fetch all properties from the database to perform local keyword/tag match
    const { data: allProperties, error: dbError } = await supabase
      .from('properties')
      .select('*');
    
    if (dbError) {
      console.error('Error fetching properties:', dbError);
    }

    let properties = allProperties || [];

    // Simulate AI property matching based on keywords for demonstration
    const isCommercial = message.toLowerCase().includes('office') || message.toLowerCase().includes('commercial') || message.toLowerCase().includes('workplace');
    const isLuxury = message.toLowerCase().includes('luxury') || message.toLowerCase().includes('villa') || message.toLowerCase().includes('penthouse');
    const locKeyword = ['london', 'mayfair', 'belgravia', 'knightsbridge', 'richmond', 'chelsea', 'hampstead', 'ascot', 'notting hill', 'edinburgh', 'kensington', 'oxford', 'surrey', 'wimbledon'].find(loc => message.toLowerCase().includes(loc));

    // Perform local filtering
    if (isCommercial) {
      properties = properties.filter(p => p.title.toLowerCase().includes('commercial') || p.title.toLowerCase().includes('office') || p.title.toLowerCase().includes('workspace') || p.description.toLowerCase().includes('commercial') || p.description.toLowerCase().includes('office'));
    }
    
    if (isLuxury) {
      properties = properties.filter(p => p.title.toLowerCase().includes('luxury') || p.title.toLowerCase().includes('villa') || p.title.toLowerCase().includes('penthouse') || p.description.toLowerCase().includes('luxury') || p.description.toLowerCase().includes('villa'));
    }

    if (locKeyword) {
      properties = properties.filter(p => p.location.toLowerCase().includes(locKeyword));
    }

    // Default limit to 3 matches
    properties = properties.slice(0, 3);

    // Determine intent to dynamically trigger Lead Qualification Phase if necessary
    const showsStrongIntent = message.toLowerCase().includes('buy') || message.toLowerCase().includes('visit') || message.toLowerCase().includes('price') || message.toLowerCase().includes('schedule');

    // Simulate standard AI response format
    const responseMessage = {
      content: `I'd be delighted to help you find the perfect property with Regent Estate Advisory. Based on your request, I've found some excellent matches that align with our premium portfolio.`,
      properties: properties,
      triggerLeadQualification: showsStrongIntent,
      metadata: {
        detectedCategory: isCommercial ? 'Commercial' : isLuxury ? 'Luxury Residential' : 'General',
        timestamp: new Date().toISOString()
      }
    };

    // If session tracking is enabled and schema is applied, log the conversation
    if (sessionId) {
      supabase.from('chat_messages').insert([
        { session_id: sessionId, role: 'user', content: message },
        { session_id: sessionId, role: 'assistant', content: responseMessage.content }
      ]).then(({ error }) => {
        if (error) console.error('Chat log error:', error);
      });
    }

    return NextResponse.json(responseMessage);

  } catch (error: any) {
    console.error('Search Assistant Error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing your request.' },
      { status: 500 }
    );
  }
}

