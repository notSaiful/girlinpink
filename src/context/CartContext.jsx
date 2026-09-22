import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { LAUNCH_PRINTS, SIZES, TIERS, RULINGS, PREORDER_META, BRAND_STORY } from '../data/preorderData';
import { fetchPrintOrderCounts, MAX_CAPACITY_PER_SET } from '../lib/supabase';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedPrint, setSelectedPrint] = useState(LAUNCH_PRINTS[0]);
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);
  const [selectedTier, setSelectedTier] = useState(TIERS[0]);
  const [selectedRuling, setSelectedRuling] = useState(RULINGS[0]);
  const [personalization, setPersonalization] = useState('Eleanor');
  const [isDepositOnly, setIsDepositOnly] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  // Live order counts tracked per edition (capped at 150 each)
  const [orderCounts, setOrderCounts] = useState({});
  const [isLoadingCounts, setIsLoadingCounts] = useState(true);

  // Fetch live counts on mount and provide refresh helper
  const refreshCounts = useCallback(async () => {
    try {
      const counts = await fetchPrintOrderCounts();
      setOrderCounts(counts || {});
    } catch (err) {
      console.warn('Could not refresh order counts:', err);
    } finally {
      setIsLoadingCounts(false);
    }
  }, []);

  useEffect(() => {
    refreshCounts();
  }, [refreshCounts]);

  // Helper to query live stats for any edition
  const getPrintStats = useCallback((printIdentifier) => {
    const nameStr = typeof printIdentifier === 'string'
      ? printIdentifier
      : (printIdentifier?.name || printIdentifier?.id || '');

    const reserved = orderCounts[nameStr] || 0;
    const capacity = MAX_CAPACITY_PER_SET; // strictly 150
    const remaining = Math.max(0, capacity - reserved);
    const isSoldOut = remaining <= 0;

    return {
      printKey: nameStr,
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

  const openReservation = (print = null, size = null, tier = null, ruling = null) => {
    if (print) setSelectedPrint(print);
    if (size) setSelectedSize(size);
    if (tier) setSelectedTier(tier);
    if (ruling) setSelectedRuling(ruling);
    setIsDrawerOpen(true);
  };

  const closeReservation = () => {
    setIsDrawerOpen(false);
  };

  // Pricing calculations based on journal edition, bundle tier & format size
  const journalPrice = selectedPrint ? selectedPrint.price : 999;
  const journalDeposit = selectedPrint ? selectedPrint.depositPrice : 290;
  const bundleAddon = selectedTier?.id === 'writer-bundle' ? 300 : selectedTier?.id === 'heirloom-box' ? 700 : 0;
  const bundleDepositAddon = selectedTier?.id === 'writer-bundle' ? 100 : selectedTier?.id === 'heirloom-box' ? 200 : 0;
  
  const sizeMultiplier = selectedSize?.multiplier || 1.0;
  const basePrice = Math.round((journalPrice + bundleAddon) * sizeMultiplier);
  const depositPrice = Math.round((journalDeposit + bundleDepositAddon) * sizeMultiplier);
  const amountToPayNow = isDepositOnly ? depositPrice : basePrice;
  const balanceDueLater = isDepositOnly ? basePrice - depositPrice : 0;

  return (
    <CartContext.Provider value={{
      selectedPrint,
      setSelectedPrint,
      selectedSize,
      setSelectedSize,
      selectedTier,
      setSelectedTier,
      selectedRuling,
      setSelectedRuling,
      personalization,
      setPersonalization,
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
      tiers: TIERS,
      sizes: SIZES,
      rulings: RULINGS,
      journals: LAUNCH_PRINTS
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
