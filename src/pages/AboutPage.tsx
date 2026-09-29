import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PageId } from '../types';

interface AboutPageProps {
  onOpenInquiry: (type?: 'flight' | 'student' | 'visa' | 'holiday') => void;
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenInquiry, onNavigate }) => {
  return (
    <div className="bg-white">
      <PageHeader
        title="About World Air (Pvt.) Ltd."
        subtitle="Over 25 years of redefining Sri Lankan aviation, trusted by thousands of global travelers, students, and corporate institutions since 1999."
        badge="Established 1999 · 25+ Years of Trust"
        currentPageName="About Us"
        onNavigate={onNavigate}
      />

      {/* Main Corporate About Section */}
      <AboutSection onOpenInquiry={onOpenInquiry} />

      {/* Accreditations & Core Trust Factors */}
      <WhyChooseUs />

      {/* Verified Passenger Reviews */}
      <TestimonialsSection />
    </div>
  );
};
