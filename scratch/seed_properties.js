const fs = require('fs');
const path = require('path');

const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const firstEqual = trimmed.indexOf('=');
      if (firstEqual !== -1) {
        const key = trimmed.slice(0, firstEqual).trim();
        const val = trimmed.slice(firstEqual + 1).trim();
        process.env[key] = val;
      }
    }
  });
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// 1. Data Pools for Unique Property Generation
const ADJECTIVES = ["Luxury", "Premium", "Exclusive", "Elite", "Magnificent", "Sophisticated", "Stately", "Ultra-Modern", "Bespoke", "Signature", "Prestigious", "Iconic"];

const CATEGORIES = {
  residential: ["Apartment", "Luxury Apartment", "Penthouse", "Villa", "Duplex", "Townhouse", "Mansion", "Beach House"],
  commercial: ["Office", "Corporate Tower", "Retail Unit", "Shopping Space", "Business Center"],
  land: ["Residential Plot", "Commercial Plot", "Agricultural Land", "Development Land"],
  luxury: ["Waterfront Villa", "Golf Estate", "Smart Home", "Ultra Luxury Penthouse", "Private Estate"]
};

const LOCATIONS = [
  // UK
  { city: "London", region: "UK" },
  { city: "Chelsea", region: "UK" },
  { city: "Kensington", region: "UK" },
  { city: "Notting Hill", region: "UK" },
  { city: "Ascot", region: "UK" },
  { city: "Berkshire", region: "UK" },
  { city: "Oxford", region: "UK" },
  { city: "Manchester", region: "UK" },
  { city: "Liverpool", region: "UK" },
  { city: "Birmingham", region: "UK" },
  // UAE
  { city: "Dubai Marina", region: "UAE" },
  { city: "Palm Jumeirah", region: "UAE" },
  { city: "Downtown Dubai", region: "UAE" },
  { city: "Business Bay", region: "UAE" },
  { city: "Abu Dhabi", region: "UAE" },
  // US
  { city: "New York", region: "US" },
  { city: "Miami", region: "US" },
  { city: "Los Angeles", region: "US" },
  { city: "Chicago", region: "US" },
  { city: "Dallas", region: "US" },
  // Canada
  { city: "Toronto", region: "Canada" },
  { city: "Vancouver", region: "Canada" },
  { city: "Montreal", region: "Canada" },
  // Australia
  { city: "Sydney", region: "Australia" },
  { city: "Melbourne", region: "Australia" },
  { city: "Brisbane", region: "Australia" },
  // Singapore
  { city: "Marina Bay", region: "Singapore" },
  { city: "Orchard Road", region: "Singapore" },
  // India
  { city: "Mumbai", region: "India" },
  { city: "Ahmedabad", region: "India" },
  { city: "Surat", region: "India" },
  { city: "Bangalore", region: "India" },
  { city: "Hyderabad", region: "India" },
  { city: "Pune", region: "India" }
];

const FEATURES_POOL = [
  "Swimming Pool", "Private Terrace", "Solar Panels", "Gym", "Smart Home System", 
  "EV Charging", "Home Cinema", "Wine Cellar", "24/7 Security", "Concierge Service", 
  "Spa Room", "Jacuzzi", "Helipad Access", "Private Dock", "High-speed Elevators", 
  "Double Glazed Windows", "Underfloor Heating", "Staff Quarters", "Landscaped Garden", 
  "Tennis Court", "Panoramic Views", "Marble Countertops", "VRF Air Conditioning"
];

// Curated list of high-quality architectural photo IDs from Unsplash
const UNSPLASH_PHOTO_IDS = [
  "photo-1613977257363-707ba9348227", "photo-1580587771525-78b9dba3b914", "photo-1600596542815-ffad4c1539a9", 
  "photo-1512917774080-9991f1c4c750", "photo-1502672260266-1c1ef2d93688", "photo-1522708323590-d24dbb6b0267", 
  "photo-1560448204-e02f11c3d0e2", "photo-1502672023488-70e25813eb80", "photo-1486406146926-c627a92ad1ab", 
  "photo-1497366216548-37526070297c", "photo-1497215728101-856f4ea42174", "photo-1498409360533-0d4175f90045", 
  "photo-1500382017468-9049fed747ef", "photo-1500530855697-b586d89ba3ee", "photo-1444312645910-ffa973656eba", 
  "photo-1504198453319-5ce919bca552", "photo-1600210492486-724fe5c67fb0", "photo-1600585154340-be6161a56a0c", 
  "photo-1600566752355-35792bedcfea", "photo-1570129477492-45c003edd2be", "photo-1513694203232-719a280e022f", 
  "photo-1505691938895-1758d7feb511", "photo-1582268611958-ebfd161ef9cf", "photo-1583608205776-bfd35f0d9f83", 
  "photo-1600607687939-ce8a6c25118c", "photo-1602941525421-8f8b81d3ed77", "photo-1507089947368-19c1da9775ae", 
  "photo-1613490493576-7fde63acd811", "photo-1618221195710-dd6b41faaea6", "photo-1618219908412-a29a1bb7b86e", 
  "photo-1600585154526-990dced4db0d", "photo-1512915922686-57c11dde9b6b", "photo-1542314831-068cd1dbfeeb", 
  "photo-1554995207-c18c203602cb", "photo-1576941089067-2de3c901e126", "photo-1592595896551-12b371d546d5", 
  "photo-1600573472591-ee6b68d14c68", "photo-1580587771525-78b9dba3b914", "photo-1513694203232-719a280e022f", 
  "photo-1527030280862-64139fbe04ca", "photo-1493809842364-78817add7ffb", "photo-1545324418-cc1a3fa10c00", 
  "photo-1416339306562-f3d12fefd36f", "photo-1516455590571-18256e5bb9ff", "photo-1502005229762-fc1b2381f0b5", 
  "photo-1564013799919-ab600027ffc6", "photo-1598228723793-52759bba239c", "photo-1588880331149-6ee5b2936880"
];

// Description generators to build unique 120+ word copies
const OPENING_PARAGRAPHS = [
  "Positioned in a highly coveted setting, this magnificent property defines contemporary architectural excellence and elite real estate design. Crafted for discerning buyers, the structure utilizes high-end materials, custom finishes, and floor-to-ceiling glass expanses to seamlessly merge interior spaces with its surroundings. Every corner reflects attention to detail, emphasizing spacious open-plan concepts and exceptional functionality.",
  "Offering an unparalleled level of luxury, this signature estate stands as a testament to bespoke luxury and timeless modern design. Set within a premium neighborhood, the property commands impressive vistas and features a striking silhouette that fits perfectly into its natural topography. Its design features expansive gallery-style spaces, high ceilings, and premium oak and marble finishes.",
  "Introducing a landmark development of sophistication and style, this property offers a rare combination of premier location advantages and elite architectural standards. Designed by an award-winning firm, the residence highlights the finest in modern residential engineering, offering clean lines, sophisticated lighting schemes, and smart layouts that maximize space, comfort, and ambient light."
];

const BODY_PARAGRAPHS = [
  "Inside, the property hosts a state-of-the-art chef's kitchen featuring fully integrated German appliances, solid marble countertops, and custom cabinetry. The primary living pavilion transitions effortlessly to a private terrace, ideal for entertaining guests or enjoying quiet evenings. Additional amenities include a temperature-controlled wine room, a private wellness gym, and fully automated multi-zone climate control systems.",
  "The interior layout comprises grand reception rooms, custom walk-in wardrobes, and spa-inspired bathrooms outfitted with top-tier Italian fixtures and free-standing stone bathtubs. Externally, residents can indulge in the heated infinity swimming pool, a fully equipped outdoor kitchen, and beautifully manicured gardens. Advanced smart home integration handles lighting, audio, and security systems remotely.",
  "Featuring multiple light-filled bedrooms and versatile suites, this property is tailored for a luxurious lifestyle. A dedicated cinema room, private home office, and built-in wellness spa provide ultimate recreation options within the home. The outdoor living spaces feature a large wraparound deck, double glazed panoramic windows, and access to private secure parking garages."
];

const CLOSING_PARAGRAPHS = [
  "From an investment perspective, this asset is highly favorable, promising substantial capital appreciation and strong rental yields due to high localized demand. Its premium location guarantees long-term stability and unmatched liquidity in the global luxury market. Truly a blue-chip asset suitable for diversifying any high-net-worth real estate portfolio.",
  "This listing represents a stellar investment opportunity, aligning strong rental demand with robust projected appreciation parameters. The neighborhood's continuing development makes it a highly secure capital-growth vehicle. Ideal for corporate headquarters or private luxury holdings looking to lock in absolute quality.",
  "Providing the perfect synergy of luxury, privacy, and convenience, this asset delivers immediate investment returns and strong capital preservation attributes. Discerning buyers will appreciate the close proximity to private airports, Michelin-starred dining, and international commerce hubs. An outstanding addition to any sophisticated investment collection."
];

function generateDescription(type, location, price, beds) {
  const op = OPENING_PARAGRAPHS[Math.floor(Math.random() * OPENING_PARAGRAPHS.length)];
  const bp = BODY_PARAGRAPHS[Math.floor(Math.random() * BODY_PARAGRAPHS.length)]
    .replace("property", type.toLowerCase())
    .replace("bedrooms", `${beds} bedrooms`);
  const cp = CLOSING_PARAGRAPHS[Math.floor(Math.random() * CLOSING_PARAGRAPHS.length)]
    .replace("asset", type.toLowerCase());

  return `${op} ${bp} ${cp}`;
}

// 2. Generation Engine
function generateProperties(count = 450) {
  const propertiesList = [];
  const titleSet = new Set();

  let idCounter = 1;

  // Distribute counts based on request parameters
  const distributions = {
    residential: Math.round(count * 0.40), // ~180
    commercial: Math.round(count * 0.25),  // ~112
    land: Math.round(count * 0.15),        // ~68
    luxury: count - Math.round(count * 0.80) // ~90
  };

  const categoriesKeys = Object.keys(CATEGORIES);

  for (let i = 0; i < count; i++) {
    // Determine category based on distribution
    let category = "residential";
    if (i < distributions.residential) {
      category = "residential";
    } else if (i < distributions.residential + distributions.commercial) {
      category = "commercial";
    } else if (i < distributions.residential + distributions.commercial + distributions.land) {
      category = "land";
    } else {
      category = "luxury";
    }

    const typeList = CATEGORIES[category];
    const type = typeList[Math.floor(Math.random() * typeList.length)];

    // Select location
    const loc = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
    const locationStr = `${loc.city}, ${loc.region}`;

    // Bedrooms
    let bedrooms = 0;
    if (category === "residential" || category === "luxury") {
      bedrooms = Math.floor(Math.random() * 6) + 1; // 1 to 6 beds
      if (type.toLowerCase().includes("mansion") || type.toLowerCase().includes("private estate")) {
        bedrooms = Math.floor(Math.random() * 4) + 6; // 6 to 9 beds
      }
    }

    // Bathrooms (typically beds - 1 or + 1, min 1)
    let bathrooms = bedrooms > 0 ? Math.max(1, bedrooms + (Math.random() > 0.5 ? 1 : -1)) : 0;

    // Sqft
    let sqft = 1200;
    if (category === "residential" || category === "luxury") {
      sqft = Math.floor(Math.random() * 6000) + 800; // 800 - 6800 sqft
      if (type.toLowerCase().includes("mansion") || type.toLowerCase().includes("estate")) {
        sqft = Math.floor(Math.random() * 10000) + 7000; // 7000 - 17000 sqft
      }
    } else if (category === "commercial") {
      sqft = Math.floor(Math.random() * 30000) + 2000; // 2000 - 32000 sqft
    } else {
      sqft = Math.floor(Math.random() * 150000) + 5000; // 5000 - 155000 sqft
    }

    // Price
    let priceVal = 0;
    if (category === "luxury") {
      priceVal = (Math.random() * 40 + 5) * 1000000; // £5.0M to £45.0M
    } else if (category === "residential") {
      priceVal = (Math.random() * 6 + 0.5) * 1000000; // £500K to £6.5M
    } else if (category === "commercial") {
      priceVal = (Math.random() * 18 + 2) * 1000000; // £2.0M to £20M
    } else {
      priceVal = (Math.random() * 12 + 0.3) * 1000000; // £300K to £12.3M
    }

    let priceStr = "";
    if (priceVal >= 1000000) {
      priceStr = `£${(priceVal / 1000000).toFixed(2).replace(/\.00$/, "")}M`;
    } else {
      priceStr = `£${Math.round(priceVal / 1000)}K`;
    }

    // Unique Title Generation
    let title = "";
    let attempts = 0;
    do {
      const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
      if (category === "residential" || category === "luxury") {
        title = `${bedrooms}-Bed ${adj} ${type} in ${loc.city}`;
      } else {
        title = `${adj} ${type} in ${loc.city}`;
      }
      attempts++;
    } while (titleSet.has(title) && attempts < 100);

    titleSet.add(title);

    // Unique Images (3 to 6 unique urls)
    const imagesCount = Math.floor(Math.random() * 4) + 3; // 3 to 6
    const propImages = [];
    const usedIds = new Set();
    while (propImages.length < imagesCount) {
      const pId = UNSPLASH_PHOTO_IDS[Math.floor(Math.random() * UNSPLASH_PHOTO_IDS.length)];
      if (!usedIds.has(pId)) {
        usedIds.add(pId);
        // Add unique signatures/parameters to make sure they are unique per property
        propImages.push(`https://images.unsplash.com/${pId}?auto=format&fit=crop&w=1200&q=80&sig=${idCounter}-${propImages.length}`);
      }
    }

    // Features
    const featureCount = Math.floor(Math.random() * 6) + 6; // 6 to 11 features
    const propFeatures = [];
    const usedFeatures = new Set();
    while (propFeatures.length < featureCount) {
      const feat = FEATURES_POOL[Math.floor(Math.random() * FEATURES_POOL.length)];
      if (!usedFeatures.has(feat)) {
        usedFeatures.add(feat);
        propFeatures.push(feat);
      }
    }

    // Created At
    const pastMonths = Math.floor(Math.random() * 24);
    const pastDays = Math.floor(Math.random() * 28);
    const date = new Date();
    date.setMonth(date.getMonth() - pastMonths);
    date.setDate(date.getDate() - pastDays);
    const createdAt = date.toISOString();

    // Unique ID
    const formattedId = `PROP-${String(idCounter).padStart(4, "0")}`;

    propertiesList.push({
      id: formattedId,
      title,
      location: locationStr,
      price: priceStr,
      bedrooms,
      bathrooms,
      sqft,
      description: generateDescription(type, locationStr, priceStr, bedrooms),
      images: propImages,
      features: propFeatures,
      created_at: createdAt
    });

    idCounter++;
  }

  return propertiesList;
}

// 3. Database Insertion batched
async function seedDatabase() {
  const countToGenerate = 450;
  console.log(`Generating ${countToGenerate} unique properties...`);
  const properties = generateProperties(countToGenerate);

  console.log("Splitting properties into batches of 100...");
  const batchSize = 100;
  const batches = [];
  for (let i = 0; i < properties.length; i += batchSize) {
    batches.push(properties.slice(i, i + batchSize));
  }

  console.log(`Total batches to insert: ${batches.length}`);

  for (let bIdx = 0; bIdx < batches.length; bIdx++) {
    const batch = batches[bIdx];
    console.log(`Inserting Batch ${bIdx + 1}/${batches.length} (${batch.length} records)...`);
    
    try {
      const res = await fetch(supabaseUrl + "/rest/v1/properties", {
        method: "POST",
        headers: {
          "apikey": supabaseServiceRoleKey,
          "Authorization": `Bearer ${supabaseServiceRoleKey}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(batch)
      });

      if (res.ok) {
        console.log(`✅ Batch ${bIdx + 1} inserted successfully!`);
      } else {
        console.error(`❌ Failed to insert Batch ${bIdx + 1}:`, await res.text());
        return;
      }
    } catch (err) {
      console.error(`❌ Exception during Batch ${bIdx + 1} insertion:`, err);
      return;
    }
  }

  console.log("\n🎉 DATABASE SEEDING COMPLETED SUCCESSFULLY!");
}

seedDatabase();
