import { NextRequest, NextResponse } from 'next/server';

// Olivia Voice Concierge Speak Route (TTS)
export async function POST(req: NextRequest) {
  let text = '';
  let voice = 'shimmer';
  let speed = 0.92;
  try {
    try {
      const body = await req.json();
      text = body.text || '';
      voice = body.voice || 'shimmer';
      speed = body.speed || 0.92;
    } catch (e) {
      // Ignore parse error
    }

    if (!text) {
      return NextResponse.json({ error: 'Text input is required for TTS.' }, { status: 400 });
    }

    const openaiKey = process.env.OPENAI_API_KEY;
    if (!openaiKey) {
      return NextResponse.json({
        success: false,
        fallback: true,
        message: 'OpenAI API Key is not configured. Falling back to browser SpeechSynthesis.'
      });
    }

    const ttsResponse = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'tts-1',
        input: text,
        voice: voice, // alloy, echo, fable, onyx, nova, shimmer
        speed: speed
      })
    });

    if (!ttsResponse.ok) {
      const errorText = await ttsResponse.text();
      throw new Error(`OpenAI TTS API failed: ${errorText}`);
    }

    const audioBuffer = await ttsResponse.arrayBuffer();

    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': audioBuffer.byteLength.toString()
      }
    });

  } catch (error: any) {
    console.error('TTS Audio Generation Error:', error);
    return NextResponse.json(
      { error: 'Failed to synthesize audio.', details: error.message, fallback: true },
      { status: 500 }
    );
  }
}
