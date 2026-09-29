import React, { useState } from 'react';
import { TripType, CabinClass, FlightInquiry } from '../types';
import { POPULAR_AIRPORTS } from '../data/mockData';
import {
  PlaneTakeoff,
  PlaneLanding,
  Calendar,
  Users,
  Briefcase,
  ArrowRightLeft,
  Search,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Send
} from 'lucide-react';

interface FlightSearchProps {
  onSearchInquiry: (inquiry: FlightInquiry) => void;
}

export const FlightSearch: React.FC<FlightSearchProps> = ({ onSearchInquiry }) => {
  const [tripType, setTripType] = useState<TripType>('round-trip');
  const [fromCode, setFromCode] = useState('CMB');
  const [fromCity, setFromCity] = useState('Colombo, Sri Lanka (CMB)');
  const [toCode, setToCode] = useState('LHR');
  const [toCity, setToCity] = useState('London Heathrow (LHR)');

  // Default dates: departure next week, return 3 weeks later
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 10);
  const returnWeek = new Date(today);
  returnWeek.setDate(today.getDate() + 30);

  const [departureDate, setDepartureDate] = useState(nextWeek.toISOString().split('T')[0]);
  const [returnDate, setReturnDate] = useState(returnWeek.toISOString().split('T')[0]);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [students, setStudents] = useState(0);
  const [showPassengerPopover, setShowPassengerPopover] = useState(false);

  const [cabinClass, setCabinClass] = useState<CabinClass>('economy');
  const [isStudentFare, setIsStudentFare] = useState(false);

  // Quick swap
  const handleSwapAirports = () => {
    const tempCode = fromCode;
    const tempCity = fromCity;
    setFromCode(toCode);
    setFromCity(toCity);
    setToCode(tempCode);
    setToCity(tempCity);
  };

  const handleSelectDestination = (code: string, city: string) => {
    setToCode(code);
    setToCity(`${city} (${code})`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inquiry: FlightInquiry = {
      tripType,
      fromCity,
      fromCode,
      toCity,
      toCode,
      departureDate,
      returnDate: tripType === 'one-way' ? undefined : returnDate,
      passengers: {
        adults,
        children,
        infants,
        students: isStudentFare ? Math.max(1, students) : students,
      },
      cabinClass,
      isStudentFare,
    };
    onSearchInquiry(inquiry);
  };

  const totalPassengers = adults + children + infants + (isStudentFare ? Math.max(1, students) : students);

  return (
    <section id="flight-search" className="relative z-30 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="bg-white rounded-xl shadow-2xl border border-stone-200/80 overflow-hidden">
        {/* Header Bar with Tabs and Student Badge */}
        <div className="bg-stone-50 border-b border-stone-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-stone-900 font-serif-luxury tracking-tight">
                Find Your Next Journey
              </h2>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-red-600" />
              <span className="hidden sm:inline text-xs text-stone-500 font-medium">
                Official International Airline Ticket Inquiries
              </span>
            </div>
          </div>

          {/* Trip Type Segmented Tabs */}
          <div className="flex items-center gap-1 bg-stone-200/70 p-1 rounded-lg">
            {(
              [
                { id: 'round-trip', label: 'Round Trip' },
                { id: 'one-way', label: 'One Way' },
                { id: 'multi-city', label: 'Multi City' },
              ] as const
            ).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTripType(t.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  tripType === t.id
                    ? 'bg-red-700 text-white shadow-sm'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Student Special Toggle */}
          <div className="flex items-center">
            <label className="relative flex items-center gap-2 cursor-pointer text-xs font-semibold text-stone-700 hover:text-red-700 transition-colors">
              <input
                type="checkbox"
                checked={isStudentFare}
                onChange={(e) => {
                  setIsStudentFare(e.target.checked);
                  if (e.target.checked && students === 0) {
                    setStudents(1);
                  }
                }}
                className="w-4 h-4 text-red-600 rounded border-stone-300 focus:ring-red-500"
              />
              <span className="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-300 px-2.5 py-1 rounded">
                <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
                <span>Student Special Fare (Up to 40kg Baggage)</span>
              </span>
            </label>
          </div>
        </div>

        {/* Search Form Fields */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
            {/* Origin Field */}
            <div className="lg:col-span-3 relative">
              <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                From (Origin)
              </label>
              <div className="relative flex items-center">
                <PlaneTakeoff className="w-4 h-4 text-red-600 absolute left-3 pointer-events-none" />
                <select
                  value={fromCode}
                  onChange={(e) => {
                    setFromCode(e.target.value);
                    const found = POPULAR_AIRPORTS.find((a) => a.code === e.target.value);
                    if (found) setFromCity(`${found.city}, ${found.country} (${found.code})`);
                  }}
                  className="w-full pl-9 pr-3 py-2.5 bg-stone-50/90 border border-stone-300 rounded-xl text-sm font-semibold text-stone-900 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 cursor-pointer transition-all"
                >
                  <option value="CMB">Colombo, Sri Lanka (CMB)</option>
                  <option value="LHR">London Heathrow, UK (LHR)</option>
                  <option value="DXB">Dubai, UAE (DXB)</option>
                  <option value="MEL">Melbourne, Australia (MEL)</option>
                  <option value="SIN">Singapore (SIN)</option>
                </select>
              </div>
            </div>

            {/* Airport Swap Button */}
            <div className="hidden lg:flex lg:col-span-1 justify-center pt-5">
              <button
                type="button"
                onClick={handleSwapAirports}
                title="Swap departure and arrival"
                className="p-2.5 rounded-full border border-stone-300 bg-stone-50 shadow-xs text-stone-600 hover:text-red-700 hover:border-red-400 hover:bg-stone-100 transition-all cursor-pointer"
              >
                <ArrowRightLeft className="w-4 h-4" />
              </button>
            </div>

            {/* Destination Field */}
            <div className="lg:col-span-3 relative">
              <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                To (Destination)
              </label>
              <div className="relative flex items-center">
                <PlaneLanding className="w-4 h-4 text-red-600 absolute left-3 pointer-events-none" />
                <select
                  value={toCode}
                  onChange={(e) => {
                    setToCode(e.target.value);
                    const found = POPULAR_AIRPORTS.find((a) => a.code === e.target.value);
                    if (found) setToCity(`${found.city} (${found.code})`);
                  }}
                  className="w-full pl-9 pr-3 py-2.5 bg-stone-50/90 border border-stone-300 rounded-xl text-sm font-semibold text-stone-900 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 cursor-pointer transition-all"
                >
                  {POPULAR_AIRPORTS.filter((a) => a.code !== fromCode).map((airport) => (
                    <option key={airport.code} value={airport.code}>
                      {airport.city} ({airport.code}) — {airport.country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dates (Departure & Return) */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                  Departure Date
                </label>
                <div className="relative flex items-center">
                  <Calendar className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 pointer-events-none" />
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full pl-8 pr-2 py-2.5 bg-stone-50/90 border border-stone-300 rounded-xl text-xs font-semibold text-stone-900 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                  {tripType === 'one-way' ? 'Return (N/A)' : 'Return Date'}
                </label>
                <div className="relative flex items-center">
                  <Calendar className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 pointer-events-none" />
                  <input
                    type="date"
                    disabled={tripType === 'one-way'}
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className={`w-full pl-8 pr-2 py-2.5 bg-stone-50/90 border border-stone-300 rounded-xl text-xs font-semibold shadow-inner transition-all ${
                      tripType === 'one-way'
                        ? 'opacity-40 cursor-not-allowed bg-stone-100'
                        : 'text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Passengers & Class Button */}
            <div className="lg:col-span-2 relative">
              <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                Travelers & Class
              </label>
              <button
                type="button"
                onClick={() => setShowPassengerPopover(!showPassengerPopover)}
                className="w-full px-3 py-2.5 bg-stone-50/90 border border-stone-300 rounded-xl text-xs font-semibold text-stone-900 shadow-inner flex items-center justify-between hover:bg-stone-100 transition-colors cursor-pointer text-left"
              >
                <span className="truncate">
                  {totalPassengers} Pax · {cabinClass.replace('-', ' ').toUpperCase()}
                </span>
                <Users className="w-3.5 h-3.5 text-stone-400 ml-1 shrink-0" />
              </button>

              {/* Passengers dropdown popover */}
              {showPassengerPopover && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-xl border border-stone-200 p-4 z-50 animate-in fade-in-50">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-100 mb-3">
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                      Select Passengers
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowPassengerPopover(false)}
                      className="text-xs font-bold text-red-700 hover:underline"
                    >
                      Done
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-stone-900">Adults</p>
                        <p className="text-[10px] text-stone-500">12+ years</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-7 h-7 rounded border border-stone-300 flex items-center justify-center text-xs font-bold hover:bg-stone-100"
                        >
                          -
                        </button>
                        <span className="w-5 text-center text-xs font-bold">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="w-7 h-7 rounded border border-stone-300 flex items-center justify-center text-xs font-bold hover:bg-stone-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-stone-900">Children</p>
                        <p className="text-[10px] text-stone-500">2-11 years</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-7 h-7 rounded border border-stone-300 flex items-center justify-center text-xs font-bold hover:bg-stone-100"
                        >
                          -
                        </button>
                        <span className="w-5 text-center text-xs font-bold">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="w-7 h-7 rounded border border-stone-300 flex items-center justify-center text-xs font-bold hover:bg-stone-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-stone-900">Students</p>
                        <p className="text-[10px] text-amber-700 font-medium">Extra baggage eligible</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setStudents(Math.max(0, students - 1))}
                          className="w-7 h-7 rounded border border-stone-300 flex items-center justify-center text-xs font-bold hover:bg-stone-100"
                        >
                          -
                        </button>
                        <span className="w-5 text-center text-xs font-bold">{students}</span>
                        <button
                          type="button"
                          onClick={() => {
                            setStudents(students + 1);
                            setIsStudentFare(true);
                          }}
                          className="w-7 h-7 rounded border border-stone-300 flex items-center justify-center text-xs font-bold hover:bg-stone-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Cabin Class Selection */}
                    <div className="pt-2 border-t border-stone-100">
                      <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1">
                        Cabin Class
                      </label>
                      <select
                        value={cabinClass}
                        onChange={(e) => setCabinClass(e.target.value as CabinClass)}
                        className="w-full p-1.5 text-xs bg-stone-50 border border-stone-300 rounded font-semibold text-stone-900"
                      >
                        <option value="economy">Economy Class</option>
                        <option value="premium-economy">Premium Economy</option>
                        <option value="business">Business Class (Lie-Flat)</option>
                        <option value="first">First Class Luxury</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Row & Quick Popular Cities */}
          <div className="mt-5 pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
              <span className="font-semibold text-stone-700 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Popular Routes:
              </span>
              {[
                { label: 'London LHR', code: 'LHR', city: 'London' },
                { label: 'Melbourne MEL', code: 'MEL', city: 'Melbourne' },
                { label: 'Dubai DXB', code: 'DXB', city: 'Dubai' },
                { label: 'Tokyo NRT', code: 'NRT', city: 'Tokyo' },
                { label: 'Singapore SIN', code: 'SIN', city: 'Singapore' },
                { label: 'Malé MLE', code: 'MLE', city: 'Malé' },
              ].map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleSelectDestination(item.code, item.city)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                    toCode === item.code
                      ? 'bg-red-50 text-red-700 border border-red-200 font-bold'
                      : 'hover:bg-stone-100 text-stone-600 border border-stone-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Submit Action Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="submit"
                className="w-full sm:w-auto bg-red-700 hover:bg-red-800 text-white font-semibold text-xs uppercase tracking-wider px-7 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-red-800"
              >
                <Search className="w-4 h-4" />
                <span>Search Flights</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  onSearchInquiry({
                    tripType,
                    fromCity,
                    fromCode,
                    toCity,
                    toCode,
                    departureDate,
                    returnDate,
                    passengers: { adults, children, infants, students },
                    cabinClass,
                    isStudentFare,
                  })
                }
                className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-stone-100 font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-stone-800"
              >
                <Send className="w-3.5 h-3.5 text-amber-400" />
                <span>Request a Quote</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
