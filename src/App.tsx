import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickHighlights } from './components/QuickHighlights';
import { WhySelfDrive } from './components/WhySelfDrive';
import { FleetSection } from './components/FleetSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { FloatingActions } from './components/FloatingActions';

export const App: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Any Vehicle');

  const handleOpenEnquiry = (category: string = 'Any Vehicle') => {
    setSelectedCategory(category);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFD] text-slate-700 selection:bg-brand-blue selection:text-white">
      {/* Fixed Header */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry('Any Vehicle')} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry('Any Vehicle')} />

        {/* 2. Quick Service Highlights */}
        <QuickHighlights />

        {/* 3. Why Self Drive? (Experience Section) */}
        <WhySelfDrive />

        {/* 4. Fleet Section (Choose Your Ride + Availability Portal) */}
        <FleetSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. About Section (Your Journey. Your Drive.) */}
        <AboutSection />

        {/* 6. Contact & Direct Booking Section */}
        <ContactSection />
      </main>

      {/* Light Theme Footer */}
      <Footer />

      {/* Interactive Booking Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        initialVehicleCategory={selectedCategory}
      />

      {/* Floating Call & WhatsApp Actions */}
      <FloatingActions />
    </div>
  );
};

export default App;
