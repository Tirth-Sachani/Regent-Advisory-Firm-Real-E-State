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
  explanation?: string[];
}

export const properties: Property[] = [
  {
    "id": "prop-001",
    "title": "2-Bed Luxury Row House in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£5.28M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 4950,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular row house is perfectly situated in Belgravia, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 4,950 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Solar Panels, Swimming Pool, Club House, Gym, and Power Backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Swimming Pool",
      "Club House",
      "Gym",
      "Power Backup",
      "Children Play Area",
      "Lift",
      "Private Garden"
    ]
  },
  {
    "id": "prop-002",
    "title": "3-Bed Luxury Bungalow in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£1.42M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 3600,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious bungalow situated in the highly coveted residential enclave of Knightsbridge, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 3,600 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Children Play Area, Private Terrace, High Speed Internet, EV Charging, and Private Garden. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Private Terrace",
      "High Speed Internet",
      "EV Charging",
      "Private Garden",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-003",
    "title": "2-Bed Luxury Luxury Apartment in Richmond, London",
    "location": "Richmond, London",
    "price": "£1.89M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 1700,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent luxury apartment in Richmond, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 1,700 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including EV Charging, Sea View, Smart Home, Club House, and Visitor Parking. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Sea View",
      "Smart Home",
      "Club House",
      "Visitor Parking",
      "Solar Panels",
      "Swimming Pool",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-004",
    "title": "5-Bed Luxury Bungalow in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£12.17M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 1900,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious bungalow situated in the highly coveted residential enclave of Hampstead, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 1,900 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including 24x7 Security, EV Charging, Gym, Sea View, and Conference Room. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "EV Charging",
      "Gym",
      "Sea View",
      "Conference Room",
      "Private Garden",
      "Lake View"
    ]
  },
  {
    "id": "prop-005",
    "title": "5-Bed Luxury Apartment in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£3.76M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 3600,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular apartment is perfectly situated in Oxford, Oxfordshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 3,600 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Swimming Pool, High Speed Internet, Club House, Gym, and Children Play Area. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "High Speed Internet",
      "Club House",
      "Gym",
      "Children Play Area",
      "Private Garden"
    ]
  },
  {
    "id": "prop-006",
    "title": "6-Bed Luxury Villa in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£10.64M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 1500,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular villa is perfectly situated in Mayfair, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 1,500 square feet, the interior configuration features 6 meticulously designed bedrooms along with 5 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including EV Charging, River View, Smart Home, Private Terrace, and Private Garden. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "River View",
      "Smart Home",
      "Private Terrace",
      "Private Garden"
    ]
  },
  {
    "id": "prop-007",
    "title": "5-Bed Luxury Duplex House in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£11.07M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 3950,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular duplex house is perfectly situated in Chelsea, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 3,950 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Gym, Swimming Pool, Sea View, 24x7 Security, and River View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Swimming Pool",
      "Sea View",
      "24x7 Security",
      "River View"
    ]
  },
  {
    "id": "prop-008",
    "title": "5-Bed Luxury Villa in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£5.67M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 3350,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious villa situated in the highly coveted residential enclave of Ascot, Berkshire. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 3,350 square feet, the interior configuration features 5 meticulously designed bedrooms along with 4 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Visitor Parking, 24x7 Security, Gym, Private Terrace, and Solar Panels. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Visitor Parking",
      "24x7 Security",
      "Gym",
      "Private Terrace",
      "Solar Panels",
      "Smart Home",
      "Swimming Pool",
      "Power Backup"
    ]
  },
  {
    "id": "prop-009",
    "title": "4-Bed Luxury Penthouse in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£12.52M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 1450,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious penthouse situated in the highly coveted residential enclave of Notting Hill, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 1,450 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Garden, 24x7 Security, Lake View, Sea View, and Power Backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "24x7 Security",
      "Lake View",
      "Sea View",
      "Power Backup",
      "Solar Panels",
      "Swimming Pool",
      "Private Terrace",
      "Children Play Area",
      "Conference Room",
      "Lift",
      "Gym"
    ]
  },
  {
    "id": "prop-010",
    "title": "3-Bed Luxury Duplex House in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£6.90M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 1300,
    "description": "Nestled in the prime luxury tier of Edinburgh, Midlothian, this exquisite duplex house represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 1,300 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Lift, Children Play Area, Lake View, Gym, and Smart Home. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lift",
      "Children Play Area",
      "Lake View",
      "Gym",
      "Smart Home",
      "Club House",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-011",
    "title": "6-Bed Luxury Row House in Richmond, London",
    "location": "Richmond, London",
    "price": "£2.33M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 2950,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent row house in Richmond, London offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 2,950 square feet, the interior configuration features 6 meticulously designed bedrooms along with 5 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Gym, High Speed Internet, Club House, Smart Home, and Fire Safety. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "High Speed Internet",
      "Club House",
      "Smart Home",
      "Fire Safety",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-012",
    "title": "4-Bed Luxury Bungalow in Kensington, London",
    "location": "Kensington, London",
    "price": "£11.28M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 4550,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent bungalow in Kensington, London offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 4,550 square feet, the interior configuration features 4 meticulously designed bedrooms along with 3 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Terrace, Smart Home, EV Charging, Private Garden, and Children Play Area. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Smart Home",
      "EV Charging",
      "Private Garden",
      "Children Play Area",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-013",
    "title": "6-Bed Luxury Penthouse in Kensington, London",
    "location": "Kensington, London",
    "price": "£12.78M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 2100,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious penthouse situated in the highly coveted residential enclave of Kensington, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 2,100 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, River View, Private Terrace, and Smart Home. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "River View",
      "Private Terrace",
      "Smart Home",
      "Power Backup",
      "High Speed Internet",
      "Visitor Parking",
      "EV Charging",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-014",
    "title": "6-Bed Luxury Villa in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£2.52M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 1600,
    "description": "Commanding an enviable and highly sought-after position in Chelsea, London, this bespoke villa showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 1,600 square feet, the interior configuration features 6 meticulously designed bedrooms along with 6 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Lake View, Smart Home, EV Charging, Private Garden, and Lift. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "Smart Home",
      "EV Charging",
      "Private Garden",
      "Lift",
      "Solar Panels",
      "Fire Safety",
      "24x7 Security",
      "Gym",
      "Club House",
      "Swimming Pool",
      "River View"
    ]
  },
  {
    "id": "prop-015",
    "title": "4-Bed Luxury Penthouse in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£13.69M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 1800,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent penthouse in Wimbledon, London offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 1,800 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Children Play Area, Gym, Lake View, 24x7 Security, and Power Backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Gym",
      "Lake View",
      "24x7 Security",
      "Power Backup",
      "Solar Panels",
      "Lift"
    ]
  },
  {
    "id": "prop-016",
    "title": "6-Bed Luxury Duplex House in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£6.64M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 2250,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious duplex house situated in the highly coveted residential enclave of Wimbledon, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 2,250 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Power Backup, Visitor Parking, Smart Home, and 24x7 Security. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Power Backup",
      "Visitor Parking",
      "Smart Home",
      "24x7 Security",
      "Lake View",
      "Conference Room",
      "Fire Safety",
      "Private Terrace",
      "Private Garden",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-017",
    "title": "6-Bed Luxury Duplex House in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£9.22M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 1200,
    "description": "Commanding an enviable and highly sought-after position in Chelsea, London, this bespoke duplex house showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 1,200 square feet, the interior configuration features 6 meticulously designed bedrooms along with 6 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Fire Safety, Swimming Pool, River View, Solar Panels, and EV Charging. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Fire Safety",
      "Swimming Pool",
      "River View",
      "Solar Panels",
      "EV Charging",
      "Power Backup"
    ]
  },
  {
    "id": "prop-018",
    "title": "4-Bed Luxury Villa in Holland Park, London",
    "location": "Holland Park, London",
    "price": "£1.69M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 3750,
    "description": "Nestled in the prime luxury tier of Holland Park, London, this exquisite villa represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 3,750 square feet, the interior configuration features 4 meticulously designed bedrooms along with 4 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including EV Charging, Lake View, 24x7 Security, Solar Panels, and Children Play Area. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Lake View",
      "24x7 Security",
      "Solar Panels",
      "Children Play Area",
      "Gym",
      "Power Backup",
      "Conference Room",
      "Smart Home"
    ]
  },
  {
    "id": "prop-019",
    "title": "3-Bed Luxury Bungalow in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£12.39M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 2350,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular bungalow is perfectly situated in Cotswolds, Gloucestershire. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 2,350 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Smart Home, Visitor Parking, Private Garden, Children Play Area, and Sea View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Visitor Parking",
      "Private Garden",
      "Children Play Area",
      "Sea View",
      "Solar Panels",
      "EV Charging",
      "Power Backup",
      "Gym"
    ]
  },
  {
    "id": "prop-020",
    "title": "6-Bed Luxury Duplex House in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£952K",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 4650,
    "description": "Commanding an enviable and highly sought-after position in Chelsea, London, this bespoke duplex house showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 4,650 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including EV Charging, Private Garden, Power Backup, Lift, and Children Play Area. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Private Garden",
      "Power Backup",
      "Lift",
      "Children Play Area",
      "Lake View",
      "Smart Home",
      "Solar Panels",
      "Conference Room",
      "Gym",
      "River View"
    ]
  },
  {
    "id": "prop-021",
    "title": "2-Bed Luxury Penthouse in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£4.52M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 3750,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious penthouse situated in the highly coveted residential enclave of Edinburgh, Midlothian. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 3,750 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including High Speed Internet, 24x7 Security, Smart Home, River View, and Lift. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "24x7 Security",
      "Smart Home",
      "River View",
      "Lift",
      "Sea View",
      "Private Terrace",
      "EV Charging"
    ]
  },
  {
    "id": "prop-022",
    "title": "6-Bed Luxury Duplex House in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£9.13M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 1350,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular duplex house is perfectly situated in Mayfair, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 1,350 square feet, the interior configuration features 6 meticulously designed bedrooms along with 5 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Smart Home, Lift, Club House, and Swimming Pool. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Smart Home",
      "Lift",
      "Club House",
      "Swimming Pool",
      "Visitor Parking",
      "Power Backup",
      "Gym",
      "Sea View"
    ]
  },
  {
    "id": "prop-023",
    "title": "5-Bed Luxury Luxury Apartment in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£8.00M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 1450,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious luxury apartment situated in the highly coveted residential enclave of Chelsea, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 1,450 square feet, the interior configuration features 5 meticulously designed bedrooms along with 4 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Visitor Parking, Smart Home, Club House, and Gym. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Visitor Parking",
      "Smart Home",
      "Club House",
      "Gym",
      "High Speed Internet",
      "Sea View",
      "Lake View"
    ]
  },
  {
    "id": "prop-024",
    "title": "2-Bed Luxury Villa in Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£1.95M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 2750,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious villa situated in the highly coveted residential enclave of Weybridge, Surrey. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 2,750 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Gym, Solar Panels, 24x7 Security, High Speed Internet, and River View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Solar Panels",
      "24x7 Security",
      "High Speed Internet",
      "River View",
      "Power Backup",
      "Swimming Pool",
      "Sea View",
      "Lift",
      "Children Play Area",
      "Private Terrace",
      "Lake View"
    ]
  },
  {
    "id": "prop-025",
    "title": "5-Bed Luxury Row House in Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£14.33M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 1900,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular row house is perfectly situated in Weybridge, Surrey. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 1,900 square feet, the interior configuration features 5 meticulously designed bedrooms along with 4 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including High Speed Internet, River View, Children Play Area, Fire Safety, and EV Charging. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "River View",
      "Children Play Area",
      "Fire Safety",
      "EV Charging",
      "Swimming Pool",
      "Power Backup",
      "Conference Room"
    ]
  },
  {
    "id": "prop-026",
    "title": "5-Bed Luxury Penthouse in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£7.90M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 4800,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular penthouse is perfectly situated in Cotswolds, Gloucestershire. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 4,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Conference Room, Smart Home, Swimming Pool, Visitor Parking, and Club House. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Smart Home",
      "Swimming Pool",
      "Visitor Parking",
      "Club House",
      "Private Garden",
      "Lake View"
    ]
  },
  {
    "id": "prop-027",
    "title": "3-Bed Luxury Duplex House in Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£7.80M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 4100,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular duplex house is perfectly situated in Bath, Somerset. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 4,100 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Fire Safety, Solar Panels, Lake View, Sea View, and Club House. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Fire Safety",
      "Solar Panels",
      "Lake View",
      "Sea View",
      "Club House",
      "Private Terrace",
      "High Speed Internet",
      "Conference Room",
      "Smart Home",
      "Lift",
      "Gym"
    ]
  },
  {
    "id": "prop-028",
    "title": "2-Bed Luxury Luxury Apartment in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£11.59M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 4350,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent luxury apartment in Hampstead, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 4,350 square feet, the interior configuration features 2 meticulously designed bedrooms along with 1 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Private Terrace, Club House, Lift, Swimming Pool, and EV Charging. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Club House",
      "Lift",
      "Swimming Pool",
      "EV Charging",
      "Children Play Area",
      "Fire Safety",
      "Lake View",
      "Smart Home",
      "Conference Room",
      "Private Garden",
      "High Speed Internet"
    ]
  },
  {
    "id": "prop-029",
    "title": "5-Bed Luxury Independent House in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£10.76M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 3000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent independent house in Ascot, Berkshire offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 3,000 square feet, the interior configuration features 5 meticulously designed bedrooms along with 5 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Children Play Area, Swimming Pool, Private Terrace, Lake View, and Visitor Parking. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Swimming Pool",
      "Private Terrace",
      "Lake View",
      "Visitor Parking",
      "Gym",
      "Smart Home",
      "Power Backup",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-030",
    "title": "3-Bed Luxury Row House in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£1.88M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 2600,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious row house situated in the highly coveted residential enclave of Oxford, Oxfordshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 2,600 square feet, the interior configuration features 3 meticulously designed bedrooms along with 2 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Terrace, Lift, Visitor Parking, Power Backup, and Smart Home. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Lift",
      "Visitor Parking",
      "Power Backup",
      "Smart Home",
      "EV Charging",
      "Solar Panels",
      "24x7 Security",
      "Fire Safety",
      "Club House",
      "Lake View",
      "Gym"
    ]
  },
  {
    "id": "prop-031",
    "title": "4-Bed Luxury Duplex House in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£8.76M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 1800,
    "description": "Nestled in the prime luxury tier of Edinburgh, Midlothian, this exquisite duplex house represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 1,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including EV Charging, River View, Gym, Smart Home, and Private Terrace. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "River View",
      "Gym",
      "Smart Home",
      "Private Terrace",
      "Sea View",
      "Fire Safety",
      "Club House",
      "Lift",
      "Private Garden",
      "Lake View"
    ]
  },
  {
    "id": "prop-032",
    "title": "3-Bed Luxury Independent House in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£11.72M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 2900,
    "description": "Nestled in the prime luxury tier of Belgravia, London, this exquisite independent house represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 2,900 square feet, the interior configuration features 3 meticulously designed bedrooms along with 3 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Lift, Gym, Solar Panels, Fire Safety, and Children Play Area. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lift",
      "Gym",
      "Solar Panels",
      "Fire Safety",
      "Children Play Area",
      "Club House",
      "Lake View",
      "Private Garden",
      "Smart Home",
      "24x7 Security",
      "Conference Room"
    ]
  },
  {
    "id": "prop-033",
    "title": "5-Bed Luxury Luxury Apartment in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£7.90M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 3100,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular luxury apartment is perfectly situated in Oxford, Oxfordshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 3,100 square feet, the interior configuration features 5 meticulously designed bedrooms along with 4 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Power Backup, Lake View, Solar Panels, Swimming Pool, and Visitor Parking. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Lake View",
      "Solar Panels",
      "Swimming Pool",
      "Visitor Parking",
      "High Speed Internet",
      "Conference Room",
      "Sea View"
    ]
  },
  {
    "id": "prop-034",
    "title": "3-Bed Luxury Independent House in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£7.82M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 3800,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular independent house is perfectly situated in Notting Hill, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 3,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Private Terrace, Club House, Fire Safety, and 24x7 Security. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Private Terrace",
      "Club House",
      "Fire Safety",
      "24x7 Security",
      "Private Garden",
      "Visitor Parking",
      "Lift"
    ]
  },
  {
    "id": "prop-035",
    "title": "5-Bed Luxury Luxury Apartment in Richmond, London",
    "location": "Richmond, London",
    "price": "£7.23M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 4300,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent luxury apartment in Richmond, London offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 4,300 square feet, the interior configuration features 5 meticulously designed bedrooms along with 4 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Sea View, Power Backup, River View, Fire Safety, and Club House. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Sea View",
      "Power Backup",
      "River View",
      "Fire Safety",
      "Club House"
    ]
  },
  {
    "id": "prop-036",
    "title": "2-Bed Luxury Duplex House in Holland Park, London",
    "location": "Holland Park, London",
    "price": "£13.04M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 4200,
    "description": "Commanding an enviable and highly sought-after position in Holland Park, London, this bespoke duplex house showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 4,200 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including EV Charging, Private Garden, Power Backup, Conference Room, and Lift. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Private Garden",
      "Power Backup",
      "Conference Room",
      "Lift",
      "Club House",
      "Private Terrace",
      "Solar Panels",
      "Lake View",
      "24x7 Security",
      "Sea View",
      "High Speed Internet"
    ]
  },
  {
    "id": "prop-037",
    "title": "2-Bed Luxury Luxury Apartment in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£1.71M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 3500,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular luxury apartment is perfectly situated in Oxford, Oxfordshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 3,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Gym, Children Play Area, Visitor Parking, River View, and Sea View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Children Play Area",
      "Visitor Parking",
      "River View",
      "Sea View",
      "EV Charging"
    ]
  },
  {
    "id": "prop-038",
    "title": "4-Bed Luxury Bungalow in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£7.44M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 2550,
    "description": "Commanding an enviable and highly sought-after position in Notting Hill, London, this bespoke bungalow showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 2,550 square feet, the interior configuration features 4 meticulously designed bedrooms along with 3 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Fire Safety, Private Terrace, Lift, and Solar Panels. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Fire Safety",
      "Private Terrace",
      "Lift",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-039",
    "title": "4-Bed Luxury Bungalow in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£5.29M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 2550,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent bungalow in Oxford, Oxfordshire offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 2,550 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Gym, Smart Home, Conference Room, 24x7 Security, and River View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Smart Home",
      "Conference Room",
      "24x7 Security",
      "River View",
      "Solar Panels",
      "Lift",
      "Power Backup",
      "EV Charging"
    ]
  },
  {
    "id": "prop-040",
    "title": "5-Bed Luxury Villa in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£13.69M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 4550,
    "description": "Nestled in the prime luxury tier of St John's Wood, London, this exquisite villa represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 4,550 square feet, the interior configuration features 5 meticulously designed bedrooms along with 4 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Visitor Parking, High Speed Internet, Lake View, Private Garden, and 24x7 Security. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Visitor Parking",
      "High Speed Internet",
      "Lake View",
      "Private Garden",
      "24x7 Security",
      "Gym",
      "EV Charging",
      "Smart Home",
      "Conference Room"
    ]
  },
  {
    "id": "prop-041",
    "title": "3-Bed Luxury Apartment in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£2.11M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 2200,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular apartment is perfectly situated in Hampstead, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 2,200 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Garden, Lake View, EV Charging, Smart Home, and Children Play Area. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Lake View",
      "EV Charging",
      "Smart Home",
      "Children Play Area",
      "Power Backup",
      "Solar Panels",
      "Fire Safety",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-042",
    "title": "4-Bed Luxury Villa in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£1.36M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 1950,
    "description": "Commanding an enviable and highly sought-after position in Edinburgh, Midlothian, this bespoke villa showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 1,950 square feet, the interior configuration features 4 meticulously designed bedrooms along with 4 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Children Play Area, Swimming Pool, Conference Room, Smart Home, and Private Terrace. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Swimming Pool",
      "Conference Room",
      "Smart Home",
      "Private Terrace",
      "EV Charging"
    ]
  },
  {
    "id": "prop-043",
    "title": "5-Bed Luxury Duplex House in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£5.03M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 3450,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular duplex house is perfectly situated in Knightsbridge, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 3,450 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Children Play Area, Private Garden, Club House, River View, and Lake View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Private Garden",
      "Club House",
      "River View",
      "Lake View",
      "Conference Room",
      "Smart Home",
      "Visitor Parking",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-044",
    "title": "2-Bed Luxury Penthouse in Kensington, London",
    "location": "Kensington, London",
    "price": "£7.91M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 2150,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious penthouse situated in the highly coveted residential enclave of Kensington, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 2,150 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including River View, Private Terrace, Fire Safety, Solar Panels, and Sea View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Private Terrace",
      "Fire Safety",
      "Solar Panels",
      "Sea View",
      "Children Play Area",
      "24x7 Security",
      "Swimming Pool",
      "Smart Home",
      "Private Garden",
      "Lake View"
    ]
  },
  {
    "id": "prop-045",
    "title": "6-Bed Luxury Bungalow in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£4.62M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 4950,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent bungalow in Belgravia, London offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 4,950 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Conference Room, Smart Home, Children Play Area, River View, and Lift. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Smart Home",
      "Children Play Area",
      "River View",
      "Lift",
      "Gym",
      "Visitor Parking",
      "Fire Safety",
      "Club House",
      "Private Garden"
    ]
  },
  {
    "id": "prop-046",
    "title": "5-Bed Luxury Apartment in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£8.20M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 4400,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular apartment is perfectly situated in St John's Wood, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 4,400 square feet, the interior configuration features 5 meticulously designed bedrooms along with 5 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Private Garden, Solar Panels, Visitor Parking, Children Play Area, and Sea View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Solar Panels",
      "Visitor Parking",
      "Children Play Area",
      "Sea View",
      "Gym"
    ]
  },
  {
    "id": "prop-047",
    "title": "3-Bed Luxury Apartment in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£706K",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 4550,
    "description": "Commanding an enviable and highly sought-after position in Chelsea, London, this bespoke apartment showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 4,550 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Power Backup, Visitor Parking, Children Play Area, Lake View, and High Speed Internet. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Visitor Parking",
      "Children Play Area",
      "Lake View",
      "High Speed Internet",
      "Solar Panels",
      "Lift"
    ]
  },
  {
    "id": "prop-048",
    "title": "6-Bed Luxury Row House in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£11.59M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 2300,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent row house in Cotswolds, Gloucestershire offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 2,300 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Fire Safety, Gym, Swimming Pool, Smart Home, and Lift. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Fire Safety",
      "Gym",
      "Swimming Pool",
      "Smart Home",
      "Lift",
      "Club House",
      "Private Garden",
      "Power Backup"
    ]
  },
  {
    "id": "prop-049",
    "title": "4-Bed Luxury Apartment in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£4.36M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 2050,
    "description": "Nestled in the prime luxury tier of Mayfair, London, this exquisite apartment represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 2,050 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Gym, 24x7 Security, Swimming Pool, Private Garden, and Smart Home. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "24x7 Security",
      "Swimming Pool",
      "Private Garden",
      "Smart Home",
      "Club House",
      "River View",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-050",
    "title": "5-Bed Luxury Bungalow in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£11.10M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 2000,
    "description": "Commanding an enviable and highly sought-after position in Edinburgh, Midlothian, this bespoke bungalow showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 2,000 square feet, the interior configuration features 5 meticulously designed bedrooms along with 5 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Conference Room, Power Backup, High Speed Internet, Swimming Pool, and Visitor Parking. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Power Backup",
      "High Speed Internet",
      "Swimming Pool",
      "Visitor Parking",
      "River View",
      "Private Garden",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-051",
    "title": "3-Bed Luxury Luxury Apartment in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£14.06M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 1950,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular luxury apartment is perfectly situated in Mayfair, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 1,950 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including High Speed Internet, EV Charging, River View, 24x7 Security, and Private Garden. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "EV Charging",
      "River View",
      "24x7 Security",
      "Private Garden"
    ]
  },
  {
    "id": "prop-052",
    "title": "3-Bed Luxury Penthouse in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£928K",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 3100,
    "description": "Commanding an enviable and highly sought-after position in Notting Hill, London, this bespoke penthouse showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 3,100 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including High Speed Internet, Private Garden, EV Charging, Sea View, and Conference Room. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "Private Garden",
      "EV Charging",
      "Sea View",
      "Conference Room",
      "Children Play Area",
      "Lift"
    ]
  },
  {
    "id": "prop-053",
    "title": "3-Bed Luxury Bungalow in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£10.59M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 2850,
    "description": "Nestled in the prime luxury tier of Oxford, Oxfordshire, this exquisite bungalow represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 2,850 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Conference Room, EV Charging, Lake View, Sea View, and Swimming Pool. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "EV Charging",
      "Lake View",
      "Sea View",
      "Swimming Pool",
      "Power Backup",
      "Club House",
      "Private Terrace",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-054",
    "title": "4-Bed Luxury Luxury Apartment in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£3.19M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 1650,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent luxury apartment in Hampstead, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 1,650 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Gym, Fire Safety, Lift, River View, and Solar Panels. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Fire Safety",
      "Lift",
      "River View",
      "Solar Panels",
      "Conference Room",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-055",
    "title": "6-Bed Luxury Villa in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£6.07M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 3750,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular villa is perfectly situated in Mayfair, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 3,750 square feet, the interior configuration features 6 meticulously designed bedrooms along with 5 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Children Play Area, Swimming Pool, Sea View, Smart Home, and Private Garden. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Swimming Pool",
      "Sea View",
      "Smart Home",
      "Private Garden",
      "High Speed Internet",
      "Club House",
      "Fire Safety",
      "Lift",
      "EV Charging"
    ]
  },
  {
    "id": "prop-056",
    "title": "5-Bed Luxury Bungalow in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£4.91M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 4550,
    "description": "Nestled in the prime luxury tier of Notting Hill, London, this exquisite bungalow represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 4,550 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Solar Panels, Visitor Parking, Gym, Sea View, and Swimming Pool. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Visitor Parking",
      "Gym",
      "Sea View",
      "Swimming Pool",
      "Club House"
    ]
  },
  {
    "id": "prop-057",
    "title": "5-Bed Luxury Independent House in Richmond, London",
    "location": "Richmond, London",
    "price": "£13.45M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 4450,
    "description": "Commanding an enviable and highly sought-after position in Richmond, London, this bespoke independent house showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 4,450 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Smart Home, Lift, Conference Room, River View, and Solar Panels. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Lift",
      "Conference Room",
      "River View",
      "Solar Panels",
      "24x7 Security",
      "Visitor Parking",
      "Power Backup",
      "EV Charging",
      "Private Terrace",
      "Gym",
      "Sea View"
    ]
  },
  {
    "id": "prop-058",
    "title": "5-Bed Luxury Villa in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£3.26M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 3400,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular villa is perfectly situated in Belgravia, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 3,400 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, EV Charging, Visitor Parking, Gym, and Fire Safety. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "EV Charging",
      "Visitor Parking",
      "Gym",
      "Fire Safety",
      "24x7 Security",
      "Children Play Area",
      "Conference Room",
      "High Speed Internet",
      "Lift",
      "Private Terrace",
      "River View"
    ]
  },
  {
    "id": "prop-059",
    "title": "3-Bed Luxury Luxury Apartment in Richmond, London",
    "location": "Richmond, London",
    "price": "£4.44M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 1600,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular luxury apartment is perfectly situated in Richmond, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 1,600 square feet, the interior configuration features 3 meticulously designed bedrooms along with 3 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Sea View, Swimming Pool, Club House, and Smart Home. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Sea View",
      "Swimming Pool",
      "Club House",
      "Smart Home"
    ]
  },
  {
    "id": "prop-060",
    "title": "4-Bed Luxury Luxury Apartment in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£1.10M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 1950,
    "description": "Nestled in the prime luxury tier of Notting Hill, London, this exquisite luxury apartment represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 1,950 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Conference Room, Swimming Pool, Fire Safety, Private Garden, and Gym. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Swimming Pool",
      "Fire Safety",
      "Private Garden",
      "Gym",
      "EV Charging",
      "Smart Home",
      "River View",
      "Private Terrace",
      "Lift",
      "Solar Panels",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-061",
    "title": "2-Bed Luxury Duplex House in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£10.46M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 3850,
    "description": "Nestled in the prime luxury tier of Chelsea, London, this exquisite duplex house represents the absolute pinnacle of contemporary British architectural refinement. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 3,850 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Smart Home, Gym, Children Play Area, Private Garden, and High Speed Internet. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Gym",
      "Children Play Area",
      "Private Garden",
      "High Speed Internet",
      "Power Backup",
      "Fire Safety",
      "Lift"
    ]
  },
  {
    "id": "prop-062",
    "title": "4-Bed Luxury Apartment in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£14.71M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 3000,
    "description": "Commanding an enviable and highly sought-after position in Mayfair, London, this bespoke apartment showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 3,000 square feet, the interior configuration features 4 meticulously designed bedrooms along with 4 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Terrace, 24x7 Security, Private Garden, EV Charging, and Solar Panels. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "24x7 Security",
      "Private Garden",
      "EV Charging",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-063",
    "title": "5-Bed Luxury Duplex House in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£3.06M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 4200,
    "description": "Nestled in the prime luxury tier of Notting Hill, London, this exquisite duplex house represents the absolute pinnacle of contemporary British architectural refinement. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 4,200 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Private Terrace, High Speed Internet, Children Play Area, and Private Garden. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Private Terrace",
      "High Speed Internet",
      "Children Play Area",
      "Private Garden",
      "River View",
      "Smart Home",
      "Conference Room"
    ]
  },
  {
    "id": "prop-064",
    "title": "4-Bed Luxury Apartment in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£12.90M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 3600,
    "description": "Commanding an enviable and highly sought-after position in Knightsbridge, London, this bespoke apartment showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 3,600 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Club House, Power Backup, Lake View, EV Charging, and River View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Power Backup",
      "Lake View",
      "EV Charging",
      "River View",
      "Conference Room",
      "Gym"
    ]
  },
  {
    "id": "prop-065",
    "title": "4-Bed Luxury Luxury Apartment in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£6.76M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 2450,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious luxury apartment situated in the highly coveted residential enclave of Ascot, Berkshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 2,450 square feet, the interior configuration features 4 meticulously designed bedrooms along with 4 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Visitor Parking, Conference Room, Private Terrace, High Speed Internet, and Solar Panels. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Visitor Parking",
      "Conference Room",
      "Private Terrace",
      "High Speed Internet",
      "Solar Panels",
      "Children Play Area",
      "Gym",
      "Lift",
      "River View",
      "Lake View"
    ]
  },
  {
    "id": "prop-066",
    "title": "3-Bed Luxury Row House in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£14.37M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 3950,
    "description": "Nestled in the prime luxury tier of Ascot, Berkshire, this exquisite row house represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 3,950 square feet, the interior configuration features 3 meticulously designed bedrooms along with 3 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Gym, Fire Safety, Lake View, Visitor Parking, and Solar Panels. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Fire Safety",
      "Lake View",
      "Visitor Parking",
      "Solar Panels",
      "Power Backup",
      "High Speed Internet",
      "Private Garden",
      "Club House",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-067",
    "title": "6-Bed Luxury Duplex House in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£9.24M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 2350,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular duplex house is perfectly situated in Edinburgh, Midlothian. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 2,350 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Gym, Club House, Fire Safety, Private Terrace, and Children Play Area. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Club House",
      "Fire Safety",
      "Private Terrace",
      "Children Play Area",
      "Private Garden",
      "Visitor Parking",
      "Lift"
    ]
  },
  {
    "id": "prop-068",
    "title": "4-Bed Luxury Row House in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£13.18M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 4350,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent row house in Knightsbridge, London offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 4,350 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Club House, Private Terrace, Private Garden, Fire Safety, and River View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Private Terrace",
      "Private Garden",
      "Fire Safety",
      "River View",
      "Power Backup",
      "Smart Home",
      "24x7 Security",
      "Sea View",
      "EV Charging",
      "Swimming Pool",
      "Lift"
    ]
  },
  {
    "id": "prop-069",
    "title": "4-Bed Luxury Independent House in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£7.77M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 1850,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent independent house in Knightsbridge, London offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 1,850 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Children Play Area, High Speed Internet, Visitor Parking, and Lake View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Children Play Area",
      "High Speed Internet",
      "Visitor Parking",
      "Lake View",
      "Club House",
      "Lift",
      "EV Charging",
      "24x7 Security",
      "Sea View",
      "Power Backup",
      "Private Garden"
    ]
  },
  {
    "id": "prop-070",
    "title": "3-Bed Luxury Duplex House in Kensington, London",
    "location": "Kensington, London",
    "price": "£5.58M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 4850,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular duplex house is perfectly situated in Kensington, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 4,850 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Smart Home, Private Garden, Solar Panels, Children Play Area, and Sea View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Private Garden",
      "Solar Panels",
      "Children Play Area",
      "Sea View",
      "High Speed Internet",
      "24x7 Security",
      "Conference Room",
      "Gym",
      "Power Backup"
    ]
  },
  {
    "id": "prop-071",
    "title": "6-Bed Luxury Duplex House in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£6.81M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 1350,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious duplex house situated in the highly coveted residential enclave of Chelsea, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 1,350 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Children Play Area, EV Charging, Sea View, Solar Panels, and Club House. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "EV Charging",
      "Sea View",
      "Solar Panels",
      "Club House"
    ]
  },
  {
    "id": "prop-072",
    "title": "6-Bed Luxury Duplex House in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£3.95M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 2250,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular duplex house is perfectly situated in Wimbledon, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 2,250 square feet, the interior configuration features 6 meticulously designed bedrooms along with 5 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Sea View, Private Terrace, Swimming Pool, Club House, and High Speed Internet. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Sea View",
      "Private Terrace",
      "Swimming Pool",
      "Club House",
      "High Speed Internet",
      "Fire Safety",
      "Gym",
      "Lake View",
      "Visitor Parking",
      "Conference Room",
      "Children Play Area",
      "Private Garden"
    ]
  },
  {
    "id": "prop-073",
    "title": "5-Bed Luxury Luxury Apartment in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£13.57M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 3650,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular luxury apartment is perfectly situated in Hampstead, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 3,650 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Terrace, Fire Safety, EV Charging, Children Play Area, and 24x7 Security. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Fire Safety",
      "EV Charging",
      "Children Play Area",
      "24x7 Security",
      "Sea View",
      "Club House",
      "Power Backup",
      "Swimming Pool",
      "High Speed Internet"
    ]
  },
  {
    "id": "prop-074",
    "title": "6-Bed Luxury Luxury Apartment in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£3.57M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 3150,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular luxury apartment is perfectly situated in Notting Hill, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 3,150 square feet, the interior configuration features 6 meticulously designed bedrooms along with 6 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Garden, Power Backup, Fire Safety, Visitor Parking, and Children Play Area. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Power Backup",
      "Fire Safety",
      "Visitor Parking",
      "Children Play Area",
      "High Speed Internet",
      "Lift",
      "EV Charging",
      "Gym"
    ]
  },
  {
    "id": "prop-075",
    "title": "3-Bed Luxury Luxury Apartment in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£6.91M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 1950,
    "description": "Nestled in the prime luxury tier of Oxford, Oxfordshire, this exquisite luxury apartment represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 1,950 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Gym, Visitor Parking, Smart Home, Lift, and Power Backup. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Visitor Parking",
      "Smart Home",
      "Lift",
      "Power Backup",
      "Children Play Area",
      "Fire Safety",
      "Lake View",
      "24x7 Security",
      "Swimming Pool"
    ]
  },
  {
    "id": "prop-076",
    "title": "3-Bed Luxury Apartment in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£7.93M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 3500,
    "description": "Nestled in the prime luxury tier of Oxford, Oxfordshire, this exquisite apartment represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 3,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including High Speed Internet, Visitor Parking, River View, Swimming Pool, and Club House. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "Visitor Parking",
      "River View",
      "Swimming Pool",
      "Club House"
    ]
  },
  {
    "id": "prop-077",
    "title": "6-Bed Luxury Bungalow in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£1.63M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 1650,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular bungalow is perfectly situated in Notting Hill, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 1,650 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Club House, Smart Home, Lift, Visitor Parking, and Solar Panels. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Smart Home",
      "Lift",
      "Visitor Parking",
      "Solar Panels",
      "River View",
      "Private Garden",
      "Lake View",
      "Power Backup",
      "Conference Room",
      "Gym",
      "Sea View"
    ]
  },
  {
    "id": "prop-078",
    "title": "6-Bed Luxury Luxury Apartment in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£9.30M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 3500,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious luxury apartment situated in the highly coveted residential enclave of Notting Hill, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 3,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Fire Safety, Swimming Pool, Club House, High Speed Internet, and EV Charging. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Fire Safety",
      "Swimming Pool",
      "Club House",
      "High Speed Internet",
      "EV Charging",
      "Smart Home",
      "24x7 Security",
      "Conference Room"
    ]
  },
  {
    "id": "prop-079",
    "title": "5-Bed Luxury Row House in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£5.02M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 3000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious row house situated in the highly coveted residential enclave of Knightsbridge, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 3,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Garden, EV Charging, Children Play Area, Visitor Parking, and Lake View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "EV Charging",
      "Children Play Area",
      "Visitor Parking",
      "Lake View",
      "High Speed Internet",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-080",
    "title": "6-Bed Luxury Row House in Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£9.15M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 1550,
    "description": "Nestled in the prime luxury tier of Bath, Somerset, this exquisite row house represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 1,550 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Private Garden, High Speed Internet, Sea View, Solar Panels, and Children Play Area. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "High Speed Internet",
      "Sea View",
      "Solar Panels",
      "Children Play Area",
      "Lake View"
    ]
  },
  {
    "id": "prop-081",
    "title": "6-Bed Luxury Bungalow in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£10.97M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 2950,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular bungalow is perfectly situated in Notting Hill, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 2,950 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Conference Room, Club House, Private Terrace, River View, and Power Backup. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Club House",
      "Private Terrace",
      "River View",
      "Power Backup",
      "Children Play Area",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-082",
    "title": "4-Bed Luxury Luxury Apartment in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£9.74M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 2650,
    "description": "Commanding an enviable and highly sought-after position in Mayfair, London, this bespoke luxury apartment showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 2,650 square feet, the interior configuration features 4 meticulously designed bedrooms along with 4 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Lake View, Smart Home, Private Garden, Gym, and Club House. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "Smart Home",
      "Private Garden",
      "Gym",
      "Club House",
      "Lift"
    ]
  },
  {
    "id": "prop-083",
    "title": "3-Bed Luxury Row House in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£8.65M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 4650,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular row house is perfectly situated in St John's Wood, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 4,650 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Club House, Swimming Pool, Private Garden, Gym, and Visitor Parking. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Swimming Pool",
      "Private Garden",
      "Gym",
      "Visitor Parking",
      "EV Charging",
      "Conference Room"
    ]
  },
  {
    "id": "prop-084",
    "title": "4-Bed Luxury Row House in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£8.06M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 3750,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular row house is perfectly situated in Knightsbridge, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 3,750 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Gym, Private Terrace, Solar Panels, Club House, and Power Backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Private Terrace",
      "Solar Panels",
      "Club House",
      "Power Backup",
      "Lake View",
      "Children Play Area",
      "Lift",
      "Conference Room",
      "High Speed Internet"
    ]
  },
  {
    "id": "prop-085",
    "title": "6-Bed Luxury Bungalow in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£13.87M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 3050,
    "description": "Nestled in the prime luxury tier of Ascot, Berkshire, this exquisite bungalow represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 3,050 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Fire Safety, 24x7 Security, Private Terrace, and Solar Panels. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Fire Safety",
      "24x7 Security",
      "Private Terrace",
      "Solar Panels",
      "Power Backup",
      "Club House",
      "Lake View"
    ]
  },
  {
    "id": "prop-086",
    "title": "4-Bed Luxury Independent House in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£3.09M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 4000,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular independent house is perfectly situated in Mayfair, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 4,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Smart Home, Children Play Area, High Speed Internet, Gym, and Club House. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Children Play Area",
      "High Speed Internet",
      "Gym",
      "Club House"
    ]
  },
  {
    "id": "prop-087",
    "title": "5-Bed Luxury Independent House in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£1.85M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 3200,
    "description": "Nestled in the prime luxury tier of Knightsbridge, London, this exquisite independent house represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 3,200 square feet, the interior configuration features 5 meticulously designed bedrooms along with 5 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including High Speed Internet, Sea View, Gym, Swimming Pool, and Visitor Parking. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "Sea View",
      "Gym",
      "Swimming Pool",
      "Visitor Parking",
      "24x7 Security",
      "Power Backup",
      "River View",
      "Fire Safety",
      "Private Terrace",
      "Private Garden"
    ]
  },
  {
    "id": "prop-088",
    "title": "2-Bed Luxury Penthouse in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£4.40M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 1450,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular penthouse is perfectly situated in Chelsea, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 1,450 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Club House, Lake View, River View, and Conference Room. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Club House",
      "Lake View",
      "River View",
      "Conference Room",
      "Private Terrace",
      "Gym",
      "Children Play Area",
      "Lift"
    ]
  },
  {
    "id": "prop-089",
    "title": "6-Bed Luxury Row House in Marylebone, London",
    "location": "Marylebone, London",
    "price": "£7.46M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 3450,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular row house is perfectly situated in Marylebone, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 3,450 square feet, the interior configuration features 6 meticulously designed bedrooms along with 5 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Power Backup, Swimming Pool, Private Garden, Sea View, and Smart Home. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Swimming Pool",
      "Private Garden",
      "Sea View",
      "Smart Home",
      "Children Play Area",
      "Conference Room",
      "Club House",
      "EV Charging",
      "Private Terrace",
      "Lift"
    ]
  },
  {
    "id": "prop-090",
    "title": "2-Bed Luxury Apartment in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£12.60M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 1650,
    "description": "Nestled in the prime luxury tier of Cotswolds, Gloucestershire, this exquisite apartment represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 1,650 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, Gym, Lift, Fire Safety, and Private Garden. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Gym",
      "Lift",
      "Fire Safety",
      "Private Garden",
      "Club House",
      "Lake View",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-091",
    "title": "5-Bed Luxury Bungalow in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£12.57M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 2000,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular bungalow is perfectly situated in Edinburgh, Midlothian. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 2,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Private Garden, Smart Home, Private Terrace, and River View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Private Garden",
      "Smart Home",
      "Private Terrace",
      "River View",
      "Children Play Area",
      "24x7 Security",
      "Club House",
      "Power Backup",
      "Solar Panels",
      "Sea View",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-092",
    "title": "4-Bed Luxury Villa in Richmond, London",
    "location": "Richmond, London",
    "price": "£1.17M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 4650,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent villa in Richmond, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 4,650 square feet, the interior configuration features 4 meticulously designed bedrooms along with 4 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Lake View, Gym, EV Charging, Children Play Area, and Conference Room. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "Gym",
      "EV Charging",
      "Children Play Area",
      "Conference Room",
      "24x7 Security",
      "Private Garden",
      "Club House",
      "Swimming Pool",
      "Smart Home"
    ]
  },
  {
    "id": "prop-093",
    "title": "6-Bed Luxury Bungalow in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£4.79M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 4500,
    "description": "Commanding an enviable and highly sought-after position in Hampstead, London, this bespoke bungalow showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 4,500 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Private Terrace, High Speed Internet, Swimming Pool, Solar Panels, and Lake View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "High Speed Internet",
      "Swimming Pool",
      "Solar Panels",
      "Lake View",
      "EV Charging",
      "Sea View",
      "Power Backup",
      "Conference Room",
      "Lift",
      "Club House",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-094",
    "title": "5-Bed Luxury Duplex House in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£11.26M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 3050,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular duplex house is perfectly situated in Belgravia, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 3,050 square feet, the interior configuration features 5 meticulously designed bedrooms along with 4 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Garden, High Speed Internet, Visitor Parking, Conference Room, and Smart Home. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "High Speed Internet",
      "Visitor Parking",
      "Conference Room",
      "Smart Home",
      "Solar Panels",
      "Private Terrace",
      "Lift",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-095",
    "title": "6-Bed Luxury Independent House in Holland Park, London",
    "location": "Holland Park, London",
    "price": "£7.51M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 4600,
    "description": "Nestled in the prime luxury tier of Holland Park, London, this exquisite independent house represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 4,600 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, Gym, River View, and Private Terrace. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "River View",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-096",
    "title": "4-Bed Luxury Duplex House in Marylebone, London",
    "location": "Marylebone, London",
    "price": "£2.27M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 4400,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious duplex house situated in the highly coveted residential enclave of Marylebone, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 4,400 square feet, the interior configuration features 4 meticulously designed bedrooms along with 3 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Solar Panels, Sea View, Private Terrace, Gym, and Visitor Parking. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Sea View",
      "Private Terrace",
      "Gym",
      "Visitor Parking",
      "Conference Room",
      "Club House",
      "Swimming Pool"
    ]
  },
  {
    "id": "prop-097",
    "title": "6-Bed Luxury Villa in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£2.79M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 4600,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious villa situated in the highly coveted residential enclave of Cotswolds, Gloucestershire. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 4,600 square feet, the interior configuration features 6 meticulously designed bedrooms along with 5 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Solar Panels, 24x7 Security, EV Charging, Club House, and Conference Room. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "24x7 Security",
      "EV Charging",
      "Club House",
      "Conference Room",
      "Fire Safety",
      "Swimming Pool",
      "Sea View",
      "Private Garden"
    ]
  },
  {
    "id": "prop-098",
    "title": "6-Bed Luxury Bungalow in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£1.27M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 3500,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular bungalow is perfectly situated in Hampstead, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 3,500 square feet, the interior configuration features 6 meticulously designed bedrooms along with 5 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Swimming Pool, 24x7 Security, EV Charging, Lift, and Club House. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "24x7 Security",
      "EV Charging",
      "Lift",
      "Club House",
      "Solar Panels",
      "Gym",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-099",
    "title": "3-Bed Luxury Row House in Marylebone, London",
    "location": "Marylebone, London",
    "price": "£14.25M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 3850,
    "description": "Nestled in the prime luxury tier of Marylebone, London, this exquisite row house represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 3,850 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Garden, Power Backup, Private Terrace, Visitor Parking, and Club House. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Power Backup",
      "Private Terrace",
      "Visitor Parking",
      "Club House",
      "Solar Panels",
      "24x7 Security",
      "Conference Room"
    ]
  },
  {
    "id": "prop-100",
    "title": "6-Bed Luxury Bungalow in Kensington, London",
    "location": "Kensington, London",
    "price": "£2.51M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 2200,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious bungalow situated in the highly coveted residential enclave of Kensington, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 2,200 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Terrace, Sea View, Power Backup, High Speed Internet, and Club House. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Sea View",
      "Power Backup",
      "High Speed Internet",
      "Club House",
      "Lift",
      "Conference Room"
    ]
  },
  {
    "id": "prop-101",
    "title": "4-Bed Luxury Luxury Apartment in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£8.39M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 3150,
    "description": "Nestled in the prime luxury tier of Wimbledon, London, this exquisite luxury apartment represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 3,150 square feet, the interior configuration features 4 meticulously designed bedrooms along with 3 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, EV Charging, Children Play Area, Fire Safety, and Visitor Parking. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "EV Charging",
      "Children Play Area",
      "Fire Safety",
      "Visitor Parking",
      "Lake View",
      "Private Garden",
      "Private Terrace",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-102",
    "title": "5-Bed Luxury Apartment in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£13.88M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 4250,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent apartment in Mayfair, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 4,250 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including EV Charging, Conference Room, Private Terrace, Sea View, and Lake View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Conference Room",
      "Private Terrace",
      "Sea View",
      "Lake View",
      "River View",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-103",
    "title": "2-Bed Luxury Villa in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£907K",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 4750,
    "description": "Nestled in the prime luxury tier of Hampstead, London, this exquisite villa represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 4,750 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including EV Charging, Smart Home, High Speed Internet, Private Terrace, and Children Play Area. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Smart Home",
      "High Speed Internet",
      "Private Terrace",
      "Children Play Area",
      "Conference Room",
      "Swimming Pool"
    ]
  },
  {
    "id": "prop-104",
    "title": "6-Bed Luxury Apartment in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£6.63M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 4400,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular apartment is perfectly situated in Ascot, Berkshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 4,400 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Terrace, High Speed Internet, Power Backup, EV Charging, and Smart Home. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "High Speed Internet",
      "Power Backup",
      "EV Charging",
      "Smart Home",
      "Sea View",
      "Private Garden"
    ]
  },
  {
    "id": "prop-105",
    "title": "3-Bed Luxury Penthouse in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£12.75M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 4750,
    "description": "Commanding an enviable and highly sought-after position in St John's Wood, London, this bespoke penthouse showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 4,750 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Power Backup, Solar Panels, Children Play Area, Fire Safety, and EV Charging. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Solar Panels",
      "Children Play Area",
      "Fire Safety",
      "EV Charging",
      "High Speed Internet",
      "Gym"
    ]
  },
  {
    "id": "prop-106",
    "title": "2-Bed Luxury Duplex House in Richmond, London",
    "location": "Richmond, London",
    "price": "£1.98M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 1850,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent duplex house in Richmond, London offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 1,850 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Terrace, Power Backup, 24x7 Security, Gym, and Fire Safety. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Power Backup",
      "24x7 Security",
      "Gym",
      "Fire Safety",
      "Lake View",
      "Club House",
      "River View",
      "Lift",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-107",
    "title": "3-Bed Luxury Row House in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£14.56M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 3900,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent row house in Edinburgh, Midlothian offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 3,900 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Gym, Private Terrace, River View, 24x7 Security, and Club House. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Private Terrace",
      "River View",
      "24x7 Security",
      "Club House"
    ]
  },
  {
    "id": "prop-108",
    "title": "3-Bed Luxury Independent House in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£1.49M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 2650,
    "description": "Nestled in the prime luxury tier of Wimbledon, London, this exquisite independent house represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 2,650 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Children Play Area, EV Charging, 24x7 Security, Sea View, and Conference Room. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "EV Charging",
      "24x7 Security",
      "Sea View",
      "Conference Room"
    ]
  },
  {
    "id": "prop-109",
    "title": "2-Bed Luxury Apartment in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£9.26M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 1450,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent apartment in Ascot, Berkshire offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 1,450 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including EV Charging, Fire Safety, 24x7 Security, River View, and Sea View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Fire Safety",
      "24x7 Security",
      "River View",
      "Sea View",
      "Gym",
      "Children Play Area",
      "Smart Home",
      "Private Garden",
      "High Speed Internet",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-110",
    "title": "2-Bed Luxury Apartment in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£6.66M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 3100,
    "description": "Commanding an enviable and highly sought-after position in St John's Wood, London, this bespoke apartment showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 3,100 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Garden, Power Backup, Sea View, Children Play Area, and Swimming Pool. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Power Backup",
      "Sea View",
      "Children Play Area",
      "Swimming Pool",
      "Lake View"
    ]
  },
  {
    "id": "prop-111",
    "title": "3-Bed Luxury Row House in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£680K",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 2400,
    "description": "Nestled in the prime luxury tier of Edinburgh, Midlothian, this exquisite row house represents the absolute pinnacle of contemporary British architectural refinement. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 2,400 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Power Backup, Gym, Smart Home, High Speed Internet, and Lake View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Gym",
      "Smart Home",
      "High Speed Internet",
      "Lake View",
      "Private Garden",
      "EV Charging",
      "Solar Panels",
      "Club House"
    ]
  },
  {
    "id": "prop-112",
    "title": "2-Bed Luxury Apartment in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£10.72M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 4450,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent apartment in Oxford, Oxfordshire offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 4,450 square feet, the interior configuration features 2 meticulously designed bedrooms along with 2 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Conference Room, Private Garden, Power Backup, Lake View, and Swimming Pool. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Private Garden",
      "Power Backup",
      "Lake View",
      "Swimming Pool",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-113",
    "title": "6-Bed Luxury Apartment in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£7.12M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 2600,
    "description": "Nestled in the prime luxury tier of Wimbledon, London, this exquisite apartment represents the absolute pinnacle of contemporary British architectural refinement. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 2,600 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Lake View, Swimming Pool, Power Backup, Fire Safety, and River View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "Swimming Pool",
      "Power Backup",
      "Fire Safety",
      "River View",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-114",
    "title": "3-Bed Luxury Duplex House in Richmond, London",
    "location": "Richmond, London",
    "price": "£2.51M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 3050,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular duplex house is perfectly situated in Richmond, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 3,050 square feet, the interior configuration features 3 meticulously designed bedrooms along with 3 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Children Play Area, EV Charging, Private Terrace, Swimming Pool, and Club House. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "EV Charging",
      "Private Terrace",
      "Swimming Pool",
      "Club House"
    ]
  },
  {
    "id": "prop-115",
    "title": "4-Bed Luxury Independent House in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£11.39M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 2000,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular independent house is perfectly situated in Chelsea, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 2,000 square feet, the interior configuration features 4 meticulously designed bedrooms along with 4 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Lake View, High Speed Internet, Sea View, 24x7 Security, and Power Backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "High Speed Internet",
      "Sea View",
      "24x7 Security",
      "Power Backup"
    ]
  },
  {
    "id": "prop-116",
    "title": "6-Bed Luxury Bungalow in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£9.85M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 3100,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular bungalow is perfectly situated in Edinburgh, Midlothian. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 3,100 square feet, the interior configuration features 6 meticulously designed bedrooms along with 5 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Sea View, Private Terrace, Power Backup, and High Speed Internet. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Sea View",
      "Private Terrace",
      "Power Backup",
      "High Speed Internet",
      "Swimming Pool",
      "Private Garden"
    ]
  },
  {
    "id": "prop-117",
    "title": "4-Bed Luxury Row House in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£3.94M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 4050,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious row house situated in the highly coveted residential enclave of Knightsbridge, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 4,050 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including High Speed Internet, River View, Swimming Pool, Solar Panels, and Private Garden. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "River View",
      "Swimming Pool",
      "Solar Panels",
      "Private Garden",
      "Children Play Area",
      "EV Charging",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-118",
    "title": "4-Bed Luxury Row House in Richmond, London",
    "location": "Richmond, London",
    "price": "£6.14M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 1600,
    "description": "Commanding an enviable and highly sought-after position in Richmond, London, this bespoke row house showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 1,600 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, High Speed Internet, Smart Home, Swimming Pool, and Club House. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "High Speed Internet",
      "Smart Home",
      "Swimming Pool",
      "Club House",
      "Children Play Area",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-119",
    "title": "5-Bed Luxury Bungalow in Marylebone, London",
    "location": "Marylebone, London",
    "price": "£13.81M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 4750,
    "description": "Nestled in the prime luxury tier of Marylebone, London, this exquisite bungalow represents the absolute pinnacle of contemporary British architectural refinement. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 4,750 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Sea View, Smart Home, Private Garden, Children Play Area, and Lift. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Sea View",
      "Smart Home",
      "Private Garden",
      "Children Play Area",
      "Lift",
      "24x7 Security",
      "Solar Panels",
      "River View",
      "Gym",
      "Visitor Parking",
      "Power Backup",
      "Club House"
    ]
  },
  {
    "id": "prop-120",
    "title": "6-Bed Luxury Luxury Apartment in Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£2.29M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 4500,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular luxury apartment is perfectly situated in Bath, Somerset. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 4,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including River View, Smart Home, Private Garden, Lake View, and Private Terrace. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Smart Home",
      "Private Garden",
      "Lake View",
      "Private Terrace",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-121",
    "title": "2-Bed Luxury Bungalow in Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£5.56M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 2850,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular bungalow is perfectly situated in Bath, Somerset. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 2,850 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Power Backup, Smart Home, Visitor Parking, High Speed Internet, and Solar Panels. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Smart Home",
      "Visitor Parking",
      "High Speed Internet",
      "Solar Panels",
      "Private Garden",
      "Private Terrace",
      "Children Play Area",
      "River View",
      "Gym",
      "Conference Room",
      "Club House"
    ]
  },
  {
    "id": "prop-122",
    "title": "3-Bed Luxury Penthouse in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£12.87M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 4750,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular penthouse is perfectly situated in Hampstead, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 4,750 square feet, the interior configuration features 3 meticulously designed bedrooms along with 3 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Smart Home, Children Play Area, Lift, Private Terrace, and Private Garden. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Children Play Area",
      "Lift",
      "Private Terrace",
      "Private Garden",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-123",
    "title": "4-Bed Luxury Villa in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£14.76M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 2450,
    "description": "Commanding an enviable and highly sought-after position in Oxford, Oxfordshire, this bespoke villa showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 2,450 square feet, the interior configuration features 4 meticulously designed bedrooms along with 3 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Children Play Area, Lake View, Swimming Pool, Private Garden, and 24x7 Security. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Lake View",
      "Swimming Pool",
      "Private Garden",
      "24x7 Security",
      "Private Terrace",
      "Sea View",
      "Power Backup",
      "Conference Room",
      "Solar Panels",
      "EV Charging"
    ]
  },
  {
    "id": "prop-124",
    "title": "4-Bed Luxury Row House in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£6.43M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 3650,
    "description": "Commanding an enviable and highly sought-after position in Cotswolds, Gloucestershire, this bespoke row house showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 3,650 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Power Backup, Lake View, River View, Children Play Area, and Fire Safety. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Lake View",
      "River View",
      "Children Play Area",
      "Fire Safety",
      "Lift",
      "Solar Panels",
      "24x7 Security",
      "Conference Room",
      "Visitor Parking",
      "Gym",
      "Swimming Pool"
    ]
  },
  {
    "id": "prop-125",
    "title": "6-Bed Luxury Penthouse in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£1.07M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 3250,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular penthouse is perfectly situated in Edinburgh, Midlothian. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 3,250 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Lift, Lake View, Visitor Parking, Children Play Area, and Gym. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lift",
      "Lake View",
      "Visitor Parking",
      "Children Play Area",
      "Gym",
      "Club House",
      "24x7 Security",
      "Swimming Pool",
      "Solar Panels",
      "Private Garden"
    ]
  },
  {
    "id": "prop-126",
    "title": "5-Bed Luxury Row House in Richmond, London",
    "location": "Richmond, London",
    "price": "£3.71M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 4250,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious row house situated in the highly coveted residential enclave of Richmond, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 4,250 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including River View, Children Play Area, 24x7 Security, Visitor Parking, and Swimming Pool. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Children Play Area",
      "24x7 Security",
      "Visitor Parking",
      "Swimming Pool",
      "Lift",
      "Sea View",
      "Fire Safety",
      "Private Garden",
      "Power Backup"
    ]
  },
  {
    "id": "prop-127",
    "title": "3-Bed Luxury Bungalow in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£9.90M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 2550,
    "description": "Commanding an enviable and highly sought-after position in Cotswolds, Gloucestershire, this bespoke bungalow showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 2,550 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including 24x7 Security, River View, EV Charging, Swimming Pool, and High Speed Internet. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "River View",
      "EV Charging",
      "Swimming Pool",
      "High Speed Internet",
      "Visitor Parking",
      "Lift",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-128",
    "title": "4-Bed Luxury Bungalow in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£14.51M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 2250,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent bungalow in Wimbledon, London offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 2,250 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Club House, Swimming Pool, Sea View, Visitor Parking, and Conference Room. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Swimming Pool",
      "Sea View",
      "Visitor Parking",
      "Conference Room"
    ]
  },
  {
    "id": "prop-129",
    "title": "6-Bed Luxury Row House in Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£14.15M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 4150,
    "description": "Commanding an enviable and highly sought-after position in Bath, Somerset, this bespoke row house showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 4,150 square feet, the interior configuration features 6 meticulously designed bedrooms along with 6 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Power Backup, Private Terrace, Gym, Visitor Parking, and Sea View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Private Terrace",
      "Gym",
      "Visitor Parking",
      "Sea View"
    ]
  },
  {
    "id": "prop-130",
    "title": "3-Bed Luxury Villa in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£4.43M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 3300,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious villa situated in the highly coveted residential enclave of Chelsea, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 3,300 square feet, the interior configuration features 3 meticulously designed bedrooms along with 2 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including EV Charging, Power Backup, High Speed Internet, Fire Safety, and Sea View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Power Backup",
      "High Speed Internet",
      "Fire Safety",
      "Sea View",
      "Children Play Area",
      "Swimming Pool",
      "Private Terrace",
      "Smart Home",
      "Lake View",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-131",
    "title": "4-Bed Luxury Villa in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£12.66M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 4300,
    "description": "Nestled in the prime luxury tier of Mayfair, London, this exquisite villa represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 4,300 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Children Play Area, Solar Panels, Sea View, Private Garden, and Power Backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Solar Panels",
      "Sea View",
      "Private Garden",
      "Power Backup",
      "Conference Room",
      "River View"
    ]
  },
  {
    "id": "prop-132",
    "title": "6-Bed Luxury Independent House in Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£8.71M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 1450,
    "description": "Commanding an enviable and highly sought-after position in Bath, Somerset, this bespoke independent house showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 1,450 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Visitor Parking, Children Play Area, Gym, Smart Home, and Solar Panels. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Visitor Parking",
      "Children Play Area",
      "Gym",
      "Smart Home",
      "Solar Panels",
      "Private Garden",
      "Private Terrace",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-133",
    "title": "2-Bed Luxury Row House in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£8.00M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 1850,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious row house situated in the highly coveted residential enclave of Ascot, Berkshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 1,850 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Club House, Lake View, Swimming Pool, Sea View, and Private Terrace. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Lake View",
      "Swimming Pool",
      "Sea View",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-134",
    "title": "5-Bed Luxury Penthouse in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£5.39M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 4700,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent penthouse in Oxford, Oxfordshire offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 4,700 square feet, the interior configuration features 5 meticulously designed bedrooms along with 5 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Garden, Solar Panels, Sea View, River View, and 24x7 Security. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Solar Panels",
      "Sea View",
      "River View",
      "24x7 Security",
      "Lake View",
      "Power Backup",
      "Conference Room",
      "Fire Safety",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-135",
    "title": "6-Bed Luxury Villa in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£7.10M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 1250,
    "description": "Commanding an enviable and highly sought-after position in Mayfair, London, this bespoke villa showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 1,250 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including River View, EV Charging, Smart Home, Club House, and 24x7 Security. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "EV Charging",
      "Smart Home",
      "Club House",
      "24x7 Security",
      "High Speed Internet",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-136",
    "title": "5-Bed Luxury Bungalow in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£672K",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 3900,
    "description": "Commanding an enviable and highly sought-after position in Ascot, Berkshire, this bespoke bungalow showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 3,900 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Power Backup, Fire Safety, High Speed Internet, and Private Garden. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Power Backup",
      "Fire Safety",
      "High Speed Internet",
      "Private Garden"
    ]
  },
  {
    "id": "prop-137",
    "title": "6-Bed Luxury Duplex House in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£5.15M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 4200,
    "description": "Commanding an enviable and highly sought-after position in St John's Wood, London, this bespoke duplex house showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 4,200 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, Club House, Children Play Area, River View, and Fire Safety. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Club House",
      "Children Play Area",
      "River View",
      "Fire Safety",
      "Swimming Pool",
      "Conference Room"
    ]
  },
  {
    "id": "prop-138",
    "title": "3-Bed Luxury Luxury Apartment in Marylebone, London",
    "location": "Marylebone, London",
    "price": "£12.39M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 2850,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent luxury apartment in Marylebone, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 2,850 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Lift, Children Play Area, Gym, and Club House. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Lift",
      "Children Play Area",
      "Gym",
      "Club House",
      "Conference Room"
    ]
  },
  {
    "id": "prop-139",
    "title": "6-Bed Luxury Apartment in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£3.09M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 1850,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular apartment is perfectly situated in Knightsbridge, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 1,850 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Smart Home, Lake View, Solar Panels, and High Speed Internet. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Smart Home",
      "Lake View",
      "Solar Panels",
      "High Speed Internet",
      "River View",
      "Swimming Pool",
      "Fire Safety",
      "Sea View",
      "Lift",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-140",
    "title": "6-Bed Luxury Apartment in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£9.46M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 3750,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular apartment is perfectly situated in Belgravia, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 3,750 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Smart Home, Private Terrace, 24x7 Security, EV Charging, and Club House. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Private Terrace",
      "24x7 Security",
      "EV Charging",
      "Club House",
      "Children Play Area",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-141",
    "title": "6-Bed Luxury Penthouse in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£14.54M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 2150,
    "description": "Commanding an enviable and highly sought-after position in Notting Hill, London, this bespoke penthouse showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 2,150 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Garden, Swimming Pool, EV Charging, Visitor Parking, and Power Backup. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Swimming Pool",
      "EV Charging",
      "Visitor Parking",
      "Power Backup",
      "River View",
      "Fire Safety",
      "Lake View",
      "Club House",
      "Solar Panels",
      "Conference Room"
    ]
  },
  {
    "id": "prop-142",
    "title": "4-Bed Luxury Bungalow in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£12.20M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 2550,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular bungalow is perfectly situated in Oxford, Oxfordshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 2,550 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Gym, Power Backup, Lake View, Fire Safety, and Club House. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Power Backup",
      "Lake View",
      "Fire Safety",
      "Club House",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-143",
    "title": "2-Bed Luxury Duplex House in Marylebone, London",
    "location": "Marylebone, London",
    "price": "£8.01M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 3800,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent duplex house in Marylebone, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 3,800 square feet, the interior configuration features 2 meticulously designed bedrooms along with 2 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Club House, Swimming Pool, High Speed Internet, and EV Charging. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Club House",
      "Swimming Pool",
      "High Speed Internet",
      "EV Charging",
      "Children Play Area",
      "Gym",
      "Sea View",
      "Lift"
    ]
  },
  {
    "id": "prop-144",
    "title": "3-Bed Luxury Luxury Apartment in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£1.60M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 1550,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious luxury apartment situated in the highly coveted residential enclave of Edinburgh, Midlothian. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 1,550 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Power Backup, Fire Safety, 24x7 Security, and Gym. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Power Backup",
      "Fire Safety",
      "24x7 Security",
      "Gym",
      "Smart Home",
      "Lift",
      "Solar Panels",
      "EV Charging"
    ]
  },
  {
    "id": "prop-145",
    "title": "6-Bed Luxury Apartment in Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£5.94M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 3700,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent apartment in Weybridge, Surrey offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 3,700 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Gym, Conference Room, Fire Safety, 24x7 Security, and Sea View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Conference Room",
      "Fire Safety",
      "24x7 Security",
      "Sea View"
    ]
  },
  {
    "id": "prop-146",
    "title": "5-Bed Luxury Row House in Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£5.29M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 3100,
    "description": "Nestled in the prime luxury tier of Weybridge, Surrey, this exquisite row house represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 3,100 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Lake View, Sea View, Private Garden, and Private Terrace. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Lake View",
      "Sea View",
      "Private Garden",
      "Private Terrace",
      "Lift"
    ]
  },
  {
    "id": "prop-147",
    "title": "4-Bed Luxury Apartment in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£7.49M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 2350,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious apartment situated in the highly coveted residential enclave of Mayfair, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 2,350 square feet, the interior configuration features 4 meticulously designed bedrooms along with 3 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Lift, River View, Private Garden, Swimming Pool, and EV Charging. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lift",
      "River View",
      "Private Garden",
      "Swimming Pool",
      "EV Charging",
      "Children Play Area",
      "Sea View",
      "Club House"
    ]
  },
  {
    "id": "prop-148",
    "title": "5-Bed Luxury Duplex House in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£13.52M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 4400,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent duplex house in Knightsbridge, London offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 4,400 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Conference Room, High Speed Internet, Sea View, 24x7 Security, and Swimming Pool. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "High Speed Internet",
      "Sea View",
      "24x7 Security",
      "Swimming Pool",
      "Fire Safety",
      "Lake View",
      "Power Backup"
    ]
  },
  {
    "id": "prop-149",
    "title": "2-Bed Luxury Villa in Kensington, London",
    "location": "Kensington, London",
    "price": "£7.07M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 2450,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent villa in Kensington, London offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 2,450 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, Children Play Area, Sea View, Power Backup, and Swimming Pool. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Children Play Area",
      "Sea View",
      "Power Backup",
      "Swimming Pool",
      "River View",
      "Club House",
      "Visitor Parking",
      "Conference Room",
      "Lake View"
    ]
  },
  {
    "id": "prop-150",
    "title": "2-Bed Luxury Villa in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£12.47M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 1550,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent villa in Oxford, Oxfordshire offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 1,550 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, Swimming Pool, Private Garden, Sea View, and River View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Swimming Pool",
      "Private Garden",
      "Sea View",
      "River View",
      "Lift",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-151",
    "title": "2-Bed Luxury Penthouse in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£6.09M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 3850,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent penthouse in Wimbledon, London offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 3,850 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Sea View, Gym, Children Play Area, 24x7 Security, and Smart Home. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Sea View",
      "Gym",
      "Children Play Area",
      "24x7 Security",
      "Smart Home"
    ]
  },
  {
    "id": "prop-152",
    "title": "5-Bed Luxury Independent House in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£9.73M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 1450,
    "description": "Commanding an enviable and highly sought-after position in Edinburgh, Midlothian, this bespoke independent house showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 1,450 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Conference Room, Power Backup, Swimming Pool, Lake View, and Children Play Area. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Power Backup",
      "Swimming Pool",
      "Lake View",
      "Children Play Area",
      "Visitor Parking",
      "24x7 Security",
      "Fire Safety",
      "Club House",
      "Gym",
      "Private Garden",
      "Smart Home"
    ]
  },
  {
    "id": "prop-153",
    "title": "3-Bed Luxury Bungalow in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£4.09M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 2700,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent bungalow in Oxford, Oxfordshire offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 2,700 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, Lift, 24x7 Security, and Private Terrace. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "Lift",
      "24x7 Security",
      "Private Terrace",
      "Conference Room"
    ]
  },
  {
    "id": "prop-154",
    "title": "4-Bed Luxury Villa in Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£11.92M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 4700,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious villa situated in the highly coveted residential enclave of Weybridge, Surrey. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 4,700 square feet, the interior configuration features 4 meticulously designed bedrooms along with 3 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Solar Panels, 24x7 Security, Swimming Pool, Lake View, and River View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "24x7 Security",
      "Swimming Pool",
      "Lake View",
      "River View"
    ]
  },
  {
    "id": "prop-155",
    "title": "4-Bed Luxury Apartment in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£14.28M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 4900,
    "description": "Commanding an enviable and highly sought-after position in Oxford, Oxfordshire, this bespoke apartment showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 4,900 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Children Play Area, Club House, Smart Home, Private Terrace, and 24x7 Security. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Club House",
      "Smart Home",
      "Private Terrace",
      "24x7 Security",
      "Power Backup",
      "Private Garden",
      "Visitor Parking",
      "River View"
    ]
  },
  {
    "id": "prop-156",
    "title": "2-Bed Luxury Penthouse in Marylebone, London",
    "location": "Marylebone, London",
    "price": "£14.26M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 4700,
    "description": "Nestled in the prime luxury tier of Marylebone, London, this exquisite penthouse represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 4,700 square feet, the interior configuration features 2 meticulously designed bedrooms along with 2 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including High Speed Internet, Gym, Private Terrace, Lake View, and Children Play Area. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "Gym",
      "Private Terrace",
      "Lake View",
      "Children Play Area",
      "River View",
      "Conference Room",
      "Private Garden",
      "Lift",
      "Smart Home",
      "Power Backup",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-157",
    "title": "5-Bed Luxury Row House in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£13.61M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 1300,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent row house in Belgravia, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 1,300 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Gym, Private Terrace, Club House, and Power Backup. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Gym",
      "Private Terrace",
      "Club House",
      "Power Backup",
      "Lift",
      "EV Charging"
    ]
  },
  {
    "id": "prop-158",
    "title": "5-Bed Luxury Villa in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£4.94M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 4300,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent villa in Chelsea, London offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 4,300 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Gym, Children Play Area, Lift, and River View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Gym",
      "Children Play Area",
      "Lift",
      "River View"
    ]
  },
  {
    "id": "prop-159",
    "title": "3-Bed Luxury Villa in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£11.79M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 1850,
    "description": "Commanding an enviable and highly sought-after position in Chelsea, London, this bespoke villa showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 1,850 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Garden, Solar Panels, Private Terrace, Lake View, and Children Play Area. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Solar Panels",
      "Private Terrace",
      "Lake View",
      "Children Play Area",
      "Smart Home",
      "EV Charging"
    ]
  },
  {
    "id": "prop-160",
    "title": "3-Bed Luxury Villa in Richmond, London",
    "location": "Richmond, London",
    "price": "£5.29M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 3450,
    "description": "Nestled in the prime luxury tier of Richmond, London, this exquisite villa represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 3,450 square feet, the interior configuration features 3 meticulously designed bedrooms along with 3 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Visitor Parking, Children Play Area, Solar Panels, and Private Garden. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Visitor Parking",
      "Children Play Area",
      "Solar Panels",
      "Private Garden",
      "Lift"
    ]
  },
  {
    "id": "prop-161",
    "title": "2-Bed Luxury Penthouse in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£9.82M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 2100,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent penthouse in Knightsbridge, London offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 2,100 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Club House, River View, Sea View, High Speed Internet, and Children Play Area. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "River View",
      "Sea View",
      "High Speed Internet",
      "Children Play Area",
      "Fire Safety",
      "Power Backup",
      "24x7 Security",
      "Private Garden",
      "Swimming Pool"
    ]
  },
  {
    "id": "prop-162",
    "title": "5-Bed Luxury Duplex House in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£3.83M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 3650,
    "description": "Commanding an enviable and highly sought-after position in Knightsbridge, London, this bespoke duplex house showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 3,650 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Club House, Conference Room, EV Charging, Visitor Parking, and Lake View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Conference Room",
      "EV Charging",
      "Visitor Parking",
      "Lake View",
      "24x7 Security",
      "Power Backup",
      "Private Terrace",
      "Gym",
      "Lift"
    ]
  },
  {
    "id": "prop-163",
    "title": "4-Bed Luxury Luxury Apartment in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£14.62M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 3850,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular luxury apartment is perfectly situated in Wimbledon, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 3,850 square feet, the interior configuration features 4 meticulously designed bedrooms along with 3 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Club House, Swimming Pool, Lake View, River View, and 24x7 Security. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Swimming Pool",
      "Lake View",
      "River View",
      "24x7 Security",
      "Visitor Parking",
      "Private Garden",
      "Solar Panels",
      "Sea View",
      "Lift",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-164",
    "title": "6-Bed Luxury Duplex House in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£3.62M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 4950,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular duplex house is perfectly situated in Cotswolds, Gloucestershire. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 4,950 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, 24x7 Security, Power Backup, and Visitor Parking. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "24x7 Security",
      "Power Backup",
      "Visitor Parking",
      "Smart Home",
      "Children Play Area",
      "Private Terrace",
      "Private Garden",
      "Sea View",
      "Lake View",
      "Lift"
    ]
  },
  {
    "id": "prop-165",
    "title": "4-Bed Luxury Apartment in Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£3.93M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 3500,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular apartment is perfectly situated in Weybridge, Surrey. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 3,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Children Play Area, Sea View, Club House, Private Garden, and Visitor Parking. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Sea View",
      "Club House",
      "Private Garden",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-166",
    "title": "6-Bed Luxury Luxury Apartment in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£11.32M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 4850,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular luxury apartment is perfectly situated in Edinburgh, Midlothian. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 4,850 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Smart Home, Power Backup, Private Terrace, Lake View, and Private Garden. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Power Backup",
      "Private Terrace",
      "Lake View",
      "Private Garden",
      "EV Charging",
      "Gym",
      "Fire Safety",
      "24x7 Security",
      "Solar Panels",
      "Sea View",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-167",
    "title": "3-Bed Luxury Row House in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£4.86M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 3800,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent row house in Oxford, Oxfordshire offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 3,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, 24x7 Security, Lake View, EV Charging, and Children Play Area. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "24x7 Security",
      "Lake View",
      "EV Charging",
      "Children Play Area",
      "Lift",
      "Smart Home",
      "Club House",
      "Sea View"
    ]
  },
  {
    "id": "prop-168",
    "title": "2-Bed Luxury Duplex House in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£7.28M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 4700,
    "description": "Nestled in the prime luxury tier of Mayfair, London, this exquisite duplex house represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 4,700 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Smart Home, Club House, Conference Room, Fire Safety, and Gym. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Club House",
      "Conference Room",
      "Fire Safety",
      "Gym",
      "Lift",
      "Visitor Parking",
      "Children Play Area",
      "River View",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-169",
    "title": "2-Bed Luxury Row House in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£12.69M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 1350,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent row house in Oxford, Oxfordshire offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 1,350 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Gym, Club House, High Speed Internet, and River View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Gym",
      "Club House",
      "High Speed Internet",
      "River View",
      "Private Garden",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-170",
    "title": "6-Bed Luxury Row House in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£6.27M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 2500,
    "description": "Commanding an enviable and highly sought-after position in Cotswolds, Gloucestershire, this bespoke row house showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 2,500 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Conference Room, Sea View, Gym, River View, and Visitor Parking. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Sea View",
      "Gym",
      "River View",
      "Visitor Parking",
      "Private Terrace",
      "Club House",
      "EV Charging",
      "Lake View",
      "High Speed Internet",
      "Lift"
    ]
  },
  {
    "id": "prop-171",
    "title": "6-Bed Luxury Apartment in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£5.12M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 2000,
    "description": "Nestled in the prime luxury tier of Cotswolds, Gloucestershire, this exquisite apartment represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 2,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Gym, Club House, Visitor Parking, Sea View, and Lake View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Club House",
      "Visitor Parking",
      "Sea View",
      "Lake View",
      "EV Charging",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-172",
    "title": "4-Bed Luxury Bungalow in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£8.79M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 2550,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious bungalow situated in the highly coveted residential enclave of Ascot, Berkshire. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 2,550 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Fire Safety, Gym, Sea View, Club House, and Swimming Pool. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Fire Safety",
      "Gym",
      "Sea View",
      "Club House",
      "Swimming Pool"
    ]
  },
  {
    "id": "prop-173",
    "title": "2-Bed Luxury Row House in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£10.99M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 3450,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious row house situated in the highly coveted residential enclave of St John's Wood, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 3,450 square feet, the interior configuration features 2 meticulously designed bedrooms along with 1 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Smart Home, Club House, Conference Room, and Lift. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Smart Home",
      "Club House",
      "Conference Room",
      "Lift",
      "Children Play Area",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-174",
    "title": "4-Bed Luxury Luxury Apartment in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£5.23M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 2050,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent luxury apartment in St John's Wood, London offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 2,050 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Garden, Fire Safety, 24x7 Security, Sea View, and Lift. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Fire Safety",
      "24x7 Security",
      "Sea View",
      "Lift",
      "Private Terrace",
      "Power Backup"
    ]
  },
  {
    "id": "prop-175",
    "title": "3-Bed Luxury Row House in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£13.72M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 4100,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent row house in Cotswolds, Gloucestershire offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 4,100 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Conference Room, Children Play Area, Swimming Pool, Solar Panels, and Power Backup. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Children Play Area",
      "Swimming Pool",
      "Solar Panels",
      "Power Backup",
      "River View",
      "Sea View",
      "Club House",
      "High Speed Internet",
      "Lift",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-176",
    "title": "4-Bed Luxury Row House in Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£9.12M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 4550,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent row house in Bath, Somerset offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 4,550 square feet, the interior configuration features 4 meticulously designed bedrooms along with 3 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including River View, Swimming Pool, Children Play Area, Club House, and Visitor Parking. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Swimming Pool",
      "Children Play Area",
      "Club House",
      "Visitor Parking",
      "High Speed Internet",
      "Fire Safety",
      "Sea View",
      "Conference Room",
      "Gym",
      "24x7 Security",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-177",
    "title": "6-Bed Luxury Villa in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£8.76M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 3550,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent villa in Mayfair, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 3,550 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Gym, Club House, Visitor Parking, and Lift. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Gym",
      "Club House",
      "Visitor Parking",
      "Lift",
      "Conference Room",
      "Power Backup",
      "Fire Safety",
      "Solar Panels",
      "River View",
      "Private Terrace",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-178",
    "title": "4-Bed Luxury Bungalow in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£13.91M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 4300,
    "description": "Nestled in the prime luxury tier of Ascot, Berkshire, this exquisite bungalow represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 4,300 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Lake View, Solar Panels, River View, Power Backup, and Club House. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "Solar Panels",
      "River View",
      "Power Backup",
      "Club House",
      "EV Charging",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-179",
    "title": "6-Bed Luxury Penthouse in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£13.51M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 2750,
    "description": "Commanding an enviable and highly sought-after position in Ascot, Berkshire, this bespoke penthouse showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 2,750 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, Swimming Pool, Power Backup, Conference Room, and Visitor Parking. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Swimming Pool",
      "Power Backup",
      "Conference Room",
      "Visitor Parking",
      "Children Play Area",
      "24x7 Security",
      "Sea View",
      "River View"
    ]
  },
  {
    "id": "prop-180",
    "title": "3-Bed Luxury Row House in Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£1.96M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 1850,
    "description": "Commanding an enviable and highly sought-after position in Weybridge, Surrey, this bespoke row house showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 1,850 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Swimming Pool, High Speed Internet, Private Garden, Club House, and Children Play Area. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "High Speed Internet",
      "Private Garden",
      "Club House",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-181",
    "title": "3-Bed Luxury Luxury Apartment in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£7.45M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 2250,
    "description": "Nestled in the prime luxury tier of Edinburgh, Midlothian, this exquisite luxury apartment represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 2,250 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Private Terrace, Power Backup, Solar Panels, and Smart Home. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Private Terrace",
      "Power Backup",
      "Solar Panels",
      "Smart Home",
      "Visitor Parking",
      "EV Charging",
      "High Speed Internet",
      "Private Garden"
    ]
  },
  {
    "id": "prop-182",
    "title": "6-Bed Luxury Penthouse in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£13.17M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 1950,
    "description": "Commanding an enviable and highly sought-after position in Oxford, Oxfordshire, this bespoke penthouse showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 1,950 square feet, the interior configuration features 6 meticulously designed bedrooms along with 6 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Garden, River View, Power Backup, Private Terrace, and Lift. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "River View",
      "Power Backup",
      "Private Terrace",
      "Lift"
    ]
  },
  {
    "id": "prop-183",
    "title": "3-Bed Luxury Apartment in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£13.17M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 3500,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular apartment is perfectly situated in Knightsbridge, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 3,500 square feet, the interior configuration features 3 meticulously designed bedrooms along with 2 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Lift, Lake View, Children Play Area, Power Backup, and River View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lift",
      "Lake View",
      "Children Play Area",
      "Power Backup",
      "River View",
      "Smart Home",
      "Club House",
      "Private Garden",
      "High Speed Internet",
      "Sea View",
      "Conference Room",
      "EV Charging"
    ]
  },
  {
    "id": "prop-184",
    "title": "2-Bed Luxury Luxury Apartment in Kensington, London",
    "location": "Kensington, London",
    "price": "£12.36M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 1450,
    "description": "Commanding an enviable and highly sought-after position in Kensington, London, this bespoke luxury apartment showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 1,450 square feet, the interior configuration features 2 meticulously designed bedrooms along with 2 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Conference Room, Children Play Area, Swimming Pool, Lift, and Lake View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Children Play Area",
      "Swimming Pool",
      "Lift",
      "Lake View",
      "24x7 Security",
      "River View",
      "Solar Panels",
      "Club House",
      "Private Garden"
    ]
  },
  {
    "id": "prop-185",
    "title": "2-Bed Luxury Villa in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£5.57M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 4350,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular villa is perfectly situated in Edinburgh, Midlothian. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 4,350 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Terrace, High Speed Internet, 24x7 Security, Smart Home, and Conference Room. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "High Speed Internet",
      "24x7 Security",
      "Smart Home",
      "Conference Room",
      "EV Charging",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-186",
    "title": "6-Bed Luxury Row House in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£779K",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 1200,
    "description": "Nestled in the prime luxury tier of Hampstead, London, this exquisite row house represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 1,200 square feet, the interior configuration features 6 meticulously designed bedrooms along with 6 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Lake View, Private Garden, Solar Panels, Children Play Area, and River View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "Private Garden",
      "Solar Panels",
      "Children Play Area",
      "River View",
      "Smart Home",
      "Fire Safety",
      "Visitor Parking",
      "Conference Room",
      "EV Charging",
      "Sea View"
    ]
  },
  {
    "id": "prop-187",
    "title": "3-Bed Luxury Duplex House in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£6.51M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 3050,
    "description": "Commanding an enviable and highly sought-after position in Cotswolds, Gloucestershire, this bespoke duplex house showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 3,050 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Terrace, Gym, EV Charging, Smart Home, and Solar Panels. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Gym",
      "EV Charging",
      "Smart Home",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-188",
    "title": "4-Bed Luxury Row House in Holland Park, London",
    "location": "Holland Park, London",
    "price": "£13.84M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 2100,
    "description": "Commanding an enviable and highly sought-after position in Holland Park, London, this bespoke row house showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 2,100 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Smart Home, Conference Room, River View, 24x7 Security, and Fire Safety. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Conference Room",
      "River View",
      "24x7 Security",
      "Fire Safety",
      "Solar Panels",
      "High Speed Internet"
    ]
  },
  {
    "id": "prop-189",
    "title": "3-Bed Luxury Duplex House in Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£11.40M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 2250,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious duplex house situated in the highly coveted residential enclave of Bath, Somerset. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 2,250 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Smart Home, Solar Panels, 24x7 Security, Private Terrace, and Children Play Area. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Solar Panels",
      "24x7 Security",
      "Private Terrace",
      "Children Play Area",
      "Visitor Parking",
      "River View",
      "Power Backup"
    ]
  },
  {
    "id": "prop-190",
    "title": "5-Bed Luxury Penthouse in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£5.35M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 4550,
    "description": "Nestled in the prime luxury tier of Hampstead, London, this exquisite penthouse represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 4,550 square feet, the interior configuration features 5 meticulously designed bedrooms along with 5 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Power Backup, Private Terrace, Children Play Area, Lift, and Fire Safety. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Private Terrace",
      "Children Play Area",
      "Lift",
      "Fire Safety",
      "EV Charging",
      "Visitor Parking",
      "Solar Panels",
      "Private Garden",
      "Sea View",
      "Smart Home"
    ]
  },
  {
    "id": "prop-191",
    "title": "4-Bed Luxury Villa in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£720K",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 2650,
    "description": "Nestled in the prime luxury tier of Belgravia, London, this exquisite villa represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 2,650 square feet, the interior configuration features 4 meticulously designed bedrooms along with 4 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Club House, 24x7 Security, Gym, Smart Home, and Private Terrace. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "24x7 Security",
      "Gym",
      "Smart Home",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-192",
    "title": "6-Bed Luxury Penthouse in Holland Park, London",
    "location": "Holland Park, London",
    "price": "£9.38M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 2450,
    "description": "Commanding an enviable and highly sought-after position in Holland Park, London, this bespoke penthouse showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 2,450 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Gym, 24x7 Security, Sea View, Fire Safety, and Swimming Pool. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "24x7 Security",
      "Sea View",
      "Fire Safety",
      "Swimming Pool",
      "EV Charging",
      "River View",
      "Lift"
    ]
  },
  {
    "id": "prop-193",
    "title": "5-Bed Luxury Villa in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£5.07M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 3550,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious villa situated in the highly coveted residential enclave of Edinburgh, Midlothian. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 3,550 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Solar Panels, Visitor Parking, High Speed Internet, Smart Home, and Lake View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Visitor Parking",
      "High Speed Internet",
      "Smart Home",
      "Lake View",
      "Gym",
      "24x7 Security",
      "Private Garden",
      "Club House",
      "Swimming Pool",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-194",
    "title": "2-Bed Luxury Independent House in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£13.91M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 4500,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious independent house situated in the highly coveted residential enclave of Oxford, Oxfordshire. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 4,500 square feet, the interior configuration features 2 meticulously designed bedrooms along with 1 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Gym, Solar Panels, Conference Room, and Power Backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Gym",
      "Solar Panels",
      "Conference Room",
      "Power Backup"
    ]
  },
  {
    "id": "prop-195",
    "title": "4-Bed Luxury Bungalow in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£2.06M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 4250,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent bungalow in Notting Hill, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 4,250 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Sea View, EV Charging, Fire Safety, and Solar Panels. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Sea View",
      "EV Charging",
      "Fire Safety",
      "Solar Panels",
      "Lake View",
      "Private Garden",
      "Visitor Parking",
      "High Speed Internet",
      "Children Play Area",
      "Smart Home"
    ]
  },
  {
    "id": "prop-196",
    "title": "3-Bed Luxury Penthouse in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£2.85M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 2250,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent penthouse in Belgravia, London offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 2,250 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, Private Terrace, Sea View, Smart Home, and Lake View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Private Terrace",
      "Sea View",
      "Smart Home",
      "Lake View",
      "Lift",
      "River View",
      "Swimming Pool",
      "Power Backup",
      "Visitor Parking",
      "Conference Room",
      "High Speed Internet"
    ]
  },
  {
    "id": "prop-197",
    "title": "3-Bed Luxury Luxury Apartment in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£10.82M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 1550,
    "description": "Commanding an enviable and highly sought-after position in Hampstead, London, this bespoke luxury apartment showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 1,550 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including EV Charging, Swimming Pool, 24x7 Security, Visitor Parking, and Sea View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Swimming Pool",
      "24x7 Security",
      "Visitor Parking",
      "Sea View",
      "Power Backup",
      "Private Garden"
    ]
  },
  {
    "id": "prop-198",
    "title": "5-Bed Luxury Penthouse in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£3.28M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 3650,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent penthouse in St John's Wood, London offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 3,650 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Terrace, Conference Room, Children Play Area, Solar Panels, and Sea View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Conference Room",
      "Children Play Area",
      "Solar Panels",
      "Sea View",
      "EV Charging",
      "Swimming Pool",
      "River View",
      "High Speed Internet",
      "24x7 Security",
      "Power Backup",
      "Club House"
    ]
  },
  {
    "id": "prop-199",
    "title": "3-Bed Luxury Duplex House in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£809K",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 1750,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular duplex house is perfectly situated in Chelsea, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 1,750 square feet, the interior configuration features 3 meticulously designed bedrooms along with 3 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, River View, Solar Panels, and Visitor Parking. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "River View",
      "Solar Panels",
      "Visitor Parking",
      "Smart Home",
      "Conference Room",
      "Lake View",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-200",
    "title": "4-Bed Luxury Villa in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£9.92M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 4150,
    "description": "Nestled in the prime luxury tier of Edinburgh, Midlothian, this exquisite villa represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 4,150 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including EV Charging, Power Backup, Smart Home, Gym, and Children Play Area. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Power Backup",
      "Smart Home",
      "Gym",
      "Children Play Area",
      "River View",
      "Private Terrace",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-201",
    "title": "6-Bed Luxury Apartment in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£4.87M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 1250,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent apartment in St John's Wood, London offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 1,250 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Power Backup, EV Charging, Lift, 24x7 Security, and Lake View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "EV Charging",
      "Lift",
      "24x7 Security",
      "Lake View",
      "River View",
      "Solar Panels",
      "Smart Home"
    ]
  },
  {
    "id": "prop-202",
    "title": "3-Bed Luxury Bungalow in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£6.79M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 1500,
    "description": "Commanding an enviable and highly sought-after position in Ascot, Berkshire, this bespoke bungalow showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 1,500 square feet, the interior configuration features 3 meticulously designed bedrooms along with 3 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Gym, Children Play Area, High Speed Internet, Fire Safety, and Smart Home. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Children Play Area",
      "High Speed Internet",
      "Fire Safety",
      "Smart Home",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-203",
    "title": "5-Bed Luxury Independent House in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£11.71M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 3400,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious independent house situated in the highly coveted residential enclave of Belgravia, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 3,400 square feet, the interior configuration features 5 meticulously designed bedrooms along with 5 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including River View, Children Play Area, Private Terrace, Gym, and High Speed Internet. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Children Play Area",
      "Private Terrace",
      "Gym",
      "High Speed Internet",
      "Lake View",
      "Private Garden",
      "Conference Room",
      "Club House",
      "Smart Home",
      "Power Backup"
    ]
  },
  {
    "id": "prop-204",
    "title": "2-Bed Luxury Independent House in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£11.08M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 1750,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular independent house is perfectly situated in Chelsea, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 1,750 square feet, the interior configuration features 2 meticulously designed bedrooms along with 1 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Smart Home, High Speed Internet, EV Charging, Visitor Parking, and Lift. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "High Speed Internet",
      "EV Charging",
      "Visitor Parking",
      "Lift",
      "24x7 Security",
      "Children Play Area",
      "Fire Safety",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-205",
    "title": "6-Bed Luxury Apartment in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£14.99M",
    "bedrooms": 6,
    "bathrooms": 6,
    "sqft": 2350,
    "description": "Commanding an enviable and highly sought-after position in Oxford, Oxfordshire, this bespoke apartment showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 2,350 square feet, the interior configuration features 6 meticulously designed bedrooms along with 6 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, Power Backup, Smart Home, Sea View, and Private Garden. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Power Backup",
      "Smart Home",
      "Sea View",
      "Private Garden",
      "Lake View",
      "Conference Room",
      "Private Terrace",
      "Lift",
      "Visitor Parking",
      "High Speed Internet"
    ]
  },
  {
    "id": "prop-206",
    "title": "4-Bed Luxury Apartment in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£13.84M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 2850,
    "description": "Nestled in the prime luxury tier of Cotswolds, Gloucestershire, this exquisite apartment represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 2,850 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including River View, Gym, Power Backup, Private Garden, and Club House. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Gym",
      "Power Backup",
      "Private Garden",
      "Club House",
      "Lift"
    ]
  },
  {
    "id": "prop-207",
    "title": "3-Bed Luxury Apartment in Richmond, London",
    "location": "Richmond, London",
    "price": "£14.20M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 1900,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious apartment situated in the highly coveted residential enclave of Richmond, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 1,900 square feet, the interior configuration features 3 meticulously designed bedrooms along with 3 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Solar Panels, Private Garden, 24x7 Security, Children Play Area, and Power Backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Private Garden",
      "24x7 Security",
      "Children Play Area",
      "Power Backup",
      "Gym",
      "Club House",
      "Lake View"
    ]
  },
  {
    "id": "prop-208",
    "title": "5-Bed Luxury Apartment in Kensington, London",
    "location": "Kensington, London",
    "price": "£4.30M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 3600,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious apartment situated in the highly coveted residential enclave of Kensington, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 3,600 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Private Garden, Swimming Pool, High Speed Internet, Conference Room, and Smart Home. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Swimming Pool",
      "High Speed Internet",
      "Conference Room",
      "Smart Home",
      "Club House",
      "Power Backup"
    ]
  },
  {
    "id": "prop-209",
    "title": "2-Bed Luxury Penthouse in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£5.48M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 1800,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious penthouse situated in the highly coveted residential enclave of St John's Wood, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 1,800 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including EV Charging, Conference Room, High Speed Internet, Sea View, and Gym. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Conference Room",
      "High Speed Internet",
      "Sea View",
      "Gym",
      "Swimming Pool",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-210",
    "title": "4-Bed Luxury Penthouse in Kensington, London",
    "location": "Kensington, London",
    "price": "£2.04M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 1350,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent penthouse in Kensington, London offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 1,350 square feet, the interior configuration features 4 meticulously designed bedrooms along with 3 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Terrace, Conference Room, EV Charging, 24x7 Security, and Club House. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Conference Room",
      "EV Charging",
      "24x7 Security",
      "Club House"
    ]
  },
  {
    "id": "prop-211",
    "title": "6-Bed Luxury Bungalow in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£5.30M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 2450,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent bungalow in Chelsea, London offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 2,450 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including 24x7 Security, High Speed Internet, Fire Safety, Children Play Area, and Sea View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "High Speed Internet",
      "Fire Safety",
      "Children Play Area",
      "Sea View",
      "Private Garden"
    ]
  },
  {
    "id": "prop-212",
    "title": "5-Bed Luxury Villa in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£9.17M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 2350,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular villa is perfectly situated in Knightsbridge, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 2,350 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, Solar Panels, Sea View, and Gym. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "Solar Panels",
      "Sea View",
      "Gym",
      "Children Play Area",
      "Private Garden",
      "Fire Safety",
      "High Speed Internet"
    ]
  },
  {
    "id": "prop-213",
    "title": "5-Bed Luxury Penthouse in Kensington, London",
    "location": "Kensington, London",
    "price": "£11.13M",
    "bedrooms": 5,
    "bathrooms": 4,
    "sqft": 2400,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular penthouse is perfectly situated in Kensington, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 2,400 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Private Garden, Children Play Area, Solar Panels, Gym, and Private Terrace. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Children Play Area",
      "Solar Panels",
      "Gym",
      "Private Terrace",
      "Visitor Parking",
      "Conference Room",
      "24x7 Security",
      "Smart Home",
      "Lake View"
    ]
  },
  {
    "id": "prop-214",
    "title": "6-Bed Luxury Villa in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£4.71M",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 2000,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular villa is perfectly situated in Cotswolds, Gloucestershire. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 2,000 square feet, the interior configuration features 6 meticulously designed bedrooms along with 5 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Visitor Parking, Solar Panels, Smart Home, EV Charging, and Children Play Area. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Visitor Parking",
      "Solar Panels",
      "Smart Home",
      "EV Charging",
      "Children Play Area",
      "Swimming Pool",
      "Club House"
    ]
  },
  {
    "id": "prop-215",
    "title": "4-Bed Luxury Bungalow in Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£9.02M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 2000,
    "description": "Nestled in the prime luxury tier of Bath, Somerset, this exquisite bungalow represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 2,000 square feet, the interior configuration features 4 meticulously designed bedrooms along with 3 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Club House, Visitor Parking, Smart Home, 24x7 Security, and River View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Visitor Parking",
      "Smart Home",
      "24x7 Security",
      "River View",
      "Solar Panels",
      "Sea View"
    ]
  },
  {
    "id": "prop-216",
    "title": "5-Bed Luxury Luxury Apartment in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£10.31M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 1950,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious luxury apartment situated in the highly coveted residential enclave of Mayfair, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 1,950 square feet, the interior configuration features 5 meticulously designed bedrooms along with 5 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Gym, Private Terrace, Children Play Area, Visitor Parking, and High Speed Internet. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Private Terrace",
      "Children Play Area",
      "Visitor Parking",
      "High Speed Internet",
      "Sea View",
      "Smart Home",
      "Private Garden",
      "Swimming Pool"
    ]
  },
  {
    "id": "prop-217",
    "title": "3-Bed Luxury Bungalow in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£6.58M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 3700,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular bungalow is perfectly situated in Hampstead, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 3,700 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Gym, High Speed Internet, Lift, and Fire Safety. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3ed77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Gym",
      "High Speed Internet",
      "Lift",
      "Fire Safety",
      "Club House",
      "Lake View",
      "Private Garden"
    ]
  },
  {
    "id": "prop-218",
    "title": "4-Bed Luxury Duplex House in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£12.13M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 2450,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent duplex house in Notting Hill, London offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 2,450 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including River View, Private Garden, High Speed Internet, Children Play Area, and Fire Safety. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Private Garden",
      "High Speed Internet",
      "Children Play Area",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-219",
    "title": "5-Bed Luxury Villa in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£9.91M",
    "bedrooms": 5,
    "bathrooms": 5,
    "sqft": 3700,
    "description": "Commanding an enviable and highly sought-after position in Wimbledon, London, this bespoke villa showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 3,700 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Lake View, Swimming Pool, Power Backup, Conference Room, and Smart Home. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "Swimming Pool",
      "Power Backup",
      "Conference Room",
      "Smart Home",
      "Lift",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-220",
    "title": "6-Bed Luxury Apartment in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£943K",
    "bedrooms": 6,
    "bathrooms": 5,
    "sqft": 1200,
    "description": "Commanding an enviable and highly sought-after position in Notting Hill, London, this bespoke apartment showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 1,200 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Visitor Parking, Smart Home, Club House, River View, and Private Garden. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Visitor Parking",
      "Smart Home",
      "Club House",
      "River View",
      "Private Garden",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-221",
    "title": "Premium 1,700 Sq Ft Coworking Office in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£39.04M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 1700,
    "description": "Commanding an enviable and highly sought-after position in Notting Hill, London, this bespoke coworking office showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 1,700 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Sea View, 24x7 Security, Children Play Area, Gym, and Conference Room. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Sea View",
      "24x7 Security",
      "Children Play Area",
      "Gym",
      "Conference Room",
      "Visitor Parking",
      "Private Terrace",
      "Power Backup"
    ]
  },
  {
    "id": "prop-222",
    "title": "Premium 5,700 Sq Ft Business Center in Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£41.74M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 5700,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious business center situated in the highly coveted residential enclave of Weybridge, Surrey. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 5,700 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Power Backup, Conference Room, Private Terrace, EV Charging, and Solar Panels. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Conference Room",
      "Private Terrace",
      "EV Charging",
      "Solar Panels",
      "Children Play Area",
      "Gym"
    ]
  },
  {
    "id": "prop-223",
    "title": "Premium 7,200 Sq Ft Commercial Building in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£6.80M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 7200,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent commercial building in Ascot, Berkshire offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 7,200 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Lake View, Gym, Swimming Pool, Solar Panels, and River View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "Gym",
      "Swimming Pool",
      "Solar Panels",
      "River View",
      "Private Terrace",
      "High Speed Internet",
      "24x7 Security",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-224",
    "title": "Premium 13,700 Sq Ft Commercial Building in Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£37.26M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 13700,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular commercial building is perfectly situated in Bath, Somerset. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 13,700 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including High Speed Internet, Conference Room, Swimming Pool, Fire Safety, and Visitor Parking. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "Conference Room",
      "Swimming Pool",
      "Fire Safety",
      "Visitor Parking",
      "Club House"
    ]
  },
  {
    "id": "prop-225",
    "title": "Premium 9,500 Sq Ft Commercial Building in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£25.19M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 9500,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious commercial building situated in the highly coveted residential enclave of Edinburgh, Midlothian. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 9,500 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Gym, Club House, High Speed Internet, Children Play Area, and Swimming Pool. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Club House",
      "High Speed Internet",
      "Children Play Area",
      "Swimming Pool",
      "Lake View"
    ]
  },
  {
    "id": "prop-226",
    "title": "Premium 10,800 Sq Ft Business Center in Kensington, London",
    "location": "Kensington, London",
    "price": "£12.20M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 10800,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent business center in Kensington, London offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 10,800 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Children Play Area, Private Garden, Visitor Parking, 24x7 Security, and comprehensive power backup. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Private Garden",
      "Visitor Parking",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-227",
    "title": "Premium 11,700 Sq Ft Commercial Building in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£14.39M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 11700,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent commercial building in Belgravia, London offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 11,700 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Smart Home, Private Garden, Children Play Area, Solar Panels, and Visitor Parking. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Private Garden",
      "Children Play Area",
      "Solar Panels",
      "Visitor Parking",
      "River View",
      "Conference Room",
      "24x7 Security",
      "Sea View",
      "Lake View"
    ]
  },
  {
    "id": "prop-228",
    "title": "Premium 12,600 Sq Ft Coworking Office in Kensington, London",
    "location": "Kensington, London",
    "price": "£30.91M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 12600,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious coworking office situated in the highly coveted residential enclave of Kensington, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 12,600 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including EV Charging, Private Terrace, Lift, Private Garden, and Visitor Parking. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Private Terrace",
      "Lift",
      "Private Garden",
      "Visitor Parking",
      "Conference Room",
      "Sea View",
      "Solar Panels",
      "Smart Home"
    ]
  },
  {
    "id": "prop-229",
    "title": "Premium 8,500 Sq Ft Showroom in Richmond, London",
    "location": "Richmond, London",
    "price": "£27.41M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8500,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular showroom is perfectly situated in Richmond, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 8,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including EV Charging, Conference Room, Swimming Pool, Club House, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Conference Room",
      "Swimming Pool",
      "Club House"
    ]
  },
  {
    "id": "prop-230",
    "title": "Premium 4,100 Sq Ft Business Center in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£19.35M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 4100,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious business center situated in the highly coveted residential enclave of Belgravia, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 4,100 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Smart Home, Children Play Area, Club House, Lake View, and Gym. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Children Play Area",
      "Club House",
      "Lake View",
      "Gym",
      "EV Charging",
      "River View"
    ]
  },
  {
    "id": "prop-231",
    "title": "Premium 14,100 Sq Ft Office Space in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£11.96M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 14100,
    "description": "Commanding an enviable and highly sought-after position in Edinburgh, Midlothian, this bespoke office space showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 14,100 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including EV Charging, High Speed Internet, Smart Home, Private Garden, and Conference Room. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "High Speed Internet",
      "Smart Home",
      "Private Garden",
      "Conference Room",
      "24x7 Security",
      "Sea View",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-232",
    "title": "Premium 13,000 Sq Ft Business Center in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£39.12M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 13000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent business center in Knightsbridge, London offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 13,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Smart Home, Fire Safety, Swimming Pool, Sea View, and 24x7 Security. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Fire Safety",
      "Swimming Pool",
      "Sea View",
      "24x7 Security",
      "EV Charging",
      "Club House",
      "Lake View"
    ]
  },
  {
    "id": "prop-233",
    "title": "Premium 10,200 Sq Ft Showroom in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£13.92M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 10200,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent showroom in Hampstead, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 10,200 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including High Speed Internet, Private Terrace, Club House, EV Charging, and Smart Home. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "Private Terrace",
      "Club House",
      "EV Charging",
      "Smart Home"
    ]
  },
  {
    "id": "prop-234",
    "title": "Premium 15,100 Sq Ft Office Space in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£27.39M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 15100,
    "description": "Nestled in the prime luxury tier of Chelsea, London, this exquisite office space represents the absolute pinnacle of contemporary British architectural refinement. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 15,100 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Fire Safety, Smart Home, Sea View, Power Backup, and Visitor Parking. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Fire Safety",
      "Smart Home",
      "Sea View",
      "Power Backup",
      "Visitor Parking",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-235",
    "title": "Premium 10,000 Sq Ft Showroom in Holland Park, London",
    "location": "Holland Park, London",
    "price": "£29.58M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 10000,
    "description": "Nestled in the prime luxury tier of Holland Park, London, this exquisite showroom represents the absolute pinnacle of contemporary British architectural refinement. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 10,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including High Speed Internet, 24x7 Security, River View, Fire Safety, and Conference Room. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "24x7 Security",
      "River View",
      "Fire Safety",
      "Conference Room",
      "Gym"
    ]
  },
  {
    "id": "prop-236",
    "title": "Premium 15,000 Sq Ft Office Space in Richmond, London",
    "location": "Richmond, London",
    "price": "£42.88M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 15000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious office space situated in the highly coveted residential enclave of Richmond, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 15,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Lake View, EV Charging, 24x7 Security, Visitor Parking, and Conference Room. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "EV Charging",
      "24x7 Security",
      "Visitor Parking",
      "Conference Room",
      "Club House"
    ]
  },
  {
    "id": "prop-237",
    "title": "Premium 13,900 Sq Ft Retail Shop in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£2.95M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 13900,
    "description": "Commanding an enviable and highly sought-after position in Knightsbridge, London, this bespoke retail shop showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 13,900 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Power Backup, Private Garden, EV Charging, and River View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Power Backup",
      "Private Garden",
      "EV Charging",
      "River View",
      "Smart Home",
      "High Speed Internet"
    ]
  },
  {
    "id": "prop-238",
    "title": "Premium 4,700 Sq Ft Retail Shop in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£7.82M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 4700,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious retail shop situated in the highly coveted residential enclave of Edinburgh, Midlothian. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 4,700 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Solar Panels, Lake View, Gym, and Lift. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Solar Panels",
      "Lake View",
      "Gym",
      "Lift"
    ]
  },
  {
    "id": "prop-239",
    "title": "Premium 3,600 Sq Ft Showroom in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£38.38M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 3600,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular showroom is perfectly situated in Hampstead, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 3,600 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Lake View, Private Terrace, Power Backup, Visitor Parking, and Fire Safety. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "Private Terrace",
      "Power Backup",
      "Visitor Parking",
      "Fire Safety",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-240",
    "title": "Premium 8,000 Sq Ft Commercial Building in Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£35.76M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent commercial building in Weybridge, Surrey offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 8,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, Sea View, Conference Room, and Lake View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "Sea View",
      "Conference Room",
      "Lake View",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-241",
    "title": "Premium 7,900 Sq Ft Business Center in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£20.86M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 7900,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular business center is perfectly situated in Mayfair, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 7,900 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, Sea View, Private Terrace, and Gym. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "Sea View",
      "Private Terrace",
      "Gym"
    ]
  },
  {
    "id": "prop-242",
    "title": "Premium 14,800 Sq Ft Commercial Building in Holland Park, London",
    "location": "Holland Park, London",
    "price": "£2.07M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 14800,
    "description": "Commanding an enviable and highly sought-after position in Holland Park, London, this bespoke commercial building showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 14,800 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including High Speed Internet, Swimming Pool, Club House, Conference Room, and Private Terrace. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "Swimming Pool",
      "Club House",
      "Conference Room",
      "Private Terrace",
      "Power Backup",
      "Lift"
    ]
  },
  {
    "id": "prop-243",
    "title": "Premium 15,100 Sq Ft Retail Shop in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£32.68M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 15100,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent retail shop in Cotswolds, Gloucestershire offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 15,100 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Club House, Lift, Gym, Sea View, and Visitor Parking. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Lift",
      "Gym",
      "Sea View",
      "Visitor Parking",
      "Children Play Area",
      "EV Charging",
      "Private Terrace",
      "River View",
      "Private Garden"
    ]
  },
  {
    "id": "prop-244",
    "title": "Premium 900 Sq Ft Coworking Office in Marylebone, London",
    "location": "Marylebone, London",
    "price": "£28.77M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 900,
    "description": "Commanding an enviable and highly sought-after position in Marylebone, London, this bespoke coworking office showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 900 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Visitor Parking, Swimming Pool, Conference Room, Sea View, and Club House. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Visitor Parking",
      "Swimming Pool",
      "Conference Room",
      "Sea View",
      "Club House",
      "Private Garden",
      "High Speed Internet",
      "Children Play Area",
      "Power Backup"
    ]
  },
  {
    "id": "prop-245",
    "title": "Premium 2,000 Sq Ft Commercial Building in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£1.15M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious commercial building situated in the highly coveted residential enclave of Ascot, Berkshire. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 2,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Club House, Smart Home, EV Charging, Swimming Pool, and Conference Room. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Smart Home",
      "EV Charging",
      "Swimming Pool",
      "Conference Room",
      "Gym",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-246",
    "title": "Premium 11,800 Sq Ft Showroom in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£34.82M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 11800,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular showroom is perfectly situated in Mayfair, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 11,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Gym, Smart Home, Lake View, and comprehensive power backup. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Gym",
      "Smart Home",
      "Lake View"
    ]
  },
  {
    "id": "prop-247",
    "title": "Premium 4,800 Sq Ft Retail Shop in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£18.51M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 4800,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular retail shop is perfectly situated in St John's Wood, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 4,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Conference Room, Swimming Pool, Club House, 24x7 Security, and Power Backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Swimming Pool",
      "Club House",
      "24x7 Security",
      "Power Backup",
      "Sea View",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-248",
    "title": "Premium 14,700 Sq Ft Business Center in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£43.58M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 14700,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular business center is perfectly situated in Chelsea, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 14,700 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including River View, Gym, Solar Panels, Conference Room, and Visitor Parking. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Gym",
      "Solar Panels",
      "Conference Room",
      "Visitor Parking",
      "Club House"
    ]
  },
  {
    "id": "prop-249",
    "title": "Premium 10,800 Sq Ft Showroom in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£21.87M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 10800,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent showroom in Chelsea, London offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 10,800 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, Power Backup, Private Terrace, Lift, and Lake View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Power Backup",
      "Private Terrace",
      "Lift",
      "Lake View",
      "24x7 Security",
      "Private Garden",
      "Visitor Parking",
      "Smart Home",
      "Conference Room"
    ]
  },
  {
    "id": "prop-250",
    "title": "Premium 9,100 Sq Ft Commercial Building in Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£10.25M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 9100,
    "description": "Commanding an enviable and highly sought-after position in Bath, Somerset, this bespoke commercial building showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 9,100 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including High Speed Internet, 24x7 Security, Children Play Area, Swimming Pool, and comprehensive power backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "24x7 Security",
      "Children Play Area",
      "Swimming Pool"
    ]
  },
  {
    "id": "prop-251",
    "title": "Premium 5,100 Sq Ft Coworking Office in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£32.51M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 5100,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious coworking office situated in the highly coveted residential enclave of Knightsbridge, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 5,100 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Visitor Parking, River View, Club House, and Gym. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Visitor Parking",
      "River View",
      "Club House",
      "Gym",
      "Lift",
      "Smart Home",
      "EV Charging",
      "Private Garden",
      "Sea View"
    ]
  },
  {
    "id": "prop-252",
    "title": "Premium 6,700 Sq Ft Coworking Office in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£27.98M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 6700,
    "description": "Nestled in the prime luxury tier of Ascot, Berkshire, this exquisite coworking office represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 6,700 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Gym, Lake View, Club House, Private Garden, and Sea View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Lake View",
      "Club House",
      "Private Garden",
      "Sea View"
    ]
  },
  {
    "id": "prop-253",
    "title": "Premium 12,800 Sq Ft Coworking Office in Kensington, London",
    "location": "Kensington, London",
    "price": "£25.35M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 12800,
    "description": "Commanding an enviable and highly sought-after position in Kensington, London, this bespoke coworking office showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 12,800 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Terrace, Club House, Swimming Pool, Solar Panels, and Children Play Area. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Club House",
      "Swimming Pool",
      "Solar Panels",
      "Children Play Area",
      "Lake View",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-254",
    "title": "Premium 6,800 Sq Ft Business Center in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£15.07M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 6800,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular business center is perfectly situated in Belgravia, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 6,800 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, High Speed Internet, Conference Room, Sea View, and River View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "High Speed Internet",
      "Conference Room",
      "Sea View",
      "River View",
      "Fire Safety",
      "Visitor Parking",
      "Club House",
      "Power Backup"
    ]
  },
  {
    "id": "prop-255",
    "title": "Premium 2,600 Sq Ft Commercial Building in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£14.33M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2600,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular commercial building is perfectly situated in Wimbledon, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 2,600 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Sea View, Power Backup, Swimming Pool, Club House, and EV Charging. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Sea View",
      "Power Backup",
      "Swimming Pool",
      "Club House",
      "EV Charging",
      "Private Garden"
    ]
  },
  {
    "id": "prop-256",
    "title": "Premium 8,500 Sq Ft Retail Shop in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£39.13M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8500,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious retail shop situated in the highly coveted residential enclave of Chelsea, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 8,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Power Backup, Lift, Visitor Parking, and Conference Room. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Power Backup",
      "Lift",
      "Visitor Parking",
      "Conference Room",
      "River View",
      "Lake View",
      "Club House",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-257",
    "title": "Premium 2,600 Sq Ft Retail Shop in Richmond, London",
    "location": "Richmond, London",
    "price": "£22.98M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2600,
    "description": "Nestled in the prime luxury tier of Richmond, London, this exquisite retail shop represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 2,600 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Children Play Area, Fire Safety, Smart Home, Conference Room, and Power Backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Fire Safety",
      "Smart Home",
      "Conference Room",
      "Power Backup",
      "Sea View",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-258",
    "title": "Premium 11,200 Sq Ft Office Space in Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£29.04M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 11200,
    "description": "Commanding an enviable and highly sought-after position in Bath, Somerset, this bespoke office space showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 11,200 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Smart Home, Private Garden, Lift, Private Terrace, and Visitor Parking. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Private Garden",
      "Lift",
      "Private Terrace",
      "Visitor Parking",
      "Swimming Pool",
      "Club House",
      "EV Charging"
    ]
  },
  {
    "id": "prop-259",
    "title": "Premium 1,300 Sq Ft Office Space in Marylebone, London",
    "location": "Marylebone, London",
    "price": "£37.27M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 1300,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious office space situated in the highly coveted residential enclave of Marylebone, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 1,300 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Club House, River View, EV Charging, Lake View, and comprehensive power backup. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "River View",
      "EV Charging",
      "Lake View"
    ]
  },
  {
    "id": "prop-260",
    "title": "Premium 10,500 Sq Ft Office Space in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£5.22M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 10500,
    "description": "Nestled in the prime luxury tier of Chelsea, London, this exquisite office space represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 10,500 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, 24x7 Security, Solar Panels, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "24x7 Security",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-261",
    "title": "Premium 10,800 Sq Ft Business Center in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£16.21M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 10800,
    "description": "Nestled in the prime luxury tier of Cotswolds, Gloucestershire, this exquisite business center represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 10,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Lake View, Swimming Pool, Private Terrace, Visitor Parking, and Club House. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "Swimming Pool",
      "Private Terrace",
      "Visitor Parking",
      "Club House",
      "Fire Safety",
      "High Speed Internet",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-262",
    "title": "Premium 8,000 Sq Ft Office Space in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£13.87M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent office space in Wimbledon, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 8,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Conference Room, Swimming Pool, Lift, High Speed Internet, and Sea View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Swimming Pool",
      "Lift",
      "High Speed Internet",
      "Sea View",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-263",
    "title": "Premium 11,000 Sq Ft Showroom in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£44.07M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 11000,
    "description": "Commanding an enviable and highly sought-after position in Knightsbridge, London, this bespoke showroom showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 11,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Conference Room, Club House, Gym, and Children Play Area. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Conference Room",
      "Club House",
      "Gym",
      "Children Play Area",
      "Private Terrace",
      "Fire Safety",
      "River View",
      "Private Garden",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-264",
    "title": "Premium 2,400 Sq Ft Commercial Building in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£24.73M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2400,
    "description": "Commanding an enviable and highly sought-after position in Wimbledon, London, this bespoke commercial building showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 2,400 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Club House, Fire Safety, Lake View, Sea View, and Private Terrace. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Fire Safety",
      "Lake View",
      "Sea View",
      "Private Terrace",
      "Smart Home"
    ]
  },
  {
    "id": "prop-265",
    "title": "Premium 11,700 Sq Ft Commercial Building in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£18.14M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 11700,
    "description": "Commanding an enviable and highly sought-after position in Belgravia, London, this bespoke commercial building showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 11,700 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Private Terrace, Solar Panels, Smart Home, and Conference Room. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Private Terrace",
      "Solar Panels",
      "Smart Home",
      "Conference Room",
      "Club House",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-266",
    "title": "Premium 5,100 Sq Ft Office Space in Holland Park, London",
    "location": "Holland Park, London",
    "price": "£29.72M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 5100,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular office space is perfectly situated in Holland Park, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 5,100 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including River View, Lake View, Private Terrace, Smart Home, and Club House. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Lake View",
      "Private Terrace",
      "Smart Home",
      "Club House",
      "Fire Safety",
      "Sea View"
    ]
  },
  {
    "id": "prop-267",
    "title": "Premium 1,300 Sq Ft Showroom in Holland Park, London",
    "location": "Holland Park, London",
    "price": "£13.73M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 1300,
    "description": "Commanding an enviable and highly sought-after position in Holland Park, London, this bespoke showroom showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 1,300 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Club House, Power Backup, Fire Safety, EV Charging, and Sea View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Power Backup",
      "Fire Safety",
      "EV Charging",
      "Sea View",
      "24x7 Security",
      "Lake View",
      "Children Play Area",
      "Private Terrace",
      "Smart Home"
    ]
  },
  {
    "id": "prop-268",
    "title": "Premium 1,400 Sq Ft Coworking Office in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£35.97M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 1400,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious coworking office situated in the highly coveted residential enclave of Oxford, Oxfordshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 1,400 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including EV Charging, 24x7 Security, Fire Safety, Gym, and Club House. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "24x7 Security",
      "Fire Safety",
      "Gym",
      "Club House",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-269",
    "title": "Premium 3,600 Sq Ft Business Center in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£33.89M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 3600,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious business center situated in the highly coveted residential enclave of Edinburgh, Midlothian. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 3,600 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Club House, Children Play Area, River View, Sea View, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Children Play Area",
      "River View",
      "Sea View"
    ]
  },
  {
    "id": "prop-270",
    "title": "Premium 8,400 Sq Ft Coworking Office in Marylebone, London",
    "location": "Marylebone, London",
    "price": "£35.48M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8400,
    "description": "Nestled in the prime luxury tier of Marylebone, London, this exquisite coworking office represents the absolute pinnacle of contemporary British architectural refinement. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 8,400 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Power Backup, Swimming Pool, EV Charging, Fire Safety, and Club House. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Swimming Pool",
      "EV Charging",
      "Fire Safety",
      "Club House",
      "24x7 Security",
      "High Speed Internet",
      "Sea View"
    ]
  },
  {
    "id": "prop-271",
    "title": "Premium 6,000 Sq Ft Retail Shop in Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£26.90M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 6000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious retail shop situated in the highly coveted residential enclave of Bath, Somerset. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 6,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Gym, Club House, Sea View, Smart Home, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Club House",
      "Sea View",
      "Smart Home"
    ]
  },
  {
    "id": "prop-272",
    "title": "Premium 3,900 Sq Ft Showroom in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£20.84M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 3900,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent showroom in Knightsbridge, London offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 3,900 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Terrace, Smart Home, Visitor Parking, Conference Room, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Smart Home",
      "Visitor Parking",
      "Conference Room"
    ]
  },
  {
    "id": "prop-273",
    "title": "Premium 15,500 Sq Ft Business Center in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£9.64M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 15500,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular business center is perfectly situated in Wimbledon, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 15,500 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Power Backup, Swimming Pool, Club House, Conference Room, and Lift. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Swimming Pool",
      "Club House",
      "Conference Room",
      "Lift",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-274",
    "title": "Premium 8,100 Sq Ft Commercial Building in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£32.68M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8100,
    "description": "Commanding an enviable and highly sought-after position in Notting Hill, London, this bespoke commercial building showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 8,100 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including EV Charging, Swimming Pool, Visitor Parking, Conference Room, and High Speed Internet. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Swimming Pool",
      "Visitor Parking",
      "Conference Room",
      "High Speed Internet"
    ]
  },
  {
    "id": "prop-275",
    "title": "Premium 8,300 Sq Ft Showroom in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£16.82M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8300,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent showroom in Notting Hill, London offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 8,300 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Children Play Area, Gym, Conference Room, Sea View, and comprehensive power backup. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Gym",
      "Conference Room",
      "Sea View"
    ]
  },
  {
    "id": "prop-276",
    "title": "Premium 9,600 Sq Ft Commercial Building in Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£16.67M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 9600,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious commercial building situated in the highly coveted residential enclave of Oxford, Oxfordshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 9,600 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Visitor Parking, Swimming Pool, Club House, Power Backup, and Gym. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Visitor Parking",
      "Swimming Pool",
      "Club House",
      "Power Backup",
      "Gym"
    ]
  },
  {
    "id": "prop-277",
    "title": "Premium 5,400 Sq Ft Coworking Office in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£42.87M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 5400,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent coworking office in Edinburgh, Midlothian offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 5,400 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including High Speed Internet, Private Garden, Visitor Parking, Sea View, and Swimming Pool. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "Private Garden",
      "Visitor Parking",
      "Sea View",
      "Swimming Pool",
      "24x7 Security",
      "Smart Home",
      "Club House",
      "Solar Panels",
      "Lake View"
    ]
  },
  {
    "id": "prop-278",
    "title": "Premium 7,100 Sq Ft Business Center in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£15.58M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 7100,
    "description": "Nestled in the prime luxury tier of Ascot, Berkshire, this exquisite business center represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 7,100 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Children Play Area, Power Backup, EV Charging, and Sea View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Children Play Area",
      "Power Backup",
      "EV Charging",
      "Sea View",
      "Private Garden",
      "Lake View",
      "River View"
    ]
  },
  {
    "id": "prop-279",
    "title": "Premium 6,800 Sq Ft Retail Shop in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£44.79M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 6800,
    "description": "Nestled in the prime luxury tier of St John's Wood, London, this exquisite retail shop represents the absolute pinnacle of contemporary British architectural refinement. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 6,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Conference Room, Gym, Club House, Swimming Pool, and comprehensive power backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Gym",
      "Club House",
      "Swimming Pool"
    ]
  },
  {
    "id": "prop-280",
    "title": "Premium 6,600 Sq Ft Retail Shop in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£35.73M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 6600,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular retail shop is perfectly situated in Notting Hill, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 6,600 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Conference Room, Swimming Pool, High Speed Internet, EV Charging, and Private Terrace. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Swimming Pool",
      "High Speed Internet",
      "EV Charging",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-281",
    "title": "Premium 7,400 Sq Ft Office Space in Richmond, London",
    "location": "Richmond, London",
    "price": "£36.59M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 7400,
    "description": "Commanding an enviable and highly sought-after position in Richmond, London, this bespoke office space showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 7,400 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Club House, River View, Lift, Sea View, and EV Charging. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "River View",
      "Lift",
      "Sea View",
      "EV Charging",
      "Private Terrace",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-282",
    "title": "Premium 2,100 Sq Ft Office Space in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£15.51M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2100,
    "description": "Commanding an enviable and highly sought-after position in Knightsbridge, London, this bespoke office space showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 2,100 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Power Backup, Private Garden, Children Play Area, Smart Home, and 24x7 Security. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Private Garden",
      "Children Play Area",
      "Smart Home",
      "24x7 Security",
      "Gym"
    ]
  },
  {
    "id": "prop-283",
    "title": "Premium 7,800 Sq Ft Office Space in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£42.72M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 7800,
    "description": "Commanding an enviable and highly sought-after position in Cotswolds, Gloucestershire, this bespoke office space showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 7,800 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Lift, Solar Panels, 24x7 Security, EV Charging, and Lake View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lift",
      "Solar Panels",
      "24x7 Security",
      "EV Charging",
      "Lake View",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-284",
    "title": "Premium 7,800 Sq Ft Retail Shop in Richmond, London",
    "location": "Richmond, London",
    "price": "£42.72M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 7800,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent retail shop in Richmond, London offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 7,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Private Terrace, Fire Safety, Power Backup, and Solar Panels. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Private Terrace",
      "Fire Safety",
      "Power Backup",
      "Solar Panels",
      "EV Charging",
      "Gym",
      "Lake View",
      "River View"
    ]
  },
  {
    "id": "prop-285",
    "title": "Premium 8,900 Sq Ft Business Center in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£39.77M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8900,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular business center is perfectly situated in Belgravia, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 8,900 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including High Speed Internet, Conference Room, Solar Panels, Gym, and Club House. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "Conference Room",
      "Solar Panels",
      "Gym",
      "Club House",
      "Private Garden",
      "Lift"
    ]
  },
  {
    "id": "prop-286",
    "title": "Premium 2,400 Sq Ft Business Center in Kensington, London",
    "location": "Kensington, London",
    "price": "£5.64M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2400,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular business center is perfectly situated in Kensington, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 2,400 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including High Speed Internet, Fire Safety, Swimming Pool, River View, and 24x7 Security. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "Fire Safety",
      "Swimming Pool",
      "River View",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-287",
    "title": "Premium 14,300 Sq Ft Office Space in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£29.12M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 14300,
    "description": "Commanding an enviable and highly sought-after position in Notting Hill, London, this bespoke office space showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 14,300 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Children Play Area, Power Backup, Lift, River View, and EV Charging. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Power Backup",
      "Lift",
      "River View",
      "EV Charging",
      "Gym"
    ]
  },
  {
    "id": "prop-288",
    "title": "Premium 13,200 Sq Ft Coworking Office in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£31.34M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 13200,
    "description": "Commanding an enviable and highly sought-after position in Cotswolds, Gloucestershire, this bespoke coworking office showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 13,200 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Sea View, Children Play Area, Fire Safety, Power Backup, and EV Charging. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Sea View",
      "Children Play Area",
      "Fire Safety",
      "Power Backup",
      "EV Charging"
    ]
  },
  {
    "id": "prop-289",
    "title": "Premium 2,300 Sq Ft Retail Shop in Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£25.45M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2300,
    "description": "Commanding an enviable and highly sought-after position in Weybridge, Surrey, this bespoke retail shop showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 2,300 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Sea View, Private Garden, Gym, and Lift. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Sea View",
      "Private Garden",
      "Gym",
      "Lift",
      "Power Backup"
    ]
  },
  {
    "id": "prop-290",
    "title": "Premium 13,500 Sq Ft Showroom in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£21.44M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 13500,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious showroom situated in the highly coveted residential enclave of Hampstead, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 13,500 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Power Backup, River View, Swimming Pool, Visitor Parking, and Children Play Area. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "River View",
      "Swimming Pool",
      "Visitor Parking",
      "Children Play Area",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-291",
    "title": "Premium 7,200 Sq Ft Business Center in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£15.63M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 7200,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent business center in St John's Wood, London offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 7,200 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Sea View, Private Garden, Children Play Area, Conference Room, and River View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Sea View",
      "Private Garden",
      "Children Play Area",
      "Conference Room",
      "River View",
      "Smart Home",
      "Swimming Pool",
      "Lake View",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-292",
    "title": "Premium 9,100 Sq Ft Business Center in Marylebone, London",
    "location": "Marylebone, London",
    "price": "£17.92M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 9100,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular business center is perfectly situated in Marylebone, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 9,100 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Terrace, Lake View, EV Charging, Children Play Area, and Fire Safety. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Lake View",
      "EV Charging",
      "Children Play Area",
      "Fire Safety",
      "24x7 Security",
      "Lift"
    ]
  },
  {
    "id": "prop-293",
    "title": "Premium 3,600 Sq Ft Retail Shop in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£41.18M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 3600,
    "description": "Nestled in the prime luxury tier of Edinburgh, Midlothian, this exquisite retail shop represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 3,600 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Garden, Smart Home, Conference Room, Children Play Area, and Gym. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Smart Home",
      "Conference Room",
      "Children Play Area",
      "Gym",
      "Lake View",
      "River View",
      "Solar Panels",
      "EV Charging",
      "Sea View"
    ]
  },
  {
    "id": "prop-294",
    "title": "Premium 4,700 Sq Ft Office Space in Holland Park, London",
    "location": "Holland Park, London",
    "price": "£15.57M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 4700,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious office space situated in the highly coveted residential enclave of Holland Park, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 4,700 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Gym, Children Play Area, Conference Room, Lift, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Children Play Area",
      "Conference Room",
      "Lift"
    ]
  },
  {
    "id": "prop-295",
    "title": "Premium 14,300 Sq Ft Office Space in Marylebone, London",
    "location": "Marylebone, London",
    "price": "£14.10M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 14300,
    "description": "Nestled in the prime luxury tier of Marylebone, London, this exquisite office space represents the absolute pinnacle of contemporary British architectural refinement. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 14,300 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including River View, Power Backup, Smart Home, 24x7 Security, and Lift. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Power Backup",
      "Smart Home",
      "24x7 Security",
      "Lift",
      "Club House",
      "Lake View",
      "EV Charging",
      "Swimming Pool",
      "Conference Room"
    ]
  },
  {
    "id": "prop-296",
    "title": "Premium 3,200 Sq Ft Business Center in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£10.19M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 3200,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious business center situated in the highly coveted residential enclave of St John's Wood, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 3,200 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Club House, River View, 24x7 Security, Gym, and EV Charging. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "River View",
      "24x7 Security",
      "Gym",
      "EV Charging",
      "Children Play Area",
      "Private Terrace",
      "Power Backup",
      "Sea View"
    ]
  },
  {
    "id": "prop-297",
    "title": "Premium 4,400 Sq Ft Business Center in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£26.43M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 4400,
    "description": "Nestled in the prime luxury tier of Mayfair, London, this exquisite business center represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 4,400 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Club House, High Speed Internet, Gym, Private Terrace, and Smart Home. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "High Speed Internet",
      "Gym",
      "Private Terrace",
      "Smart Home",
      "River View",
      "Visitor Parking",
      "Private Garden",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-298",
    "title": "Premium 2,800 Sq Ft Retail Shop in Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£32.08M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2800,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular retail shop is perfectly situated in Weybridge, Surrey. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 2,800 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including River View, Lift, Solar Panels, Fire Safety, and Swimming Pool. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Lift",
      "Solar Panels",
      "Fire Safety",
      "Swimming Pool",
      "24x7 Security",
      "Power Backup",
      "Visitor Parking",
      "Club House"
    ]
  },
  {
    "id": "prop-299",
    "title": "Premium 2,700 Sq Ft Business Center in Holland Park, London",
    "location": "Holland Park, London",
    "price": "£4.76M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2700,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious business center situated in the highly coveted residential enclave of Holland Park, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 2,700 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Swimming Pool, High Speed Internet, Fire Safety, and Club House. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Swimming Pool",
      "High Speed Internet",
      "Fire Safety",
      "Club House"
    ]
  },
  {
    "id": "prop-300",
    "title": "Premium 11,000 Sq Ft Showroom in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£44.93M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 11000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious showroom situated in the highly coveted residential enclave of Wimbledon, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 11,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Solar Panels, Private Garden, Sea View, Children Play Area, and River View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Private Garden",
      "Sea View",
      "Children Play Area",
      "River View"
    ]
  },
  {
    "id": "prop-301",
    "title": "Premium 6,400 Sq Ft Commercial Building in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£7.85M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 6400,
    "description": "Nestled in the prime luxury tier of Edinburgh, Midlothian, this exquisite commercial building represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 6,400 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Fire Safety, 24x7 Security, Lift, Power Backup, and Conference Room. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Fire Safety",
      "24x7 Security",
      "Lift",
      "Power Backup",
      "Conference Room"
    ]
  },
  {
    "id": "prop-302",
    "title": "Premium 6,600 Sq Ft Commercial Building in Richmond, London",
    "location": "Richmond, London",
    "price": "£36.94M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 6600,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious commercial building situated in the highly coveted residential enclave of Richmond, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 6,600 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Visitor Parking, Children Play Area, Power Backup, EV Charging, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Visitor Parking",
      "Children Play Area",
      "Power Backup",
      "EV Charging"
    ]
  },
  {
    "id": "prop-303",
    "title": "Premium 12,400 Sq Ft Showroom in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£4.71M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 12400,
    "description": "Nestled in the prime luxury tier of Wimbledon, London, this exquisite showroom represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 12,400 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Terrace, Swimming Pool, 24x7 Security, Conference Room, and Club House. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Swimming Pool",
      "24x7 Security",
      "Conference Room",
      "Club House",
      "Private Garden",
      "Gym",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-304",
    "title": "Premium 5,800 Sq Ft Business Center in Kensington, London",
    "location": "Kensington, London",
    "price": "£21.18M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 5800,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular business center is perfectly situated in Kensington, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 5,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Power Backup, 24x7 Security, Sea View, Smart Home, and Fire Safety. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "24x7 Security",
      "Sea View",
      "Smart Home",
      "Fire Safety",
      "Private Garden",
      "High Speed Internet",
      "Children Play Area",
      "Lake View",
      "Gym"
    ]
  },
  {
    "id": "prop-305",
    "title": "Premium 2,900 Sq Ft Retail Shop in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£24.56M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2900,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular retail shop is perfectly situated in Notting Hill, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 2,900 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Power Backup, River View, Solar Panels, Smart Home, and Private Terrace. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "River View",
      "Solar Panels",
      "Smart Home",
      "Private Terrace",
      "Private Garden"
    ]
  },
  {
    "id": "prop-306",
    "title": "Premium 9,500 Sq Ft Commercial Building in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£18.91M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 9500,
    "description": "Nestled in the prime luxury tier of Belgravia, London, this exquisite commercial building represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 9,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Conference Room, 24x7 Security, Gym, Visitor Parking, and EV Charging. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "24x7 Security",
      "Gym",
      "Visitor Parking",
      "EV Charging"
    ]
  },
  {
    "id": "prop-307",
    "title": "Premium 7,800 Sq Ft Commercial Building in Marylebone, London",
    "location": "Marylebone, London",
    "price": "£14.59M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 7800,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious commercial building situated in the highly coveted residential enclave of Marylebone, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 7,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, High Speed Internet, Smart Home, 24x7 Security, and Lake View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "High Speed Internet",
      "Smart Home",
      "24x7 Security",
      "Lake View",
      "Visitor Parking",
      "Lift"
    ]
  },
  {
    "id": "prop-308",
    "title": "Premium 8,400 Sq Ft Business Center in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£35.27M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8400,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular business center is perfectly situated in Ascot, Berkshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 8,400 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Garden, Lift, Children Play Area, Visitor Parking, and Smart Home. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Lift",
      "Children Play Area",
      "Visitor Parking",
      "Smart Home",
      "Gym",
      "Lake View",
      "Fire Safety",
      "Power Backup",
      "EV Charging"
    ]
  },
  {
    "id": "prop-309",
    "title": "Premium 13,300 Sq Ft Coworking Office in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£7.54M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 13300,
    "description": "Nestled in the prime luxury tier of Mayfair, London, this exquisite coworking office represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 13,300 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Power Backup, Club House, Conference Room, Swimming Pool, and River View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Club House",
      "Conference Room",
      "Swimming Pool",
      "River View",
      "Gym",
      "High Speed Internet",
      "Smart Home",
      "Private Terrace",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-310",
    "title": "Premium 1,600 Sq Ft Office Space in Marylebone, London",
    "location": "Marylebone, London",
    "price": "£17.14M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 1600,
    "description": "Commanding an enviable and highly sought-after position in Marylebone, London, this bespoke office space showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 1,600 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Solar Panels, Private Terrace, Power Backup, and Lake View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Solar Panels",
      "Private Terrace",
      "Power Backup",
      "Lake View",
      "Conference Room",
      "Lift",
      "Club House",
      "River View"
    ]
  },
  {
    "id": "prop-311",
    "title": "Premium 5,800 Sq Ft Business Center in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£4.82M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 5800,
    "description": "Commanding an enviable and highly sought-after position in Ascot, Berkshire, this bespoke business center showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 5,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Garden, Smart Home, Lift, River View, and Club House. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Smart Home",
      "Lift",
      "River View",
      "Club House",
      "Solar Panels",
      "Private Terrace",
      "Children Play Area",
      "Power Backup"
    ]
  },
  {
    "id": "prop-312",
    "title": "Premium 13,600 Sq Ft Business Center in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£31.30M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 13600,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious business center situated in the highly coveted residential enclave of Belgravia, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 13,600 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Children Play Area, Private Terrace, Lift, and Conference Room. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Children Play Area",
      "Private Terrace",
      "Lift",
      "Conference Room",
      "Power Backup",
      "Smart Home",
      "EV Charging",
      "Sea View",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-313",
    "title": "Premium 13,300 Sq Ft Office Space in St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£31.19M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 13300,
    "description": "Commanding an enviable and highly sought-after position in St John's Wood, London, this bespoke office space showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 13,300 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Conference Room, Private Terrace, Smart Home, Children Play Area, and River View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Private Terrace",
      "Smart Home",
      "Children Play Area",
      "River View",
      "Visitor Parking",
      "High Speed Internet"
    ]
  },
  {
    "id": "prop-314",
    "title": "Premium 6,800 Sq Ft Retail Shop in Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£23.23M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 6800,
    "description": "Commanding an enviable and highly sought-after position in Weybridge, Surrey, this bespoke retail shop showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 6,800 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Visitor Parking, 24x7 Security, Smart Home, Lake View, and Sea View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Visitor Parking",
      "24x7 Security",
      "Smart Home",
      "Lake View",
      "Sea View",
      "Private Terrace",
      "Gym"
    ]
  },
  {
    "id": "prop-315",
    "title": "Premium 8,400 Sq Ft Office Space in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£12.28M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8400,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious office space situated in the highly coveted residential enclave of Cotswolds, Gloucestershire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 8,400 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Children Play Area, Swimming Pool, 24x7 Security, River View, and Sea View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Swimming Pool",
      "24x7 Security",
      "River View",
      "Sea View",
      "Lift",
      "Lake View",
      "Smart Home",
      "Club House"
    ]
  },
  {
    "id": "prop-316",
    "title": "Premium 11,500 Sq Ft Retail Shop in Holland Park, London",
    "location": "Holland Park, London",
    "price": "£32.96M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 11500,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent retail shop in Holland Park, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 11,500 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Sea View, Smart Home, Private Terrace, Private Garden, and Visitor Parking. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Sea View",
      "Smart Home",
      "Private Terrace",
      "Private Garden",
      "Visitor Parking",
      "Children Play Area",
      "Power Backup"
    ]
  },
  {
    "id": "prop-317",
    "title": "Premium 7,900 Sq Ft Showroom in Hampstead, London",
    "location": "Hampstead, London",
    "price": "£34.76M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 7900,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent showroom in Hampstead, London offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 7,900 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Smart Home, Conference Room, Private Terrace, and comprehensive power backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Smart Home",
      "Conference Room",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-318",
    "title": "Premium 12,100 Sq Ft Business Center in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£12.97M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 12100,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular business center is perfectly situated in Ascot, Berkshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 12,100 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Power Backup, Private Garden, Fire Safety, Children Play Area, and Gym. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Private Garden",
      "Fire Safety",
      "Children Play Area",
      "Gym",
      "Solar Panels",
      "Smart Home",
      "EV Charging"
    ]
  },
  {
    "id": "prop-319",
    "title": "Premium 2,200 Sq Ft Business Center in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£13.80M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2200,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent business center in Cotswolds, Gloucestershire offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 2,200 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, Private Garden, Power Backup, and Solar Panels. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "Private Garden",
      "Power Backup",
      "Solar Panels",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-320",
    "title": "Premium 4,800 Sq Ft Office Space in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£27.74M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 4800,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent office space in Ascot, Berkshire offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 4,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Gym, Club House, Conference Room, Smart Home, and Private Garden. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Club House",
      "Conference Room",
      "Smart Home",
      "Private Garden",
      "Lake View",
      "Children Play Area",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-321",
    "title": "Premium 3,800 Sq Ft Commercial Building in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£38.09M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 3800,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious commercial building situated in the highly coveted residential enclave of Mayfair, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 3,800 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Gym, EV Charging, Power Backup, and comprehensive power backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Gym",
      "EV Charging",
      "Power Backup"
    ]
  },
  {
    "id": "prop-322",
    "title": "Premium 2,000 Sq Ft Showroom in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£28.56M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2000,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular showroom is perfectly situated in Edinburgh, Midlothian. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 2,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Private Garden, Gym, Private Terrace, and EV Charging. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Private Garden",
      "Gym",
      "Private Terrace",
      "EV Charging"
    ]
  },
  {
    "id": "prop-323",
    "title": "Premium 9,900 Sq Ft Commercial Building in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£35.51M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 9900,
    "description": "Nestled in the prime luxury tier of Edinburgh, Midlothian, this exquisite commercial building represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 9,900 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Fire Safety, Solar Panels, Private Terrace, Children Play Area, and Private Garden. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Fire Safety",
      "Solar Panels",
      "Private Terrace",
      "Children Play Area",
      "Private Garden",
      "EV Charging"
    ]
  },
  {
    "id": "prop-324",
    "title": "Premium 12,100 Sq Ft Retail Shop in Marylebone, London",
    "location": "Marylebone, London",
    "price": "£27.88M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 12100,
    "description": "Nestled in the prime luxury tier of Marylebone, London, this exquisite retail shop represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 12,100 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including High Speed Internet, 24x7 Security, River View, EV Charging, and Lift. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "24x7 Security",
      "River View",
      "EV Charging",
      "Lift",
      "Swimming Pool",
      "Club House",
      "Lake View",
      "Gym",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-325",
    "title": "Premium 15,300 Sq Ft Business Center in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£30.58M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 15300,
    "description": "Nestled in the prime luxury tier of Chelsea, London, this exquisite business center represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 15,300 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Children Play Area, Fire Safety, 24x7 Security, Visitor Parking, and High Speed Internet. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Fire Safety",
      "24x7 Security",
      "Visitor Parking",
      "High Speed Internet",
      "River View",
      "Gym",
      "EV Charging",
      "Club House"
    ]
  },
  {
    "id": "prop-326",
    "title": "Premium 11,200 Sq Ft Retail Shop in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£32.98M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 11200,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent retail shop in Ascot, Berkshire offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 11,200 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Private Garden, Private Terrace, 24x7 Security, Fire Safety, and Children Play Area. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Private Terrace",
      "24x7 Security",
      "Fire Safety",
      "Children Play Area",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-327",
    "title": "Premium 11,800 Sq Ft Showroom in Belgravia, London",
    "location": "Belgravia, London",
    "price": "£41.67M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 11800,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular showroom is perfectly situated in Belgravia, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 11,800 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Conference Room, Gym, Swimming Pool, 24x7 Security, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Gym",
      "Swimming Pool",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-328",
    "title": "Premium 5,400 Sq Ft Office Space in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£14.12M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 5400,
    "description": "Nestled in the prime luxury tier of Edinburgh, Midlothian, this exquisite office space represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 5,400 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Terrace, Swimming Pool, 24x7 Security, Gym, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Swimming Pool",
      "24x7 Security",
      "Gym"
    ]
  },
  {
    "id": "prop-329",
    "title": "Premium 12,300 Sq Ft Retail Shop in Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£29.19M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 12300,
    "description": "Commanding an enviable and highly sought-after position in Weybridge, Surrey, this bespoke retail shop showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 12,300 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Children Play Area, Conference Room, Swimming Pool, Visitor Parking, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Conference Room",
      "Swimming Pool",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-330",
    "title": "Premium 9,600 Sq Ft Business Center in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£20.38M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 9600,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious business center situated in the highly coveted residential enclave of Mayfair, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 9,600 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, EV Charging, Sea View, Fire Safety, and Private Terrace. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "EV Charging",
      "Sea View",
      "Fire Safety",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-331",
    "title": "Premium 6,100 Sq Ft Coworking Office in Mayfair, London",
    "location": "Mayfair, London",
    "price": "£20.59M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 6100,
    "description": "Commanding an enviable and highly sought-after position in Mayfair, London, this bespoke coworking office showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 6,100 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Lake View, Solar Panels, 24x7 Security, High Speed Internet, and Children Play Area. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "Solar Panels",
      "24x7 Security",
      "High Speed Internet",
      "Children Play Area",
      "Power Backup",
      "Smart Home"
    ]
  },
  {
    "id": "prop-332",
    "title": "Premium 12,900 Sq Ft Coworking Office in Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£44.08M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 12900,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious coworking office situated in the highly coveted residential enclave of Wimbledon, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 12,900 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including EV Charging, High Speed Internet, Private Garden, Lift, and 24x7 Security. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "High Speed Internet",
      "Private Garden",
      "Lift",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-333",
    "title": "Premium 11,200 Sq Ft Retail Shop in Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£40.98M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 11200,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular retail shop is perfectly situated in Edinburgh, Midlothian. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 11,200 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including High Speed Internet, Children Play Area, Sea View, Gym, and Visitor Parking. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1577412647305-79109ff2daee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431540015161-0bf865df25f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "Children Play Area",
      "Sea View",
      "Gym",
      "Visitor Parking",
      "Lake View",
      "River View",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-334",
    "title": "Premium 8,500 Sq Ft Retail Shop in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£5.57M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8500,
    "description": "Commanding an enviable and highly sought-after position in Chelsea, London, this bespoke retail shop showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 8,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Smart Home, Swimming Pool, River View, Sea View, and High Speed Internet. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519491050280-6922874641da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Swimming Pool",
      "River View",
      "Sea View",
      "High Speed Internet"
    ]
  },
  {
    "id": "prop-335",
    "title": "Premium 12,900 Sq Ft Business Center in Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£10.09M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 12900,
    "description": "Commanding an enviable and highly sought-after position in Cotswolds, Gloucestershire, this bespoke business center showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 12,900 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Sea View, Club House, Private Terrace, EV Charging, and Power Backup. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1498409360533-0d4175f90045?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366672149-e5e4b5d4bee7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Sea View",
      "Club House",
      "Private Terrace",
      "EV Charging",
      "Power Backup",
      "Swimming Pool",
      "Gym",
      "Visitor Parking",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-336",
    "title": "Premium 5,800 Sq Ft Coworking Office in Chelsea, London",
    "location": "Chelsea, London",
    "price": "£36.22M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 5800,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious coworking office situated in the highly coveted residential enclave of Chelsea, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 5,800 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Fire Safety, Solar Panels, High Speed Internet, Swimming Pool, and Conference Room. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Fire Safety",
      "Solar Panels",
      "High Speed Internet",
      "Swimming Pool",
      "Conference Room",
      "Children Play Area",
      "Lift"
    ]
  },
  {
    "id": "prop-337",
    "title": "Premium 1,200 Sq Ft Showroom in Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£44.03M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 1200,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious showroom situated in the highly coveted residential enclave of Ascot, Berkshire. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 1,200 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Smart Home, Conference Room, Private Garden, 24x7 Security, and Solar Panels. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-b2a3d934b414?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1562654522-a140641883c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Conference Room",
      "Private Garden",
      "24x7 Security",
      "Solar Panels",
      "Lift",
      "High Speed Internet",
      "EV Charging",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-338",
    "title": "Premium 6,300 Sq Ft Coworking Office in Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£44.98M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 6300,
    "description": "Nestled in the prime luxury tier of Notting Hill, London, this exquisite coworking office represents the absolute pinnacle of contemporary British architectural refinement. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 6,300 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Private Garden, Visitor Parking, Conference Room, and Lift. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1556761175-597c555b7904?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Private Garden",
      "Visitor Parking",
      "Conference Room",
      "Lift"
    ]
  },
  {
    "id": "prop-339",
    "title": "Premium 5,000 Sq Ft Commercial Building in Richmond, London",
    "location": "Richmond, London",
    "price": "£2.48M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 5000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent commercial building in Richmond, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 5,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Fire Safety, Power Backup, Solar Panels, Club House, and Private Terrace. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737711426-302324675402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Fire Safety",
      "Power Backup",
      "Solar Panels",
      "Club House",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-340",
    "title": "Premium 4,900 Sq Ft Showroom in Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£33.39M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 4900,
    "description": "Commanding an enviable and highly sought-after position in Knightsbridge, London, this bespoke showroom showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 4,900 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including High Speed Internet, Private Terrace, Swimming Pool, Lake View, and River View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366783005-5f6e9e31d7d6?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "Private Terrace",
      "Swimming Pool",
      "Lake View",
      "River View",
      "Sea View",
      "Smart Home",
      "Conference Room"
    ]
  },
  {
    "id": "prop-341",
    "title": "Exclusive Dairy Farm at Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£7.06M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 11500,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious dairy farm situated in the highly coveted residential enclave of Wimbledon, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 11,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Power Backup, Conference Room, Club House, Swimming Pool, and Lake View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1529431522365-ad8576c757c9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599839575945-a9b5ae0c26f8?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Conference Room",
      "Club House",
      "Swimming Pool",
      "Lake View",
      "24x7 Security",
      "Private Terrace",
      "Lift",
      "Visitor Parking",
      "Fire Safety",
      "Solar Panels",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-342",
    "title": "Exclusive Farmhouse at Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£6.13M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 87000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious farmhouse situated in the highly coveted residential enclave of Knightsbridge, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 87,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including EV Charging, Swimming Pool, Club House, Conference Room, and Lift. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599839575945-a9b5ae0c26f8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527847263472-a5c396950943?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Swimming Pool",
      "Club House",
      "Conference Room",
      "Lift",
      "Power Backup",
      "Gym",
      "Fire Safety",
      "Children Play Area",
      "Sea View",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-343",
    "title": "Exclusive Agricultural Land at Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£6.54M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 19000,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular agricultural land is perfectly situated in Cotswolds, Gloucestershire. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 19,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Lift, Gym, Sea View, River View, and Solar Panels. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527847263472-a5c396950943?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lift",
      "Gym",
      "Sea View",
      "River View",
      "Solar Panels",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-344",
    "title": "Exclusive Agricultural Land at Hampstead, London",
    "location": "Hampstead, London",
    "price": "£7.03M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 19000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent agricultural land in Hampstead, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 19,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Club House, Private Terrace, Conference Room, Solar Panels, and River View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Private Terrace",
      "Conference Room",
      "Solar Panels",
      "River View",
      "EV Charging",
      "24x7 Security",
      "High Speed Internet"
    ]
  },
  {
    "id": "prop-345",
    "title": "Exclusive Dairy Farm at Chelsea, London",
    "location": "Chelsea, London",
    "price": "£5.75M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 59000,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular dairy farm is perfectly situated in Chelsea, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 59,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, Power Backup, River View, and Gym. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "Power Backup",
      "River View",
      "Gym",
      "Visitor Parking",
      "Children Play Area",
      "Lift",
      "Private Garden",
      "Solar Panels",
      "Lake View",
      "Conference Room"
    ]
  },
  {
    "id": "prop-346",
    "title": "Exclusive Agricultural Land at Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£2.91M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 86000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent agricultural land in Notting Hill, London offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 86,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including River View, Gym, Sea View, Swimming Pool, and Conference Room. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Gym",
      "Sea View",
      "Swimming Pool",
      "Conference Room",
      "Visitor Parking",
      "EV Charging",
      "Smart Home"
    ]
  },
  {
    "id": "prop-347",
    "title": "Exclusive Mango Farm at Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£4.78M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 25000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent mango farm in Weybridge, Surrey offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 25,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, Gym, River View, and Visitor Parking. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504198453319-5ce919bca552?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "River View",
      "Visitor Parking",
      "Children Play Area",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-348",
    "title": "Exclusive Mango Farm at Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£4.90M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 20500,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular mango farm is perfectly situated in Wimbledon, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 20,500 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Gym, Smart Home, Fire Safety, Swimming Pool, and Children Play Area. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1504198453319-5ce919bca552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464207687583-a8256d407876?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529431522365-ad8576c757c9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Smart Home",
      "Fire Safety",
      "Swimming Pool",
      "Children Play Area",
      "24x7 Security",
      "Lake View"
    ]
  },
  {
    "id": "prop-349",
    "title": "Exclusive Dairy Farm at Marylebone, London",
    "location": "Marylebone, London",
    "price": "£869K",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 22000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent dairy farm in Marylebone, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 22,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Solar Panels, High Speed Internet, Gym, Private Terrace, and EV Charging. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1529431522365-ad8576c757c9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599839575945-a9b5ae0c26f8?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "High Speed Internet",
      "Gym",
      "Private Terrace",
      "EV Charging",
      "Club House",
      "Fire Safety",
      "Swimming Pool",
      "River View",
      "Sea View",
      "24x7 Security",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-350",
    "title": "Exclusive Mango Farm at Marylebone, London",
    "location": "Marylebone, London",
    "price": "£1.37M",
    "bedrooms": 1,
    "bathrooms": 1,
    "sqft": 20500,
    "description": "Commanding an enviable and highly sought-after position in Marylebone, London, this bespoke mango farm showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 20,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Lake View, Sea View, Children Play Area, Conference Room, and Power Backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599839575945-a9b5ae0c26f8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527847263472-a5c396950943?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "Sea View",
      "Children Play Area",
      "Conference Room",
      "Power Backup",
      "Smart Home",
      "High Speed Internet",
      "Swimming Pool",
      "24x7 Security",
      "Solar Panels",
      "Club House"
    ]
  },
  {
    "id": "prop-351",
    "title": "Exclusive Organic Farm at Mayfair, London",
    "location": "Mayfair, London",
    "price": "£2.64M",
    "bedrooms": 1,
    "bathrooms": 1,
    "sqft": 44000,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular organic farm is perfectly situated in Mayfair, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 44,000 square feet, the interior configuration features 1 meticulously designed bedrooms along with 1 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Club House, Gym, Lake View, Private Garden, and Sea View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527847263472-a5c396950943?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Gym",
      "Lake View",
      "Private Garden",
      "Sea View",
      "24x7 Security",
      "Conference Room",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-352",
    "title": "Exclusive Organic Farm at Kensington, London",
    "location": "Kensington, London",
    "price": "£7.57M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 75000,
    "description": "Nestled in the prime luxury tier of Kensington, London, this exquisite organic farm represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 75,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Lift, Club House, Children Play Area, Lake View, and 24x7 Security. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lift",
      "Club House",
      "Children Play Area",
      "Lake View",
      "24x7 Security",
      "Visitor Parking",
      "Power Backup",
      "Conference Room",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-353",
    "title": "Exclusive Mango Farm at Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£4.16M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 55000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent mango farm in Oxford, Oxfordshire offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 55,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Power Backup, Children Play Area, Solar Panels, Swimming Pool, and Lake View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Children Play Area",
      "Solar Panels",
      "Swimming Pool",
      "Lake View",
      "Lift",
      "Conference Room",
      "24x7 Security",
      "Club House",
      "EV Charging",
      "Private Garden",
      "High Speed Internet"
    ]
  },
  {
    "id": "prop-354",
    "title": "Exclusive Agricultural Land at Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£2.74M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 40000,
    "description": "Nestled in the prime luxury tier of Bath, Somerset, this exquisite agricultural land represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 40,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Smart Home, Swimming Pool, Club House, Sea View, and Power Backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Swimming Pool",
      "Club House",
      "Sea View",
      "Power Backup",
      "Private Terrace",
      "Gym",
      "Private Garden",
      "Visitor Parking",
      "Conference Room"
    ]
  },
  {
    "id": "prop-355",
    "title": "Exclusive Agricultural Land at Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£4.27M",
    "bedrooms": 1,
    "bathrooms": 1,
    "sqft": 66500,
    "description": "Nestled in the prime luxury tier of Edinburgh, Midlothian, this exquisite agricultural land represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 66,500 square feet, the interior configuration features 1 meticulously designed bedrooms along with 1 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Club House, Private Garden, High Speed Internet, Private Terrace, and Sea View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504198453319-5ce919bca552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464207687583-a8256d407876?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Private Garden",
      "High Speed Internet",
      "Private Terrace",
      "Sea View",
      "Power Backup",
      "Lake View",
      "Children Play Area",
      "Conference Room",
      "River View",
      "Swimming Pool",
      "Solar Panels",
      "Smart Home",
      "Gym"
    ]
  },
  {
    "id": "prop-356",
    "title": "Exclusive Mango Farm at Hampstead, London",
    "location": "Hampstead, London",
    "price": "£979K",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 60000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious mango farm situated in the highly coveted residential enclave of Hampstead, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 60,000 square feet, the interior configuration features 4 meticulously designed bedrooms along with 4 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Solar Panels, River View, Smart Home, Conference Room, and Fire Safety. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1504198453319-5ce919bca552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464207687583-a8256d407876?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529431522365-ad8576c757c9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "River View",
      "Smart Home",
      "Conference Room",
      "Fire Safety",
      "Private Terrace",
      "EV Charging"
    ]
  },
  {
    "id": "prop-357",
    "title": "Exclusive Organic Farm at Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£5.62M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 79000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious organic farm situated in the highly coveted residential enclave of Knightsbridge, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 79,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Smart Home, Lift, Private Garden, River View, and Children Play Area. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1529431522365-ad8576c757c9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599839575945-a9b5ae0c26f8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Lift",
      "Private Garden",
      "River View",
      "Children Play Area",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-358",
    "title": "Exclusive Farmhouse at Richmond, London",
    "location": "Richmond, London",
    "price": "£6.30M",
    "bedrooms": 3,
    "bathrooms": 2,
    "sqft": 84500,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent farmhouse in Richmond, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 84,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, Swimming Pool, Club House, Gym, and Conference Room. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599839575945-a9b5ae0c26f8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527847263472-a5c396950943?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Swimming Pool",
      "Club House",
      "Gym",
      "Conference Room",
      "Visitor Parking",
      "Fire Safety",
      "24x7 Security",
      "Children Play Area",
      "Smart Home",
      "Private Terrace",
      "Lake View"
    ]
  },
  {
    "id": "prop-359",
    "title": "Exclusive Agricultural Land at Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£4.14M",
    "bedrooms": 1,
    "bathrooms": 1,
    "sqft": 77000,
    "description": "Nestled in the prime luxury tier of Oxford, Oxfordshire, this exquisite agricultural land represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 77,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Swimming Pool, River View, Private Garden, Visitor Parking, and Smart Home. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527847263472-a5c396950943?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "River View",
      "Private Garden",
      "Visitor Parking",
      "Smart Home",
      "Club House",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-360",
    "title": "Exclusive Agricultural Land at Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£1.62M",
    "bedrooms": 1,
    "bathrooms": 1,
    "sqft": 53500,
    "description": "Commanding an enviable and highly sought-after position in Notting Hill, London, this bespoke agricultural land showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 53,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Fire Safety, Visitor Parking, River View, EV Charging, and Lift. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Fire Safety",
      "Visitor Parking",
      "River View",
      "EV Charging",
      "Lift",
      "Club House",
      "Children Play Area",
      "Sea View",
      "Smart Home"
    ]
  },
  {
    "id": "prop-361",
    "title": "Exclusive Farmhouse at Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£3.43M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 38000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious farmhouse situated in the highly coveted residential enclave of Oxford, Oxfordshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 38,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Power Backup, Solar Panels, Conference Room, Visitor Parking, and Lake View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Solar Panels",
      "Conference Room",
      "Visitor Parking",
      "Lake View",
      "Private Terrace",
      "Smart Home",
      "River View",
      "Fire Safety",
      "Lift"
    ]
  },
  {
    "id": "prop-362",
    "title": "Exclusive Agricultural Land at Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£5.34M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 87500,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious agricultural land situated in the highly coveted residential enclave of Cotswolds, Gloucestershire. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 87,500 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Power Backup, Smart Home, Solar Panels, and River View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Power Backup",
      "Smart Home",
      "Solar Panels",
      "River View",
      "Private Garden",
      "Lift",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-363",
    "title": "Exclusive Farmhouse at Marylebone, London",
    "location": "Marylebone, London",
    "price": "£6.05M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 70500,
    "description": "Commanding an enviable and highly sought-after position in Marylebone, London, this bespoke farmhouse showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 70,500 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Visitor Parking, EV Charging, Smart Home, Solar Panels, and High Speed Internet. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504198453319-5ce919bca552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464207687583-a8256d407876?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Visitor Parking",
      "EV Charging",
      "Smart Home",
      "Solar Panels",
      "High Speed Internet",
      "Swimming Pool",
      "Private Terrace",
      "Power Backup",
      "Private Garden",
      "Conference Room",
      "Fire Safety",
      "24x7 Security",
      "Club House",
      "Gym"
    ]
  },
  {
    "id": "prop-364",
    "title": "Exclusive Agricultural Land at St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£7.96M",
    "bedrooms": 1,
    "bathrooms": 1,
    "sqft": 89500,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious agricultural land situated in the highly coveted residential enclave of St John's Wood, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 89,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, Private Terrace, Gym, and River View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1504198453319-5ce919bca552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464207687583-a8256d407876?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529431522365-ad8576c757c9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "Private Terrace",
      "Gym",
      "River View",
      "Private Garden",
      "Lift",
      "Children Play Area",
      "EV Charging",
      "Sea View",
      "Lake View",
      "Power Backup",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-365",
    "title": "Exclusive Farmhouse at Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£7.49M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 45500,
    "description": "Commanding an enviable and highly sought-after position in Cotswolds, Gloucestershire, this bespoke farmhouse showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 45,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Gym, Private Terrace, Conference Room, Power Backup, and 24x7 Security. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1529431522365-ad8576c757c9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599839575945-a9b5ae0c26f8?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Private Terrace",
      "Conference Room",
      "Power Backup",
      "24x7 Security",
      "Children Play Area",
      "Swimming Pool",
      "High Speed Internet",
      "Lake View",
      "EV Charging",
      "Fire Safety",
      "Lift",
      "River View",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-366",
    "title": "Exclusive Farmhouse at Richmond, London",
    "location": "Richmond, London",
    "price": "£5.90M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 67000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious farmhouse situated in the highly coveted residential enclave of Richmond, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 67,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including EV Charging, Solar Panels, Club House, Swimming Pool, and Lift. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599839575945-a9b5ae0c26f8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527847263472-a5c396950943?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Solar Panels",
      "Club House",
      "Swimming Pool",
      "Lift",
      "Smart Home",
      "Sea View",
      "Conference Room"
    ]
  },
  {
    "id": "prop-367",
    "title": "Exclusive Dairy Farm at Mayfair, London",
    "location": "Mayfair, London",
    "price": "£5.43M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 45000,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular dairy farm is perfectly situated in Mayfair, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 45,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Terrace, Fire Safety, Power Backup, Visitor Parking, and High Speed Internet. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527847263472-a5c396950943?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Fire Safety",
      "Power Backup",
      "Visitor Parking",
      "High Speed Internet",
      "EV Charging",
      "River View",
      "24x7 Security",
      "Children Play Area",
      "Swimming Pool",
      "Smart Home",
      "Lift",
      "Club House"
    ]
  },
  {
    "id": "prop-368",
    "title": "Exclusive Mango Farm at Belgravia, London",
    "location": "Belgravia, London",
    "price": "£3.66M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 46000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious mango farm situated in the highly coveted residential enclave of Belgravia, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 46,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Conference Room, Swimming Pool, Club House, High Speed Internet, and 24x7 Security. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Swimming Pool",
      "Club House",
      "High Speed Internet",
      "24x7 Security",
      "Sea View",
      "EV Charging",
      "River View",
      "Lift"
    ]
  },
  {
    "id": "prop-369",
    "title": "Exclusive Agricultural Land at Mayfair, London",
    "location": "Mayfair, London",
    "price": "£3.81M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 34500,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent agricultural land in Mayfair, London offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 34,500 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Club House, Power Backup, Smart Home, Lake View, and High Speed Internet. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Power Backup",
      "Smart Home",
      "Lake View",
      "High Speed Internet",
      "Visitor Parking",
      "Children Play Area",
      "EV Charging",
      "Private Garden",
      "Gym",
      "River View",
      "Lift"
    ]
  },
  {
    "id": "prop-370",
    "title": "Exclusive Farmhouse at Belgravia, London",
    "location": "Belgravia, London",
    "price": "£2.02M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 68500,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious farmhouse situated in the highly coveted residential enclave of Belgravia, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 68,500 square feet, the interior configuration features 4 meticulously designed bedrooms along with 4 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Conference Room, Gym, Swimming Pool, Fire Safety, and High Speed Internet. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Gym",
      "Swimming Pool",
      "Fire Safety",
      "High Speed Internet",
      "Private Terrace",
      "River View"
    ]
  },
  {
    "id": "prop-371",
    "title": "Exclusive Farmhouse at Marylebone, London",
    "location": "Marylebone, London",
    "price": "£5.98M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 51000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent farmhouse in Marylebone, London offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 51,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Children Play Area, Power Backup, Gym, High Speed Internet, and Visitor Parking. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504198453319-5ce919bca552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464207687583-a8256d407876?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529431522365-ad8576c757c9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Power Backup",
      "Gym",
      "High Speed Internet",
      "Visitor Parking",
      "Private Terrace",
      "Conference Room"
    ]
  },
  {
    "id": "prop-372",
    "title": "Exclusive Dairy Farm at Mayfair, London",
    "location": "Mayfair, London",
    "price": "£4.87M",
    "bedrooms": 4,
    "bathrooms": 4,
    "sqft": 79500,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent dairy farm in Mayfair, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 79,500 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, Gym, River View, and Lift. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1504198453319-5ce919bca552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464207687583-a8256d407876?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529431522365-ad8576c757c9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "River View",
      "Lift",
      "Children Play Area",
      "Solar Panels",
      "Private Garden"
    ]
  },
  {
    "id": "prop-373",
    "title": "Exclusive Mango Farm at Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£7.63M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 48000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious mango farm situated in the highly coveted residential enclave of Oxford, Oxfordshire. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 48,000 square feet, the interior configuration features 4 meticulously designed bedrooms along with 3 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Solar Panels, Conference Room, Private Terrace, and Club House. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1529431522365-ad8576c757c9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599839575945-a9b5ae0c26f8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Solar Panels",
      "Conference Room",
      "Private Terrace",
      "Club House",
      "Smart Home"
    ]
  },
  {
    "id": "prop-374",
    "title": "Exclusive Farmhouse at Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£4.37M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 79000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious farmhouse situated in the highly coveted residential enclave of Ascot, Berkshire. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 79,000 square feet, the interior configuration features 2 meticulously designed bedrooms along with 2 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Sea View, 24x7 Security, Swimming Pool, Fire Safety, and Gym. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599839575945-a9b5ae0c26f8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527847263472-a5c396950943?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Sea View",
      "24x7 Security",
      "Swimming Pool",
      "Fire Safety",
      "Gym",
      "High Speed Internet",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-375",
    "title": "Exclusive Organic Farm at Marylebone, London",
    "location": "Marylebone, London",
    "price": "£2.49M",
    "bedrooms": 4,
    "bathrooms": 3,
    "sqft": 28500,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular organic farm is perfectly situated in Marylebone, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 28,500 square feet, the interior configuration features 4 meticulously designed bedrooms along with 3 luxurious bathrooms. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Visitor Parking, 24x7 Security, Sea View, Smart Home, and River View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527847263472-a5c396950943?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Visitor Parking",
      "24x7 Security",
      "Sea View",
      "Smart Home",
      "River View",
      "Private Garden",
      "High Speed Internet",
      "Private Terrace",
      "Lift",
      "Children Play Area",
      "EV Charging",
      "Fire Safety",
      "Lake View",
      "Power Backup"
    ]
  },
  {
    "id": "prop-376",
    "title": "Exclusive Mango Farm at Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£7.88M",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 42500,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent mango farm in Bath, Somerset offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 42,500 square feet, the interior configuration features 2 meticulously designed bedrooms along with 1 luxurious bathrooms. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Children Play Area, Power Backup, Sea View, and Visitor Parking. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Children Play Area",
      "Power Backup",
      "Sea View",
      "Visitor Parking",
      "Club House",
      "Fire Safety",
      "Swimming Pool"
    ]
  },
  {
    "id": "prop-377",
    "title": "Exclusive Agricultural Land at Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£1.23M",
    "bedrooms": 1,
    "bathrooms": 1,
    "sqft": 28500,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular agricultural land is perfectly situated in Oxford, Oxfordshire. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 28,500 square feet, the interior configuration features 1 meticulously designed bedrooms along with 1 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including River View, 24x7 Security, Fire Safety, Conference Room, and Power Backup. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "24x7 Security",
      "Fire Safety",
      "Conference Room",
      "Power Backup",
      "Private Terrace",
      "Visitor Parking",
      "Solar Panels",
      "Smart Home",
      "Gym",
      "Club House",
      "Lake View"
    ]
  },
  {
    "id": "prop-378",
    "title": "Exclusive Mango Farm at Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£8.00M",
    "bedrooms": 3,
    "bathrooms": 3,
    "sqft": 69000,
    "description": "Nestled in the prime luxury tier of Notting Hill, London, this exquisite mango farm represents the absolute pinnacle of contemporary British architectural refinement. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 69,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Lake View, Gym, Solar Panels, EV Charging, and Private Terrace. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "Gym",
      "Solar Panels",
      "EV Charging",
      "Private Terrace",
      "Children Play Area",
      "Sea View"
    ]
  },
  {
    "id": "prop-379",
    "title": "Exclusive Farmhouse at Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£1.15M",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqft": 75500,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent farmhouse in Knightsbridge, London offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 75,500 square feet, the interior configuration features 2 meticulously designed bedrooms along with 2 luxurious bathrooms. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Private Garden, Gym, Swimming Pool, 24x7 Security, and Club House. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504198453319-5ce919bca552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464207687583-a8256d407876?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529431522365-ad8576c757c9?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Gym",
      "Swimming Pool",
      "24x7 Security",
      "Club House",
      "Private Terrace",
      "Smart Home",
      "EV Charging",
      "Sea View",
      "Solar Panels",
      "Power Backup",
      "Lift",
      "Children Play Area",
      "Conference Room"
    ]
  },
  {
    "id": "prop-380",
    "title": "Exclusive Mango Farm at Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£4.96M",
    "bedrooms": 1,
    "bathrooms": 1,
    "sqft": 13500,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent mango farm in Edinburgh, Midlothian offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 13,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Gym, High Speed Internet, Smart Home, Lake View, and Power Backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1504198453319-5ce919bca552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464207687583-a8256d407876?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529431522365-ad8576c757c9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "High Speed Internet",
      "Smart Home",
      "Lake View",
      "Power Backup",
      "24x7 Security",
      "Visitor Parking",
      "EV Charging",
      "Conference Room",
      "Sea View",
      "Private Terrace",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-381",
    "title": "Exclusive Factory at Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£22.05M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 28000,
    "description": "Commanding an enviable and highly sought-after position in Notting Hill, London, this bespoke factory showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 28,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Solar Panels, Swimming Pool, Private Terrace, Lake View, and Power Backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605787020668-eb9f07eedf9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Swimming Pool",
      "Private Terrace",
      "Lake View",
      "Power Backup"
    ]
  },
  {
    "id": "prop-382",
    "title": "Exclusive Factory at Holland Park, London",
    "location": "Holland Park, London",
    "price": "£4.99M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 41000,
    "description": "Nestled in the prime luxury tier of Holland Park, London, this exquisite factory represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 41,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Visitor Parking, Solar Panels, River View, EV Charging, and Power Backup. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605787020668-eb9f07eedf9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116493-a026a27e7f78?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Visitor Parking",
      "Solar Panels",
      "River View",
      "EV Charging",
      "Power Backup",
      "Gym",
      "Club House"
    ]
  },
  {
    "id": "prop-383",
    "title": "Exclusive Logistics Center at Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£22.69M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 36000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent logistics center in Ascot, Berkshire offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 36,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Private Garden, EV Charging, River View, Power Backup, and Solar Panels. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116493-a026a27e7f78?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "EV Charging",
      "River View",
      "Power Backup",
      "Solar Panels",
      "Swimming Pool",
      "Sea View",
      "Club House",
      "Gym"
    ]
  },
  {
    "id": "prop-384",
    "title": "Exclusive Warehouse at Mayfair, London",
    "location": "Mayfair, London",
    "price": "£18.50M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 25000,
    "description": "Commanding an enviable and highly sought-after position in Mayfair, London, this bespoke warehouse showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 25,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Conference Room, 24x7 Security, Power Backup, Private Garden, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "24x7 Security",
      "Power Backup",
      "Private Garden"
    ]
  },
  {
    "id": "prop-385",
    "title": "Exclusive Warehouse at Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£1.88M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 20000,
    "description": "Nestled in the prime luxury tier of Oxford, Oxfordshire, this exquisite warehouse represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 20,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including River View, Power Backup, Smart Home, Lift, and Visitor Parking. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb4ec3a96?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565793293-13459c3f101c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Power Backup",
      "Smart Home",
      "Lift",
      "Visitor Parking",
      "Private Terrace",
      "Gym",
      "Conference Room",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-386",
    "title": "Exclusive Industrial Shed at Kensington, London",
    "location": "Kensington, London",
    "price": "£6.69M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 36000,
    "description": "Nestled in the prime luxury tier of Kensington, London, this exquisite industrial shed represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 36,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Club House, Solar Panels, EV Charging, Private Terrace, and Gym. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1587293852726-70cdb4ec3a96?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565793293-13459c3f101c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Club House",
      "Solar Panels",
      "EV Charging",
      "Private Terrace",
      "Gym",
      "Fire Safety",
      "Lake View",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-387",
    "title": "Exclusive Logistics Center at Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£21.38M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 46000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent logistics center in Bath, Somerset offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 46,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Children Play Area, River View, 24x7 Security, Power Backup, and Fire Safety. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "River View",
      "24x7 Security",
      "Power Backup",
      "Fire Safety",
      "Conference Room",
      "Gym",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-388",
    "title": "Exclusive Warehouse at Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£14.41M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 49000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent warehouse in Bath, Somerset offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 49,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, Power Backup, EV Charging, and Visitor Parking. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605787020668-eb9f07eedf9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116493-a026a27e7f78?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "Power Backup",
      "EV Charging",
      "Visitor Parking",
      "24x7 Security",
      "Smart Home"
    ]
  },
  {
    "id": "prop-389",
    "title": "Exclusive Warehouse at Richmond, London",
    "location": "Richmond, London",
    "price": "£22.79M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 31000,
    "description": "Nestled in the prime luxury tier of Richmond, London, this exquisite warehouse represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 31,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Smart Home, Fire Safety, River View, Private Terrace, and 24x7 Security. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116493-a026a27e7f78?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Fire Safety",
      "River View",
      "Private Terrace",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-390",
    "title": "Exclusive Factory at Marylebone, London",
    "location": "Marylebone, London",
    "price": "£1.40M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 43000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent factory in Marylebone, London offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 43,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Conference Room, Club House, Children Play Area, EV Charging, and comprehensive power backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Club House",
      "Children Play Area",
      "EV Charging"
    ]
  },
  {
    "id": "prop-391",
    "title": "Exclusive Warehouse at Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£3.39M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 38000,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular warehouse is perfectly situated in Edinburgh, Midlothian. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 38,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Fire Safety, Conference Room, Private Garden, Smart Home, and Swimming Pool. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb4ec3a96?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Fire Safety",
      "Conference Room",
      "Private Garden",
      "Smart Home",
      "Swimming Pool"
    ]
  },
  {
    "id": "prop-392",
    "title": "Exclusive Warehouse at Marylebone, London",
    "location": "Marylebone, London",
    "price": "£12.95M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 26000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious warehouse situated in the highly coveted residential enclave of Marylebone, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 26,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Gym, High Speed Internet, Club House, Swimming Pool, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1587293852726-70cdb4ec3a96?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565793293-13459c3f101c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "High Speed Internet",
      "Club House",
      "Swimming Pool"
    ]
  },
  {
    "id": "prop-393",
    "title": "Exclusive Logistics Center at Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£24.30M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 14000,
    "description": "Nestled in the prime luxury tier of Oxford, Oxfordshire, this exquisite logistics center represents the absolute pinnacle of contemporary British architectural refinement. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 14,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including High Speed Internet, Swimming Pool, Private Terrace, Lift, and comprehensive power backup. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "Swimming Pool",
      "Private Terrace",
      "Lift"
    ]
  },
  {
    "id": "prop-394",
    "title": "Exclusive Logistics Center at Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£8.12M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 39000,
    "description": "Commanding an enviable and highly sought-after position in Ascot, Berkshire, this bespoke logistics center showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 39,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Children Play Area, Smart Home, Visitor Parking, and comprehensive power backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605787020668-eb9f07eedf9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116493-a026a27e7f78?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Children Play Area",
      "Smart Home",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-395",
    "title": "Exclusive Factory at Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£10.71M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 14000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious factory situated in the highly coveted residential enclave of Oxford, Oxfordshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 14,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including EV Charging, Conference Room, Power Backup, Children Play Area, and River View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116493-a026a27e7f78?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Conference Room",
      "Power Backup",
      "Children Play Area",
      "River View",
      "Private Garden",
      "Solar Panels",
      "Gym"
    ]
  },
  {
    "id": "prop-396",
    "title": "Exclusive Logistics Center at Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£3.47M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 26000,
    "description": "Nestled in the prime luxury tier of Bath, Somerset, this exquisite logistics center represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 26,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Smart Home, Private Garden, River View, Sea View, and Private Terrace. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb4ec3a96?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Private Garden",
      "River View",
      "Sea View",
      "Private Terrace",
      "24x7 Security",
      "Gym"
    ]
  },
  {
    "id": "prop-397",
    "title": "Exclusive Logistics Center at Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£6.74M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent logistics center in Notting Hill, London offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 8,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Solar Panels, Club House, Power Backup, Lift, and Lake View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb4ec3a96?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Club House",
      "Power Backup",
      "Lift",
      "Lake View",
      "Conference Room"
    ]
  },
  {
    "id": "prop-398",
    "title": "Exclusive Logistics Center at Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£3.48M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 14000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent logistics center in Cotswolds, Gloucestershire offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 14,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Conference Room, Lake View, Private Garden, Children Play Area, and Swimming Pool. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1587293852726-70cdb4ec3a96?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565793293-13459c3f101c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Lake View",
      "Private Garden",
      "Children Play Area",
      "Swimming Pool",
      "EV Charging",
      "Gym",
      "Power Backup",
      "Club House"
    ]
  },
  {
    "id": "prop-399",
    "title": "Exclusive Warehouse at Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£15.82M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 30000,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular warehouse is perfectly situated in Oxford, Oxfordshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 30,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Gym, Children Play Area, Solar Panels, Club House, and Private Terrace. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Children Play Area",
      "Solar Panels",
      "Club House",
      "Private Terrace",
      "High Speed Internet",
      "Swimming Pool"
    ]
  },
  {
    "id": "prop-400",
    "title": "Exclusive Industrial Shed at St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£24.39M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 30000,
    "description": "Commanding an enviable and highly sought-after position in St John's Wood, London, this bespoke industrial shed showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 30,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Power Backup, Swimming Pool, Lift, Solar Panels, and Club House. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605787020668-eb9f07eedf9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Swimming Pool",
      "Lift",
      "Solar Panels",
      "Club House"
    ]
  },
  {
    "id": "prop-401",
    "title": "Exclusive Factory at Edinburgh, Midlothian",
    "location": "Edinburgh, Midlothian",
    "price": "£8.89M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 22000,
    "description": "Commanding an enviable and highly sought-after position in Edinburgh, Midlothian, this bespoke factory showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 22,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including EV Charging, High Speed Internet, Children Play Area, 24x7 Security, and Lift. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116493-a026a27e7f78?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "High Speed Internet",
      "Children Play Area",
      "24x7 Security",
      "Lift",
      "Sea View",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-402",
    "title": "Exclusive Warehouse at Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£17.86M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 33000,
    "description": "Commanding an enviable and highly sought-after position in Wimbledon, London, this bespoke warehouse showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 33,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Terrace, Conference Room, Visitor Parking, River View, and Solar Panels. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Conference Room",
      "Visitor Parking",
      "River View",
      "Solar Panels",
      "Smart Home",
      "Private Garden",
      "Gym"
    ]
  },
  {
    "id": "prop-403",
    "title": "Exclusive Warehouse at Mayfair, London",
    "location": "Mayfair, London",
    "price": "£3.52M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 27000,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular warehouse is perfectly situated in Mayfair, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 27,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Smart Home, Private Garden, Solar Panels, Lake View, and comprehensive power backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb4ec3a96?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565793293-13459c3f101c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Private Garden",
      "Solar Panels",
      "Lake View"
    ]
  },
  {
    "id": "prop-404",
    "title": "Exclusive Logistics Center at Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£23.45M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 34000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious logistics center situated in the highly coveted residential enclave of Weybridge, Surrey. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 34,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Children Play Area, Smart Home, Gym, Club House, and Private Garden. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1587293852726-70cdb4ec3a96?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565793293-13459c3f101c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Smart Home",
      "Gym",
      "Club House",
      "Private Garden"
    ]
  },
  {
    "id": "prop-405",
    "title": "Exclusive Warehouse at Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£3.43M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 38000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious warehouse situated in the highly coveted residential enclave of Oxford, Oxfordshire. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 38,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Garden, Solar Panels, Children Play Area, Power Backup, and Smart Home. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Solar Panels",
      "Children Play Area",
      "Power Backup",
      "Smart Home"
    ]
  },
  {
    "id": "prop-406",
    "title": "Exclusive Factory at Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£22.97M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 38000,
    "description": "Nestled in the prime luxury tier of Notting Hill, London, this exquisite factory represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 38,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Smart Home, EV Charging, High Speed Internet, and Private Garden. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605787020668-eb9f07eedf9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116493-a026a27e7f78?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Smart Home",
      "EV Charging",
      "High Speed Internet",
      "Private Garden",
      "Private Terrace",
      "Power Backup",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-407",
    "title": "Exclusive Logistics Center at Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£23.42M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 11000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious logistics center situated in the highly coveted residential enclave of Notting Hill, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 11,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including High Speed Internet, 24x7 Security, Gym, Lake View, and Fire Safety. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116493-a026a27e7f78?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "24x7 Security",
      "Gym",
      "Lake View",
      "Fire Safety",
      "Private Terrace",
      "River View",
      "Power Backup",
      "Sea View"
    ]
  },
  {
    "id": "prop-408",
    "title": "Exclusive Logistics Center at Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£1.34M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 19000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious logistics center situated in the highly coveted residential enclave of Knightsbridge, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 19,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Gym, Club House, Sea View, Children Play Area, and High Speed Internet. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Club House",
      "Sea View",
      "Children Play Area",
      "High Speed Internet"
    ]
  },
  {
    "id": "prop-409",
    "title": "Exclusive Logistics Center at Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£16.09M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 12000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious logistics center situated in the highly coveted residential enclave of Notting Hill, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 12,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including 24x7 Security, Smart Home, River View, Lake View, and High Speed Internet. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb4ec3a96?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565793293-13459c3f101c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "24x7 Security",
      "Smart Home",
      "River View",
      "Lake View",
      "High Speed Internet",
      "Power Backup",
      "Private Garden",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-410",
    "title": "Exclusive Industrial Shed at St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£21.50M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 21000,
    "description": "Commanding an enviable and highly sought-after position in St John's Wood, London, this bespoke industrial shed showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 21,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including River View, Solar Panels, Power Backup, Children Play Area, and High Speed Internet. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1587293852726-70cdb4ec3a96?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565793293-13459c3f101c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Solar Panels",
      "Power Backup",
      "Children Play Area",
      "High Speed Internet",
      "Swimming Pool",
      "Sea View"
    ]
  },
  {
    "id": "prop-411",
    "title": "Exclusive Logistics Center at Marylebone, London",
    "location": "Marylebone, London",
    "price": "£4.31M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 21000,
    "description": "Commanding an enviable and highly sought-after position in Marylebone, London, this bespoke logistics center showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 21,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Power Backup, 24x7 Security, Sea View, Lift, and High Speed Internet. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605787020668-eb9f07eedf9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "24x7 Security",
      "Sea View",
      "Lift",
      "High Speed Internet",
      "Lake View"
    ]
  },
  {
    "id": "prop-412",
    "title": "Exclusive Warehouse at Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£15.86M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 6000,
    "description": "Nestled in the prime luxury tier of Notting Hill, London, this exquisite warehouse represents the absolute pinnacle of contemporary British architectural refinement. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 6,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Smart Home, Power Backup, Conference Room, Swimming Pool, and Sea View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605787020668-eb9f07eedf9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Power Backup",
      "Conference Room",
      "Swimming Pool",
      "Sea View",
      "Private Terrace",
      "Lake View",
      "Club House"
    ]
  },
  {
    "id": "prop-413",
    "title": "Exclusive Logistics Center at St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£14.44M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 14000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious logistics center situated in the highly coveted residential enclave of St John's Wood, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. With an expansive layout measuring 14,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Lift, Conference Room, Visitor Parking, Swimming Pool, and River View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116493-a026a27e7f78?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lift",
      "Conference Room",
      "Visitor Parking",
      "Swimming Pool",
      "River View",
      "Fire Safety",
      "Lake View",
      "Club House",
      "Gym"
    ]
  },
  {
    "id": "prop-414",
    "title": "Exclusive Warehouse at Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£12.98M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 15000,
    "description": "Commanding an enviable and highly sought-after position in Weybridge, Surrey, this bespoke warehouse showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 15,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Lift, 24x7 Security, Swimming Pool, Private Terrace, and Power Backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb4ec3a96?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lift",
      "24x7 Security",
      "Swimming Pool",
      "Private Terrace",
      "Power Backup",
      "EV Charging",
      "Lake View"
    ]
  },
  {
    "id": "prop-415",
    "title": "Exclusive Factory at Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£6.24M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 33000,
    "description": "Nestled in the prime luxury tier of Notting Hill, London, this exquisite factory represents the absolute pinnacle of contemporary British architectural refinement. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 33,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Garden, River View, 24x7 Security, Private Terrace, and Gym. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb4ec3a96?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565793293-13459c3f101c?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "River View",
      "24x7 Security",
      "Private Terrace",
      "Gym",
      "Solar Panels",
      "Power Backup",
      "Sea View"
    ]
  },
  {
    "id": "prop-416",
    "title": "Exclusive Factory at Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£10.72M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 13000,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious factory situated in the highly coveted residential enclave of Wimbledon, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 13,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Gym, Smart Home, Fire Safety, Solar Panels, and Club House. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1587293852726-70cdb4ec3a96?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565793293-13459c3f101c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Smart Home",
      "Fire Safety",
      "Solar Panels",
      "Club House",
      "Private Garden"
    ]
  },
  {
    "id": "prop-417",
    "title": "Exclusive Industrial Shed at Mayfair, London",
    "location": "Mayfair, London",
    "price": "£20.82M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 11000,
    "description": "Commanding an enviable and highly sought-after position in Mayfair, London, this bespoke industrial shed showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 11,000 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Power Backup, Children Play Area, 24x7 Security, High Speed Internet, and Swimming Pool. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605787020668-eb9f07eedf9e?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Children Play Area",
      "24x7 Security",
      "High Speed Internet",
      "Swimming Pool",
      "Club House",
      "Smart Home",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-418",
    "title": "Exclusive Logistics Center at Mayfair, London",
    "location": "Mayfair, London",
    "price": "£3.46M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 7000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent logistics center in Mayfair, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 7,000 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Fire Safety, 24x7 Security, High Speed Internet, River View, and Swimming Pool. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605787020668-eb9f07eedf9e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116493-a026a27e7f78?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Fire Safety",
      "24x7 Security",
      "High Speed Internet",
      "River View",
      "Swimming Pool",
      "Smart Home"
    ]
  },
  {
    "id": "prop-419",
    "title": "Exclusive Factory at Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£14.63M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 15000,
    "description": "Commanding an enviable and highly sought-after position in Wimbledon, London, this bespoke factory showcases exquisite international and local design standards. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 15,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including River View, Children Play Area, Solar Panels, Gym, and Fire Safety. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1624969862644-791f3d9b4a3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116493-a026a27e7f78?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Children Play Area",
      "Solar Panels",
      "Gym",
      "Fire Safety",
      "Conference Room",
      "24x7 Security",
      "EV Charging"
    ]
  },
  {
    "id": "prop-420",
    "title": "Exclusive Factory at Hampstead, London",
    "location": "Hampstead, London",
    "price": "£23.48M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 24000,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular factory is perfectly situated in Hampstead, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 24,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Power Backup, River View, Children Play Area, Gym, and Club House. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "River View",
      "Children Play Area",
      "Gym",
      "Club House",
      "Conference Room"
    ]
  },
  {
    "id": "prop-421",
    "title": "Exclusive Industrial Plot at Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£1.84M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 4800,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent industrial plot in Ascot, Berkshire offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 4,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including EV Charging, Visitor Parking, Club House, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Visitor Parking",
      "Club House"
    ]
  },
  {
    "id": "prop-422",
    "title": "Exclusive Investment Land at St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£500K",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 7000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent investment land in St John's Wood, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 7,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Lake View, Lift, Club House, Children Play Area, and Conference Room. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "Lift",
      "Club House",
      "Children Play Area",
      "Conference Room",
      "Smart Home",
      "Swimming Pool",
      "EV Charging"
    ]
  },
  {
    "id": "prop-423",
    "title": "Exclusive Commercial Plot at St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£889K",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2300,
    "description": "Nestled in the prime luxury tier of St John's Wood, London, this exquisite commercial plot represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 2,300 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including River View, High Speed Internet, Solar Panels, Children Play Area, and Fire Safety. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "High Speed Internet",
      "Solar Panels",
      "Children Play Area",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-424",
    "title": "Exclusive Investment Land at Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£2.74M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 9400,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious investment land situated in the highly coveted residential enclave of Cotswolds, Gloucestershire. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 9,400 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Power Backup, Children Play Area, EV Charging, Private Terrace, and Lake View. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Children Play Area",
      "EV Charging",
      "Private Terrace",
      "Lake View"
    ]
  },
  {
    "id": "prop-425",
    "title": "Exclusive Investment Land at Holland Park, London",
    "location": "Holland Park, London",
    "price": "£3.96M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 10600,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent investment land in Holland Park, London offers an unparalleled lifestyle. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 10,600 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including EV Charging, Solar Panels, Private Garden, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Solar Panels",
      "Private Garden"
    ]
  },
  {
    "id": "prop-426",
    "title": "Exclusive Commercial Plot at Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£1.90M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 1800,
    "description": "Nestled in the prime luxury tier of Knightsbridge, London, this exquisite commercial plot represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Comprising 1,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, Lake View, Lift, and comprehensive power backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "Lake View",
      "Lift"
    ]
  },
  {
    "id": "prop-427",
    "title": "Exclusive Investment Land at St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£4.12M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 11200,
    "description": "Nestled in the prime luxury tier of St John's Wood, London, this exquisite investment land represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 11,200 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including River View, Swimming Pool, Club House, Smart Home, and Gym. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Swimming Pool",
      "Club House",
      "Smart Home",
      "Gym"
    ]
  },
  {
    "id": "prop-428",
    "title": "Exclusive Industrial Plot at Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£3.57M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2900,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent industrial plot in Bath, Somerset offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 2,900 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Private Terrace, Children Play Area, Visitor Parking, Swimming Pool, and Lift. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Children Play Area",
      "Visitor Parking",
      "Swimming Pool",
      "Lift",
      "Conference Room"
    ]
  },
  {
    "id": "prop-429",
    "title": "Exclusive Commercial Plot at Marylebone, London",
    "location": "Marylebone, London",
    "price": "£1.33M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2700,
    "description": "Commanding an enviable and highly sought-after position in Marylebone, London, this bespoke commercial plot showcases exquisite international and local design standards. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 2,700 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Private Terrace, Swimming Pool, Lift, Club House, and Smart Home. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "Swimming Pool",
      "Lift",
      "Club House",
      "Smart Home",
      "Conference Room",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-430",
    "title": "Exclusive Residential Plot at Hampstead, London",
    "location": "Hampstead, London",
    "price": "£1.32M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2400,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious residential plot situated in the highly coveted residential enclave of Hampstead, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 2,400 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Garden, Power Backup, Children Play Area, 24x7 Security, and Visitor Parking. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Power Backup",
      "Children Play Area",
      "24x7 Security",
      "Visitor Parking",
      "Lift",
      "EV Charging"
    ]
  },
  {
    "id": "prop-431",
    "title": "Exclusive Investment Land at Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£3.40M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 10300,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent investment land in Knightsbridge, London offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 10,300 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Visitor Parking, Swimming Pool, Lake View, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Visitor Parking",
      "Swimming Pool",
      "Lake View"
    ]
  },
  {
    "id": "prop-432",
    "title": "Exclusive Industrial Plot at Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£4.54M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 10400,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular industrial plot is perfectly situated in Weybridge, Surrey. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 10,400 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Children Play Area, Solar Panels, Private Garden, River View, and comprehensive power backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Solar Panels",
      "Private Garden",
      "River View"
    ]
  },
  {
    "id": "prop-433",
    "title": "Exclusive Investment Land at Knightsbridge, London",
    "location": "Knightsbridge, London",
    "price": "£4.04M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 9200,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious investment land situated in the highly coveted residential enclave of Knightsbridge, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 9,200 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Gym, Club House, Fire Safety, 24x7 Security, and Sea View. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Club House",
      "Fire Safety",
      "24x7 Security",
      "Sea View"
    ]
  },
  {
    "id": "prop-434",
    "title": "Exclusive Investment Land at St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£1.12M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 6600,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious investment land situated in the highly coveted residential enclave of St John's Wood, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 6,600 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Power Backup, Solar Panels, EV Charging, Private Garden, and Swimming Pool. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Solar Panels",
      "EV Charging",
      "Private Garden",
      "Swimming Pool",
      "High Speed Internet",
      "Visitor Parking",
      "Gym"
    ]
  },
  {
    "id": "prop-435",
    "title": "Exclusive Commercial Plot at Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£3.92M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 4600,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious commercial plot situated in the highly coveted residential enclave of Bath, Somerset. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 4,600 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Power Backup, River View, Swimming Pool, and comprehensive power backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "River View",
      "Swimming Pool"
    ]
  },
  {
    "id": "prop-436",
    "title": "Exclusive Commercial Plot at Cotswolds, Gloucestershire",
    "location": "Cotswolds, Gloucestershire",
    "price": "£2.42M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8800,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular commercial plot is perfectly situated in Cotswolds, Gloucestershire. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Comprising 8,800 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Club House, Fire Safety, Private Terrace, and High Speed Internet. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Club House",
      "Fire Safety",
      "Private Terrace",
      "High Speed Internet",
      "River View",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-437",
    "title": "Exclusive Residential Plot at Wimbledon, London",
    "location": "Wimbledon, London",
    "price": "£396K",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 1900,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular residential plot is perfectly situated in Wimbledon, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. With an expansive layout measuring 1,900 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, Swimming Pool, Club House, Conference Room, and Gym. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Swimming Pool",
      "Club House",
      "Conference Room",
      "Gym",
      "Smart Home",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-438",
    "title": "Exclusive Commercial Plot at Belgravia, London",
    "location": "Belgravia, London",
    "price": "£2.95M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 4900,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent commercial plot in Belgravia, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 4,900 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Power Backup, Smart Home, Private Garden, Lift, and Sea View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Smart Home",
      "Private Garden",
      "Lift",
      "Sea View",
      "Solar Panels",
      "Conference Room",
      "Lake View"
    ]
  },
  {
    "id": "prop-439",
    "title": "Exclusive Industrial Plot at Mayfair, London",
    "location": "Mayfair, London",
    "price": "£1.75M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 10100,
    "description": "Nestled in the prime luxury tier of Mayfair, London, this exquisite industrial plot represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. With an expansive layout measuring 10,100 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Lake View, Private Garden, Visitor Parking, Fire Safety, and High Speed Internet. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lake View",
      "Private Garden",
      "Visitor Parking",
      "Fire Safety",
      "High Speed Internet",
      "24x7 Security",
      "Swimming Pool"
    ]
  },
  {
    "id": "prop-440",
    "title": "Exclusive Investment Land at Richmond, London",
    "location": "Richmond, London",
    "price": "£3.17M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2100,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious investment land situated in the highly coveted residential enclave of Richmond, London. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. Spanning a vast internal area of approximately 2,100 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Private Garden, Children Play Area, River View, and comprehensive power backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Children Play Area",
      "River View"
    ]
  },
  {
    "id": "prop-441",
    "title": "Exclusive Industrial Plot at Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£2.01M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8200,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent industrial plot in Ascot, Berkshire offers an unparalleled lifestyle. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 8,200 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Lift, River View, Swimming Pool, Sea View, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Lift",
      "River View",
      "Swimming Pool",
      "Sea View"
    ]
  },
  {
    "id": "prop-442",
    "title": "Exclusive Commercial Plot at Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£1.04M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 9200,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious commercial plot situated in the highly coveted residential enclave of Oxford, Oxfordshire. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 9,200 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Private Garden, Lake View, Club House, Gym, and Sea View. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Lake View",
      "Club House",
      "Gym",
      "Sea View",
      "Smart Home",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-443",
    "title": "Exclusive Residential Plot at Oxford, Oxfordshire",
    "location": "Oxford, Oxfordshire",
    "price": "£4.53M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 7300,
    "description": "Commanding an enviable and highly sought-after position in Oxford, Oxfordshire, this bespoke residential plot showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 7,300 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, EV Charging, Smart Home, 24x7 Security, and Conference Room. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "EV Charging",
      "Smart Home",
      "24x7 Security",
      "Conference Room",
      "Visitor Parking"
    ]
  },
  {
    "id": "prop-444",
    "title": "Exclusive Investment Land at Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£4.87M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 1500,
    "description": "Nestled in the prime luxury tier of Weybridge, Surrey, this exquisite investment land represents the absolute pinnacle of contemporary British architectural refinement. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 1,500 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Children Play Area, Gym, Lift, and comprehensive power backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Children Play Area",
      "Gym",
      "Lift"
    ]
  },
  {
    "id": "prop-445",
    "title": "Exclusive Industrial Plot at Holland Park, London",
    "location": "Holland Park, London",
    "price": "£1.43M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 7000,
    "description": "Commanding an enviable and highly sought-after position in Holland Park, London, this bespoke industrial plot showcases exquisite international and local design standards. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 7,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Fire Safety, Gym, Visitor Parking, Club House, and Solar Panels. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Fire Safety",
      "Gym",
      "Visitor Parking",
      "Club House",
      "Solar Panels"
    ]
  },
  {
    "id": "prop-446",
    "title": "Exclusive Industrial Plot at Weybridge, Surrey",
    "location": "Weybridge, Surrey",
    "price": "£3.29M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 6800,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular industrial plot is perfectly situated in Weybridge, Surrey. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 6,800 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Fire Safety, Private Garden, Children Play Area, Lake View, and Swimming Pool. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Fire Safety",
      "Private Garden",
      "Children Play Area",
      "Lake View",
      "Swimming Pool",
      "24x7 Security",
      "Conference Room",
      "Power Backup"
    ]
  },
  {
    "id": "prop-447",
    "title": "Exclusive Commercial Plot at Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£497K",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2400,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular commercial plot is perfectly situated in Ascot, Berkshire. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 2,400 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Solar Panels, Private Terrace, Swimming Pool, Lake View, and 24x7 Security. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "Private Terrace",
      "Swimming Pool",
      "Lake View",
      "24x7 Security",
      "High Speed Internet",
      "Club House"
    ]
  },
  {
    "id": "prop-448",
    "title": "Exclusive Industrial Plot at Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£1.82M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 5400,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious industrial plot situated in the highly coveted residential enclave of Notting Hill, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Comprising 5,400 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Power Backup, Children Play Area, Fire Safety, and comprehensive power backup. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Power Backup",
      "Children Play Area",
      "Fire Safety"
    ]
  },
  {
    "id": "prop-449",
    "title": "Exclusive Industrial Plot at Kensington, London",
    "location": "Kensington, London",
    "price": "£2.93M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2400,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious industrial plot situated in the highly coveted residential enclave of Kensington, London. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Comprising 2,400 square feet of refined space, this property delivers a highly functional footprint layout perfect for modern operational requirements. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including Gym, Visitor Parking, Sea View, River View, and Children Play Area. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Gym",
      "Visitor Parking",
      "Sea View",
      "River View",
      "Children Play Area",
      "Club House"
    ]
  },
  {
    "id": "prop-450",
    "title": "Exclusive Investment Land at Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£4.38M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 2800,
    "description": "Nestled in the prime luxury tier of Bath, Somerset, this exquisite investment land represents the absolute pinnacle of contemporary British architectural refinement. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 2,800 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Residents will appreciate immediate connectivity to premier UK educational institutions, state-of-the-art medical private clinics, high-end boutique shopping, and major central business districts. This premier property stands fully equipped with top-tier amenities including High Speed Internet, Swimming Pool, Visitor Parking, Smart Home, and Club House. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "High Speed Internet",
      "Swimming Pool",
      "Visitor Parking",
      "Smart Home",
      "Club House",
      "Sea View",
      "24x7 Security"
    ]
  },
  {
    "id": "prop-451",
    "title": "Exclusive Investment Land at St John's Wood, London",
    "location": "St John's Wood, London",
    "price": "£3.63M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 4700,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious investment land situated in the highly coveted residential enclave of St John's Wood, London. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 4,700 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including EV Charging, Private Garden, Power Backup, Private Terrace, and comprehensive power backup. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "EV Charging",
      "Private Garden",
      "Power Backup",
      "Private Terrace"
    ]
  },
  {
    "id": "prop-452",
    "title": "Exclusive Residential Plot at Marylebone, London",
    "location": "Marylebone, London",
    "price": "£1.76M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8200,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent residential plot in Marylebone, London offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 8,200 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including River View, Private Garden, Private Terrace, Power Backup, and comprehensive power backup. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "River View",
      "Private Garden",
      "Private Terrace",
      "Power Backup"
    ]
  },
  {
    "id": "prop-453",
    "title": "Exclusive Investment Land at Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£2.50M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 7600,
    "description": "Designed for discerning investors and private buyers seeking premium real estate assets, this spectacular investment land is perfectly situated in Notting Hill, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 7,600 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Swimming Pool, Fire Safety, Club House, Smart Home, and Gym. Representing a rare market offering, early viewing is highly advised to fully appreciate the remarkable attention to detail and unmatched lifestyle value. ",
    "images": [
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Swimming Pool",
      "Fire Safety",
      "Club House",
      "Smart Home",
      "Gym",
      "Sea View",
      "Children Play Area"
    ]
  },
  {
    "id": "prop-454",
    "title": "Exclusive Investment Land at Ascot, Berkshire",
    "location": "Ascot, Berkshire",
    "price": "£385K",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 7300,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent investment land in Ascot, Berkshire offers an unparalleled lifestyle. Every corner of this property has been carefully curated, showcasing an elegant neutral design palette, handcrafted joinery, and modern ambient recessed lighting layouts. With an expansive layout measuring 7,300 sq ft, the design incorporates abundant storage, dedicated high-speed utility lines, and flexible working zones. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Private Terrace, 24x7 Security, Sea View, Conference Room, and Swimming Pool. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Terrace",
      "24x7 Security",
      "Sea View",
      "Conference Room",
      "Swimming Pool",
      "EV Charging"
    ]
  },
  {
    "id": "prop-455",
    "title": "Exclusive Investment Land at Notting Hill, London",
    "location": "Notting Hill, London",
    "price": "£3.50M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8800,
    "description": "Commanding an enviable and highly sought-after position in Notting Hill, London, this bespoke investment land showcases exquisite international and local design standards. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 8,800 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Smart Home, Private Terrace, Private Garden, and comprehensive power backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Smart Home",
      "Private Terrace",
      "Private Garden"
    ]
  },
  {
    "id": "prop-456",
    "title": "Exclusive Residential Plot at Bath, Somerset",
    "location": "Bath, Somerset",
    "price": "£3.10M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 4000,
    "description": "A masterclass in modern spatial luxury and traditional design values, this magnificent residential plot in Bath, Somerset offers an unparalleled lifestyle. The architecture emphasizes light and space, utilizing an open-plan lifestyle layout with high ceilings, historic plaster cornices, and premium brushed brass fixtures. Spanning a vast internal area of approximately 4,000 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Conference Room, Sea View, Private Terrace, River View, and Children Play Area. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Conference Room",
      "Sea View",
      "Private Terrace",
      "River View",
      "Children Play Area",
      "EV Charging"
    ]
  },
  {
    "id": "prop-457",
    "title": "Exclusive Industrial Plot at Mayfair, London",
    "location": "Mayfair, London",
    "price": "£3.38M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 4300,
    "description": "Presenting a truly exceptional opportunity to acquire this prestigious industrial plot situated in the highly coveted residential enclave of Mayfair, London. Boasting a striking contemporary façade that respects local conservation standards, the property incorporates sustainable thermal insulation and top-tier smart automation systems. Spanning a vast internal area of approximately 4,300 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Enjoying stellar neighborhood safety and tranquility, the property stands within walking distance of beautifully manicured public parks, Michelin-starred restaurants, and historic squares. This premier property stands fully equipped with top-tier amenities including Private Garden, Club House, Gym, and comprehensive power backup. With its combination of premier location, robust construct quality, and high future asset yield, this property stands as a highly recommended investment. ",
    "images": [
      "https://images.unsplash.com/photo-1528183429752-a97d22849f57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Private Garden",
      "Club House",
      "Gym"
    ]
  },
  {
    "id": "prop-458",
    "title": "Exclusive Residential Plot at Hampstead, London",
    "location": "Hampstead, London",
    "price": "£1.88M",
    "bedrooms": 0,
    "bathrooms": 0,
    "sqft": 8300,
    "description": "Nestled in the prime luxury tier of Hampstead, London, this exquisite residential plot represents the absolute pinnacle of contemporary British architectural refinement. Crafted with premium specifications, the property features Italian marble tile bathrooms, engineered timber herringbone flooring, high-performance acoustic glass windows, and bespoke smart systems. Spanning a vast internal area of approximately 8,300 square feet, the interior configuration features dynamic multi-functional open spaces along with premium support facilities. Perfectly connected, this location offers seamless transit options to Heathrow Airport, fast national express railway lines, and elite private member recreation clubs. This premier property stands fully equipped with top-tier amenities including Solar Panels, High Speed Internet, Sea View, Swimming Pool, and Conference Room. This is an outstanding lifestyle choice and a blue-chip asset ideal for families and corporate buyers seeking the very finest in luxury and convenience. ",
    "images": [
      "https://images.unsplash.com/photo-1521575107034-ee0fa3a2a2a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    "features": [
      "Solar Panels",
      "High Speed Internet",
      "Sea View",
      "Swimming Pool",
      "Conference Room"
    ]
  }
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find(p => p.id === id);
}
