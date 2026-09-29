import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const defaultMessage = 'Hello World Air! I would like to inquire about international flight bookings and student airfares.';

  return (
    <aside aria-label="WhatsApp live chat support" className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with World Air on WhatsApp"
        className="group relative flex items-center bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        {/* WhatsApp Icon (SVG for perfect branding) */}
        <svg
          className="w-6 h-6 shrink-0 fill-current drop-shadow-xs"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.099-2.022-.444-1.777-.696-2.909-2.508-3.003-2.628-.093-.12-0.728-.971-.728-1.85 0-.88.461-1.314.625-1.492.164-.179.358-.224.478-.224.12 0 .239.002.343.007.109.006.255-.041.399.304.149.359.508 1.238.552 1.328.045.089.075.194.015.313-.06.12-.089.194-.179.3-.089.105-.189.233-.269.313-.089.089-.182.186-.078.365.104.179.462.763.992 1.236.684.609 1.261.798 1.44 0.888.179.089.284.075.389-.045.105-.119.448-.522.567-.701.119-.179.239-.149.399-.089.16.06 1.015.478 1.189.565.174.088.291.132.334.208.045.076.045.437-.099.842z" />
        </svg>

        {/* Text on Desktop */}
        <span className="hidden sm:inline-block ml-2.5 text-xs font-bold uppercase tracking-wider text-white select-none">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
