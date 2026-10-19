"use client";

import React, { useState } from "react";
import { X, Send, Sparkles } from "lucide-react";
import { LeadData } from "./QuoteFormSection";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadSubmitted: (lead: LeadData) => void;
  defaultService?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  onLeadSubmitted,
  defaultService = "Full Growth System (All-in-One)",
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    industry: "Home Services (HVAC / Plumbing / Roofing)",
    serviceNeeded: defaultService,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

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
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full sm:max-w-lg bg-nafa-canvas sm:rounded-3xl rounded-t-3xl border border-nafa-border shadow-apple-float overflow-hidden max-h-[92vh] flex flex-col animate-in slide-in-from-bottom-8 duration-300">
        {/* Mobile Handle */}
        <div className="sm:hidden pt-3 pb-1 flex justify-center">
          <div className="w-12 h-1.5 rounded-full bg-stone-300"></div>
        </div>

        {/* Header */}
        <div className="p-5 sm:p-6 pb-4 border-b border-nafa-border/60 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-nafa-gold text-[11px] font-black uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3 text-amber-600" />
              Tailored Proposal
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-nafa-charcoal">
              Get Your Custom Quote
            </h3>
            <p className="text-xs text-nafa-muted">
              Zero fluff. We review your details and respond in &lt;5 minutes.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-200/60 text-nafa-charcoal transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-3.5 overflow-y-auto">
          <div>
            <label className="block text-xs font-bold text-nafa-charcoal mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-nafa-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-nafa-charcoal mb-1">
              Business Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Apex Family Dental"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-nafa-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-nafa-charcoal mb-1">
                Email *
              </label>
              <input
                type="email"
                required
                placeholder="sarah@apexdental.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-nafa-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-nafa-charcoal mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="(555) 234-5678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-nafa-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-nafa-charcoal mb-1">
                Industry
              </label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-nafa-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="Home Services (HVAC / Plumbing / Roofing)">Home Services</option>
                <option value="Dental or Medical Clinic">Dental or Medical</option>
                <option value="Law Firm / Legal Services">Law Firm</option>
                <option value="Real Estate Agency">Real Estate</option>
                <option value="Auto Repair / Body Shop">Auto Repair</option>
                <option value="Salons & Spas">Salons & Spas</option>
                <option value="Other Appointment-Driven Business">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-nafa-charcoal mb-1">
                System Needed
              </label>
              <select
                value={formData.serviceNeeded}
                onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-nafa-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="Full Growth System (All-in-One)">Full Growth System</option>
                <option value="AI Call Agent (Voice Receptionist)">AI Call Agent</option>
                <option value="Speed-to-Lead Outbound Agent">Speed-to-Lead</option>
                <option value="High-Converting AI Website">High-Converting Website</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-nafa-charcoal mb-1">
              Monthly Call / Lead Volume (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. ~50 calls/month"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-nafa-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="press-scale w-full py-3.5 px-4 rounded-xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-extrabold text-sm shadow-apple-gold flex items-center justify-center gap-2 mt-2"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? "Generating Lead Card..." : "Send Request (<5 Min Response)"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
