export const PREORDER_META = {
  batchName: 'Batch 01 — Autumn Move-In Drop',
  capacity: 150,
  reservedCount: 118,
  dispatchDate: 'Early October 2026',
  refundPolicy: '100% refundable anytime before dispatch',
  fabricSummary: '100% Long-Staple Washed Cotton Percale • 300 Thread Count',
  uvpQuote: "Twenty minutes to elevate your space — zero landlord restrictions, zero renovation risk. Change your bed and make your room your personal sanctuary."
};

export const BRAND_STORY = {
  quote: "Living away from home in a shared room means living in a borrowed space. You cannot paint the walls or change the metal furniture, but your bed is entirely yours.",
  founders: "Maya & Tara — Student Founders, Class of '24",
  context: "Hostel and PG rooms in Bangalore often feel cold, identical, and impersonal. We created girlinpink so every student can easily create a serene, aesthetic sanctuary with pure washed cotton."
};

export const BRAND_USPS = [
  {
    title: 'Engineered for Dorm Living',
    subtitle: 'Tailored for student cots and harsh room lighting',
    description: 'Woven with muted gingham checks and warm off-white tones specifically crafted to soften institutional fluorescent lighting.'
  },
  {
    title: 'Accessible Student Pricing',
    subtitle: 'Direct Loom Pricing with zero retail markups',
    description: 'We partner directly with family weaving mills in Tamil Nadu, offering the complete 4-piece kit at direct-to-student pre-order pricing.'
  },
  {
    title: 'Direct Loom Craftsmanship',
    subtitle: 'Ethically loomed in pure washed cotton',
    description: 'Crafted with 100% long-staple washed cotton percale that breathes naturally and stays cool through the year.'
  },
  {
    title: 'Limited Drop Releases',
    subtitle: '150 sets per seasonal batch',
    description: 'Every release is loomed fresh for the move-in semester and never mass-produced.'
  }
];

export const TIERS = [
  {
    id: 'complete-set',
    name: 'The Complete Bedding Kit',
    subtitle: 'Full 4-Piece Set',
    price: 1200,
    depositPrice: 390,
    popular: true,
    badge: 'Complete 4-Piece Kit',
    includes: [
      'Snug-Grip 360° Fitted Sheet with 12-inch depth for cot mattresses',
      'Washed Cotton Duvet Cover with 4 interior corner ties and concealed zip',
      'Two Matching Envelope Pillowcases with seamless fold construction',
      'Reusable Cotton Canvas Tote Bag for campus laundry'
    ]
  }
];

export const SIZES = [
  {
    id: 'hostel-single',
    name: 'Hostel Single Cot',
    dimensions: '36" × 75"',
    depth: '12-inch depth',
    description: 'Engineered for standard university iron cots, government hostels and private PGs.',
    multiplier: 1.0,
  },
  {
    id: 'twin-xl',
    name: 'Dorm Twin XL',
    dimensions: '38" × 80"',
    depth: '12-inch depth',
    description: 'Standard sizing for modern student residences, Stanza Living and private campuses.',
    multiplier: 1.0,
  },
  {
    id: 'double-full',
    name: 'Double / Full Bed',
    dimensions: '54" × 75"',
    depth: '14-inch depth',
    description: 'For shared 1BHK apartments and standard full-sized student beds.',
    multiplier: 1.25,
  }
];

export const LAUNCH_PRINTS = [
  {
    id: 'french-rose-gingham',
    name: 'The French Rose Gingham',
    paletteName: 'Dusty Rose & Warm Cream',
    checkColor: '#C27878',
    checkClass: 'bg-gingham-rose-dense',
    tagline: 'Soft dusty rose check with warm morning tones',
    shortStory: 'A calming pink and cream check that softens institutional lighting into a warm, inviting sanctuary.',
    roomVibe: 'Instantly balances harsh overhead lighting with a serene, comforting warmth that makes any room feel like home.',
    price: 1200,
    depositPrice: 390,
    rating: 4.95,
    thoughtfulDetails: [
      {
        icon: '✦',
        title: 'Four Interior Corner Ties',
        desc: 'Secures your duvet or blanket in place throughout the night without shifting.'
      },
      {
        icon: '✦',
        title: 'Concealed Zip Closure',
        desc: 'Tucked beneath a seamless fabric fold to keep hardware hidden and quiet.'
      },
      {
        icon: '✦',
        title: 'Envelope Pillowcases',
        desc: 'Clean overlapping back fold eliminates exposed zippers and metal edges.'
      },
      {
        icon: '✦',
        title: '360° Snug Cot Elastic',
        desc: '12-inch continuous pocket depth locks onto single mattresses with zero untucking.'
      }
    ],
    careGuide: [
      'Cold machine wash on gentle cycle',
      'Air dry naturally for soft, lived-in texture',
      'Naturally crinkled percale requires no ironing',
      'Pre-washed with organic plant enzymes to retain fabric integrity'
    ],
    specs: {
      material: '100% Long-Staple Washed Cotton Percale • Zero Synthetic Polyester',
      weave: 'Breathable 300 thread-count percale that stays crisp and cool',
      finish: 'Double enzyme-washed for immediate broken-in comfort',
      fit: '360° elastic perimeter hem engineered for student cot mattresses'
    },
    includes: [
      'Snug-Grip 360° Fitted Sheet with 12-inch depth',
      'Washed Cotton Duvet Cover with hidden zip and corner ties',
      'Two Matching Envelope Pillowcases'
    ],
    description: 'A muted, nostalgic dusty rose check that softens dorm lighting into an inviting sanctuary. Never cold, never slippery, and crafted in 100% natural cotton.',
    editorialImage: '/products/french_rose_bed.jpg',
    detailImage: '/products/french_rose_window.jpg',
    availableSets: 19,
    gallery: [
      { src: '/products/french_rose_bed.jpg', label: 'Bed Overview' },
      { src: '/products/french_rose_window.jpg', label: 'Morning Light' },
      { src: '/products/french_rose_main.jpg', label: 'Desk & Bed Setting' },
      { src: '/products/french_rose_teddy.jpg', label: 'Pillow Detail' },
      { src: '/products/french_rose_close.jpg', label: 'Percale Fabric Texture' },
      { src: '/products/french_rose_detail.jpg', label: 'Check Pattern Detail' },
      { src: '/diary_tote_package.jpg', label: 'Canvas Tote Packaging' }
    ]
  },
  {
    id: 'sky-blue-gingham',
    name: 'The Sky Blue Gingham',
    paletteName: 'Sky Blue & Soft Cream',
    checkColor: '#6B93AB',
    checkClass: 'bg-gingham-blue-dense',
    tagline: 'Breezy sky blue check with quiet cream tones',
    shortStory: 'A fresh, calming blue and cream check that brings an airy, serene clarity to your room and study space.',
    roomVibe: 'Brings an expansive, peaceful clarity that softens rigid dorm furniture and makes small rooms feel open and bright.',
    price: 1200,
    depositPrice: 390,
    rating: 4.96,
    thoughtfulDetails: [
      {
        icon: '✦',
        title: 'Four Interior Corner Ties',
        desc: 'Secures your duvet or blanket in place throughout the night without shifting.'
      },
      {
        icon: '✦',
        title: 'Concealed Zip Closure',
        desc: 'Tucked beneath a seamless fabric fold to keep hardware hidden and quiet.'
      },
      {
        icon: '✦',
        title: 'Envelope Pillowcases',
        desc: 'Clean overlapping back fold eliminates exposed zippers and metal edges.'
      },
      {
        icon: '✦',
        title: '360° Snug Cot Elastic',
        desc: '12-inch continuous pocket depth locks onto single mattresses with zero untucking.'
      }
    ],
    careGuide: [
      'Cold machine wash on gentle cycle',
      'Air dry naturally for soft, lived-in texture',
      'Naturally crinkled percale requires no ironing',
      'Pre-washed with organic plant enzymes to retain fabric integrity'
    ],
    specs: {
      material: '100% Long-Staple Washed Cotton Percale • Zero Synthetic Polyester',
      weave: 'Breathable 300 thread-count percale that stays crisp and cool',
      finish: 'Double enzyme-washed for immediate broken-in comfort',
      fit: '360° elastic perimeter hem engineered for student cot mattresses'
    },
    includes: [
      'Snug-Grip 360° Fitted Sheet with 12-inch depth',
      'Washed Cotton Duvet Cover with hidden zip and corner ties',
      'Two Matching Envelope Pillowcases'
    ],
    description: 'A refreshing, breezy sky blue check paired with warm cream yarn. Evokes open morning windows, gentle daylight, and peaceful study hours in 100% natural washed cotton.',
    editorialImage: '/products/morning_blue_bed.jpg',
    detailImage: '/products/morning_blue_pillow.jpg',
    availableSets: 14,
    gallery: [
      { src: '/products/morning_blue_bed.jpg', label: 'Bed Overview' },
      { src: '/products/morning_blue_room.jpg', label: 'Morning Sunlight' },
      { src: '/products/morning_blue_desk.jpg', label: 'Desk & Bed Setting' },
      { src: '/products/morning_blue_pillow.jpg', label: 'Envelope Pillowcases' },
      { src: '/products/morning_blue_texture.jpg', label: 'Percale Fabric Texture' },
      { src: '/products/morning_blue_ties.jpg', label: 'Corner Ties & Closure' },
      { src: '/products/morning_blue_detail.jpg', label: 'Check Pattern Detail' }
    ]
  }
];

export const TIMELINE_STEPS = [
  {
    step: '01',
    title: 'Reserve Your Set',
    window: 'Now – September 15',
    summary: 'Reserve your chosen print and cot dimensions before Batch 01 allocation closes. Reserve with a ₹390 deposit or pay in full with 100% refund guarantee before dispatch.',
    status: 'Open Now'
  },
  {
    step: '02',
    title: 'Weaving & Finishing',
    window: 'September 16 – September 30',
    summary: 'Our partnered family mill in Tamil Nadu weaves the 300TC long-staple cotton yarn, enzyme-washes each piece, and hand-tailors the 360° elastic hem.',
    status: 'Scheduled'
  },
  {
    step: '03',
    title: 'Campus Delivery',
    window: 'October 05 – October 12',
    summary: 'Delivered directly to your hostel gate, PG reception desk, or apartment door in a reusable canvas tote bag.',
    status: 'Move-in Ready'
  }
];

export const FAQS = [
  {
    question: 'Are there any restrictions on student room decorations?',
    answer: "girlinpink requires zero wall nails, adhesive hooks, or paint alterations. Simply dressing your cot creates an elevated room aesthetic while keeping your security deposit completely safe."
  },
  {
    question: 'How is this pricing possible compared to boutique bedding?',
    answer: "We work directly with our family weaving mill in Tamil Nadu. By eliminating overseas distributors, middlemen markups, and retail storefront costs, we provide 100% washed cotton percale directly to students at an honest price."
  },
  {
    question: 'Will the fitted sheet stay on my specific cot mattress?',
    answer: "Our sheets feature deep 12-inch pockets and a continuous 360° high-tension elastic hem that wraps securely around thin foam cots as well as deep mattresses without slipping off."
  },
  {
    question: 'Can I pay a small deposit now to reserve my spot?',
    answer: "Yes. You can reserve your set today with an initial deposit of ₹290 to ₹390. The remaining balance is due only when your package is inspected and prepared for campus dispatch."
  },
  {
    question: 'Is this 100% washed cotton?',
    answer: "Yes. We use 100% natural long-staple cotton percale with zero synthetic polyester or microfiber, ensuring breathable and cool comfort year-round."
  },
  {
    question: 'How should I wash this in a student hostel?',
    answer: "Every set is pre-washed with organic plant enzymes so it is pre-shrunk and soft upon arrival. Wash in any standard cold machine cycle and air-dry naturally."
  }
];
