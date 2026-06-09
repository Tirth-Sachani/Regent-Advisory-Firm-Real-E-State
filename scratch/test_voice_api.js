async function testVoiceEndpoints() {
  console.log("Testing Voice API Endpoints...");

  // 1. Test /api/voice/language-detect (Gujarati)
  try {
    const detectRes = await fetch("http://localhost:3000/api/voice/language-detect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "મને સુરતમાં ફ્લેટ જોઈએ છે" })
    });
    if (detectRes.ok) {
      const detectData = await detectRes.json();
      console.log("✅ /api/voice/language-detect status: 200 OK");
      console.log("   Detected Language:", detectData.language, `(Confidence: ${detectData.confidence})`);
    } else {
      console.error("❌ /api/voice/language-detect failed with status:", detectRes.status);
      const text = await detectRes.text();
      console.error("   Error body:", text);
    }
  } catch (err) {
    console.error("❌ /api/voice/language-detect error:", err.message);
  }

  // 2. Test /api/voice/respond (Gujarati conversational test)
  try {
    const respondRes = await fetch("http://localhost:3000/api/voice/respond", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        transcript: "મારે લંડનમાં ૨ બેડરૂમનો ઘર ખરીદવો છે, બજેટ ૧૦ મિલિયન છે",
        conversationHistory: [],
        activeLanguage: "Gujarati"
      })
    });

    if (respondRes.ok) {
      const respondData = await respondRes.json();
      console.log("✅ /api/voice/respond status: 200 OK");
      console.log("   Olivia Response Text:", respondData.response);
      console.log("   Detected Intent:", respondData.intent);
      console.log("   Lead Score:", respondData.lead_score, `(Urgency: ${respondData.urgency})`);
    } else {
      console.error("❌ /api/voice/respond failed with status:", respondRes.status);
      const text = await respondRes.text();
      console.error("   Error body:", text);
    }
  } catch (err) {
    console.error("❌ /api/voice/respond error:", err.message);
  }

  // 3. Test /api/voice/speak (TTS route - fallback branch check)
  try {
    const speakRes = await fetch("http://localhost:3000/api/voice/speak", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "Hello client, welcome to Regent Estate." })
    });

    if (speakRes.ok) {
      const speakData = await speakRes.json();
      console.log("✅ /api/voice/speak status: 200 OK");
      console.log("   TTS Fallback Active:", speakData.fallback);
      console.log("   Message:", speakData.message);
    } else {
      console.error("❌ /api/voice/speak failed with status:", speakRes.status);
    }
  } catch (err) {
    console.error("❌ /api/voice/speak error:", err.message);
  }
}

testVoiceEndpoints();
