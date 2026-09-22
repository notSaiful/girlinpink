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
    etsyTitle: 'Dragonfly Botanical Leather Journal, Handcrafted Floral Diary with Antique Clasp',
    etsyUrl: 'https://www.etsy.com/in-en/listing/4538026066/dragonfly-botanical-leather-journal',
    paletteName: 'Deep Forest Moss & Antique Gold',
    checkColor: '#2D4436',
    checkClass: 'bg-[#2D4436]',
    badge: 'Collector Pick',
    tagline: 'Antique hand-embossed leather with gilded dragonflies, brass clasp & deckle pages',
    shortStory: 'A timeless cottagecore diary bound in supple forest-moss leather, stamped with gold-foil dragonfly flora, and secured with an antique brass clasp.',
    roomVibe: 'Evokes candlelit midnight poetry, botanical sketching, and secret dorm keepsakes that last a lifetime.',
    price: 1499,
    depositPrice: 390,
    originalPrice: 2499,
    rating: 4.98,
    reviewsCount: 184,
    editorialImage: '/products/journals/dragonfly/cover_clasp.jpg',
    detailImage: '/products/journals/dragonfly/dragonfly_macro.jpg',
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
        title: 'Antique Brass Clasp Closure',
        desc: 'Hand-cast antique bronze latch with ornamental filigree and solid mechanical snap.'
      },
      {
        icon: '✦',
        title: 'Gold Gilded Page Edges',
        desc: 'Hand-brushed metallic gold edges protect pages from dust and give an heirloom glow.'
      }
    ],
    careGuide: [
      'Keep away from direct water submersion; condition leather gently once a year with beeswax',
      'Fountain pen and watercolor friendly with zero bleed-through',
      'Store flat or standing on a shelf in dry room conditions'
    ],
    specs: {
      material: 'Genuine vegetable-tanned leather with antique burnished patina',
      closure: 'Antique brass filigree clasp',
      paper: '150 GSM handmade cotton rag with raw deckle edges • Zero Bleed',
      pages: '200 unlined pages (100 sheets)',
      finish: 'Gold gilded page edges with hand-bound coptic spine'
    },
    includes: [
      'Handcrafted Dragonfly Botanical Leather Journal',
      'Antique brass floral bookmark clip',
      'Protective keepsake storage box'
    ],
    description: 'Capture your thoughts in a journal inspired by the quiet beauty of nature. Featuring a finely illustrated dragonfly surrounded by vintage botanical florals, this handcrafted leather journal is designed for those who appreciate timeless craftsmanship and meaningful design. The dragonfly has long symbolized transformation, resilience, and new beginnings. Combined with an elegant botanical composition, antique brass clasp closure, gold gilded page edges, and 150 GSM archival cotton rag paper.',
    gallery: [
      { src: '/products/journals/dragonfly/cover_clasp.jpg', label: 'Cover & Antique Clasp' },
      { src: '/products/journals/dragonfly/dragonfly_macro.jpg', label: 'Embossed Dragonfly Macro' },
      { src: '/products/journals/dragonfly/open_pages.jpg', label: '150 GSM Deckle Pages' },
      { src: '/products/journals/dragonfly/gilded_edges.jpg', label: 'Gold Gilded Edges' },
      { src: '/products/journals/dragonfly/angle_view.jpg', label: 'Spine & Bookbinding' },
      { src: '/products/journals/dragonfly/back_cover.jpg', label: 'Back Cover Patina' }
    ],
    customerReviews: [
      {
        author: 'Clara H.',
        location: 'Oxford • Verified Etsy Buyer',
        date: '2 weeks ago',
        rating: 5,
        title: 'Even more magical in person',
        content: 'The leather is so thick and smells amazing! The gold gilded edges and the dragonfly clasp make it look like a spellbook from an antique library. My fountain pen never bleeds through.',
        helpfulCount: 28
      },
      {
        author: 'Marcus T.',
        location: 'Edinburgh • Verified Buyer',
        date: '1 month ago',
        rating: 5,
        title: 'Authentic 150 GSM cotton rag paper',
        content: 'Purchased this for my daily reflections and botanical sketches. The paper has this wonderful deckle tooth and the antique clasp closes with a solid, satisfying snap. 10/10.',
        helpfulCount: 19
      },
      {
        author: 'Elena R.',
        location: 'DU North Campus • Student Pre-Order',
        date: 'August 2026',
        rating: 5,
        title: 'The centerpiece of my dorm desk',
        content: 'Exceeded all my expectations. The craftsmanship on the embossed dragonfly is immaculate. Packaged beautifully in the blush keepsake box with the solid brass clip.',
        helpfulCount: 14
      }
    ]
  },
  {
    id: 'vintage-lace-junk-journal',
    name: 'Vintage Lace Junk Journal',
    etsyTitle: 'Vintage Lace Junk Journal Covers, Shabby Chic Victorian Botanical Scrapbook',
    etsyUrl: 'https://www.etsy.com/in-en/listing/4534001719/vintage-lace-junk-journal-covers-shabby',
    paletteName: 'French Tea Rose & Ivory Lace',
    checkColor: '#C27878',
    checkClass: 'bg-[#C27878]',
    badge: 'Bestseller ♡',
    tagline: 'Layered tea-dyed lace, silk ribbon ties, hidden pockets & vellum envelopes',
    shortStory: 'A romantic Victorian shabby chic scrapbook journal wrapped in tea-stained heirloom lace, vintage floral cotton, and dusty rose ribbon.',
    roomVibe: 'Turns everyday dorm letters, concert tickets, pressed blossoms, and messy feelings into a tender work of art.',
    price: 1399,
    depositPrice: 390,
    originalPrice: 2299,
    rating: 4.97,
    reviewsCount: 142,
    editorialImage: '/products/journals/vintage_lace/gallery_1.jpg',
    detailImage: '/products/journals/vintage_lace/gallery_2.jpg',
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
    description: 'A romantic Victorian shabby chic scrapbook journal wrapped in tea-stained heirloom crochet lace, floral cotton cover, and delicate dusty rose ribbon. Inside, discover 80 mixed vintage tea-dyed and parchment sheets with torn edges, 12 ephemera pockets, vellum envelopes, and antique tags for storing dried florals, letters, and tickets.',
    gallery: [
      { src: '/products/journals/vintage_lace/gallery_1.jpg', label: 'Antique Crochet Lace & Bow' },
      { src: '/products/journals/vintage_lace/gallery_2.jpg', label: 'Tea-Stained Paper & Pockets' },
      { src: '/products/journals/vintage_lace/gallery_3.jpg', label: 'Ephemera Tags & Vellum' },
      { src: '/products/journals/vintage_lace/gallery_4.jpg', label: 'Botanical Keepsake Slots' },
      { src: '/products/journals/vintage_lace/gallery_5.jpg', label: 'Victorian Spine Detail' }
    ],
    customerReviews: [
      {
        author: 'Sophie M.',
        location: 'Melbourne • Verified Etsy Buyer',
        date: '3 weeks ago',
        rating: 5,
        title: 'Breathtaking shabby chic detail',
        content: 'The detail on the lace and the tea-dyed pages is unbelievable! The little hidden envelopes and tuck spots already hold tickets from my summer travels and pressed flowers.',
        helpfulCount: 22
      },
      {
        author: 'Ananya K.',
        location: 'NIFT Bangalore • Verified Student',
        date: 'August 2026',
        rating: 5,
        title: 'Authentic Victorian heirloom feel',
        content: 'True shabby chic perfection. It feels like an authentic Victorian heirloom found in an attic trunk. Smells faintly like sweet tea paper! The ribbon tie holds all my scrapbooking layers securely.',
        helpfulCount: 17
      },
      {
        author: 'Beatrice L.',
        location: 'London • Verified Buyer',
        date: '1 month ago',
        rating: 5,
        title: 'Hands down the most delicate journal',
        content: 'I have bought many junk journals on Etsy, but this is hands down the most delicate and well-constructed one. Beautiful textures and real crochet lace.',
        helpfulCount: 11
      }
    ]
  },
  {
    id: 'personalized-embroidered-journal',
    name: 'Personalized Embroidered Journal',
    etsyTitle: 'Personalized Embroidered Journal, Custom Hand-Stitched Wildflower Meadow',
    etsyUrl: 'https://www.etsy.com/in-en/listing/4528217327/personalized-embroidered-journal-custom',
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
    editorialImage: '/products/journals/embroidered_linen/gallery_1.jpg',
    detailImage: '/products/journals/embroidered_linen/gallery_2.jpg',
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
        title: 'Natural French Oatmeal Linen',
        desc: 'Organic woven linen cover with subtle slub texture and tactile warmth.'
      },
      {
        icon: '✦',
        title: '180° Lay-Flat Exposed Coptic Spine',
        desc: 'Hand-sewn with wax-coated bookbinding thread for effortless two-page spreads.'
      },
      {
        icon: '✦',
        title: '120 GSM Smooth Fountain-Pen Cream Paper',
        desc: 'Zero ghosting and feathering; archival acid-free paper for 100+ year memory keeping.'
      }
    ],
    careGuide: [
      'Spot clean linen gently with a dry microfibre cloth',
      'Thread is colorfast silk embroidery floss; avoid pulling loose fibers'
    ],
    specs: {
      material: 'Natural oatmeal French linen with multi-colored silk thread embroidery',
      paper: '120 GSM fountain pen-safe archival cream paper (160 pages / 80 sheets)',
      binding: 'Exposed coptic hand-stitch spine (180° lay-flat guarantee)',
      personalization: 'Hand-embroidered custom name / initials in cursive script'
    },
    includes: [
      'Personalized Embroidered Wildflower Journal',
      'Matching rose satin ribbon bookmark with brass charm',
      'Protective linen storage pouch'
    ],
    description: 'Woven in natural oatmeal French linen and delicately hand-stitched with a vibrant wildflower meadow framing your custom name or monogram in silky cursive thread. Engineered with 180° lay-flat exposed coptic stitch binding and 120 GSM bleedproof cream paper.',
    gallery: [
      { src: '/products/journals/embroidered_linen/gallery_1.jpg', label: 'Hand-Stitched Floral Meadow' },
      { src: '/products/journals/embroidered_linen/gallery_2.jpg', label: 'Custom Cursive Name Detail' },
      { src: '/products/journals/embroidered_linen/gallery_3.jpg', label: '180° Lay-Flat Coptic Spine' },
      { src: '/products/journals/embroidered_linen/gallery_4.jpg', label: 'Bleedproof Cream Pages' },
      { src: '/products/journals/embroidered_linen/gallery_5.jpg', label: 'Gift Packaging & Bookmark' }
    ],
    customerReviews: [
      {
        author: 'Maria S.',
        location: 'Toronto • Verified Etsy Buyer',
        date: '2 weeks ago',
        rating: 5,
        title: 'Tears in my eyes unboxing this!',
        content: 'The hand embroidery is so raised and tactile! Seeing my name stitched across the wildflower garden made me tear up when unboxing. The paper is delightfully smooth for my cursive fountain pen.',
        helpfulCount: 31
      },
      {
        author: 'Priyanshi N.',
        location: 'LSR Delhi • Verified Student',
        date: 'August 2026',
        rating: 5,
        title: 'Couture quality embroidery',
        content: 'Got this personalized for my college graduation. The quality of the linen and thread work is couture level. Opens completely flat on my small hostel desk without fighting my hand.',
        helpfulCount: 24
      },
      {
        author: 'Chloe D.',
        location: 'Bristol • Verified Buyer',
        date: '1 month ago',
        rating: 5,
        title: 'Zero ghosting with wet inks',
        content: 'Zero ghosting with my Pilot G2 and fountain pens. The rose ribbon bookmark and brass charm are such thoughtful touches. Will definitely be buying more for Christmas gifts!',
        helpfulCount: 16
      }
    ]
  },
  {
    id: 'personalized-katakana-cherry-blossom',
    name: 'Personalized Katakana Cherry Blossom Notebook',
    etsyTitle: 'Personalized Katakana Notebook, Japanese Cherry Blossom Sakura Journal',
    etsyUrl: 'https://www.etsy.com/in-en/listing/4496809949/personalized-katakana-notebook-cherry',
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
    editorialImage: '/products/journals/katakana_sakura/gallery_1.jpg',
    detailImage: '/products/journals/katakana_sakura/gallery_2.jpg',
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
    description: 'A serene Japanese botanical journal featuring vintage Sakura branch art with your chosen name translated into authentic vertical Japanese Katakana and stamped in gleaming rose-gold foil. Bound with 100 GSM silky Daiei Japanese paper designed specifically for gel pens and fine calligraphy.',
    gallery: [
      { src: '/products/journals/katakana_sakura/gallery_1.jpg', label: 'Sakura Branch & Katakana Foil' },
      { src: '/products/journals/katakana_sakura/gallery_2.jpg', label: 'Vertical Name Stamping' },
      { src: '/products/journals/katakana_sakura/gallery_3.jpg', label: '100 GSM Silky Japanese Grid' },
      { src: '/products/journals/katakana_sakura/gallery_4.jpg', label: 'Gilded Spine Accents' },
      { src: '/products/journals/katakana_sakura/gallery_5.jpg', label: 'Blush Silk Ribbon Marker' }
    ],
    customerReviews: [
      {
        author: 'Kenji / Emma W.',
        location: 'Kyoto / California • Verified Buyer',
        date: '2 weeks ago',
        rating: 5,
        title: 'Authentic Katakana transliteration',
        content: 'The Katakana transliteration was completely authentic and the rose-gold foil shines so brilliantly under my study lamp! The Japanese paper is so smooth it feels like writing on silk.',
        helpfulCount: 27
      },
      {
        author: 'Divya B.',
        location: 'Christ University Bangalore • Student',
        date: 'August 2026',
        rating: 5,
        title: 'Subtle non-distracting grid',
        content: 'Hands down my favorite notebook for language study and daily journaling. The subtle grid lines are non-distracting and fine gel pens dry fast without feathery edges.',
        helpfulCount: 18
      },
      {
        author: 'Liam K.',
        location: 'Seattle • Verified Buyer',
        date: '1 month ago',
        rating: 5,
        title: 'High-end Kyoto boutique vibe',
        content: 'The packaging was exquisite and the gold foil accents give it a very high-end Kyoto stationery boutique vibe. Rounded corners protect it in my backpack.',
        helpfulCount: 13
      }
    ]
  },
  {
    id: 'personalized-daily-reflection-planner',
    name: 'Personalized Daily Reflection & Gratitude Planner',
    etsyTitle: 'Personalized Christian Daily Planner, Custom Prayer Journal & Gratitude Devotional',
    etsyUrl: 'https://www.etsy.com/in-en/listing/4549741832/personalized-christian-daily-planner',
    paletteName: 'Saddle Tan & Hot-Stamped Foil',
    checkColor: '#9C6238',
    checkClass: 'bg-[#9C6238]',
    badge: 'Mindful Living',
    tagline: 'Custom embossed prayer journal, gratitude prompts, hourly focus & Scripture study',
    shortStory: 'Crafted in warm saddle-tan vegan leather with custom embossed hot-stamping. Structured for calm morning journaling, daily gratitude, Scripture meditation, and evening reflections.',
    roomVibe: 'Helps you stay grounded, intentional, and calm through stressful university semesters.',
    price: 999,
    depositPrice: 290,
    originalPrice: 1599,
    rating: 4.95,
    reviewsCount: 128,
    editorialImage: '/products/journals/daily_planner/gallery_1.jpg',
    detailImage: '/products/journals/daily_planner/gallery_2.jpg',
    availableSets: 18,
    isPersonalized: true,
    personalizationLabel: 'Custom Name for Hot-Stamped Cover',
    personalizationDefault: 'Isabella',
    thoughtfulDetails: [
      {
        icon: '✦',
        title: 'Custom Name Hot-Stamping',
        desc: 'Your full name or initials cleanly hot-stamped in crisp cursive font on the front cover.'
      },
      {
        icon: '✦',
        title: 'Undated Mindful Daily Spread',
        desc: 'Daily sections for praise, gratitude, top 3 priorities, prayer requests, and peaceful reflection.'
      },
      {
        icon: '✦',
        title: 'Saddle-Tan Vegan Leather Cover',
        desc: 'Soft-touch water-resistant vegan leather with matching ribbon marker and pen holder.'
      },
      {
        icon: '✦',
        title: 'Twin Ribbon Bookmarks & Back Pocket',
        desc: 'Dual satin ribbons and an expandable inner pocket for sermon notes, receipts, and stickers.'
      }
    ],
    careGuide: [
      'Water-resistant vegan leather; wipe with damp microfibre cloth',
      'Undated format means zero wasted pages if you take a study break'
    ],
    specs: {
      material: 'Saddle-tan soft-touch vegan leather with custom hot-stamping',
      paper: '120 GSM bleed-resistant warm ivory paper • Zero feathering',
      pages: '220 undated daily reflection & prayer planning pages',
      extras: 'Pen loop, elastic closure, dual ribbon markers & back storage pocket'
    },
    includes: [
      'Personalized Saddle-Tan Daily Reflection & Prayer Planner',
      'Gold metal ballpoint pen with clip',
      'Expandable back storage pocket'
    ],
    description: 'A structured, gold-foil embossed saddle-tan vegan leather daily planner and prayer journal designed for mindful mornings and spiritual reflection. Features dedicated sections for daily gratitude, prayer requests, Scripture study, habit tracking, and evening reflections.',
    gallery: [
      { src: '/products/journals/daily_planner/gallery_1.jpg', label: 'Tan Leather Cover & Lettering' },
      { src: '/products/journals/daily_planner/gallery_2.jpg', label: 'Daily Prayer & Gratitude Spread' },
      { src: '/products/journals/daily_planner/gallery_3.jpg', label: 'Hourly Focus & Habit Tracker' },
      { src: '/products/journals/daily_planner/gallery_4.jpg', label: 'Dual Ribbon Markers' },
      { src: '/products/journals/daily_planner/gallery_5.jpg', label: 'Back Accordion Storage Pocket' }
    ],
    customerReviews: [
      {
        author: 'Megan F.',
        location: 'Texas • Verified Etsy Buyer',
        date: '3 weeks ago',
        rating: 5,
        title: 'Transformed my morning quiet time',
        content: 'This planner completely transformed my morning quiet time. Having structured prompts for prayer, scripture, and daily goals keeps me grounded before starting classes.',
        helpfulCount: 25
      },
      {
        author: 'Rachel B.',
        location: 'Ashoka University • Verified Student',
        date: 'August 2026',
        rating: 5,
        title: 'Durable leather and crisp typography',
        content: 'The leather cover feels so durable and soft. The custom lettering is crisp and the layout is simple without feeling cluttered. Thick pages hold highlighters perfectly.',
        helpfulCount: 16
      },
      {
        author: 'David P.',
        location: 'Chicago • Verified Buyer',
        date: '1 month ago',
        rating: 5,
        title: 'Wonderful gift for university students',
        content: 'Purchased as a gift for my daughter entering university. She uses it every single morning with her coffee. Great quality paper and binding.',
        helpfulCount: 12
      }
    ]
  },
  {
    id: 'cozy-valley-farm-journal',
    name: 'Cozy Valley Farm & Habit Journal',
    etsyTitle: 'Stardew Valley Inspired Guided Journal, Cozy Farm Life & Habit Planner',
    etsyUrl: 'https://www.etsy.com/in-en/listing/4388773051/stardew-valley-journal-stardew-valley',
    paletteName: 'Farmhouse Sage & Honey Gold',
    checkColor: '#5C7A5E',
    checkClass: 'bg-[#5C7A5E]',
    badge: 'Cozy Gamer ♡',
    tagline: 'Stardew-inspired cottagecore seasonal habit, crop tracking & daily quest journal',
    shortStory: 'Inspired by cozy Stardew Valley farming days, this guided cottagecore journal turns daily university habits, self-care routines, and goals into delightful seasonal quests.',
    roomVibe: 'Like wrapping yourself in a warm blanket with lo-fi beats after a hectic day of classes.',
    price: 899,
    depositPrice: 290,
    originalPrice: 1499,
    rating: 4.98,
    reviewsCount: 290,
    editorialImage: '/products/journals/stardew_valley/gallery_1.jpg',
    detailImage: '/products/journals/stardew_valley/gallery_2.jpg',
    availableSets: 20,
    isPersonalized: false,
    thoughtfulDetails: [
      {
        icon: '✦',
        title: 'Stardew-Inspired Cottagecore Art',
        desc: 'Charming pixel crops, tiny strawberries, farm cottages, and cozy valley critters.'
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
        desc: 'Carved wooden leaf bookmark on twine with a cute little farm chicken charm.'
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
    description: 'The ultimate guided companion for cozy gamers, gardeners, and daily life tracking. Inspired by pixel-art valley life, this journal features daily routines, seasonal task checklists, friendship logs, and habit trackers wrapped in vibrant full-color art.',
    gallery: [
      { src: '/products/journals/stardew_valley/gallery_1.jpg', label: 'Pixel Farm Cover & Pencils' },
      { src: '/products/journals/stardew_valley/gallery_2.jpg', label: 'Seasonal Crop & Habit Spread' },
      { src: '/products/journals/stardew_valley/gallery_3.jpg', label: 'Daily Quest & Community Tracker' },
      { src: '/products/journals/stardew_valley/gallery_4.jpg', label: 'Gold Wire-O Flat Binding' },
      { src: '/products/journals/stardew_valley/gallery_5.jpg', label: 'Wooden Leaf Charm & Stickers' }
    ],
    customerReviews: [
      {
        author: 'Kyle M.',
        location: 'Seattle • Verified Etsy Buyer',
        date: '2 weeks ago',
        rating: 5,
        title: 'The coziest journal I have ever owned',
        content: 'As a massive Stardew Valley fan, this is the coziest journal I have ever owned! The layout helps me track both my real-life habits and my farm goals. The art on the cover is so nostalgic.',
        helpfulCount: 36
      },
      {
        author: 'Tara G.',
        location: 'NIFT Bangalore • Verified Student',
        date: 'August 2026',
        rating: 5,
        title: 'Markers do not bleed through at all',
        content: 'The paper is super thick! Markers and pastel highlighters do not bleed through at all. The gold clips and wooden charm included made unboxing so much fun.',
        helpfulCount: 21
      },
      {
        author: 'Sam R.',
        location: 'Vancouver • Verified Buyer',
        date: '1 month ago',
        rating: 5,
        title: 'Great gift for gamers and bullet journalers',
        content: 'Super cute, high quality, and arrived really quickly! Great gift for any gamer or bullet journaler who loves relaxing rituals.',
        helpfulCount: 15
      }
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
