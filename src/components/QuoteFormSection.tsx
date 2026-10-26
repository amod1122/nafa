"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Sparkles, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

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
  onLeadSubmitted?: (lead: LeadData) => void;
}

const initialFormState = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  industry: "Home Services (HVAC / Plumbing / Roofing)",
  serviceNeeded: "Full Growth System (All-in-One)",
  message: "",
};

export default function QuoteFormSection({ onLeadSubmitted }: QuoteFormSectionProps) {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
        setFormData(initialFormState);
        router.push("/thank-you");
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
    <section id="quote" className="py-12 sm:py-16 bg-transparent relative text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="badge-pill inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Fast & Tailored Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Get Your Free Custom Quote
          </h2>
          <p className="text-sm sm:text-base text-[#A6B4C7] max-w-xl mx-auto">
            Tell us about your business. We will prepare an exact proposal with zero fluff and target response within 5 minutes.
          </p>
        </div>

        {/* The Quote Form Card */}
        <div className="apple-glass rounded-lg p-6 sm:p-10 border border-white/15">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Status Messages */}
            {status === "success" && (
              <div className="p-4 rounded-[6px] border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 flex items-start gap-3 text-xs sm:text-sm animate-in fade-in duration-300">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-white/90 mb-1.5">
                  Your Full Name <span className="text-white/60">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border border-white/15 bg-white/[0.04] text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/90 mb-1.5">
                  Company / Business Name <span className="text-white/60">*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  required
                  placeholder="e.g. Miller Roofing & Siding"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border border-white/15 bg-white/[0.04] text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-white/90 mb-1.5">
                  Business Email <span className="text-white/60">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@millerroofing.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border border-white/15 bg-white/[0.04] text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/90 mb-1.5">
                  Phone Number (for Speed-to-Lead) <span className="text-white/60">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(555) 342-8901"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border border-white/15 bg-white/[0.04] text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-white/90 mb-1.5">
                  Your Industry <span className="text-white/60">*</span>
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border border-white/15 bg-[#141414] text-xs sm:text-sm text-white focus:outline-none focus:border-white/50"
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
                <label className="block text-xs font-medium text-white/90 mb-1.5">
                  System Needed <span className="text-white/60">*</span>
                </label>
                <select
                  name="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border border-white/15 bg-[#141414] text-xs sm:text-sm text-white focus:outline-none focus:border-white/50"
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
              <label className="block text-xs font-medium text-white/90 mb-1.5">
                Current Estimated Monthly Call / Lead Volume (Optional):
              </label>
              <textarea
                name="message"
                rows={2}
                placeholder="e.g. We get roughly 50-80 calls a month and miss around 10-15 during after-hours."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-[6px] border border-white/15 bg-white/[0.04] text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
              />
            </div>

            {/* TCPA Consent Note */}
            <p className="text-[11px] text-[#9a9a9a] leading-tight">
              By submitting, you agree to receive follow-up communication from Nafa Technologies regarding your inquiry. We respect your privacy and never sell your information.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-solid w-full h-[44px] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-black" />
                  <span>Sending...</span>
                </>
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
