import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedMenu } from './components/FeaturedMenu';
import { SpecialOffer } from './components/SpecialOffer';
import { AboutUs } from './components/AboutUs';
import { WhyChoose } from './components/WhyChoose';
import { FullMenu } from './components/FullMenu';
import { CustomerReviews } from './components/CustomerReviews';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { SearchModal } from './components/SearchModal';
import { QuickViewModal } from './components/QuickViewModal';
import { Toast } from './components/Toast';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0d0e12] text-[#f5efeb] flex flex-col selection:bg-[#ff5c26] selection:text-white">
        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero />
          <FeaturedMenu />
          <SpecialOffer />
          <AboutUs />
          <WhyChoose />
          <FullMenu />
          <CustomerReviews />
          <GallerySection />
          <ContactSection />
          <FAQSection />
          <Newsletter />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Modals, Drawers & Notifications */}
        <CartDrawer />
        <CheckoutModal />
        <OrderConfirmationModal />
        <SearchModal />
        <QuickViewModal />
        <Toast />
      </div>
    </CartProvider>
  );
}
