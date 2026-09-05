import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { LAUNCH_PRINTS, SIZES, TIERS, PREORDER_META, BRAND_STORY } from '../data/preorderData';
import { fetchPrintOrderCounts, MAX_CAPACITY_PER_SET } from '../lib/supabase';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedPrint, setSelectedPrint] = useState(LAUNCH_PRINTS[0]);
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);
  const [selectedTier, setSelectedTier] = useState(TIERS[0]);
  const [isDepositOnly, setIsDepositOnly] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);
  // Live order counts tracked per print edition (capped at 150 each)
  const [orderCounts, setOrderCounts] = useState({
    'The French Rose Gingham': 0,
    'The Sky Blue Gingham': 0
  });
  const [isLoadingCounts, setIsLoadingCounts] = useState(true);

  // Fetch live counts on mount and provide refresh helper
  const refreshCounts = useCallback(async () => {
    try {
      const counts = await fetchPrintOrderCounts();
      setOrderCounts(counts);
    } catch (err) {
      console.warn('Could not refresh print counts:', err);
    } finally {
      setIsLoadingCounts(false);
    }
  }, []);

  useEffect(() => {
    refreshCounts();
  }, [refreshCounts]);

  // Helper to query live stats for any print
  const getPrintStats = useCallback((printIdentifier) => {
    const nameStr = typeof printIdentifier === 'string'
      ? printIdentifier
      : (printIdentifier?.name || printIdentifier?.id || '');

    const isBlue = nameStr.toLowerCase().includes('blue');
    const printKey = isBlue ? 'The Sky Blue Gingham' : 'The French Rose Gingham';
    const reserved = orderCounts[printKey] || 0;
    const capacity = MAX_CAPACITY_PER_SET; // strictly 150
    const remaining = Math.max(0, capacity - reserved);
    const isSoldOut = remaining <= 0;

    return {
      printKey,
      capacity,
      reserved,
      remaining,
      isSoldOut
    };
  }, [orderCounts]);

  // Smooth scroll helper
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openReservation = (print = null, size = null, tier = null) => {
    if (print) setSelectedPrint(print);
    if (size) setSelectedSize(size);
    if (tier) setSelectedTier(tier);
    setIsDrawerOpen(true);
  };

  const closeReservation = () => {
    setIsDrawerOpen(false);
  };

  // Pricing calculations based on tier & size (Strictly Pre-Orders)
  const tierPrice = selectedTier ? selectedTier.price : 1200;
  const tierDeposit = selectedTier ? selectedTier.depositPrice : 390;
  const basePrice = Math.round(tierPrice * selectedSize.multiplier);
  const depositPrice = Math.round(tierDeposit * selectedSize.multiplier);
  const amountToPayNow = depositPrice; // Strictly pre-order deposit
  const balanceDueLater = basePrice - depositPrice;

  return (
    <CartContext.Provider value={{
      selectedPrint,
      setSelectedPrint,
      selectedSize,
      setSelectedSize,
      selectedTier,
      setSelectedTier,
      isDepositOnly,
      setIsDepositOnly,
      isDrawerOpen,
      setIsDrawerOpen,
      openReservation,
      closeReservation,
      scrollToId,
      basePrice,
      depositPrice,
      amountToPayNow,
      balanceDueLater,
      confirmedOrder,
      setConfirmedOrder,
      orderCounts,
      refreshCounts,
      getPrintStats,
      isLoadingCounts,
      MAX_CAPACITY_PER_SET,
      meta: PREORDER_META,
      brandStory: BRAND_STORY,
      tiers: TIERS
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
