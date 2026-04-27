export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  description: string;
  images: string[];
  features: string[];
}

const locations = [
  "Mayfair", "Kensington", "Chelsea", "Belgravia", "Knightsbridge", 
  "Marylebone", "Notting Hill", "Fitzrovia", "Holland Park", "St John's Wood",
  "Hampstead", "Richmond", "Primrose Hill", "Battersea", "Wimbledon"
];

const styles = ["Georgian Townhouse", "Modern Penthouse", "Victorian Mansion", "Luxury Apartment", "Period Residence", "Country Estate", "Mews House", "Boutique Villa", "Riverfront Duplex"];
const highlights = ["with Panoramic Views", "with Private Garden", "with Roof Terrace", "with Swimming Pool", "with Concierge Service", "in Gated Development", "with Bespoke Interiors", "with Historic Features"];

const featureBank = [
  "24-Hour Concierge", "Secure Underground Parking", "Underfloor Heating", 
  "Smart Home Technology", "Bespoke Chef's Kitchen", "Landscaped Private Garden",
  "Rooftop Terrace", "Private Cinema Room", "Wine Cellar", "State-of-the-art Gym",
  "Indoor Swimming Pool", "Spa & Wellness Facilities", "Direct Lift Access",
  "Staff Quarters", "Heritage Fireplaces", "High Ceilings", "Air Conditioning throughout"
];

// Simple pseudo-random number generator to make consistent but unique data
function mulberry32(a: number) {
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

const generateProperties = (): Property[] => {
  const properties: Property[] = [];
  
  for (let i = 1; i <= 42; i++) {
    // Use a unique seed for each property to ensure consistent randomness
    const rng = mulberry32(i * 100);
    
    const location = locations[Math.floor(rng() * locations.length)];
    const style = styles[Math.floor(rng() * styles.length)];
    const highlight = highlights[Math.floor(rng() * highlights.length)];
    
    const beds = Math.floor(rng() * 5) + 2; // 2 to 6 beds
    const baths = Math.max(1, beds - Math.floor(rng() * 2)); // Slightly fewer or equal baths
    
    // Non-linear sqft generation to create realistic variety
    const baseSqft = 1200 + Math.floor(rng() * 4000);
    const sqft = Math.floor(baseSqft / 50) * 50; // Round to nearest 50
    
    // Price relative to sqft, location, and randomness
    const pricePerSqft = 1500 + Math.floor(rng() * 2500);
    const rawPrice = sqft * pricePerSqft;
    const priceStr = `£${(rawPrice / 1000000).toFixed(2)}M`;
    
    // Extract a keyword from the style to ensure images match the property type
    const styleKeyword = style.split(' ').pop()?.toLowerCase() || 'house';
    
    // Generate unique images using loremflickr tailored to the specific property type
    const propImages = [
      `https://loremflickr.com/1200/800/luxury,${styleKeyword},exterior?lock=${i * 10 + 1}`,
      `https://loremflickr.com/1200/800/luxury,${styleKeyword},livingroom?lock=${i * 10 + 2}`,
      `https://loremflickr.com/1200/800/luxury,${styleKeyword},bedroom?lock=${i * 10 + 3}`,
      `https://loremflickr.com/1200/800/luxury,${styleKeyword},kitchen?lock=${i * 10 + 4}`,
    ];

    // Pick 4-6 random unique features
    const shuffledFeatures = [...featureBank].sort(() => rng() - 0.5);
    const selectedFeatures = shuffledFeatures.slice(0, Math.floor(rng() * 3) + 4);

    properties.push({
      id: `prop-${i.toString().padStart(3, '0')}`,
      title: `${beds}-Bedroom ${style} ${highlight}`,
      location: location,
      price: priceStr,
      bedrooms: beds,
      bathrooms: baths,
      sqft: sqft,
      description: `An exceptional opportunity to acquire a remarkable ${style.toLowerCase()} positioned in the highly desirable neighborhood of ${location}. Spanning approximately ${sqft.toLocaleString()} sq ft of meticulously crafted living space, this extraordinary home features ${beds} well-proportioned bedrooms and ${baths} luxurious bathrooms. The residence has been thoughtfully designed to maximize natural light and volume, offering sophisticated reception areas perfect for both intimate family living and grand-scale entertaining. Combining timeless elegance with modern specification, this property stands as a premier offering in the prime London market.`,
      images: propImages,
      features: selectedFeatures
    });
  }
  return properties;
};

export const properties = generateProperties();

export function getPropertyById(id: string): Property | undefined {
  return properties.find(p => p.id === id);
}
