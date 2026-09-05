import React, { createContext, useContext, useState, useEffect } from 'react';
import { LAUNCH_PRINTS, SIZES, TIERS, PREORDER_META, BRAND_STORY } from '../data/preorderData';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedPrint, setSelectedPrint] = useState(LAUNCH_PRINTS[0]);
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);
  const [selectedTier, setSelectedTier] = useState(TIERS[0]);
  const [isDepositOnly, setIsDepositOnly] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

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
