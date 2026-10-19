"use client";

import React, { useState } from "react";
import { Send, ShieldCheck, Clock, Sparkles, CheckCircle2 } from "lucide-react";

export interface LeadData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  industry: string;
  serviceNeeded: string;
  message?: string;
  submittedAt: string;
}

interface QuoteFormSectionProps {
  onLeadSubmitted: (lead: LeadData) => void;
}

export default function QuoteFormSection({ onLeadSubmitted }: QuoteFormSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    industry: "Home Services (HVAC / Plumbing / Roofing)",
    serviceNeeded: "Full Growth System (All-in-One)",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newLead: LeadData = {
        ...formData,
        submittedAt: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      setIsSubmitting(false);
      onLeadSubmitted(newLead);
    }, 600);
  };

  return (
    <section id="quote" className="py-16 sm:py-24 bg-nafa-canvas relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-nafa-gold border border-amber-200 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Fast & Tailored
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-nafa-charcoal mb-4">
            Get Your Free Custom Quote
          </h2>
          <p className="text-sm sm:text-base text-nafa-muted max-w-xl mx-auto">
            Tell us about your business. We will prepare an exact proposal with zero fluff and target response within 5 minutes.
          </p>
        </div>

        {/* The Quote Form Card */}
        <div className="apple-glass rounded-3xl p-6 sm:p-10 shadow-apple-card border border-white/80">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-nafa-charcoal mb-1.5">
                  Your Full Name <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-nafa-border bg-white text-sm text-nafa-charcoal focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-nafa-charcoal mb-1.5">
                  Company / Business Name <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Miller Roofing & Siding"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-nafa-border bg-white text-sm text-nafa-charcoal focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-nafa-charcoal mb-1.5">
                  Business Email <span className="text-amber-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@millerroofing.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-nafa-border bg-white text-sm text-nafa-charcoal focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-nafa-charcoal mb-1.5">
                  Phone Number (for Speed-to-Lead) <span className="text-amber-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 342-8901"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-nafa-border bg-white text-sm text-nafa-charcoal focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-nafa-charcoal mb-1.5">
                  Your Industry <span className="text-amber-600">*</span>
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-nafa-border bg-white text-sm text-nafa-charcoal focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                >
                  <option value="Home Services (HVAC / Plumbing / Roofing)">
                    Home Services (HVAC, Plumbing, Roofing)
                  </option>
                  <option value="Dental or Medical Clinic">Dental or Medical Clinic</option>
                  <option value="Law Firm / Legal Services">Law Firm / Legal Services</option>
                  <option value="Real Estate Agency">Real Estate Agency</option>
                  <option value="Auto Repair / Body Shop">Auto Repair / Body Shop</option>
                  <option value="Salons & Spas">Salons & Spas</option>
                  <option value="Other Appointment-Driven Business">
                    Other Appointment-Driven Business
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-nafa-charcoal mb-1.5">
                  System Needed <span className="text-amber-600">*</span>
                </label>
                <select
                  value={formData.serviceNeeded}
                  onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-nafa-border bg-white text-sm text-nafa-charcoal focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                >
                  <option value="Full Growth System (All-in-One)">
                    Full Growth System (All-in-One Bundle)
                  </option>
                  <option value="AI Call Agent (Voice Receptionist)">
                    AI Call Agent (Voice Receptionist)
                  </option>
                  <option value="Speed-to-Lead Outbound Agent">
                    Speed-to-Lead Outbound Agent
                  </option>
                  <option value="High-Converting AI Website">High-Converting AI Website</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-nafa-charcoal mb-1.5">
                Current Estimated Monthly Call / Lead Volume (Optional):
              </label>
              <textarea
                rows={2}
                placeholder="e.g. We get roughly 50-80 calls a month and miss around 10-15 during after-hours."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-nafa-border bg-white text-sm text-nafa-charcoal focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
            </div>

            {/* TCPA Consent Note */}
            <p className="text-[11px] text-nafa-muted leading-tight">
              By submitting, you agree to receive follow-up communication from Nafa Technologies regarding your inquiry. We respect your privacy and never sell your information.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="press-scale w-full py-4 px-6 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-extrabold text-sm sm:text-base shadow-apple-gold flex items-center justify-center gap-2.5 transition-all"
            >
              {isSubmitting ? (
                <span>Generating Lead Card...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send My Request & Trigger 5-Min Follow-Up</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
