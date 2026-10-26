"use client";

import React, { useState } from "react";
import { X, Send, Sparkles, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
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
  const initialFormState = {
    name: "",
    businessName: "",
    email: "",
    phone: "",
    industry: "Home Services (HVAC / Plumbing / Roofing)",
    serviceNeeded: defaultService,
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xeaaajkw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        const submittedLead: LeadData = {
          ...formData,
          submittedAt: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        };
        setFormData(initialFormState);
        onLeadSubmitted(submittedLead);
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(
          data?.errors?.[0]?.message ||
            "Unable to submit quote request. Please try again or email us directly at contact@nafatech.site."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network connection error. Please try again or email us directly at contact@nafatech.site."
      );
    } finally {
      setIsSubmitting(false);
    }
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
          {/* Status Messages */}
          {status === "success" && (
            <div className="p-3.5 rounded-[6px] border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 flex items-start gap-2.5 text-xs sm:text-sm animate-in fade-in duration-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <div className="font-semibold text-white">
                  Quote request received! We'll get back to you shortly.
                </div>
                <div className="text-emerald-200/80 text-xs">
                  Our engineering team reviews inquiries within 5 minutes during business hours.
                </div>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="p-3.5 rounded-[6px] border border-red-500/30 bg-red-500/10 text-red-300 flex items-start gap-2.5 text-xs sm:text-sm animate-in fade-in duration-300">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{errorMessage || "Unable to submit quote request. Please try again."}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-white/90 mb-1.5">
              Your Full Name *
            </label>
            <input
              type="text"
              name="name"
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
              name="businessName"
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
                name="email"
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
                name="phone"
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
                name="industry"
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
                name="serviceNeeded"
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
              name="message"
              placeholder="e.g. ~50 calls/month"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[6px] border border-white/20 bg-white/[0.04] text-base sm:text-sm text-white placeholder-white/65 focus:outline-none focus:border-white/60"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-solid w-full h-[46px] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-black" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Request (&lt;5 Min Response)</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
