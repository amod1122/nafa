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
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full sm:max-w-lg bg-[#0a0a0a] border border-white/15 sm:rounded-lg rounded-t-lg shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in slide-in-from-bottom-6 duration-200 text-white">
        {/* Mobile Handle */}
        <div className="sm:hidden pt-3 pb-1 flex justify-center">
          <div className="w-10 h-1 rounded-full bg-white/20"></div>
        </div>

        {/* Header */}
        <div className="p-5 sm:p-6 pb-4 border-b border-white/10 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[5px] border border-white/15 bg-white/[0.04] text-[#d8d8d8] text-xs font-medium tracking-wide mb-2">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              Tailored Proposal
            </div>
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
              Get Your Custom Quote
            </h3>
            <p className="text-xs text-[#A6B4C7] mt-1">
              Zero fluff. We review your details and respond in &lt;5 minutes.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] text-white/80 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close quote modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-3.5 overflow-y-auto">
          <div>
            <label className="block text-xs font-medium text-white/90 mb-1.5">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[6px] border border-white/20 bg-white/[0.04] text-base sm:text-sm text-white placeholder-white/65 focus:outline-none focus:border-white/60"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-white/90 mb-1.5">
              Business Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Apex Family Dental"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[6px] border border-white/20 bg-white/[0.04] text-base sm:text-sm text-white placeholder-white/65 focus:outline-none focus:border-white/60"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-white/90 mb-1.5">
                Email *
              </label>
              <input
                type="email"
                required
                placeholder="sarah@apexdental.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[6px] border border-white/20 bg-white/[0.04] text-base sm:text-sm text-white placeholder-white/65 focus:outline-none focus:border-white/60"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-white/90 mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="(555) 234-5678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[6px] border border-white/20 bg-white/[0.04] text-base sm:text-sm text-white placeholder-white/65 focus:outline-none focus:border-white/60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-white/90 mb-1.5">
                Industry
              </label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[6px] border border-white/20 bg-[#141414] text-base sm:text-sm text-white focus:outline-none focus:border-white/60"
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
              <label className="block text-xs font-medium text-white/90 mb-1.5">
                System Needed
              </label>
              <select
                value={formData.serviceNeeded}
                onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[6px] border border-white/20 bg-[#141414] text-base sm:text-sm text-white focus:outline-none focus:border-white/60"
              >
                <option value="Full Growth System (All-in-One)">Full Growth System</option>
                <option value="AI Call Agent (Voice Receptionist)">AI Call Agent</option>
                <option value="Speed-to-Lead Outbound Agent">Speed-to-Lead</option>
                <option value="High-Converting AI Website">High-Converting Website</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-white/90 mb-1.5">
              Monthly Call / Lead Volume (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. ~50 calls/month"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[6px] border border-white/20 bg-white/[0.04] text-base sm:text-sm text-white placeholder-white/65 focus:outline-none focus:border-white/60"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-solid w-full h-[46px] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 mt-2"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? "Generating Lead Card..." : "Send Request (<5 Min Response)"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
