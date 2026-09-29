import React, { useState } from 'react';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FlightSearch } from './components/FlightSearch';
import { QuickActions } from './components/QuickActions';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { StudentOffersSection } from './components/StudentOffersSection';
import { DestinationsSection } from './components/DestinationsSection';
import { RouteMapSection } from './components/RouteMapSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TravelInspiration } from './components/TravelInspiration';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { InquiryModal } from './components/InquiryModal';
import { FlightInquiry, Destination } from './types';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'flight' | 'student' | 'visa' | 'holiday'>('flight');
  const [selectedInquiry, setSelectedInquiry] = useState<FlightInquiry | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<string | undefined>(undefined);

  // Trigger inquiry from Navbar or Hero
  const handleOpenInquiry = (type: 'flight' | 'student' | 'visa' | 'holiday' = 'flight') => {
    setModalType(type);
    setSelectedInquiry(null);
    setSelectedDestination(undefined);
    setModalOpen(true);
  };

  // Trigger from Flight Search Widget
  const handleSearchInquiry = (inquiry: FlightInquiry) => {
    setSelectedInquiry(inquiry);
    setModalType(inquiry.isStudentFare ? 'student' : 'flight');
    setSelectedDestination(inquiry.toCity);
    setModalOpen(true);
  };

  // Trigger from Destination card
  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(`${dest.city} (${dest.airportCode})`);
    setModalType('flight');
    setModalOpen(true);
  };

  // Trigger from Route Map
  const handleSelectRoute = (origin: string, destination: string) => {
    setSelectedDestination(destination);
    setModalType('flight');
    setModalOpen(true);
  };

  // Trigger from Student section
  const handleStudentInquiry = (destinationCountry?: string) => {
    setModalType('student');
    setSelectedDestination(destinationCountry);
    setModalOpen(true);
  };

  // Trigger from Travel Inspiration
  const handleSelectInspiration = (title: string) => {
    setSelectedDestination(title);
    setModalType('holiday');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col font-sans selection:bg-red-700 selection:text-white">
      {/* Short aviation page loading animation */}
      <PageLoader />

      {/* Primary Navigation with Official World Air Logo */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Full-screen Hero Section with Aircraft Animation */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* Flight Search / Inquiry Widget */}
        <FlightSearch onSearchInquiry={handleSearchInquiry} />

        {/* Quick Action Bar with 5 key aviation touchpoints */}
        <QuickActions onSelectAction={(action) => {
          if (action === 'contact') {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          } else {
            handleOpenInquiry(action);
          }
        }} />

        {/* About World Air — 25+ Years of Connecting Sri Lanka */}
        <AboutSection onOpenInquiry={handleOpenInquiry} />

        {/* Services Section — 4 Premium Cards */}
        <ServicesSection onSelectService={(service) => handleOpenInquiry(service)} />

        {/* Student Offers — Featured High-Impact Section */}
        <StudentOffersSection onOpenStudentInquiry={handleStudentInquiry} />

        {/* International Destinations Showcase */}
        <DestinationsSection onSelectDestination={handleSelectDestination} />

        {/* Interactive Route Map Centered on Colombo (CMB) */}
        <RouteMapSection onSelectRoute={handleSelectRoute} />

        {/* Why Travelers Choose World Air */}
        <WhyChooseUs />

        {/* Testimonials & Facebook 86%+ Recommendation Score */}
        <TestimonialsSection />

        {/* Travel Inspiration Editorial Gallery */}
        <TravelInspiration onSelectInspiration={handleSelectInspiration} />

        {/* Aviation Sunset Wing Call to Action */}
        <CTASection onOpenInquiry={handleOpenInquiry} />

        {/* Official Corporate Contact Section & Working Form */}
        <ContactSection />
      </main>

      {/* Large Professional Corporate Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
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
