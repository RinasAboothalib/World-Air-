import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { DestinationsSection } from '../components/DestinationsSection';
import { TravelInspiration } from '../components/TravelInspiration';
import { PageId, Destination } from '../types';

interface DestinationsPageProps {
  onSelectDestination: (dest: Destination) => void;
  onNavigate: (page: PageId) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  onSelectDestination,
  onNavigate,
}) => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <PageHeader
        title="Global Flight Destinations"
        subtitle="Explore Sri Lanka’s most traveled international air corridors across the UK, Australia, North America, Europe, Asia, and the Middle East with daily direct or one-stop connections."
        badge="Worldwide Airline Network"
        currentPageName="Destinations"
        onNavigate={onNavigate}
      />

      {/* Main Filterable Destinations Grid */}
      <DestinationsSection onSelectDestination={onSelectDestination} />

      {/* Travel Inspirations Gallery */}
      <TravelInspiration
        onSelectInspiration={(title) => {
          onNavigate('booking');
        }}
      />
    </div>
  );
};
