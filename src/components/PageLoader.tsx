import React, { useState, useEffect } from 'react';
import { WorldAirLogo } from './WorldAirLogo';
import { Plane } from 'lucide-react';

interface PageLoaderProps {
  onLoaded?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onLoaded }) => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 100 : 900;

    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setVisible(false);
        if (onLoaded) onLoaded();
      }, 350);
    }, duration);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-350 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading World Air"
      role="status"
    >
      <div className="flex flex-col items-center max-w-xs text-center px-4 animate-in fade-in zoom-in-95 duration-500">
        {/* World Air Official Vector Logo */}
        <div className="mb-6 transform hover:scale-105 transition-transform">
          <WorldAirLogo variant="red" height={56} />
        </div>

        {/* Animated Flight Path Line */}
        <div className="w-56 h-1 bg-stone-100 rounded-full relative overflow-hidden mb-4 border border-stone-200">
          <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-red-700 via-red-600 to-amber-500 rounded-full w-full animate-[progress_1s_ease-in-out_infinite]" />
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
          <Plane className="w-3.5 h-3.5 text-red-700 -rotate-45" />
          <span>Connecting Sri Lanka to the World</span>
        </div>
      </div>
    </div>
  );
};
