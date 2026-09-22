export const PREORDER_META = {
  batchName: 'Batch 01 — Autumn Stationery Drop',
  capacity: 150,
  reservedCount: 118,
  dispatchDate: 'Early October 2026',
  refundPolicy: '100% refundable anytime before dispatch',
  paperSummary: '120–150 GSM Bleed-Proof Cotton Rag & Ivory Japanese Paper • Fountain Pen Safe',
  uvpQuote: "A quiet sanctuary for messy thoughts, dorm memories, and creative rituals. Every journal is hand-bound with archival bleed-proof paper."
};

export const BRAND_STORY = {
  quote: "Living away from home in a busy college dorm means living at full speed. Your journal is the one quiet corner that is entirely yours—where messy thoughts become peace.",
  founders: "Maya & Tara — Student Creators, Class of '24",
  context: "Between late-night lectures and crowded dorm desks, we wanted notebooks that felt like timeless keepsakes—textured linen, tea-stained lace, gold foil Katakana, and thick deckle paper that never bleeds through."
};

export const BRAND_USPS = [
  {
    title: 'Zero Ink Bleed-Through',
    subtitle: 'Tested with fountain pens, gouache & gel inks',
    description: 'Every journal features 120–150 GSM archival cotton rag or Japanese ivory paper that handles heavy ink without ghosting.'
  },
  {
    title: 'Handcrafted Keepsake Details',
    subtitle: 'Heirloom lace, custom embroidery & gold foil',
    description: 'From hand-embroidered wildflower wreaths to authentic Katakana name stamping and tea-stained lace trims.'
  },
  {
    title: 'Dorm Desk Friendly Lay-Flat Spines',
    subtitle: '180° flat opening for effortless writing',
    description: 'Artisanal coptic and wire-o bindings that stay flat on cramped hostel desks without fighting the spine.'
  },
  {
    title: 'Small-Batch Numbered Drops',
    subtitle: 'Strictly 150 copies per edition',
    description: 'Every edition is hand-bound in limited seasonal batches, individually inspected and packed in signature keepsake boxes.'
  }
];

export const TIERS = [
  {
    id: 'single-journal',
    name: 'Single Journal Edition',
    subtitle: 'Core Journal + Brass Bookmark',
    price: 899,
    depositPrice: 290,
    popular: true,
    badge: 'Core Journal',
    includes: [
      'Handcrafted Creative Journal of choice in signature edition',
      'Solid antique brass bookmark clip with engraved flower crest',
      'Protective cloth dust bag with ribbon tie',
      'Free campus dispatch in rigid protective keepsake gift box'
    ]
  },
  {
    id: 'writer-bundle',
    name: 'The Cozy Writer Bundle',
    subtitle: 'Journal + Pen Set + Washi Tape',
    price: 1199,
    depositPrice: 390,
    popular: false,
    badge: 'Student Favorite',
    includes: [
      'Handcrafted Creative Journal of choice in signature edition',
      'Set of 3 pastel fast-dry gel pens (0.5mm rose, sepia & midnight)',
      '2x vintage washi tape rolls (floral lace & botanical leaves)',
      'Solid antique brass bookmark clip with engraved flower crest',
      'Signature rigid protective keepsake gift box with ribbon bow'
    ]
  },
  {
    id: 'heirloom-box',
    name: 'The Collector’s Keepsake Box',
    subtitle: 'The Ultimate Creative Scrapbook Kit',
    price: 1599,
    depositPrice: 490,
    popular: false,
    badge: 'Ultimate Collector',
    includes: [
      'Handcrafted Creative Journal of choice in signature edition',
      'Antique wax seal stamp set with brass rose handle & sealing wax beads',
      'Glass calligraphy dip pen with 15ml bottle of archival sepia ink',
      'Set of 3 pastel fast-dry gel pens + 2x vintage washi tape rolls',
      'Pack of 20 pressed dried botanical stickers and vintage ephemera tags',
      'Deluxe hardbound keepsake collector box with magnetic ribbon closure'
    ]
  }
];

export const SIZES = [
  {
    id: 'classic-a5',
    name: 'Classic A5 Format',
    dimensions: '5.8" × 8.3" (148 × 210 mm)',
    depth: '160–200 pages',
    description: 'The golden standard for dorm study desks, bedside nightstands, and everyday backpack carry.',
    multiplier: 1.0,
    recommended: true
  },
  {
    id: 'pocket-b6',
    name: 'Pocket B6 Carry',
    dimensions: '4.9" × 6.9" (125 × 176 mm)',
    depth: '140–160 pages',
    description: 'Compact and lightweight. Slides easily into your tote bag, lecture purse, or coffee shop carry.',
    multiplier: 0.9,
    recommended: false
  },
  {
    id: 'grand-a4',
    name: 'Grand A4 Desk Studio',
    dimensions: '8.3" × 11.7" (210 × 297 mm)',
    depth: '180–220 pages',
    description: 'Expansive creative layout ideal for scrapbooking, junk journaling, watercolor art & large daily spreads.',
    multiplier: 1.35,
    recommended: false
  }
];

export const RULINGS = [
  {
    id: 'dot-grid',
    name: '5mm Dot Grid (Cream)',
    description: 'Subtle gray dots on warm cream paper. Perfect for bullet journaling, habit tracking, and sketches.'
  },
  {
    id: 'college-ruled',
    name: '7mm College Ruled (Ivory)',
    description: 'Gentle lined paper with generous margins for daily thought dumps, poetry, and lecture notes.'
  },
  {
    id: 'blank-deckle',
    name: 'Blank Deckle-Edge Cotton',
    description: 'Hand-torn 150 GSM archival cotton rag. Magnificent for watercolors, calligraphy, and pressed botany.'
  }
];

export const LAUNCH_PRINTS = [
  {
    id: 'dragonfly-botanical-leather',
    name: 'Dragonfly Botanical Leather Journal',
    paletteName: 'Deep Forest Moss & Antique Gold',
    checkColor: '#2D4436',
    checkClass: 'bg-[#2D4436]',
    badge: 'Collector Pick',
    tagline: 'Antique hand-embossed leather with gilded dragonflies & deckle pages',
    shortStory: 'A timeless cottagecore diary bound in supple forest-moss leather, stamped with gold-foil dragonfly flora, and tied with an antique brass key.',
    roomVibe: 'Evokes candlelit midnight poetry, botanical sketching, and secret dorm keepsakes that last a lifetime.',
    price: 1499,
    depositPrice: 390,
    originalPrice: 2499,
    rating: 4.98,
    reviewsCount: 184,
    editorialImage: '/products/journals/dragonfly_botanical_leather.jpg',
    detailImage: '/products/journals/dragonfly_botanical_leather.jpg',
    availableSets: 19,
    isPersonalized: false,
    thoughtfulDetails: [
      {
        icon: '✦',
        title: '200 Deckle-Edge Cotton Pages',
        desc: 'Hand-torn 150 GSM archival cotton rag paper that will never bleed through fountain pen or watercolor.'
      },
      {
        icon: '✦',
        title: 'Embossed Gold Gilded Flora',
        desc: 'Intricately stamped dragonfly and botanical fern motif in lustrous antique gold foil.'
      },
      {
        icon: '✦',
        title: 'Wrap-Around Leather Tie & Key',
        desc: 'Supple full-grain leather strap adorned with an antique brass key charm closure.'
      },
      {
        icon: '✦',
        title: '180° Lay-Flat Hand Binding',
        desc: 'Sturdy hand-stitched spine that stays completely flat on your desk while you write.'
      }
    ],
    careGuide: [
      'Keep away from direct water submersion; condition leather gently once a year with beeswax',
      'Fountain pen and watercolor friendly with zero bleed-through',
      'Store flat or standing on a shelf in dry room conditions'
    ],
    specs: {
      material: 'Vegetable-tanned artisanal leather with antique burnished patina',
      paper: '150 GSM handmade cotton rag with raw deckle edges • Zero Bleed',
      pages: '200 unlined pages (100 sheets)',
      closure: 'Wrap leather cord with antique bronze skeleton key'
    },
    includes: [
      'Handmade Dragonfly Botanical Leather Journal',
      'Wrap-around leather strap with antique bronze key charm',
      'Antique brass bookmark clip with flower crest'
    ],
    description: 'Crafted for dreamers, poets, and botanical illustrators. Supple dark forest leather hand-embossed with gold dragonflies and filled with 200 raw deckle-edge cotton rag pages.',
    gallery: [
      { src: '/products/journals/dragonfly_botanical_leather.jpg', label: 'Cover & Key Charm' },
      { src: '/hero_aesthetic_desk.jpg', label: 'Open Pages on Desk' }
    ]
  },
  {
    id: 'vintage-lace-junk-journal',
    name: 'Vintage Lace Junk Journal',
    paletteName: 'French Tea Rose & Ivory Lace',
    checkColor: '#C27878',
    checkClass: 'bg-[#C27878]',
    badge: 'Bestseller ♡',
    tagline: 'Layered tea-dyed lace, silk ribbon ties & secret ephemera pockets',
    shortStory: 'A romantic Victorian shabby chic scrapbook journal wrapped in tea-stained heirloom lace, vintage floral cotton, and dusty rose ribbon.',
    roomVibe: 'Turns everyday dorm letters, concert tickets, pressed blossoms, and messy feelings into a tender work of art.',
    price: 1399,
    depositPrice: 390,
    originalPrice: 2299,
    rating: 4.97,
    reviewsCount: 142,
    editorialImage: '/products/journals/vintage_lace_junk_journal.jpg',
    detailImage: '/products/journals/vintage_lace_junk_journal.jpg',
    availableSets: 14,
    isPersonalized: false,
    thoughtfulDetails: [
      {
        icon: '✦',
        title: 'Layered Heirloom French Lace',
        desc: 'Hand-sewn vintage crochet lace, soft floral fabric cover, and dusty rose cotton ribbon bow.'
      },
      {
        icon: '✦',
        title: '12 Ephemera Pockets & Tags',
        desc: 'Hidden vellum envelopes, botanical tags, and ticket slots for personal letters and memories.'
      },
      {
        icon: '✦',
        title: 'Tea-Stained Aged Paper',
        desc: '80 mixed vintage tea-dyed and parchment sheets with torn edges and pressed flower prints.'
      },
      {
        icon: '✦',
        title: 'Antique Metal Bookplate',
        desc: 'Ornate brass nameplate on the cover with removable aesthetic title card.'
      }
    ],
    careGuide: [
      'Delicate fabric cover; handle lace with care and store in provided cotton dust bag',
      'Safe for gluing ephemera, photo tape, washi tape, and calligraphic ink'
    ],
    specs: {
      material: 'Quilted floral cotton with layered tea-dyed antique lace and ribbon tie',
      paper: 'Mixed media tea-stained paper, parchment & vellum (120–160 GSM)',
      pages: '80 interactive scrapbook pages with 12 ephemera pockets',
      closure: 'Dusty rose torn-edge silk ribbon bow'
    },
    includes: [
      'Handcrafted Vintage Lace Junk Journal',
      'Set of 12 vintage tags, ephemera cards, and vellum envelopes',
      'Solid brass bookmark clip'
    ],
    description: 'The definitive creative memory book for collage, poetry, and nostalgia. Layered with heirloom lace, hand-torn tea-dyed papers, and hidden pockets.',
    gallery: [
      { src: '/products/journals/vintage_lace_junk_journal.jpg', label: 'Cover & Lace Detail' },
      { src: '/hero_aesthetic_desk.jpg', label: 'Desk Setting' }
    ]
  },
  {
    id: 'personalized-embroidered-journal',
    name: 'Personalized Embroidered Journal',
    paletteName: 'Oatmeal Linen & Meadow Wildflowers',
    checkColor: '#B38A75',
    checkClass: 'bg-[#B38A75]',
    badge: 'Custom Name',
    tagline: 'Hand-embroidered wildflower meadow with your custom name or monogram',
    shortStory: 'Woven in natural oatmeal French linen and delicately hand-stitched with colorful wildflower blossoms framing your custom name in silk thread.',
    roomVibe: 'The ultimate bespoke personal diary and graduation keepsake for your college journey.',
    price: 1199,
    depositPrice: 290,
    originalPrice: 1899,
    rating: 4.99,
    reviewsCount: 210,
    editorialImage: '/products/journals/embroidered_linen_journal.jpg',
    detailImage: '/products/journals/embroidered_linen_journal.jpg',
    availableSets: 22,
    isPersonalized: true,
    personalizationLabel: 'Name or Monogram to Embroider (up to 12 chars)',
    personalizationDefault: 'Eleanor',
    thoughtfulDetails: [
      {
        icon: '✦',
        title: 'Custom Name Hand-Embroidered',
        desc: 'Your name or initials hand-stitched in cursive dusty rose thread within a floral wreath.'
      },
      {
        icon: '✦',
        title: 'Natural Oatmeal French Linen',
        desc: 'Textured, durable linen cloth cover that feels soft and organic in your hands.'
      },
      {
        icon: '✦',
        title: '120 GSM Bleedproof Cream Pages',
        desc: 'Silky smooth archival paper that handles fountain pens, gel ink, and mild watercolor.'
      },
      {
        icon: '✦',
        title: 'Exposed Coptic Stitch Spine',
        desc: 'Traditional artisanal bookbinding allows the journal to lay 100% flat at 180°.'
      }
    ],
    careGuide: [
      'Spot clean linen cover with damp cloth if needed',
      'Thread embroidery is pre-set with protective fabric backing'
    ],
    specs: {
      material: '100% natural textured oatmeal linen with silk thread floral embroidery',
      paper: '120 GSM bleed-proof fountain-pen friendly cream paper (Dot Grid / Lined)',
      pages: '160 archival pages (80 sheets)',
      binding: 'Hand-sewn lay-flat coptic stitch with rose satin ribbon'
    },
    includes: [
      'Custom Embroidered Linen Hardcover Journal with Your Name',
      'Matching rose satin ribbon bookmark with brass charm',
      'Protective linen storage pouch'
    ],
    description: 'Personalized just for you. Delicate hand-stitched floral wreath framing your embroidered name on oatmeal linen with lay-flat 120 GSM cream paper.',
    gallery: [
      { src: '/products/journals/embroidered_linen_journal.jpg', label: 'Embroidered Cover' },
      { src: '/hero_aesthetic_desk.jpg', label: 'Desk Setup' }
    ]
  },
  {
    id: 'personalized-katakana-cherry-blossom',
    name: 'Personalized Katakana Cherry Blossom Notebook',
    paletteName: 'Sakura Blush & Rose Gold Foil',
    checkColor: '#E09CA8',
    checkClass: 'bg-[#E09CA8]',
    badge: 'Custom Katakana',
    tagline: 'Japanese Sakura botanical art with your name stamped in vertical Katakana foil',
    shortStory: 'A dreamlike Japanese botanical cherry blossom journal featuring your chosen name converted into authentic vertical Japanese Katakana and stamped in rose-gold foil.',
    roomVibe: 'Soft pastel Kyoto mornings, aesthetic lecture notes, and mindful study rituals.',
    price: 899,
    depositPrice: 290,
    originalPrice: 1399,
    rating: 4.96,
    reviewsCount: 165,
    editorialImage: '/products/journals/katakana_cherry_blossom.jpg',
    detailImage: '/products/journals/katakana_cherry_blossom.jpg',
    availableSets: 25,
    isPersonalized: true,
    personalizationLabel: 'Name for Japanese Katakana Translation & Stamping',
    personalizationDefault: 'Sakura',
    thoughtfulDetails: [
      {
        icon: '✦',
        title: 'Authentic Katakana Foil Stamping',
        desc: 'We professionally translate your name to Japanese Katakana and hot-stamp it in rose-gold foil.'
      },
      {
        icon: '✦',
        title: 'Japanese Sakura Botanical Artwork',
        desc: 'Delicate vintage cherry blossom branch art with gilded spine detailing.'
      },
      {
        icon: '✦',
        title: '100 GSM Silky Japanese Grid Paper',
        desc: 'Ultra-smooth ivory paper designed specifically for Japanese gel pens and fine nibs.'
      },
      {
        icon: '✦',
        title: 'Blush Ribbon Marker & Gilded Edges',
        desc: 'Includes a rose satin bookmark and protective rounded corners.'
      }
    ],
    careGuide: [
      'Wipe clean matte hardcover with dry microfibre cloth',
      'Avoid scraping foil embossing with sharp metal objects'
    ],
    specs: {
      material: 'Premium matte soft-touch hardcover with rose-gold foil stamping',
      paper: '100 GSM silky smooth Japanese fountain-pen grid / ruled paper',
      pages: '192 numbered pages (96 sheets)',
      finish: 'Gilded rose-gold foil accents and blush pink silk ribbon'
    },
    includes: [
      'Custom Katakana Cherry Blossom Notebook',
      'Japanese name translation verification bookmark',
      'Rose satin ribbon marker'
    ],
    description: 'A tribute to Tokyo stationery elegance. Featuring your name in shimmering rose-gold Katakana lettering alongside vintage botanical cherry blossom branches.',
    gallery: [
      { src: '/products/journals/katakana_cherry_blossom.jpg', label: 'Cover with Katakana Foil' },
      { src: '/hero_aesthetic_desk.jpg', label: 'Morning Light' }
    ]
  },
  {
    id: 'personalized-daily-reflection-planner',
    name: 'Personalized Daily Reflection & Gratitude Planner',
    paletteName: 'Dusty Rose & Champagne Gold',
    checkColor: '#B86F7D',
    checkClass: 'bg-[#B86F7D]',
    badge: 'Mindful Living',
    tagline: 'Daily gratitude prompts, hourly focus blocks & custom gold foil name',
    shortStory: 'Crafted in buttery soft dusty rose vegan leather with your name custom-embossed in gold foil. Structured for calm morning journaling, daily gratitude, hourly class schedules, and evening reflections.',
    roomVibe: 'Helps you stay grounded, intentional, and calm through stressful university semesters.',
    price: 999,
    depositPrice: 290,
    originalPrice: 1599,
    rating: 4.95,
    reviewsCount: 128,
    editorialImage: '/products/journals/daily_reflection_planner.jpg',
    detailImage: '/products/journals/daily_reflection_planner.jpg',
    availableSets: 18,
    isPersonalized: true,
    personalizationLabel: 'Custom Name for Gold Foil Embossing',
    personalizationDefault: 'Isabella',
    thoughtfulDetails: [
      {
        icon: '✦',
        title: 'Custom Gold Foil Name Stamping',
        desc: 'Your full name or initials hot-stamped in elegant serif gold foil on the front cover.'
      },
      {
        icon: '✦',
        title: 'Undated Mindful Daily Spread',
        desc: 'Daily sections for gratitude, top 3 priorities, hourly time blocks, and peaceful reflection.'
      },
      {
        icon: '✦',
        title: 'Pebble Vegan Leather & Elastic Band',
        desc: 'Soft-touch water-resistant vegan leather with matching elastic closure band and pen loop.'
      },
      {
        icon: '✦',
        title: 'Twin Ribbon Bookmarks & Back Pocket',
        desc: 'Dual champagne satin ribbons and an expandable inner pocket for receipts and stickers.'
      }
    ],
    careGuide: [
      'Water-resistant vegan leather; wipe with damp cloth',
      'Undated format means zero wasted pages if you take a break'
    ],
    specs: {
      material: 'Buttery soft dusty rose pebble grain vegan leather with gold foil monogram',
      paper: '120 GSM bleed-resistant warm ivory paper • Zero feathering',
      pages: '160 undated daily reflection & planning pages',
      extras: 'Pen loop, elastic closure, dual ribbon markers & back storage pocket'
    },
    includes: [
      'Personalized Vegan Leather Daily Reflection Planner',
      'Rose gold metal ballpoint pen with clip',
      'Expandable back storage pocket'
    ],
    description: 'Your daily companion for intentional student living. Beautiful dusty rose vegan leather embossed with your name, designed with gratitude and time-blocking spreads.',
    gallery: [
      { src: '/products/journals/daily_reflection_planner.jpg', label: 'Planner Cover & Pen' },
      { src: '/hero_aesthetic_desk.jpg', label: 'Desk Reflection' }
    ]
  },
  {
    id: 'cozy-valley-farm-journal',
    name: 'Cozy Valley Farm & Habit Journal',
    paletteName: 'Farmhouse Sage & Honey Gold',
    checkColor: '#5C7A5E',
    checkClass: 'bg-[#5C7A5E]',
    badge: 'Cozy Gamer ♡',
    tagline: 'Stardew-inspired cottagecore seasonal habit & daily quest journal',
    shortStory: 'Inspired by cozy Stardew Valley farming days, this spiral-bound cottagecore journal turns daily university habits, self-care routines, and goals into delightful seasonal quests.',
    roomVibe: 'Like wrapping yourself in a warm blanket with lo-fi beats after a hectic day of classes.',
    price: 899,
    depositPrice: 290,
    originalPrice: 1499,
    rating: 4.98,
    reviewsCount: 290,
    editorialImage: '/products/journals/cozy_valley_farm_journal.jpg',
    detailImage: '/products/journals/cozy_valley_farm_journal.jpg',
    availableSets: 20,
    isPersonalized: false,
    thoughtfulDetails: [
      {
        icon: '✦',
        title: 'Stardew-Inspired Cottagecore Art',
        desc: 'Charming watercolor and pixel crops, tiny strawberries, pumpkins, and cozy farm critters.'
      },
      {
        icon: '✦',
        title: 'Seasonal Habit & Quest Trackers',
        desc: 'Spring/Summer/Fall/Winter goal spreads, daily quest to-do lists, and mood weather logs.'
      },
      {
        icon: '✦',
        title: 'Sturdy Gold Wire-O Binding',
        desc: 'Lays completely flat or folds back 360° for effortless journaling on compact dorm desks.'
      },
      {
        icon: '✦',
        title: 'Includes Wooden Bookmark Charm',
        desc: 'Carved wooden leaf bookmark on twine with a cute little chicken charm.'
      }
    ],
    careGuide: [
      'Heavy-duty matte laminated hardcover resists spills',
      'Spiral binding turns 360 degrees without bending pages'
    ],
    specs: {
      material: 'Thick heavy-duty matte laminated hardcover with gold foil title',
      paper: '120 GSM thick undated recycled kraft & ivory quest paper',
      pages: '160 undated interactive habit & journaling pages',
      extras: 'Twin-loop gold spiral, elastic band, and wooden leaf bookmark charm'
    },
    includes: [
      'Cozy Valley Farm & Habit Journal with Gold Wire-O',
      'Handmade wooden leaf bookmark on jute twine with chicken charm',
      'Sheet of 30 cozy farm habit reward stickers'
    ],
    description: 'Transform daily routines into joyful cozy quests. Featuring Stardew-inspired seasonal habit trackers, crop calendars, and comforting evening logs.',
    gallery: [
      { src: '/products/journals/cozy_valley_farm_journal.jpg', label: 'Journal Cover & Bookmark' },
      { src: '/hero_aesthetic_desk.jpg', label: 'Desk Setup' }
    ]
  }
];

export const JOURNALS = LAUNCH_PRINTS;

export const TIMELINE_STEPS = [
  {
    step: '01',
    title: 'Reserve Your Journal',
    window: 'Now – September 15',
    summary: 'Choose your signature journal and personalize with your custom name or monogram. Reserve with a ₹290–₹390 deposit or pay in full with 100% refund guarantee before dispatch.',
    status: 'Open Now'
  },
  {
    step: '02',
    title: 'Hand-Binding & Personalization',
    window: 'September 16 – September 30',
    summary: 'Our bookbinders hand-stitch each coptic spine, hot-stamp custom gold and Katakana foil, embroider linen covers, and inspect all 120–150 GSM archival pages.',
    status: 'Scheduled'
  },
  {
    step: '03',
    title: 'Campus Delivery',
    window: 'October 05 – October 12',
    summary: 'Delivered in bubble-cushioned rigid keepsake gift boxes with ribbon ties directly to your hostel gate, PG desk, or apartment door.',
    status: 'Move-in Ready'
  }
];

export const FAQS = [
  {
    question: 'Will fountain pens, watercolor, or highlighters bleed through the pages?',
    answer: "Zero bleed through. We strictly use 120 to 150 GSM archival-grade cotton rag and Japanese ivory paper. Even heavy fountain pen inks, wet watercolor washes, and juicy brush pens dry crisply without feathering or ghosting onto the next page."
  },
  {
    question: 'How does the custom name / Katakana personalization work?',
    answer: "For our Embroidered, Katakana Sakura, and Daily Planner journals, you can enter your name or initials during checkout. For the Katakana notebook, our team translates your name into authentic Japanese Katakana before hot-stamping in rose-gold foil."
  },
  {
    question: 'Does the journal lay completely flat when open on a desk?',
    answer: "Yes! Every single journal in our collection is engineered with 180° lay-flat binding (artisanal exposed coptic stitch, smyth-sewn binding, or sturdy twin-wire spiral) so you never have to wrestle with the spine while writing on compact dorm desks."
  },
  {
    question: 'Can I pay a small deposit now to reserve my copy?',
    answer: "Yes. You can reserve your journal today with a small pre-order deposit of ₹290 to ₹390. The remaining balance is only charged when your journal is hand-finished, inspected, and ready for campus dispatch."
  },
  {
    question: 'What if my hostel or college plans change before dispatch?',
    answer: "We offer an unconditional 100% full refund guarantee. If your university plans change anytime before your package is dispatched, simply text or email us for an instant, zero-fee refund."
  },
  {
    question: 'How is the journal packaged for student delivery?',
    answer: "Every journal arrives in a signature rigid keepsake gift box with protective tissue wrapping and a satin ribbon bow, securely sealed in waterproof transit packaging so it reaches your dorm in mint condition."
  }
];
