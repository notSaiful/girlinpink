/**
 * Shopify Storefront & Checkout Integration Service for journaly.
 * 
 * Supports:
 * 1. Shopify Cart Permalinks (Direct 1-click checkout with line-item properties)
 * 2. Shopify Storefront GraphQL API (Headless cart creation & checkout URLs)
 * 3. Fallback preview & configuration detection
 */

const STORE_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || '';
const STOREFRONT_ACCESS_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '';

export function isShopifyConnected() {
  return Boolean(STORE_DOMAIN && STORE_DOMAIN.trim() !== '');
}

export function getShopifyStoreDomain() {
  return STORE_DOMAIN ? STORE_DOMAIN.replace(/^https?:\/\//, '').replace(/\/$/, '') : '';
}

/**
 * Generate a direct Shopify Cart Permalink URL with line-item properties
 * Works out-of-the-box on any Shopify store without complex OAuth setup.
 * Format: https://{store}.myshopify.com/cart/{variantId}:{quantity}?attributes[Custom+Name]=...
 */
export function generateShopifyCartPermalink({
  variantId,
  quantity = 1,
  personalization = '',
  size = '',
  ruling = '',
  tier = ''
}) {
  const domain = getShopifyStoreDomain();
  if (!domain) return null;

  const baseUrl = `https://${domain}/cart`;
  const itemSegment = variantId ? `${variantId}:${quantity}` : '';

  const params = new URLSearchParams();
  if (personalization) {
    params.set('attributes[Personalization Stamping]', personalization);
  }
  if (size) {
    params.set('attributes[Selected Size]', size);
  }
  if (ruling) {
    params.set('attributes[Paper Ruling]', ruling);
  }
  if (tier) {
    params.set('attributes[Stationery Bundle]', tier);
  }
  params.set('note', `Pre-Order for Batch 01 — Handcrafted by journaly`);

  const queryString = params.toString();
  return itemSegment 
    ? `${baseUrl}/${itemSegment}?${queryString}`
    : `${baseUrl}?${queryString}`;
}

/**
 * Execute Storefront GraphQL query / mutation
 */
export async function shopifyStorefrontRequest(query, variables = {}) {
  const domain = getShopifyStoreDomain();
  if (!domain || !STOREFRONT_ACCESS_TOKEN) {
    throw new Error('Shopify Storefront domain or access token not configured in .env');
  }

  const response = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN
    },
    body: JSON.stringify({ query, variables })
  });

  const json = await response.json();
  if (json.errors) {
    throw new Error(json.errors.map(e => e.message).join(', '));
  }
  return json.data;
}

/**
 * Create a native checkout session via Storefront GraphQL cartCreate
 */
export async function createShopifyCart({
  variantId,
  quantity = 1,
  personalization = '',
  attributes = []
}) {
  const customAttributes = [...attributes];
  if (personalization) {
    customAttributes.push({ key: 'Personalization Stamping', value: personalization });
  }

  const lines = variantId
    ? [
        {
          merchandiseId: variantId.startsWith('gid://shopify/ProductVariant/') 
            ? variantId 
            : `gid://shopify/ProductVariant/${variantId}`,
          quantity,
          attributes: customAttributes
        }
      ]
    : [];

  const mutation = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const data = await shopifyStorefrontRequest(mutation, {
    input: {
      lines,
      attributes: customAttributes
    }
  });

  if (data.cartCreate.userErrors && data.cartCreate.userErrors.length > 0) {
    throw new Error(data.cartCreate.userErrors[0].message);
  }

  return data.cartCreate.cart;
}
