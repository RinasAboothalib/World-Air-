import React, { useState } from 'react';
import { COMPANY_INFO, POPULAR_AIRPORTS } from '../data/mockData';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [origin, setOrigin] = useState('Colombo (CMB)');
  const [destination, setDestination] = useState('London (LHR)');
  const [travelDate, setTravelDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate verified booking inquiry processing
    setTimeout(() => {
      const generatedRef = `WA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(generatedRef);
      setIsSubmitting(false);
    }, 700);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  const whatsappMessage = `Hello World Air, I have submitted an inquiry (Ref: ${submittedRef || 'New'}). Name: ${fullName}, Route: ${origin} to ${destination}, Date: ${travelDate}, Passengers: ${passengers}. Please advise on best rates.`;

  return (
    <section id="contact" className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Official Corporate Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-700 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span>Direct Flight Inquiries & Reservations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4 font-serif-luxury">
              World Air (Pvt.) Ltd.
            </h2>

            <p className="text-sm text-stone-600 mb-8 leading-relaxed">
              Connect with our senior ticketing consultants for tailored international flight itineraries, verified student airfares, student visa guidance, and holiday reservations.
            </p>

            {/* Contact Details List */}
            <div className="space-y-6 mb-8">
              {/* Telephones */}
              <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-red-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Telephone Hotlines
                  </h4>
                  <div className="flex flex-col space-y-1">
                    <a
                      href="tel:0812224616"
                      className="text-sm font-bold text-stone-900 hover:text-red-700 transition-colors"
                    >
                      0812 224 616 <span className="text-xs text-stone-500 font-normal">(Office)</span>
                    </a>
                    <a
                      href="tel:+94777362822"
                      className="text-sm font-bold text-stone-900 hover:text-red-700 transition-colors"
                    >
                      +94 777 362 822 <span className="text-xs text-stone-500 font-normal">(Direct / WhatsApp)</span>
                    </a>
                    <a
                      href="tel:+94777372316"
                      className="text-sm font-bold text-stone-900 hover:text-red-700 transition-colors"
                    >
                      +94 777 372 316 <span className="text-xs text-stone-500 font-normal">(Ticketing Desk)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Official Email
                  </h4>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-bold text-stone-900 hover:text-red-700 transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Written quotations & corporate ticket requests
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Official Web Portal
                  </h4>
                  <a
                    href="https://worldair.lk"
                    className="text-sm font-bold text-red-700 hover:underline"
                  >
                    {COMPANY_INFO.website}
                  </a>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    25+ Years of Redefining Travel
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours & Guarantee */}
            <div className="bg-stone-100/80 rounded-xl p-4 border border-stone-200 text-xs text-stone-600 space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-stone-500" />
                <span>Mon – Sat: 8:30 AM – 6:00 PM | 24/7 WhatsApp Hotline Support</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Transparent ticket pricing with zero hidden handling costs.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking & Flight Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xl">
              {submittedRef ? (
                /* Success State Screen */
                <div className="py-8 text-center animate-in fade-in-50">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-stone-900 font-serif-luxury mb-2">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-stone-900">{fullName}</strong>. A World Air ticketing specialist has been assigned to your travel request.
                  </p>

                  {/* Summary Box */}
                  <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 max-w-md mx-auto mb-6 text-left text-xs space-y-1.5">
                    <div className="flex justify-between border-b border-stone-200 pb-1.5 font-semibold">
                      <span className="text-stone-500">Inquiry Reference:</span>
                      <span className="text-red-700 font-mono">{submittedRef}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Route:</span>
                      <span className="text-stone-900 font-bold">{origin} → {destination}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Target Date:</span>
                      <span className="text-stone-900">{travelDate || 'Flexible'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Passengers:</span>
                      <span className="text-stone-900">{passengers} Traveler(s)</span>
                    </div>
                  </div>

                  {/* WhatsApp Quick Link */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold py-3 px-5 rounded-lg text-xs uppercase tracking-wider transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit}>
                  <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 font-serif-luxury">
                        Request a Flight Quote
                      </h3>
                      <p className="text-xs text-stone-500">
                        Receive official airline options and verified student fares within hours.
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-200 px-2.5 py-1 rounded">
                      Fast Quotation
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Ashen Perera"
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +94 77 123 4567"
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. ashen@gmail.com"
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                      />
                    </div>

                    {/* Number of Passengers */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Number of Passengers *
                      </label>
                      <select
                        value={passengers}
                        onChange={(e) => setPassengers(Number(e.target.value))}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                      >
                        {[1, 2, 3, 4, 5, 6, '7+ (Group)'].map((p) => (
                          <option key={String(p)} value={typeof p === 'number' ? p : 7}>
                            {p} {p === 1 ? 'Passenger' : 'Passengers'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    {/* From */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        From (Departure) *
                      </label>
                      <input
                        type="text"
                        required
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        placeholder="Colombo (CMB)"
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                    </div>

                    {/* Destination */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Destination *
                      </label>
                      <input
                        type="text"
                        required
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="e.g. Melbourne, London, Tokyo"
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                    </div>

                    {/* Travel Date */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Travel Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                    </div>
                  </div>

                  {/* Message / Special Needs */}
                  <div className="mb-6">
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Travel Details & Specific Requests
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Mention if this is a student booking (extra baggage needed), preferred airlines (e.g. SriLankan, Emirates, Singapore Airlines), return flexibility, or visa status..."
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-700 hover:bg-red-800 disabled:opacity-60 text-white font-bold py-3.5 px-6 rounded-lg text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 border border-red-700 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-stone-500 text-center mt-3">
                    Your contact information is strictly handled in accordance with privacy ethics. No spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
