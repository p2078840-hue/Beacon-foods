import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Navigation, 
  Copy, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

export const ContactSection: React.FC = () => {
  const { showToast } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Your name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message or inquiry';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      showToast('Message sent! Our culinary team will reply shortly.');
    }, 800);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    showToast('Restaurant address copied to clipboard!');
  };

  return (
    <section id="contact" className="py-20 bg-[#0d0e12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff7a45] px-3.5 py-1.5 rounded-full bg-[#ff5c26]/10 border border-[#ff5c26]/20 inline-block mb-3">
            <Sparkles className="w-3.5 h-3.5 inline mr-1" />
            Connect With Us
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Visit & Contact BiteCraft
          </h2>
          <p className="mt-3 text-base text-neutral-400 font-normal">
            Have questions about group reservations, catering, or dietary options? Reach out to our hospitality team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Info Cards & Map Design Area (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 4 Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="bg-[#141620] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-white/20 transition-all">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#ff5c26]/10 border border-[#ff5c26]/20 flex items-center justify-center text-[#ff5c26] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Location</h4>
                    <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                      {RESTAURANT_INFO.address}
                    </p>
                  </div>
                </div>
                <button
                  onClick={copyAddress}
                  className="mt-3 pt-3 border-t border-white/5 text-[11px] text-[#ff7a45] hover:text-[#ff9266] flex items-center gap-1.5 font-semibold"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy Address</span>
                </button>
              </div>

              {/* Phone */}
              <div className="bg-[#141620] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-white/20 transition-all">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#ff5c26]/10 border border-[#ff5c26]/20 flex items-center justify-center text-[#ff5c26] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Direct Phone</h4>
                    <p className="text-xs text-neutral-300 mt-1 font-mono">
                      {RESTAURANT_INFO.phone}
                    </p>
                    <span className="text-[10px] text-neutral-500 block mt-0.5">Kitchen line & takeout</span>
                  </div>
                </div>
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="mt-3 pt-3 border-t border-white/5 text-[11px] text-[#ff7a45] hover:text-[#ff9266] flex items-center gap-1.5 font-semibold"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Call Us Now</span>
                </a>
              </div>

              {/* Email */}
              <div className="bg-[#141620] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-white/20 transition-all">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Email Inquiries</h4>
                    <p className="text-xs text-neutral-300 mt-1 font-mono">
                      {RESTAURANT_INFO.email}
                    </p>
                    <span className="text-[10px] text-neutral-500 block mt-0.5">Response within 2 hours</span>
                  </div>
                </div>
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="mt-3 pt-3 border-t border-white/5 text-[11px] text-emerald-400 hover:underline flex items-center gap-1.5 font-semibold"
                >
                  <Send className="w-3 h-3" />
                  <span>Send Email</span>
                </a>
              </div>

              {/* Opening Hours */}
              <div className="bg-[#141620] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-white/20 transition-all">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Opening Hours</h4>
                    <div className="text-[11px] text-neutral-300 mt-1 space-y-0.5">
                      {RESTAURANT_INFO.hours.map((h, i) => (
                        <div key={i} className="flex justify-between gap-2">
                          <span className="text-neutral-400">{h.days}:</span>
                          <span className="font-mono text-white">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Restaurant Map Design Area */}
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#161824] shadow-xl p-6 sm:p-8 min-h-[260px] flex flex-col justify-between">
              {/* Stylized vector map grid background */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#ff5c26 1px, transparent 1px), radial-gradient(#ffffff 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0, 12px 12px'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141620] via-transparent to-black/30" />

              <div className="relative z-10 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#ff5c26] text-white flex items-center justify-center shadow-lg shadow-[#ff5c26]/40 animate-pulse">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#ff7a45] uppercase tracking-wider block">
                      Main Dining & Drive-Thru Hub
                    </span>
                    <h4 className="font-heading font-bold text-base text-white">
                      BiteCraft Flagship Kitchen
                    </h4>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Open Now
                </span>
              </div>

              <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-neutral-300">
                  Ample valet & customer parking available. Outdoor patio seating heated year-round.
                </p>
                <button
                  onClick={() => {
                    const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_INFO.address)}`;
                    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 active:scale-95 transition-all shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#ff5c26]" />
                  <span>Get Driving Directions</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (5 cols) */}
          <div className="lg:col-span-5 bg-[#141620] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="font-heading font-bold text-xl text-white mb-1">
              Send Us a Message
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Our managers will respond directly to your email within 2 hours.
            </p>

            {isSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white">Message Delivered!</h4>
                <p className="text-xs text-neutral-300 max-w-xs mx-auto">
                  Thank you for reaching out, {formData.name}. We've received your note and will be in touch shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSent(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Miller"
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#ff5c26] ${
                      errors.name ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. david@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#ff5c26] ${
                      errors.email ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you need (e.g. catering, birthday reservation, allergy inquiries)..."
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#ff5c26] ${
                      errors.message ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#ff5c26] to-[#e8590c] hover:from-[#ff6e3a] hover:to-[#ff5c26] text-white font-bold text-sm shadow-xl shadow-[#ff5c26]/20 active:scale-95 transition-all cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
