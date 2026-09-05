import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_-aeh9e6PV0cYeb8p4MRyzg_NnNcjLxx';

export const isSupabaseConfigured = () => {
  return (
    Boolean(supabaseUrl) &&
    supabaseUrl.startsWith('http') &&
    !supabaseUrl.includes('your-project-ref') &&
    Boolean(supabaseAnonKey)
  );
};

export const supabase = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const MAX_CAPACITY_PER_SET = 150;

/**
 * Fetch live pre-order counts per bedding set from Supabase & localStorage
 */
export const fetchPrintOrderCounts = async () => {
  const counts = {
    'The French Rose Gingham': 0,
    'The Sky Blue Gingham': 0
  };

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('preorders')
        .select('print_name');

      if (!error && Array.isArray(data)) {
        data.forEach(row => {
          const name = row.print_name || '';
          if (name.includes('Rose')) {
            counts['The French Rose Gingham'] = (counts['The French Rose Gingham'] || 0) + 1;
          } else if (name.includes('Blue')) {
            counts['The Sky Blue Gingham'] = (counts['The Sky Blue Gingham'] || 0) + 1;
          }
        });
        return counts;
      }
    } catch (err) {
      console.warn('Could not query pre-order counts from Supabase:', err);
    }
  }

  // Fallback to localStorage count if offline
  try {
    const local = JSON.parse(localStorage.getItem('gp_preorders') || '[]');
    local.forEach(row => {
      const name = row.print_name || '';
      if (name.includes('Rose')) {
        counts['The French Rose Gingham'] = (counts['The French Rose Gingham'] || 0) + 1;
      } else if (name.includes('Blue')) {
        counts['The Sky Blue Gingham'] = (counts['The Sky Blue Gingham'] || 0) + 1;
      }
    });
  } catch (e) {}

  return counts;
};

/**
 * Save a new pre-order reservation to Supabase (with 150-order capacity limit check)
 */
export const savePreOrder = async (orderReceipt) => {
  // 1. Verify capacity before saving
  const currentCounts = await fetchPrintOrderCounts();
  const printKey = (orderReceipt.print || '').includes('Blue')
    ? 'The Sky Blue Gingham'
    : 'The French Rose Gingham';

  if ((currentCounts[printKey] || 0) >= MAX_CAPACITY_PER_SET) {
    return {
      success: false,
      capacityReached: true,
      error: `Batch 01 allocation for ${printKey} has reached the 150 order limit.`,
      savedLocally: false
    };
  }

  const payload = {
    order_id: orderReceipt.orderId,
    print_name: orderReceipt.print,
    tier_name: orderReceipt.tier,
    size_name: orderReceipt.size,
    dimensions: orderReceipt.dimensions,
    amount_paid: orderReceipt.amountPaid,
    balance_due: orderReceipt.balanceDue,
    delivery_window: orderReceipt.deliveryWindow,
    customer_name: orderReceipt.customer?.name || '',
    customer_phone: orderReceipt.customer?.phone || '',
    customer_email: orderReceipt.customer?.email || '',
    college: orderReceipt.customer?.college || '',
    hostel: orderReceipt.customer?.hostel || '',
    city: orderReceipt.customer?.city || '',
    pincode: orderReceipt.customer?.pincode || '',
    payment_status: 'deposit_paid',
    batch: 'Batch 01',
    created_at: new Date().toISOString()
  };

  // Back up in localStorage
  try {
    const existing = JSON.parse(localStorage.getItem('gp_preorders') || '[]');
    existing.unshift(payload);
    localStorage.setItem('gp_preorders', JSON.stringify(existing));
  } catch (err) {
    console.warn('Could not save order to localStorage fallback:', err);
  }

  // Push to Supabase
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('preorders')
        .insert([payload])
        .select();

      if (error) {
        console.error('Supabase insert error:', error.message);
        return { success: false, error: error.message, data: payload, savedLocally: true };
      }
      return { success: true, data: data?.[0] || payload, savedLocally: true };
    } catch (err) {
      console.error('Failed to communicate with Supabase:', err);
      return { success: false, error: err.message, data: payload, savedLocally: true };
    }
  }

  return { success: true, data: payload, savedLocally: true };
};

/**
 * Test Supabase connectivity
 */
export const checkSupabaseConnection = async () => {
  if (!isSupabaseConfigured()) {
    return {
      connected: false,
      reason: 'VITE_SUPABASE_URL is not set or has placeholder value in .env'
    };
  }

  try {
    const { error } = await supabase.from('preorders').select('count', { count: 'exact', head: true });
    if (error && error.code !== 'PGRST116') {
      return { connected: false, error: error.message };
    }
    return { connected: true };
  } catch (err) {
    return { connected: false, error: err.message };
  }
};

