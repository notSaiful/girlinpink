import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { HomeStory } from './pages/HomeStory';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { RefundPolicy } from './pages/RefundPolicy';
import { ShippingPolicy } from './pages/ShippingPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ProductPage } from './pages/ProductPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { Footer } from './components/Footer';

export function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle URL hash changes for navigation & Razorpay compliance
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['about', 'about-us', 'contact', 'refund', 'refund-policy', 'shipping', 'shipping-policy', 'terms', 'terms-and-conditions', 'privacy', 'privacy-policy', 'product', 'sheets', 'shop', 'checkout', 'order', 'sky-blue'].some(key => hash.includes(key))) {
        if (hash.includes('about')) setCurrentPage('about');
        else if (hash.includes('refund')) setCurrentPage('refund');
        else if (hash.includes('shipping')) setCurrentPage('shipping');
        else if (hash.includes('terms')) setCurrentPage('terms');
        else if (hash.includes('privacy')) setCurrentPage('privacy');
        else if (hash === 'contact') setCurrentPage('contact');
        else if (['product', 'sheets', 'shop', 'sky-blue'].some(key => hash.includes(key))) setCurrentPage('product');
        else if (['checkout', 'order'].some(key => hash.includes(key))) setCurrentPage('checkout');
      } else {
        setCurrentPage('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-pink-gingham-canvas text-nearblack flex flex-col font-sans selection:bg-rose selection:text-white">
        
        {/* Navigation Bar */}
        <Header currentPage={currentPage} onNavigate={navigateTo} />

        {/* Dynamic Canvas Container */}
        <main className={`flex-1 ${currentPage === 'home' ? '' : 'py-6 sm:py-10'}`}>
          {currentPage === 'home' && <HomeStory onNavigate={navigateTo} />}
          {currentPage === 'product' && <ProductPage onNavigate={navigateTo} />}
          {currentPage === 'checkout' && <CheckoutPage onNavigate={navigateTo} />}
          {currentPage === 'about' && <AboutUs onNavigate={navigateTo} />}
          {currentPage === 'contact' && <ContactUs onNavigate={navigateTo} />}
          {currentPage === 'refund' && <RefundPolicy onNavigate={navigateTo} />}
          {currentPage === 'shipping' && <ShippingPolicy onNavigate={navigateTo} />}
          {currentPage === 'terms' && <TermsConditions onNavigate={navigateTo} />}
          {currentPage === 'privacy' && <PrivacyPolicy onNavigate={navigateTo} />}
        </main>

        {/* Compliant Footer with Razorpay Policies */}
        <Footer onNavigate={navigateTo} />

      </div>
    </CartProvider>
  );
}

export default App;
