export const PALETTES = [
  {
    id: 'charcoal',
    name: 'Charcoal Slate',
    subtitle: 'The 3 AM All-Nighter',
    hex: '#1E232E',
    borderHex: '#3D4659',
    accentColor: '#94A3B8',
    description: 'Ultra-dark matte grey that hides keyboard dust, pen ink & ambient room glare.',
    badge: 'Most Popular'
  },
  {
    id: 'midnight',
    name: 'Midnight Navy',
    subtitle: 'Deep Focus Indigo',
    hex: '#131D33',
    borderHex: '#253B66',
    accentColor: '#60A5FA',
    description: 'Calming dark indigo inspired by late night coding and chill lo-fi beats.',
    badge: 'Coder Favorite'
  },
  {
    id: 'forest',
    name: 'Forest Moss',
    subtitle: 'Zen Pine Minimalist',
    hex: '#172B20',
    borderHex: '#2E543F',
    accentColor: '#34D399',
    description: 'Deep earthy botanical green for maximum relaxation after grueling exam weeks.',
    badge: 'Cozy Pick'
  },
  {
    id: 'terracotta',
    name: 'Terracotta Rust',
    subtitle: 'Maggi-Proof Clay',
    hex: '#4A231A',
    borderHex: '#7C3A2D',
    accentColor: '#FB923C',
    description: 'Warm rustic amber designed specifically to mask spicy Maggi and masala chai stains.',
    badge: '100% Maggi-Proof'
  },
  {
    id: 'espresso',
    name: 'Warm Espresso',
    subtitle: 'Cafe Noir Roast',
    hex: '#2B1E19',
    borderHex: '#523A31',
    accentColor: '#D97706',
    description: 'Rich dark roasted coffee tone that elevates bland hostel rooms to studio aesthetics.',
    badge: 'Aesthetic'
  },
  {
    id: 'cyberneon',
    name: 'Cyber Matrix',
    subtitle: 'Neo Tokyo Dark Mode',
    hex: '#0D1117',
    borderHex: '#10B981',
    accentColor: '#10B981',
    description: 'Stealth dark fabric with electric lime accents that pop under screen glow.',
    badge: 'Limited Drop'
  },
  {
    id: 'slate',
    name: 'Concrete Grey',
    subtitle: 'Industrial Minimal',
    hex: '#262E3D',
    borderHex: '#485673',
    accentColor: '#CBD5E1',
    description: 'Clean architectural neutral tone. Super crisp, modern and zero-maintenance.',
    badge: 'Clean Look'
  }
];

export const BED_SIZES = [
  {
    id: 'hostel-single',
    name: 'Hostel Single Cot',
    dimensions: '36" × 75"',
    thickness: 'Fits up to 8" mattress',
    idealFor: 'Standard Government & Private Hostel Iron/Wooden Cots (IITs, NITs, DU, BITS, etc.)',
    priceMultiplier: 1.0,
    recommended: true
  },
  {
    id: 'pg-extended',
    name: 'PG Single Wide / Twin',
    dimensions: '36" × 78"',
    thickness: 'Fits up to 10" mattress',
    idealFor: 'Stanza Living, Zolo, Oxfordcaps, Boston Living, & Modern PG setups',
    priceMultiplier: 1.05,
    recommended: false
  },
  {
    id: 'twin-bunk',
    name: 'Hostel Bunk Bed',
    dimensions: '39" × 75"',
    thickness: 'Deep 360° Elastic grip',
    idealFor: 'Upper & Lower Bunk Beds with tight railings — guaranteed zero untucking',
    priceMultiplier: 1.0,
    recommended: false
  },
  {
    id: 'double-queen',
    name: 'Flat / 1BHK Double',
    dimensions: '60" × 78"',
    thickness: 'Fits up to 12" mattress',
    idealFor: 'Shared flats, rented apartments, master bedrooms & Queen mattresses',
    priceMultiplier: 1.45,
    recommended: false
  }
];

export const KIT_TIERS = [
  {
    id: 'starter',
    name: 'Freshers Starter Kit',
    tagline: 'The essential daily base',
    includes: [
      '1x 360° Snug-Grip Fitted Bedsheet',
      '1x Hydrophobic Stain-Resistant Pillow Cover',
      '1x Breathable Cotton Storage Pouch'
    ],
    basePrice: 899,
    originalPrice: 1499,
    discount: '40% OFF'
  },
  {
    id: 'classic',
    name: 'All-Nighter Classic Kit',
    tagline: 'Our #1 Student Bestseller',
    includes: [
      '1x 360° Snug-Grip Fitted Bedsheet',
      '2x Stain-Resistant Pillow Covers',
      '1x All-Weather Cloud Comforter / Blanket',
      '1x Compact Hostel Packing Bag'
    ],
    basePrice: 1599,
    originalPrice: 2899,
    discount: '45% OFF',
    popular: true
  },
  {
    id: 'pro',
    name: 'The Grad Pro Luxury Kit',
    tagline: 'The ultimate survival bunker package',
    includes: [
      '1x 360° Snug-Grip Fitted Bedsheet',
      '2x Stain-Resistant Pillow Covers',
      '1x All-Weather Cloud Comforter / Blanket',
      '1x 100% Waterproof Anti-Dustmite Mattress Shield',
      '1x Bedside Maggi, Phone & Laptop Caddy',
      '1x Heavy-Duty Hostel Mesh Laundry Bag'
    ],
    basePrice: 2299,
    originalPrice: 4299,
    discount: '47% OFF',
    bestValue: true
  }
];

export const ADDONS = [
  {
    id: 'protector',
    name: 'Waterproof Mattress Shield',
    description: '360° barrier against mess liquids, dust mites & hostel mattress mystery stains',
    price: 499,
    originalPrice: 899,
    icon: 'ShieldCheck',
    badge: 'Essential'
  },
  {
    id: 'caddy',
    name: 'Bedside Maggi & Snack Caddy',
    description: 'Hangable 4-pocket organizer for midnight snacks, phone, earphones & water bottle',
    price: 349,
    originalPrice: 599,
    icon: 'Pocket',
    badge: 'Student Hack'
  },
  {
    id: 'pillow',
    name: 'Hostel Ortho-Comfort Pillow',
    description: 'Zero-flatten microfiber bounce engineered for long study hours sitting on bed',
    price: 449,
    originalPrice: 799,
    icon: 'Cloud',
    badge: 'Neck Relief'
  },
  {
    id: 'lamp',
    name: 'Clip-On Warm Reading LED',
    description: '3-tier warm dimming light with USB rechargeable battery for late night study without waking roommate',
    price: 299,
    originalPrice: 499,
    icon: 'Zap',
    badge: 'Roommate Friendly'
  },
  {
    id: 'pillowcases_extra',
    name: 'Extra 2x Satin Pillowcases',
    description: 'Spare silk-touch acne defense pillowcases so you always have fresh linen',
    price: 249,
    originalPrice: 449,
    icon: 'Layers',
    badge: 'Acne Shield'
  }
];

export const CATEGORIES = [
  { id: 'all', label: '🔥 All Drops', icon: 'Flame' },
  { id: 'kits', label: '⚡ All-In-One Bedkits', icon: 'Sparkles' },
  { id: 'bedsheets', label: '🛏️ Badass Bedsheets', icon: 'Layers' },
  { id: 'blankets', label: '☁️ Cloud & Weighted Blankets', icon: 'Cloud' },
  { id: 'pillows', label: '💤 Slogan & Satin Pillowcases', icon: 'Zap' },
  { id: 'hacks', label: '🎒 Dorm Hacks & Gear', icon: 'ShieldCheck' }
];

export const CURATED_PRODUCTS = [
  // ==========================================
  // CATEGORY 1: ALL-IN-ONE BEDKITS
  // ==========================================
  {
    id: 'maggi-master-kit',
    category: 'kits',
    title: 'The 3 AM Maggi Master Bedkit',
    subtitle: 'Engineered for late-night curry soup, tea drops & snack spills',
    tier: 'classic',
    colorId: 'terracotta',
    sizeId: 'hostel-single',
    price: 1499,
    originalPrice: 2699,
    rating: 4.95,
    reviewsCount: 2450,
    stockUrgency: 'Selling fast in Delhi NCR hostels',
    tags: ['100% Spill Wipe', 'Hostel Cot Fit', 'Warm Cozy Hue'],
    highlights: [
      'Oleophobic nano-barrier repels oily noodles & chai broth in seconds',
      'Terracotta Rust hue blends naturally with ambient warm desk lamps',
      'High-stretch 360° elastic hem stays locked onto springy hostel cots',
      'Ultra-soft 400 TC breathable poly-cotton hybrid for all seasons'
    ],
    specs: {
      fabric: 'Nanotech SpillShield™ Poly-Cotton Weave (400 Thread Count)',
      fill: 'Hypoallergenic 220 GSM Micro-Air Cloud Polyfill (Blanket)',
      wash: 'Machine Wash / Bucket Hand Wash Safe in Cold Water',
      warranty: '1-Year Snug Elastic & Colorfast Guarantee'
    },
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80'
    ],
    bestseller: true
  },
  {
    id: 'midnight-coder-kit',
    category: 'kits',
    title: 'The Midnight Coder Bedkit',
    subtitle: 'Deep focus navy palette built for dark-mode screens & long grinds',
    tier: 'classic',
    colorId: 'midnight',
    sizeId: 'hostel-single',
    price: 1599,
    originalPrice: 2899,
    rating: 5.0,
    reviewsCount: 3120,
    stockUrgency: 'Top pick at IIT Bombay & BITS',
    tags: ['Blue-Light Tone', 'Wrinkle-Free', 'Quick Dry'],
    highlights: [
      'Mood-calming Midnight Indigo tone reduces eye fatigue during all-nighters',
      'Hydrophobic barrier pearls up spilled cold brew, Red Bull & energy drinks',
      'Micro-brushed texture feels cool in humid summers and snug in winter ACs',
      'Anti-wrinkle tech keeps your bed looking crisp on surprise warden rounds'
    ],
    specs: {
      fabric: 'HydroGrip™ Microfiber-Air Blend with StainShield™ Layer',
      fill: '240 GSM All-Season Air-Cloud Fiberfill',
      wash: 'Cold Machine Wash, Quick 20-min Line Dry',
      warranty: '1-Year Anti-Fade & Elastic Warranty'
    },
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1000&q=80'
    ],
    bestseller: true
  },
  {
    id: 'roomie-double-wingman',
    category: 'kits',
    title: 'The Roomie Twin-Bed Survival Bundle',
    subtitle: '2 Complete Bedkits for you & your roommate with extra 20% savings',
    tier: 'classic',
    colorId: 'slate',
    sizeId: 'hostel-single',
    price: 2699,
    originalPrice: 5499,
    rating: 4.93,
    reviewsCount: 3890,
    stockUrgency: 'Save ₹1,350/person with split',
    tags: ['Roommate Deal', '2x Full Sets', 'Split Bill Friendly'],
    highlights: [
      'Includes 2 fitted sheets, 4 pillow covers & 2 all-season comforters',
      'Choose different or matching colors for both beds in customizer',
      'Split with your roommate for only ₹1,349 ($16) per person!',
      'Includes free hostel delivery right to your hostel warden gate'
    ],
    specs: {
      fabric: '2x Complete Full Kits with Nanotech StainShield™',
      fill: '2x 220 GSM Cloud Comforters Included',
      wash: 'Quick-dry fabric dries in 30 mins on hostel balcony ropes',
      warranty: '1-Year Full Coverage for Both Kits'
    },
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80'
    ],
    roommateDeal: true
  },
  {
    id: 'academic-weapon-pro-suite',
    category: 'kits',
    title: 'The 4.0 GPA Academic Weapon Suite',
    subtitle: 'Full Bedkit + Weighted Blanket + Silk Pillowcase + Reading Lamp',
    tier: 'pro',
    colorId: 'charcoal',
    sizeId: 'hostel-single',
    price: 2399,
    originalPrice: 4699,
    rating: 4.98,
    reviewsCount: 1420,
    stockUrgency: 'Only 8 bundles left in stock',
    tags: ['All-In-One Pro', 'Deep Sleep', 'Study Ready'],
    highlights: [
      'The ultimate hostel survival arsenal: Bedkit, Bedside Caddy, Lamp & Shield',
      'Satin pillowcases prevent midnight screen break-outs and sleep lines',
      'Rechargeable 3-tier reading lamp lets you cram without waking roommates',
      'Heavy-duty mattress shield protects against dubious hostel spring mattresses'
    ],
    specs: {
      fabric: 'High-Density Micro-Twill 450 TC with NanoGuard™',
      fill: 'Dual-Layer 260 GSM Thermal Air-Puff Comforter',
      wash: 'Bucket wash safe & anti-shrinking test passed',
      warranty: '2-Year Unconditional Stitch Warranty'
    },
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'freshers-starter-pack',
    category: 'kits',
    title: 'The Freshers Move-In Starter Kit',
    subtitle: '1x 360° Fitted Sheet + 1x Stain Pillow Cover + Travel Pouch',
    tier: 'starter',
    colorId: 'forest',
    sizeId: 'hostel-single',
    price: 899,
    originalPrice: 1499,
    rating: 4.88,
    reviewsCount: 1980,
    stockUrgency: 'Bestseller for Freshers Week',
    tags: ['Pocket Friendly', 'Under ₹900', 'Essential Base'],
    highlights: [
      'The budget-friendly move-in base layer that beats messy hostel cotton',
      '360° elastic wrap hugs iron cot corners tightly without slipping',
      'Packs down into a small compact drawstring travel pouch',
      'Stain-resistant fabric means fewer trips to the scary campus laundry'
    ],
    specs: {
      fabric: 'NanoWeave™ Breathable Poly-Cotton (350 TC)',
      fill: 'N/A (Fitted Sheet + Pillow Cover Base)',
      wash: 'Machine wash or quick bucket spin',
      warranty: '1-Year Elastic Grip Guarantee'
    },
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80'
    ]
  },

  // ==========================================
  // CATEGORY 2: BADASS BEDSHEETS
  // ==========================================
  {
    id: 'cyber-grid-fitted-sheet',
    category: 'bedsheets',
    title: 'Matrix Cyber-Grid 360° Fitted Bedsheet',
    subtitle: 'Zero-untuck deep elastic sheet with subtle cyber wireframe aesthetic',
    colorId: 'cyberneon',
    sizeId: 'hostel-single',
    price: 649,
    originalPrice: 1199,
    rating: 4.96,
    reviewsCount: 1840,
    stockUrgency: 'TikTok Viral Bedding',
    tags: ['Zero Untuck', 'Cyberpunk Grid', 'Anti-Pill'],
    highlights: [
      'Extra deep 360° elastic bands that physically cannot untuck or pop off',
      'Matte neo-black with toxic lime micro-grid lines that pop in LED dorm setups',
      'Hydrophobic SpillShield™ treatment repels soda, tea, and energy drink drips',
      'Ultra-smooth cooling weave stays breathable during stifling summer exam blocks'
    ],
    specs: {
      fabric: 'NanoTwill™ High-Tension Poly-Cotton (400 TC)',
      elastic: 'Heavy-Duty 360° Silicone-Reinforced Gripper Hem',
      wash: 'Cold Machine Wash / Line Dry in 20 Mins',
      warranty: 'Lifetime Zero-Untuck Guarantee'
    },
    images: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80'
    ],
    bestseller: true
  },
  {
    id: 'maggi-shield-fitted-sheet',
    category: 'bedsheets',
    title: 'The 3 AM Maggi-Proof Terracotta Bedsheet',
    subtitle: 'Oleophobic soup-repellent fitted sheet built for nocturnal foodies',
    colorId: 'terracotta',
    sizeId: 'hostel-single',
    price: 699,
    originalPrice: 1299,
    rating: 4.94,
    reviewsCount: 2210,
    stockUrgency: 'Hot seller across IIT & DU hostels',
    tags: ['Oleophobic', '100% Maggi-Proof', 'Warm Rust'],
    highlights: [
      'Turmeric and spicy oil molecules simply bead up and wipe away with dry tissue',
      'Warm earthy Terracotta hue hides dust, pencil shavings, and midnight snack debris',
      'Designed to fit standard hostel wooden/metal cots with zero bunching',
      'Micro-brushed peach finish that feels buttery smooth on bare skin'
    ],
    specs: {
      fabric: 'SpillShield™ Oleophobic Hybrid Weave (420 TC)',
      elastic: 'Quad-Corner Tension Grip Bands',
      wash: 'Machine wash cold or bucket wash with mild detergent',
      warranty: '1-Year Stain Repellent Warranty'
    },
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'midnight-coder-fitted-sheet',
    category: 'bedsheets',
    title: 'Midnight Focus Indigo Fitted Cot Sheet',
    subtitle: 'Deep indigo blue anti-glare sheet for late-night laptop work in bed',
    colorId: 'midnight',
    sizeId: 'hostel-single',
    price: 649,
    originalPrice: 1199,
    rating: 4.89,
    reviewsCount: 1530,
    stockUrgency: 'Only 12 sheets left in stock',
    tags: ['Anti-Glare Indigo', 'Zero Ironing', 'Quick Dry'],
    highlights: [
      'Calming deep indigo hue absorbs harsh laptop screen reflections',
      'Non-ironing performance weave stays crisp even after balled up in a corner',
      'Stain-resistant coating beads up iced Americanos and energy drink spills',
      'Ultra-durable double-needle stitched seams withstand rough hostel laundry'
    ],
    specs: {
      fabric: 'AirGrip™ Microfiber-Cotton Weave (380 TC)',
      elastic: 'Continuous 360° Elastic Tension Band',
      wash: 'Cold Machine Wash / Quick Spin',
      warranty: '1-Year Anti-Fading Color Guarantee'
    },
    images: [
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'bunk-lock-charcoal-sheet',
    category: 'bedsheets',
    title: 'Hostel Bunk-Lock Anti-Untuck Cot Sheet',
    subtitle: 'Deep corner locks engineered specifically for tight hostel bunk beds',
    colorId: 'charcoal',
    sizeId: 'twin-bunk',
    price: 599,
    originalPrice: 1099,
    rating: 4.91,
    reviewsCount: 1670,
    stockUrgency: 'Recommended for bunk bed hostellers',
    tags: ['Bunk Bed Lock', 'Dust Masking', 'Easy Slip-On'],
    highlights: [
      'Slip-on deep angle pockets slide into tricky bunk bed corners with zero finger pinching',
      'Matte charcoal tone masks hostel dust, textbook pencil dust, and study debris',
      'Hypoallergenic surface repels allergens and old hostel mattress mites',
      'Breathable thermal regulating micro-pores keep you cool all night'
    ],
    specs: {
      fabric: 'ToughWeave™ Bunk Defense Microfiber',
      elastic: 'Extra-Wide 1.5" Elastic Edge Band',
      wash: 'Bucket Wash Friendly / Fast Air-Dry',
      warranty: '1-Year Elastic Grip Guarantee'
    },
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80'
    ]
  },

  // ==========================================
  // CATEGORY 3: CLOUD & WEIGHTED BLANKETS
  // ==========================================
  {
    id: 'finals-weighted-blanket',
    category: 'blankets',
    title: "The 'Surviving Finals' Anti-Anxiety Weighted Blanket",
    subtitle: '5.5 kg micro-glass bead deep pressure therapy for exam anxiety & insomnia',
    colorId: 'charcoal',
    sizeId: 'hostel-single',
    price: 1799,
    originalPrice: 3499,
    rating: 4.97,
    reviewsCount: 1940,
    stockUrgency: 'Top pick during semester exams',
    tags: ['Exam Panic Relief', 'Deep Pressure', 'Glass Micro-Beads'],
    highlights: [
      'Scientifically weighted to 5.5 kg to naturally reduce cortisol and calm exam racing thoughts',
      'Even weight distribution pockets prevent bunching or clumping on iron cots',
      'Breathable bamboo-cotton outer shell prevents the dread of night overheating',
      'Machine-washable removable outer cover with secure corner tie loops'
    ],
    specs: {
      fabric: 'Cooling Bamboo & Breathable Poly-Cotton Blend',
      fill: 'Hypoallergenic Non-Toxic High-Density Glass Micro-Beads (5.5kg)',
      wash: 'Removable Duvet Shell: Machine Wash Cold',
      warranty: '2-Year Weight Distribution Guarantee'
    },
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80'
    ],
    bestseller: true
  },
  {
    id: 'arctic-cloud-comforter',
    category: 'blankets',
    title: 'The Arctic AC Dual-Season Cloud Comforter',
    subtitle: 'Dual-sided: Cooling ice-silk on side A, plush warm micro-fleece on side B',
    colorId: 'midnight',
    sizeId: 'hostel-single',
    price: 1199,
    originalPrice: 2299,
    rating: 4.92,
    reviewsCount: 2310,
    stockUrgency: 'Built for freezing hostel ACs',
    tags: ['Dual Sided', 'AC Quilt', 'Cloud Light'],
    highlights: [
      'Side A has instant cooling jade-yarn fabric for hot afternoons and non-AC rooms',
      'Side B features cozy thermal cloud microfiber for nights when hostel AC is blasting at 18°C',
      'Baffle-box stitched structure keeps fluffy 240 GSM fill from shifting or clumping',
      'Super light & easily packs down into your campus duffel bag for semester breaks'
    ],
    specs: {
      fabric: 'Side A: CoolJade™ Ice-Silk / Side B: Micro-Cloud Fleece',
      fill: '240 GSM Hypoallergenic Hollowfiber Cloud Puff',
      wash: 'Cold Machine Wash / Quick Tumble Dry',
      warranty: '1-Year Anti-Clump Guarantee'
    },
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'sherpa-puffer-throw',
    category: 'blankets',
    title: 'The 3 AM Bunker Sherpa Puffer Blanket',
    subtitle: 'Ultra-plush dorm fleece throw with integrated warm foot-pocket',
    colorId: 'terracotta',
    sizeId: 'hostel-single',
    price: 899,
    originalPrice: 1699,
    rating: 4.88,
    reviewsCount: 1120,
    stockUrgency: 'Aesthetic room upgrade',
    tags: ['Foot Pocket', 'Sherpa Warmth', 'Dormcore'],
    highlights: [
      'Built-in 14" deep insulated foot-pocket keeps icy toes toasty during late study grinds',
      'Rich plush sherpa backing delivers instant warm comfort on hard study chairs or bed',
      'Spill-resistant outer shell protects against hot coffee, chai and soup splashes',
      'Anti-static yarn prevents annoying winter shocks when touching metal door handles'
    ],
    specs: {
      fabric: 'Anti-Static High-Loft Sherpa & Peached Poly-Twill',
      fill: '220 GSM Thermal Loft Layer',
      wash: 'Gentle Machine Wash Cold / Hang to Dry',
      warranty: '1-Year Anti-Fuzz Guarantee'
    },
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80'
    ]
  },

  // ==========================================
  // CATEGORY 4: BADASS PILLOW COVERS & CASES
  // ==========================================
  {
    id: 'screen-defense-silk-pillowcases',
    category: 'pillows',
    title: 'Late-Night Screen Defense Satin Pillowcases (Pair)',
    subtitle: 'Zero-friction silk-touch pillowcases that prevent breakouts & hostel bedhead',
    colorId: 'midnight',
    sizeId: 'hostel-single',
    price: 499,
    originalPrice: 999,
    rating: 4.96,
    reviewsCount: 2890,
    stockUrgency: 'Campus Skincare Essential',
    tags: ['Acne Defense', 'Zero Bedhead', 'Set of 2'],
    highlights: [
      'Non-absorbent satin fabric keeps your night skincare and serums on your face, not your pillow',
      'Smooth friction-free surface eliminates split ends, hair breakage, and 8 AM frizz',
      'Hypoallergenic weave repels acne-causing bacteria common on hostel pillows',
      'Hidden zipper design ensures zero metal scratching on your face while sleeping'
    ],
    specs: {
      fabric: 'High-Grade 100% Vegan Micro-Satin (Charmeuse Weave)',
      closure: 'Concealed Side YKK Micro-Zipper',
      wash: 'Machine Wash Delicate in Cold Water / Quick Air-Dry',
      warranty: '1-Year Zipper & Seam Guarantee'
    },
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80'
    ],
    bestseller: true
  },
  {
    id: 'thoughts-do-not-disturb-pillowcase',
    category: 'pillows',
    title: "'3 AM Thoughts // Do Not Disturb' Reversible Graphic Case",
    subtitle: 'High-contrast typography graphic pillowcase with duality student energy',
    colorId: 'charcoal',
    sizeId: 'hostel-single',
    price: 349,
    originalPrice: 699,
    rating: 4.9,
    reviewsCount: 1470,
    stockUrgency: 'Streetwear graphic drop',
    tags: ['Reversible', 'Streetwear Vibe', 'Spill-Proof'],
    highlights: [
      "Front side: '3 AM THOUGHTS & COFFEE DROPS' / Reverse side: 'DO NOT DISTURB (UNLESS WARDEN)'",
      'Hydrophobic coating shields against spilled water tumblers and late-night tears during finals',
      'Screen-printed with crack-resistant eco water-based inks that survive 100+ washes',
      'Envelope closure prevents pillow from sliding out while reading against the wall'
    ],
    specs: {
      fabric: 'Heavyweight 320 GSM Ring-Spun Cotton-Poly Hybrid',
      print: 'Crack-Proof Eco Discharge Screen Print',
      wash: 'Cold Machine Wash Inside Out',
      warranty: '1-Year Print & Color Guarantee'
    },
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'ortho-study-pillow-set',
    category: 'pillows',
    title: 'Hostel Ortho-Bounce Study Support Pillow + Cover',
    subtitle: 'Zero-flatten microfiber pillow engineered for sitting upright on hostel cots',
    colorId: 'forest',
    sizeId: 'hostel-single',
    price: 699,
    originalPrice: 1299,
    rating: 4.93,
    reviewsCount: 1640,
    stockUrgency: 'Back & neck relief for laptop study',
    tags: ['Ergonomic', 'Zero Flatten', 'Includes Cover'],
    highlights: [
      'Dual-zone micro-spring fiber core retains shape even after 10 hours leaning on iron bedframes',
      'Includes removable SpillShield™ stain-repellent breathable pillow cover',
      'Designed specifically for cramped rooms where your bed is also your desk and couch',
      'Odor-resistant antimicrobial treatment prevents hostel room dampness'
    ],
    specs: {
      fabric: 'Anti-Microbial Air-Mesh & 400 TC Poly-Cotton Case',
      fill: '900g High-Density Rebound Poly-Cloud Microfiber',
      wash: 'Removable cover machine washable / Pillow sun-airable',
      warranty: '2-Year Shape Retention Guarantee'
    },
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80'
    ]
  },

  // ==========================================
  // CATEGORY 5: DORM HACKS & ACCESSORIES
  // ==========================================
  {
    id: 'protector-standalone',
    category: 'hacks',
    title: '100% Waterproof Anti-Dustmite Mattress Shield',
    subtitle: 'Total hermetic barrier against mystery hostel stains, sweat & dust mites',
    colorId: 'slate',
    sizeId: 'hostel-single',
    price: 499,
    originalPrice: 899,
    rating: 4.97,
    reviewsCount: 3100,
    stockUrgency: 'Essential for every fresher',
    tags: ['100% Waterproof', 'Dustmite Shield', 'Hostel Cot Essential'],
    highlights: [
      'Silently blocks 100% of liquids, body oils, and unknown hostel mattress bacteria',
      'Zero crinkly plastic noise — feels like soft breathable terry cotton on top',
      'Deep fitted skirt fits thin 4" hostel pads up to thick 10" PG mattresses',
      'Machine-washable barrier that dries completely in under 30 minutes'
    ],
    specs: {
      fabric: 'Breathable Cotton-Terry Surface + TPU Waterproof Membrane Layer',
      elastic: '360° Reinforced Stretch Skirt',
      wash: 'Machine Wash Cold / Air Dry Only (Do Not Iron)',
      warranty: '10-Year Leak-Proof Warranty'
    },
    images: [
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'caddy-standalone',
    category: 'hacks',
    title: 'Bedside Maggi, Phone & Laptop 4-Pocket Caddy',
    subtitle: 'Heavy-duty felt organizer hangs on iron cot railings or slips under mattress',
    colorId: 'charcoal',
    sizeId: 'hostel-single',
    price: 349,
    originalPrice: 599,
    rating: 4.91,
    reviewsCount: 2280,
    stockUrgency: 'No bedside table needed',
    tags: ['Hostel Lifehack', '4 Pockets', 'Fits 14" Laptop'],
    highlights: [
      'Large main pocket easily holds up to a 14" MacBook, iPad, or heavy textbook',
      '3 front pockets fit your phone, charging cables, specs, and midnight Maggi cup',
      'Sturdy non-slip anchor flap slides securely under your mattress or cot rail',
      'Cable routing grommets allow you to charge your phone while it rests in the pocket'
    ],
    specs: {
      fabric: 'Heavy-Duty 4mm Eco-Felt with Reinforced Metal Rivets',
      capacity: 'Holds up to 7 kg weight safely',
      wash: 'Spot Clean with Damp Cloth',
      warranty: '1-Year Tear & Seam Warranty'
    },
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'reading-led-standalone',
    category: 'hacks',
    title: 'Hostel Clip-On Warm Reading LED (Roommate-Friendly)',
    subtitle: '3-tier warm amber light with USB battery for late study without waking roomies',
    colorId: 'charcoal',
    sizeId: 'hostel-single',
    price: 299,
    originalPrice: 499,
    rating: 4.89,
    reviewsCount: 1890,
    stockUrgency: 'Roommate Diplomat Approved',
    tags: ['Rechargeable', 'Warm Amber', 'Anti-Roommate Drama'],
    highlights: [
      'Targeted 45° beam illuminates only your notes without shining in your roommate’s eyes',
      '3 brightness modes: Warm Amber (sleep-friendly), Soft Neutral, and Study Focus',
      'Flexible 360° gooseneck clips onto bunk bed iron bars, books, or headboards',
      'Rechargeable USB-C battery lasts up to 24 hours of study on a single charge'
    ],
    specs: {
      battery: '1200 mAh USB-C Fast Recharge Lithium-Ion',
      lighting: 'Eye-Care Blue-Light Filtered LEDs (1800K - 4000K)',
      warranty: '1-Year Replacement Warranty'
    },
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80'
    ]
  }
];
