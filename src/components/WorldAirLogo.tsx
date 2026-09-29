import React from 'react';

interface WorldAirLogoProps {
  className?: string;
  variant?: 'red' | 'white' | 'dark';
  height?: number | string;
  width?: number | string;
}

export const WorldAirLogo: React.FC<WorldAirLogoProps> = ({
  className = '',
  variant = 'red',
  height = 46,
  width,
}) => {
  const isWhite = variant === 'white';
  const brandRed = isWhite ? '#FFFFFF' : '#A6192E';

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      style={{ height, width }}
    >
      <svg
        viewBox="0 0 460 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-w-full drop-shadow-xs transition-transform hover:scale-[1.02] duration-200"
        aria-label="World Air (Pvt.) Ltd. Logo"
      >
        {/* Outer Frame: Top, Left, Right, and Split Bottom matching World Air.jpg */}
        {/* Top Border */}
        <line x1="8" y1="8" x2="452" y2="8" stroke={brandRed} strokeWidth="3.5" />
        {/* Left Border */}
        <line x1="8" y1="8" x2="8" y2="182" stroke={brandRed} strokeWidth="3.5" />
        {/* Right Border */}
        <line x1="452" y1="8" x2="452" y2="182" stroke={brandRed} strokeWidth="3.5" />
        {/* Bottom Left Segment (stops before AIR) */}
        <line x1="8" y1="182" x2="142" y2="182" stroke={brandRed} strokeWidth="3.5" />
        {/* Bottom Right Segment (extends under the flight lines to tail fin) */}
        <line x1="278" y1="182" x2="452" y2="182" stroke={brandRed} strokeWidth="3.5" />

        {/* ================= TOP ROW: WORLD ================= */}
        {/* Letter W */}
        <path
          d="M 38 34 L 59 104 L 75 48 L 91 104 L 114 34 L 94 34 L 83 79 L 71 34 L 63 34 L 51 79 L 42 34 Z"
          fill={brandRed}
        />

        {/* Globe as Letter O */}
        <g transform="translate(170, 69)">
          {/* Globe Outer Circle */}
          <circle cx="0" cy="0" r="34" stroke={brandRed} strokeWidth="5.5" fill="none" />
          {/* Equator */}
          <line x1="-34" y1="0" x2="34" y2="0" stroke={brandRed} strokeWidth="4.5" />
          {/* Prime Meridian */}
          <line x1="0" y1="-34" x2="0" y2="34" stroke={brandRed} strokeWidth="4.5" />
          {/* Upper Latitude Arc */}
          <path
            d="M -28 -17 C -14 -11, 14 -11, 28 -17"
            stroke={brandRed}
            strokeWidth="3.5"
            fill="none"
          />
          {/* Lower Latitude Arc */}
          <path
            d="M -28 17 C -14 11, 14 11, 28 17"
            stroke={brandRed}
            strokeWidth="3.5"
            fill="none"
          />
          {/* Left Longitude Arc */}
          <path
            d="M 0 -34 C -19 -21, -19 21, 0 34"
            stroke={brandRed}
            strokeWidth="3.5"
            fill="none"
          />
          {/* Right Longitude Arc */}
          <path
            d="M 0 -34 C 19 -21, 19 21, 0 34"
            stroke={brandRed}
            strokeWidth="3.5"
            fill="none"
          />
        </g>

        {/* Letter R */}
        <path
          d="M 220 34 L 260 34 C 280 34, 292 43, 292 57 C 292 68, 283 76, 270 78 L 295 104 L 274 104 L 252 80 L 239 80 L 239 104 L 220 104 Z M 239 49 L 239 66 L 257 66 C 266 66, 273 63, 273 57 C 273 51, 266 49, 257 49 Z"
          fill={brandRed}
        />

        {/* Letter L */}
        <path
          d="M 308 34 L 327 34 L 327 87 L 359 87 L 359 104 L 308 104 Z"
          fill={brandRed}
        />

        {/* Letter D */}
        <path
          d="M 374 34 L 407 34 C 430 34, 444 47, 444 69 C 444 91, 430 104, 407 104 L 374 104 Z M 393 50 L 393 88 L 407 88 C 420 88, 425 81, 425 69 C 425 57, 420 50, 407 50 Z"
          fill={brandRed}
        />

        {/* ================= BOTTOM ROW: AIR & AIRCRAFT FIN ================= */}
        {/* Letter A (Italic Serif) */}
        <path
          d="M 148 182 L 173 118 L 193 118 L 217 182 L 201 182 L 194 163 L 174 163 L 166 182 Z M 178 149 L 189 149 L 184 133 Z"
          fill={brandRed}
        />

        {/* Letter I (Italic Serif) */}
        <path
          d="M 223 118 L 238 118 L 238 182 L 223 182 Z"
          fill={brandRed}
        />

        {/* Letter R (Italic Serif) */}
        <path
          d="M 250 118 L 279 118 C 294 118, 303 125, 303 135 C 303 143, 296 150, 287 152 L 306 182 L 289 182 L 273 156 L 265 156 L 265 182 L 250 182 Z M 265 131 L 265 144 L 277 144 C 284 144, 288 142, 288 137 C 288 132, 284 131, 277 131 Z"
          fill={brandRed}
        />

        {/* Upper Parallel Flight Line (extends from under R toward Tail Fin) */}
        <line
          x1="298"
          y1="166"
          x2="380"
          y2="166"
          stroke={brandRed}
          strokeWidth="3.5"
        />

        {/* Lower Flight Line Extension */}
        <line
          x1="284"
          y1="182"
          x2="428"
          y2="182"
          stroke={brandRed}
          strokeWidth="3.5"
        />

        {/* Aircraft Tail Fin (Vertical Stabilizer) */}
        <path
          d="M 380 166 L 428 166 L 444 122 C 444 122, 434 122, 428 126 C 410 136, 392 152, 380 166 Z"
          fill={brandRed}
        />
      </svg>
    </div>
  );
};
