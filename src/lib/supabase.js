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

/**
 * Save a new pre-order reservation to Supabase (with localStorage fallback)
 */
export const savePreOrder = async (orderReceipt) => {
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

  // Always back up in localStorage
  try {
    const existing = JSON.parse(localStorage.getItem('gp_preorders') || '[]');
    existing.unshift(payload);
    localStorage.setItem('gp_preorders', JSON.stringify(existing));
  } catch (err) {
    console.warn('Could not save order to localStorage fallback:', err);
  }

  // If Supabase is configured, push directly to database
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

  return { success: true, data: payload, savedLocally: true, note: 'Saved locally. Provide VITE_SUPABASE_URL to sync to cloud database.' };
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
