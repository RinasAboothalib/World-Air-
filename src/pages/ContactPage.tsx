import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';
import { PageId } from '../types';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <PageHeader
        title="Contact World Air Travel Desks"
        subtitle="Speak directly with our certified airline ticketing agents, visit our travel offices in Colombo and Kandy, or submit an inquiry for rapid travel assistance."
        badge="24/7 Ticketing Support"
        currentPageName="Contact"
        onNavigate={onNavigate}
      />

      {/* Main Interactive Contact Section */}
      <ContactSection />
    </div>
  );
};
