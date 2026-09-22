/**
 * Shopify Automated Product Lister & Sync Script for journaly.
 * 
 * Usage:
 *   npm run shopify:sync
 * 
 * Environment Variables (set in .env or pass directly):
 *   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
 *   SHOPIFY_ADMIN_ACCESS_TOKEN=shpat_xxxxxxxxxxxxxxxxxxxx
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env manually if dotenv isn't installed
function loadEnv() {
  const envPath = path.resolve(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
        const [key, ...vals] = trimmed.split('=');
        const val = vals.join('=').trim().replace(/^["']|["']$/g, '');
        if (!process.env[key.trim()]) {
          process.env[key.trim()] = val;
        }
      }
    }
  }
}

loadEnv();

const STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || process.env.VITE_SHOPIFY_STORE_DOMAIN;
const ADMIN_ACCESS_TOKEN = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;

const PRODUCTS_DATA = [
  {
    title: 'Dragonfly Botanical Leather Journal',
    handle: 'dragonfly-botanical-leather-journal',
    descriptionHtml: '<p>A timeless cottagecore diary bound in supple forest-moss leather, stamped with gold-foil dragonfly flora, and tied with an antique brass key.</p><ul><li><strong>Material:</strong> Vegetable-tanned artisanal leather with antique burnished patina</li><li><strong>Paper:</strong> 150 GSM handmade cotton rag with raw deckle edges (Zero Bleed)</li><li><strong>Pages:</strong> 200 unlined pages (100 sheets)</li><li><strong>Closure:</strong> Wrap leather cord with antique bronze skeleton key</li></ul><p><em>Small-batch handcrafted stationery by journaly.</em></p>',
    vendor: 'journaly',
    productType: 'Leather Journals',
    tags: ['creative journal', 'handcrafted', 'leather journal', 'deckle edge', 'cottagecore', 'dorm stationery', 'fountain pen friendly'],
    imageUrl: 'https://raw.githubusercontent.com/notSaiful/girlinpink/main/public/products/journals/dragonfly_botanical_leather.jpg',
    basePrice: 1499.00,
    comparePrice: 2499.00
  },
  {
    title: 'Vintage Lace Junk Journal Keepsake',
    handle: 'vintage-lace-junk-journal',
    descriptionHtml: '<p>A romantic Victorian shabby chic scrapbook journal wrapped in tea-stained heirloom lace, vintage floral cotton, and dusty rose ribbon.</p><ul><li><strong>Material:</strong> Quilted floral cotton with layered tea-dyed antique lace and ribbon tie</li><li><strong>Paper:</strong> Mixed media tea-stained paper, parchment & vellum (120–160 GSM)</li><li><strong>Pages:</strong> 80 interactive scrapbook pages with 12 ephemera pockets & tags</li><li><strong>Closure:</strong> Dusty rose torn-edge silk ribbon bow</li></ul><p><em>Small-batch handcrafted stationery by journaly.</em></p>',
    vendor: 'journaly',
    productType: 'Junk Journals',
    tags: ['junk journal', 'vintage lace', 'scrapbook', 'keepsake', 'ephemera', 'aesthetic dorm', 'memory keeping'],
    imageUrl: 'https://raw.githubusercontent.com/notSaiful/girlinpink/main/public/products/journals/vintage_lace_junk_journal.jpg',
    basePrice: 1399.00,
    comparePrice: 2299.00
  },
  {
    title: 'Personalized Hand-Embroidered Linen Journal',
    handle: 'personalized-embroidered-linen-journal',
    descriptionHtml: '<p>Delicate oatmeal Belgian linen cover hand-embroidered with pastel wildflowers and custom name/monogram calligraphy stitching.</p><ul><li><strong>Material:</strong> 100% natural oatmeal Belgian linen with DMC silk floss embroidery</li><li><strong>Paper:</strong> 130 GSM archival ivory acid-free paper • Fountain Pen Friendly</li><li><strong>Pages:</strong> 192 numbered pages with satin ribbon marker</li><li><strong>Personalization:</strong> Custom stitched name or initial monogram on cover</li></ul><p><em>Small-batch handcrafted stationery by journaly.</em></p>',
    vendor: 'journaly',
    productType: 'Embroidered Journals',
    tags: ['embroidered journal', 'personalized notebook', 'custom name', 'linen diary', 'botanical', 'dorm gift'],
    imageUrl: 'https://raw.githubusercontent.com/notSaiful/girlinpink/main/public/products/journals/embroidered_linen_journal.jpg',
    basePrice: 1649.00,
    comparePrice: 2699.00
  },
  {
    title: 'Personalized Katakana Cherry Blossom Notebook',
    handle: 'personalized-katakana-cherry-blossom-notebook',
    descriptionHtml: '<p>Japanese sakura blossom minimalist aesthetic notebook stamped with your custom English name translated into Katakana in rose gold foil.</p><ul><li><strong>Material:</strong> 350 GSM soft-touch matte velvet cardstock with rose gold foil</li><li><strong>Paper:</strong> 120 GSM ultra-smooth Japanese Daiei ivory paper (Smooth gliding)</li><li><strong>Pages:</strong> 160 pages with twin wire-o spiral binding</li><li><strong>Personalization:</strong> Custom name foil-embossed vertically in Japanese Katakana</li></ul><p><em>Small-batch handcrafted stationery by journaly.</em></p>',
    vendor: 'journaly',
    productType: 'Spiral Notebooks',
    tags: ['katakana notebook', 'personalized japanese stationery', 'sakura cherry blossom', 'gold foil', 'spiral journal'],
    imageUrl: 'https://raw.githubusercontent.com/notSaiful/girlinpink/main/public/products/journals/katakana_cherry_blossom.jpg',
    basePrice: 999.00,
    comparePrice: 1699.00
  },
  {
    title: 'Personalized Daily Reflection & Gratitude Planner',
    handle: 'personalized-daily-reflection-gratitude-planner',
    descriptionHtml: '<p>An intentional 6-month undated reflection and wellness planner bound in pebble vegan leather with personalized gold calligraphy name stamping.</p><ul><li><strong>Material:</strong> Dusty rose vegan pebble leather with gold foil stamping</li><li><strong>Paper:</strong> 140 GSM thick bleed-proof archival writing paper with gilded edges</li><li><strong>Pages:</strong> 224 guided reflection pages, habit trackers, and gratitude prompts</li><li><strong>Personalization:</strong> Custom initials or full name stamped in gold calligraphy</li></ul><p><em>Small-batch handcrafted stationery by journaly.</em></p>',
    vendor: 'journaly',
    productType: 'Planners & Agendas',
    tags: ['gratitude planner', 'daily reflection', 'wellness journal', 'habit tracker', 'vegan leather', 'gold foil', 'personalized'],
    imageUrl: 'https://raw.githubusercontent.com/notSaiful/girlinpink/main/public/products/journals/daily_reflection_planner.jpg',
    basePrice: 1349.00,
    comparePrice: 2199.00
  },
  {
    title: 'Cozy Valley Farm & Habit Journal',
    handle: 'cozy-valley-farm-habit-journal',
    descriptionHtml: '<p>Whimsical cottagecore journal inspired by slow farming games, featuring seasonal crop schedules, daily cozy habit trackers, and cheerful illustrations.</p><ul><li><strong>Material:</strong> Hardcover matte protective laminate with gold wire-o double spiral</li><li><strong>Paper:</strong> 130 GSM bleed-resistant smooth cream paper with vegetable dye ink</li><li><strong>Pages:</strong> 180 pages with full-color illustrated borders and sticker sheet</li><li><strong>Charm:</strong> Laser-engraved natural birch wood watering can charm</li></ul><p><em>Small-batch handcrafted stationery by journaly.</em></p>',
    vendor: 'journaly',
    productType: 'Illustrated Journals',
    tags: ['cozy journal', 'stardew valley inspired', 'habit journal', 'cottagecore', 'farm tracker', 'student notebook'],
    imageUrl: 'https://raw.githubusercontent.com/notSaiful/girlinpink/main/public/products/journals/cozy_valley_farm_journal.jpg',
    basePrice: 1199.00,
    comparePrice: 1899.00
  }
];

const SIZES = [
  { name: 'Classic A5', priceDiff: 0, code: 'A5' },
  { name: 'Pocket B6', priceDiff: -150, code: 'B6' },
  { name: 'Grand A4', priceDiff: 350, code: 'A4' }
];

const RULINGS = [
  { name: '5mm Dot Grid', priceDiff: 0, code: 'DOT' },
  { name: '7mm College Ruled', priceDiff: 0, code: 'RUL' },
  { name: 'Blank Deckle Cotton', priceDiff: 100, code: 'DEC' }
];

function shopifyGraphQLRequest(query, variables) {
  return new Promise((resolve, reject) => {
    const formattedDomain = STORE_DOMAIN.replace(/^https?:\/\//, '').replace(/\/$/, '');
    const postData = JSON.stringify({ query, variables });

    const options = {
      hostname: formattedDomain,
      port: 443,
      path: '/admin/api/2024-01/graphql.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': ADMIN_ACCESS_TOKEN,
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed);
        } catch (e) {
          reject(new Error(`Failed to parse Shopify response: ${data}`));
        }
      });
    });

    req.on('error', (e) => reject(e));
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('🌸 ---------------------------------------------------- 🌸');
  console.log('       journaly. — Shopify Product Catalog Sync          ');
  console.log('🌸 ---------------------------------------------------- 🌸\n');

  if (!STORE_DOMAIN || !ADMIN_ACCESS_TOKEN) {
    console.log('⚠️  SHOPIFY CREDENTIALS NOT DETECTED IN ENVIRONMENT.\n');
    console.log('To push directly via Shopify Admin API, add these to your .env:');
    console.log('  SHOPIFY_STORE_DOMAIN=your-store.myshopify.com');
    console.log('  SHOPIFY_ADMIN_ACCESS_TOKEN=shpat_xxxxxxxxxxxxxxxxxxxx\n');
    console.log('✨ INSTANT ZERO-CONFIG OPTION:');
    console.log('  An official Shopify CSV has already been generated for you:');
    console.log('  📁 File: ./shopify_products_journaly.csv');
    console.log('  1. Go to your Shopify Admin: https://admin.shopify.com');
    console.log('  2. Click on "Products" in the left sidebar');
    console.log('  3. Click the "Import" button at the top right');
    console.log('  4. Drag and drop "shopify_products_journaly.csv" and click Upload!');
    console.log('  All 6 products + 54 size/ruling variants will be listed instantly.\n');
    return;
  }

  console.log(`📡 Connecting to Shopify store: ${STORE_DOMAIN}...`);

  for (const product of PRODUCTS_DATA) {
    console.log(`\n⏳ Listing product: "${product.title}"...`);

    const createProductMutation = `
      mutation productCreate($input: ProductInput!, $media: [CreateMediaInput!]) {
        productCreate(input: $input, media: $media) {
          product {
            id
            title
            handle
            onlineStoreUrl
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const productInput = {
      title: product.title,
      handle: product.handle,
      descriptionHtml: product.descriptionHtml,
      vendor: product.vendor,
      productType: product.productType,
      tags: product.tags,
      status: 'ACTIVE'
    };

    const mediaInput = [
      {
        originalSource: product.imageUrl,
        alt: product.title,
        mediaContentType: 'IMAGE'
      }
    ];

    try {
      const res = await shopifyGraphQLRequest(createProductMutation, {
        input: productInput,
        media: mediaInput
      });

      if (res.data?.productCreate?.userErrors?.length > 0) {
        console.error(`❌ User Error for ${product.title}:`, res.data.productCreate.userErrors);
      } else if (res.data?.productCreate?.product) {
        const prod = res.data.productCreate.product;
        console.log(`✅ Created ${product.title} (ID: ${prod.id})`);
      } else {
        console.log(`ℹ️ Response:`, JSON.stringify(res));
      }
    } catch (err) {
      console.error(`❌ Network error while listing ${product.title}:`, err.message);
    }
  }

  console.log('\n✨ Shopify Product Catalog Sync Complete! ♡\n');
}

main().catch(console.error);
