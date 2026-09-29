import React, { useState, useMemo } from 'react';
import { ROUTE_MAP_NODES } from '../data/mockData';
import { RouteNode } from '../types';
import * as d3Geo from 'd3-geo';
import * as topojson from 'topojson-client';
import worldData from 'world-atlas/countries-110m.json';
import { Plane, Compass, ArrowRight, Clock, Navigation, Sparkles, Globe } from 'lucide-react';

interface RouteMapSectionProps {
  onSelectRoute: (origin: string, destination: string) => void;
}

const AIRPORT_FLAG_CODES: Record<string, string> = {
  CMB: 'lk',
  LHR: 'gb',
  MEL: 'au',
  NRT: 'jp',
  DXB: 'ae',
  DOH: 'qa',
  MCT: 'om',
  KWI: 'kw',
  DEL: 'in',
  MLE: 'mv',
  BKK: 'th',
  SIN: 'sg',
  KUL: 'my',
  JFK: 'us',
  YUL: 'ca',
};

export const RouteMapSection: React.FC<RouteMapSectionProps> = ({ onSelectRoute }) => {
  const [activeNodeId, setActiveNodeId] = useState<string>('LHR');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const hub = ROUTE_MAP_NODES.find((n) => n.isHub) || ROUTE_MAP_NODES[0];
  const destinations = ROUTE_MAP_NODES.filter((n) => !n.isHub);
  const selectedDest = destinations.find((n) => n.id === activeNodeId) || destinations[0];

  // SVG dimensions
  const width = 1000;
  const height = 540;

  // Real geographic equirectangular projection centered to showcase global routes from Sri Lanka
  const { countriesPath, landPath, graticulePath, equatorY } = useMemo(() => {
    const projection = d3Geo.geoEquirectangular()
      .scale(158)
      .translate([width / 2, height / 2 + 10]);

    const pathGen = d3Geo.geoPath(projection);

    const landFeature = topojson.feature(worldData as any, (worldData as any).objects.land);
    const countriesFeature = topojson.feature(worldData as any, (worldData as any).objects.countries);
    const graticule = d3Geo.geoGraticule10();

    const cPath = pathGen(countriesFeature) || '';
    const lPath = pathGen(landFeature) || '';
    const gPath = pathGen(graticule) || '';

    const equatorPt = projection([0, 0]);
    const eqY = equatorPt ? equatorPt[1] : height / 2;

    return {
      projection,
      countriesPath: cPath,
      landPath: lPath,
      graticulePath: gPath,
      equatorY: eqY,
    };
  }, []);

  // Compute exact projected coordinates and Great Circle paths for each destination
  const routeData = useMemo(() => {
    const projection = d3Geo.geoEquirectangular()
      .scale(158)
      .translate([width / 2, height / 2 + 10]);

    const hubPoint = projection(hub.coordinates) || [width / 2, height / 2];

    const nodesWithCoords = ROUTE_MAP_NODES.map((node) => {
      const pt = projection(node.coordinates) || [0, 0];
      return {
        ...node,
        x: pt[0],
        y: pt[1],
        flagCode: AIRPORT_FLAG_CODES[node.id] || 'lk',
        flagImg: `https://flagcdn.com/w40/${AIRPORT_FLAG_CODES[node.id] || 'lk'}.png`,
      };
    });

    const pathsMap: Record<string, { pathString: string; points: [number, number][] }> = {};

    destinations.forEach((dest) => {
      const interpolator = d3Geo.geoInterpolate(hub.coordinates, dest.coordinates);
      const pointsCount = 28;
      const pts: [number, number][] = [];

      for (let i = 0; i <= pointsCount; i++) {
        const geoCoord = interpolator(i / pointsCount);
        const projected = projection(geoCoord);
        if (projected) {
          pts.push(projected as [number, number]);
        }
      }

      let d = '';
      pts.forEach((p, idx) => {
        d += `${idx === 0 ? 'M' : 'L'} ${p[0].toFixed(1)} ${p[1].toFixed(1)} `;
      });

      pathsMap[dest.id] = {
        pathString: d,
        points: pts,
      };
    });

    return {
      hubPoint,
      nodes: nodesWithCoords,
      paths: pathsMap,
    };
  }, [hub, destinations]);

  const activePathString = routeData.paths[activeNodeId]?.pathString || '';
  const selectedFlagImg = `https://flagcdn.com/w40/${AIRPORT_FLAG_CODES[selectedDest.id] || 'lk'}.png`;

  return (
    <section id="routes" className="py-24 bg-stone-950 text-white relative overflow-hidden border-t border-stone-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 mb-3">
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>Real World Flight Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-serif-luxury">
            Global Routes From Colombo, Sri Lanka
          </h2>
          <p className="text-sm text-stone-400 leading-relaxed max-w-2xl mx-auto">
            Explore authentic international air corridors connecting Sri Lanka with the United Kingdom, Europe, Middle East, Asia, Australia, and North America.
          </p>
        </div>

        {/* Real World Map Container */}
        <div className="bg-stone-900/95 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 mb-8">
          {/* Header Controls & Status */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-800 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Primary Flight Hub:
              </span>
              <span className="bg-red-700/90 text-white text-xs font-bold px-3 py-1 rounded-md flex items-center gap-2 shadow-sm border border-red-600">
                <img
                  src="https://flagcdn.com/w40/lk.png"
                  alt="Sri Lanka Flag"
                  className="w-4 h-3 object-cover rounded-xs border border-white/20"
                />
                <span>Colombo (CMB)</span>
                <span className="text-[10px] text-amber-200">· 6.9°N, 79.8°E</span>
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-stone-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Great Circle Geodesic Navigation</span>
              </span>
              <span className="hidden sm:inline text-stone-700">|</span>
              <span className="hidden sm:inline text-stone-400">Natural Earth Cartographic Projection</span>
            </div>
          </div>

          {/* Real SVG World Map */}
          <div className="relative w-full aspect-[20/11] min-h-[360px] sm:min-h-[480px] bg-[#0c1017] rounded-xl overflow-hidden border border-stone-800 shadow-inner flex items-center justify-center">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-full select-none"
              preserveAspectRatio="xMidYMid meet"
              aria-label="Real World Flight Map"
            >
              <defs>
                <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <radialGradient id="hubBeacon">
                  <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#DC2626" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#991B1B" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Ocean Background Grid / Graticules */}
              <path
                d={graticulePath}
                fill="none"
                stroke="rgba(255, 255, 255, 0.04)"
                strokeWidth="0.6"
              />

              {/* Equator Line */}
              <line
                x1="0"
                y1={equatorY}
                x2={width}
                y2={equatorY}
                stroke="rgba(197, 155, 39, 0.2)"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
              <text
                x="12"
                y={equatorY - 4}
                fill="rgba(197, 155, 39, 0.4)"
                fontSize="9"
                fontFamily="Inter"
                letterSpacing="1"
              >
                EQUATOR 0°
              </text>

              {/* Real World Landmasses */}
              <path
                d={landPath}
                fill="#181e2b"
                stroke="#222b3d"
                strokeWidth="0.8"
              />

              {/* Real Country Borders */}
              <path
                d={countriesPath}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="0.5"
              />

              {/* Inactive Flight Paths */}
              {destinations.map((dest) => {
                const pathObj = routeData.paths[dest.id];
                if (!pathObj || dest.id === activeNodeId) return null;

                return (
                  <path
                    key={dest.id}
                    d={pathObj.pathString}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.18)"
                    strokeWidth="1.2"
                    strokeDasharray="3 4"
                    className="hover:stroke-amber-400/60 transition-colors cursor-pointer"
                    onClick={() => setActiveNodeId(dest.id)}
                  />
                );
              })}

              {/* Active Selected Flight Path (Glowing Great Circle) */}
              {activePathString && (
                <>
                  <path
                    d={activePathString}
                    fill="none"
                    stroke="#A6192E"
                    strokeWidth="5"
                    strokeOpacity="0.4"
                    filter="url(#routeGlow)"
                  />
                  <path
                    d={activePathString}
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2.2"
                    strokeDasharray="6 6"
                    className="animate-flight-dash"
                  />

                  {/* Animated Commercial Jet */}
                  <g>
                    <circle r="4" fill="#F59E0B" className="animate-ping">
                      <animateMotion
                        path={activePathString}
                        dur="4.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <g transform="translate(-8, -8) scale(0.7)">
                      <Plane className="w-5 h-5 text-amber-200 fill-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]">
                        <animateMotion
                          path={activePathString}
                          dur="4.5s"
                          repeatCount="indefinite"
                          rotate="auto"
                        />
                      </Plane>
                    </g>
                  </g>
                </>
              )}

              {/* Destination Airport Nodes */}
              {routeData.nodes.filter((n) => !n.isHub).map((node) => {
                const isSelected = node.id === activeNodeId;
                const isHovered = node.id === hoveredNodeId;
                const flagSrc = `https://flagcdn.com/w40/${node.flagCode}.png`;
                const labelWidth = node.name.length * 6.5 + 24;

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    className="cursor-pointer group"
                    onClick={() => setActiveNodeId(node.id)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                  >
                    <circle cx="0" cy="0" r="16" fill="transparent" />

                    {isSelected && (
                      <circle
                        cx="0"
                        cy="0"
                        r="12"
                        fill="rgba(245, 158, 11, 0.25)"
                        className="animate-ping"
                      />
                    )}

                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected ? 6 : isHovered ? 5.5 : 4}
                      fill={isSelected ? '#F59E0B' : '#DC2626'}
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                    />

                    {/* Airport Label with Original Flag Image */}
                    <g transform={`translate(${node.x > width - 100 ? -labelWidth : 8}, ${node.y < 40 ? 12 : -6})`}>
                      <rect
                        x="-3"
                        y="-10"
                        width={labelWidth}
                        height="16"
                        rx="3"
                        fill="rgba(12, 16, 23, 0.9)"
                        stroke={isSelected ? '#F59E0B' : 'rgba(255,255,255,0.2)'}
                        strokeWidth={isSelected ? '1.2' : '0.6'}
                      />
                      {/* Original Flag Image */}
                      <image
                        href={flagSrc}
                        x="2"
                        y="-7"
                        width="12"
                        height="9"
                        preserveAspectRatio="none"
                      />
                      {/* City Name */}
                      <text
                        x="18"
                        y="1.5"
                        fill={isSelected ? '#F59E0B' : '#FFFFFF'}
                        fontSize="9.5"
                        fontWeight={isSelected ? 'bold' : '600'}
                        fontFamily="Inter, sans-serif"
                      >
                        {node.name}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* Sri Lanka Colombo (CMB) Hub Node */}
              {routeData.hubPoint && (
                <g transform={`translate(${routeData.hubPoint[0]}, ${routeData.hubPoint[1]})`}>
                  <circle cx="0" cy="0" r="22" fill="url(#hubBeacon)" className="animate-ping" />
                  <circle cx="0" cy="0" r="14" fill="rgba(166, 25, 46, 0.3)" />
                  <circle cx="0" cy="0" r="8" fill="#A6192E" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="0" cy="0" r="3" fill="#FFFFFF" />

                  {/* Colombo Hub Label Badge with Original Sri Lanka Flag */}
                  <g transform="translate(12, 4)">
                    <rect
                      x="-4"
                      y="-12"
                      width="126"
                      height="19"
                      rx="4"
                      fill="#A6192E"
                      stroke="#FFFFFF"
                      strokeWidth="1.2"
                      className="shadow-lg"
                    />
                    <image
                      href="https://flagcdn.com/w40/lk.png"
                      x="2"
                      y="-8"
                      width="14"
                      height="10"
                      preserveAspectRatio="none"
                    />
                    <text
                      x="20"
                      y="1.5"
                      fill="#FFFFFF"
                      fontSize="9.5"
                      fontWeight="bold"
                      fontFamily="Inter, sans-serif"
                      letterSpacing="0.5"
                    >
                      COLOMBO (CMB)
                    </text>
                  </g>
                </g>
              )}
            </svg>

            {/* Inset Route Inspector Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-84 bg-stone-900/95 backdrop-blur-md border border-stone-700/90 p-4 sm:p-5 rounded-xl shadow-2xl animate-in fade-in-50">
              <div className="flex items-center justify-between pb-2 border-b border-stone-800 mb-3">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Selected International Route</span>
                </span>
                <span className="text-xs font-mono font-bold text-white bg-stone-800 px-2 py-0.5 rounded border border-stone-700 flex items-center gap-1.5">
                  <img
                    src={selectedFlagImg}
                    alt={selectedDest.country}
                    className="w-4 h-3 object-cover rounded-xs"
                  />
                  <span>{selectedDest.id}</span>
                </span>
              </div>

              <div className="text-lg font-bold text-white font-serif-luxury mb-1">
                Colombo (CMB) → {selectedDest.name}
              </div>

              <div className="text-xs text-stone-400 mb-3">
                {selectedDest.airport} · {selectedDest.country}
              </div>

              {/* Flight Specs */}
              <div className="grid grid-cols-2 gap-2 bg-stone-950/70 p-2.5 rounded-lg border border-stone-800/80 mb-3 text-xs">
                <div>
                  <span className="text-[10px] text-stone-500 block uppercase font-semibold">
                    Flight Duration:
                  </span>
                  <span className="font-bold text-white flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{selectedDest.time}</span>
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 block uppercase font-semibold">
                    Great Circle Distance:
                  </span>
                  <span className="font-bold text-amber-300">
                    {selectedDest.distance}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectRoute('Colombo (CMB)', selectedDest.name)}
                className="w-full bg-red-700 hover:bg-red-800 text-white text-xs font-bold py-2.5 px-3 rounded-lg uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer border border-red-600 hover:scale-[1.02]"
              >
                <span>Request Fares for this Route</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Route Selector Strip with Original Country Flags */}
          <div className="mt-4 pt-3 border-t border-stone-800/80 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-stone-400 mr-1 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-red-500" />
              <span>Select Airport:</span>
            </span>
            {destinations.map((node) => {
              const flagCode = AIRPORT_FLAG_CODES[node.id] || 'lk';
              const flagSrc = `https://flagcdn.com/w40/${flagCode}.png`;
              const isSelected = node.id === activeNodeId;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveNodeId(node.id)}
                  className={`px-2.5 py-1 text-xs rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-amber-500/25 text-amber-300 border border-amber-400/60 font-bold shadow-xs'
                      : 'bg-stone-800/80 text-stone-300 hover:text-white hover:bg-stone-700 border border-stone-700'
                  }`}
                >
                  <img
                    src={flagSrc}
                    alt={node.country}
                    className="w-4 h-3 object-cover rounded-xs border border-white/20 shrink-0 shadow-xs"
                    loading="lazy"
                  />
                  <span>{node.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
