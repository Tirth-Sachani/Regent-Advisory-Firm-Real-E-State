import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const openaiKey = process.env.OPENAI_API_KEY;
    if (!openaiKey) {
      return NextResponse.json({
        success: false,
        fallback: true,
        message: 'OpenAI API Key is not configured. Falling back to browser Web Speech API.'
      });
    }

    const formData = await req.formData();
    const audioFile = formData.get('file') as Blob;
    if (!audioFile) {
      return NextResponse.json({ error: 'Audio file is required.' }, { status: 400 });
    }

    const whisperData = new FormData();
    whisperData.append('file', audioFile, 'audio.wav');
    whisperData.append('model', 'whisper-1');

    const whisperResponse = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiKey}`
      },
      body: whisperData
    });

    if (!whisperResponse.ok) {
      const errorText = await whisperResponse.text();
      throw new Error(`OpenAI Whisper API failed: ${errorText}`);
    }

    const result = await whisperResponse.json();
    return NextResponse.json({
      success: true,
      text: result.text
    });

  } catch (error: any) {
    console.error('Whisper Transcription Error:', error);
    return NextResponse.json(
      { error: 'Failed to transcribe audio.', details: error.message, fallback: true },
      { status: 500 }
    );
  }
}
