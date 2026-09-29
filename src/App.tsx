import React, { useState, useEffect } from 'react';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { InquiryModal } from './components/InquiryModal';
import { PageId, FlightInquiry, Destination } from './types';

// Distinct Pages
import { HomePage } from './pages/HomePage';
import { FlightBookingPage } from './pages/FlightBookingPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    const validPages: PageId[] = [
      'home',
      'booking',
      'about',
      'services',
      'destinations',
      'contact',
    ];
    if (validPages.includes(hash as PageId)) {
      return hash as PageId;
    }
    if (hash === 'flight-search') return 'booking';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'flight' | 'student' | 'visa' | 'holiday'>('flight');
  const [selectedInquiry, setSelectedInquiry] = useState<FlightInquiry | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<string | undefined>(undefined);

  // Sync state with browser hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (type: 'flight' | 'student' | 'visa' | 'holiday' = 'flight') => {
    setModalType(type);
    setSelectedInquiry(null);
    setSelectedDestination(undefined);
    setModalOpen(true);
  };

  const handleSearchInquiry = (inquiry: FlightInquiry) => {
    setSelectedInquiry(inquiry);
    setModalType(inquiry.isStudentFare ? 'student' : 'flight');
    setSelectedDestination(inquiry.toCity);
    setModalOpen(true);
  };

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(`${dest.city} (${dest.airportCode})`);
    setModalType('flight');
    setModalOpen(true);
  };

  const handleSelectRoute = (origin: string, destination: string) => {
    setSelectedDestination(destination);
    setModalType('flight');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col font-sans selection:bg-red-700 selection:text-white">
      {/* Short initial aviation page loading animation */}
      <PageLoader />

      {/* Primary Sticky Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Content Area - Render chosen navigation heading's page */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onOpenInquiry={handleOpenInquiry}
            onNavigate={handleNavigate}
            onSelectDestination={handleSelectDestination}
            onSelectRoute={handleSelectRoute}
          />
        )}

        {currentPage === 'booking' && (
          <FlightBookingPage
            onSearchInquiry={handleSearchInquiry}
            onOpenInquiry={handleOpenInquiry}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenInquiry={handleOpenInquiry}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onSelectService={(service) => handleOpenInquiry(service)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'destinations' && (
          <DestinationsPage
            onSelectDestination={handleSelectDestination}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Large Professional Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Floating Blinking WhatsApp Quick Action Button */}
      <WhatsAppButton />

      {/* Universal Booking & Consultation Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
        initialInquiry={selectedInquiry}
        initialDestination={selectedDestination}
      />
    </div>
  );
}
