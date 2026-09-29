import React, { useState } from 'react';
import { COMPANY_INFO, POPULAR_AIRPORTS } from '../data/mockData';
import { FlightInquiry } from '../types';
import { WorldAirLogo } from './WorldAirLogo';
import { X, Plane, GraduationCap, CheckCircle2, MessageSquare, Send, ShieldCheck, Clock } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'flight' | 'student' | 'visa' | 'holiday';
  initialInquiry?: FlightInquiry | null;
  initialDestination?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialType = 'flight',
  initialInquiry,
  initialDestination,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'flight' | 'student' | 'visa' | 'holiday'>(
    initialType || 'flight'
  );

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [fromCity, setFromCity] = useState(initialInquiry?.fromCity || 'Colombo (CMB)');
  const [toCity, setToCity] = useState(
    initialDestination || initialInquiry?.toCity || 'London (LHR)'
  );
  const [date, setDate] = useState(initialInquiry?.departureDate || '');
  const [passengers, setPassengers] = useState(
    initialInquiry?.passengers.adults ? initialInquiry.passengers.adults : 1
  );
  const [studentBaggageNeeded, setStudentBaggageNeeded] = useState(
    initialType === 'student' || !!initialInquiry?.isStudentFare
  );
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceCode, setReferenceCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const code = `WA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceCode(code);
      setIsSubmitting(false);
    }, 600);
  };

  const formattedWhatsAppText = `Hello World Air, I would like to request an official quotation for ${activeTab.toUpperCase()} TRAVEL. Ref: ${referenceCode || 'New'}. Name: ${fullName}, Route: ${fromCity} to ${toCity}, Date: ${date}, Pax: ${passengers}${studentBaggageNeeded ? ' (Student Fare & 40kg Baggage Requested)' : ''}. Notes: ${notes || 'Standard ticket inquiry'}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-stone-900 text-white p-5 flex items-center justify-between sticky top-0 z-10 border-b border-stone-800">
          <div className="flex items-center gap-3">
            <WorldAirLogo variant="white" height={32} />
            <div>
              <h3 className="text-base font-bold font-serif-luxury text-white">
                World Air Travel Desk
              </h3>
              <p className="text-[11px] text-stone-400">
                Official International Quotation & Consultation
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {referenceCode ? (
          /* Confirmation View */
          <div className="p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-2xl font-bold text-stone-900 font-serif-luxury mb-2">
              Quotation Request Logged
            </h4>
            <p className="text-xs text-stone-600 mb-6">
              Reference Code: <strong className="text-red-700 font-mono text-sm">{referenceCode}</strong>
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs text-left mb-6 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-stone-500">Passenger:</span>
                <span className="font-bold text-stone-900">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Service:</span>
                <span className="font-semibold text-stone-900 capitalize">{activeTab} Booking</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Route:</span>
                <span className="font-semibold text-stone-900">{fromCity} → {toCity}</span>
              </div>
              {date && (
                <div className="flex justify-between">
                  <span className="text-stone-500">Travel Date:</span>
                  <span className="text-stone-900">{date}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(formattedWhatsAppText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Follow-Up on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Input Form */
          <form onSubmit={handleSubmit} className="p-6">
            {/* Category Switcher */}
            <div className="grid grid-cols-4 gap-1.5 bg-stone-100 p-1 rounded-lg mb-5 text-xs font-semibold">
              {(
                [
                  { id: 'flight', label: 'Flight' },
                  { id: 'student', label: 'Student' },
                  { id: 'visa', label: 'Visa' },
                  { id: 'holiday', label: 'Holiday' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id === 'student') setStudentBaggageNeeded(true);
                  }}
                  className={`py-2 text-center rounded transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-red-700 text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-950'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Student Baggage Callout if student is selected */}
            {activeTab === 'student' && (
              <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 mb-4 flex items-center gap-2.5 text-xs text-amber-900">
                <GraduationCap className="w-5 h-5 text-amber-700 shrink-0" />
                <span>
                  <strong>Student Benefit:</strong> Eligible for up to 40kg baggage allowance & youth discounted fares.
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-stone-600 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Samantha Silva"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-600 uppercase mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +94 77 123 4567"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-stone-600 uppercase mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. samantha@gmail.com"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-600 uppercase mb-1">
                  Target Travel Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-stone-600 uppercase mb-1">
                  Departure From
                </label>
                <input
                  type="text"
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-600 uppercase mb-1">
                  Destination
                </label>
                <input
                  type="text"
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[11px] font-bold text-stone-600 uppercase mb-1">
                Specific Requests or University / Visa Details
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention airline preferences, visa appointment dates, student university, extra baggage, etc."
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-700 hover:bg-red-800 disabled:opacity-60 text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 border border-red-800 cursor-pointer"
            >
              {isSubmitting ? (
                <span>Generating Quote...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Official Quote</span>
                </>
              )}
            </button>

            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>25+ Years of Industry Trust</span>
              </span>
              <span>Hotline: {COMPANY_INFO.primaryPhone}</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
