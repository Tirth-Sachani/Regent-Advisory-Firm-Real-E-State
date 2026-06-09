async function testEndpoints() {
  console.log("Testing API Endpoints...");

  // 1. Test /api/properties
  try {
    const propRes = await fetch("http://localhost:3000/api/properties");
    if (propRes.ok) {
      const propData = await propRes.json();
      console.log("✅ /api/properties status: 200 OK");
      console.log(`✅ Loaded ${propData.count} properties dynamically from Supabase.`);
      if (propData.properties && propData.properties.length > 0) {
        console.log(`   Sample: ${propData.properties[0].title} (${propData.properties[0].id})`);
      }
    } else {
      console.error("❌ /api/properties failed with status:", propRes.status);
    }
  } catch (err) {
    console.error("❌ /api/properties error:", err.message);
  }

  // 2. Test /api/ai/appointment-verification
  try {
    const verifyRes = await fetch("http://localhost:3000/api/ai/appointment-verification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test Client",
        email: "client@test.com",
        phone: "+44 7911 123456",
        request: "I want to view the luxury apartment in Richmond",
        bookingDate: "2026-06-15",
        bookingTime: "10:00 AM",
        bookingDay: "Monday"
      })
    });

    if (verifyRes.ok) {
      const verifyData = await verifyRes.json();
      console.log("✅ /api/ai/appointment-verification status: 200 OK");
      console.log("✅ Verification Response:", JSON.stringify(verifyData, null, 2));
    } else {
      console.error("❌ /api/ai/appointment-verification failed with status:", verifyRes.status);
      const text = await verifyRes.text();
      console.error("   Response body:", text);
    }
  } catch (err) {
    console.error("❌ /api/ai/appointment-verification error:", err.message);
  }
}

testEndpoints();
