"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  CheckCircle2,
  Clock,
  ChevronRight,
  Star,
  Globe,
  PhoneCall,
  HelpCircle,
  TrendingDown,
} from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function HomePage() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[580px] h-[340px] sm:h-[580px] bg-gradient-to-tr from-amber-200/20 via-amber-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nafa-surface border border-nafa-border shadow-xs mb-6 sm:mb-8">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-nafa-charcoal tracking-wide uppercase">
                AI Automation Agency • For US Local Businesses
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-nafa-charcoal leading-[1.08] sm:leading-[1.05] mb-5 sm:mb-6">
              Never Miss a Lead.{" "}
              <span className="relative inline-block text-nafa-gold">
                Never.
                <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-[3px] sm:h-[4px] bg-nafa-gold/30 rounded-full"></span>
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg md:text-xl text-nafa-muted font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
              Nafa builds and deploys 24/7 AI call agents and high-converting websites that answer every call, follow up with every lead in minutes, and book more appointments while you sleep.
            </p>

            {/* CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <button
                onClick={openSchedule}
                className="press-scale py-3.5 px-7 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-base shadow-apple-gold flex items-center justify-center gap-2.5 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Book 15-Min Discovery Call</span>
              </button>

              <button
                onClick={() => openQuoteModal()}
                className="press-scale py-3.5 px-6 rounded-2xl bg-nafa-surface hover:bg-white text-nafa-charcoal border border-nafa-border font-semibold text-base shadow-xs flex items-center justify-center gap-2 transition-all"
              >
                <span>Get a Free Custom Quote</span>
                <ArrowRight className="w-4 h-4 text-nafa-muted" />
              </button>
            </div>

            {/* Interactive Demo Teaser Link */}
            <Link
              href="/demo"
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full apple-glass border border-nafa-border/60 hover:border-nafa-gold/40 shadow-xs transition-all mb-10 sm:mb-14"
            >
              <div className="w-6 h-6 rounded-full bg-nafa-gold text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-3 h-3 fill-current" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-nafa-charcoal">
                Listen to our AI voice receptionist in action{" "}
                <span className="text-nafa-gold font-bold underline decoration-nafa-gold/40">
                  (Try Live Demo →)
                </span>
              </span>
            </Link>

            {/* Live Call Preview Box */}
            <div className="w-full max-w-xl mx-auto apple-glass-card rounded-3xl p-5 sm:p-7 shadow-apple-card border border-white/80 text-left">
              <div className="flex items-center justify-between pb-4 border-b border-nafa-border/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
                    <Phone className="w-5 h-5 animate-bounce" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                        24/7 AI Receptionist
                      </span>
                      <span className="text-xs text-nafa-muted">0.4s response</span>
                    </div>
                    <p className="text-sm font-bold text-nafa-charcoal mt-0.5">
                      Sunday Night Emergency Plumbing Call
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-nafa-muted">
                  <Clock className="w-3.5 h-3.5" /> 11:42 PM
                </span>
              </div>

              <div className="mt-4 space-y-2 text-xs sm:text-sm">
                <div className="p-3 rounded-2xl bg-nafa-canvas border border-nafa-border/40 text-nafa-charcoal">
                  <span className="font-bold text-nafa-charcoal-muted block text-[11px] uppercase tracking-wider mb-0.5">
                    Caller:
                  </span>
                  "Our basement pipe just broke and water is everywhere. Can someone come out tonight?"
                </div>
                <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-nafa-charcoal">
                  <span className="font-bold text-nafa-gold block text-[11px] uppercase tracking-wider mb-0.5">
                    Nafa AI Agent:
                  </span>
                  "I understand how urgent that is! Our emergency tech Mike is finishing a job nearby and can be at your door in 40 minutes. Let me confirm your address right now."
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-nafa-border/40 flex items-center justify-between text-xs text-nafa-muted">
                <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Booked directly into service schedule
                </span>
                <span className="font-semibold text-nafa-charcoal">0 hold time</span>
              </div>
            </div>

            {/* Trust Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mt-12 w-full pt-8 border-t border-nafa-border/60">
              <div className="p-3 rounded-2xl bg-white/60 border border-nafa-border/40 text-center">
                <div className="text-lg sm:text-xl font-extrabold text-nafa-charcoal">24/7/365</div>
                <div className="text-xs text-nafa-muted font-medium mt-0.5">Inbound Call Answering</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/60 border border-nafa-border/40 text-center">
                <div className="text-lg sm:text-xl font-extrabold text-nafa-charcoal">&lt; 5 Minutes</div>
                <div className="text-xs text-nafa-muted font-medium mt-0.5">Speed-to-Lead Follow-up</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/60 border border-nafa-border/40 text-center">
                <div className="text-lg sm:text-xl font-extrabold text-nafa-charcoal">100% Done-For-You</div>
                <div className="text-xs text-nafa-muted font-medium mt-0.5">Zero Code on Your End</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/60 border border-nafa-border/40 text-center">
                <div className="text-lg sm:text-xl font-extrabold text-nafa-charcoal">No Middlemen</div>
                <div className="text-xs text-nafa-muted font-medium mt-0.5">Direct Access to Builders</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Problem & 5-Minute Rule Section */}
      <section className="py-12 sm:py-16 bg-nafa-canvas-muted/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-100/70 px-3 py-1 rounded-full">
              The Reality of Local Business
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-nafa-charcoal mt-3 mb-3">
              Unanswered Calls Don't Leave Voicemails. They Call Your Competitor.
            </h2>
            <p className="text-sm sm:text-base text-nafa-muted">
              Whether you are in a crawlspace, treating a patient, or closed for the evening, every missed call is thousands of dollars handed to someone else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <div className="apple-glass-card rounded-3xl p-6 shadow-apple-card border border-white">
              <div className="text-4xl font-extrabold text-nafa-charcoal mb-2">78%</div>
              <h3 className="text-base font-bold text-nafa-charcoal mb-1">Buy from First Responder</h3>
              <p className="text-xs text-nafa-muted leading-relaxed">
                Reaching an inquiry within 5 minutes makes you 21x more likely to qualify and close the customer.
              </p>
            </div>

            <div className="apple-glass-card rounded-3xl p-6 shadow-apple-card border border-white">
              <div className="text-4xl font-extrabold text-red-600 mb-2">62%</div>
              <h3 className="text-base font-bold text-nafa-charcoal mb-1">Of Calls Go Unanswered</h3>
              <p className="text-xs text-nafa-muted leading-relaxed">
                Small business owners miss more than half their calls during peak field hours, lunch, and weekends.
              </p>
            </div>

            <div className="apple-glass-card rounded-3xl p-6 shadow-apple-card border border-white">
              <div className="text-4xl font-extrabold text-amber-600 mb-2">&lt; 60s</div>
              <h3 className="text-base font-bold text-nafa-charcoal mb-1">Nafa AI Response Time</h3>
              <p className="text-xs text-nafa-muted leading-relaxed">
                Our voice agents pick up on ring one, and outbound speed-to-lead agents call web inquiries in under a minute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 3 Core Offers Teaser (linking to /services) */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-nafa-gold">
                What We Build
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-nafa-charcoal mt-1">
                Three Done-For-You Growth Offers
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs sm:text-sm font-bold text-nafa-gold hover:text-amber-800 flex items-center gap-1.5"
            >
              <span>Explore all services and bundles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="apple-glass-card rounded-3xl p-6 shadow-apple-card border border-white flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-nafa-gold flex items-center justify-center mb-4">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-nafa-charcoal mb-2">
                  AI Call Agent
                </h3>
                <p className="text-xs text-nafa-muted leading-relaxed mb-4">
                  24/7 inbound voice receptionist that answers common questions, qualifies callers, and books appointments.
                </p>
              </div>
              <Link
                href="/services/ai-call-agent"
                className="text-xs font-bold text-nafa-charcoal hover:text-amber-600 flex items-center gap-1 pt-3 border-t border-nafa-border/40"
              >
                <span>Read details & specs</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="apple-glass-card rounded-3xl p-6 shadow-apple-card border border-nafa-gold/40 bg-amber-50/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-nafa-charcoal mb-2">
                  Speed-to-Lead Agent
                </h3>
                <p className="text-xs text-nafa-muted leading-relaxed mb-4">
                  Instant outbound AI agent that calls web form leads within minutes, locking them in before competitors respond.
                </p>
              </div>
              <Link
                href="/services/speed-to-lead"
                className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 pt-3 border-t border-nafa-border/40"
              >
                <span>Read details & specs</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="apple-glass-card rounded-3xl p-6 shadow-apple-card border border-white flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-stone-100 text-nafa-charcoal flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-nafa-charcoal mb-2">
                  High-Converting Website
                </h3>
                <p className="text-xs text-nafa-muted leading-relaxed mb-4">
                  Modern, lightning-fast website designed to convert visitors into phone calls and booked appointments.
                </p>
              </div>
              <Link
                href="/services/ai-website"
                className="text-xs font-bold text-nafa-charcoal hover:text-amber-600 flex items-center gap-1 pt-3 border-t border-nafa-border/40"
              >
                <span>Read details & specs</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Demo Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="apple-glass rounded-3xl p-6 sm:p-10 shadow-apple-card border border-nafa-gold/30 bg-gradient-to-r from-nafa-surface via-amber-50/40 to-nafa-surface">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-nafa-gold bg-amber-100/80 px-3 py-1 rounded-full inline-block">
                Interactive Voice Sandbox
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-nafa-charcoal">
                Hear the AI Receptionist Live in Your Browser
              </h3>
              <p className="text-xs sm:text-sm text-nafa-muted max-w-xl">
                Test realistic emergency plumbing, dental booking, and legal consultations with live waveforms and synchronized transcripts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <Link
                href="/demo"
                className="press-scale w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Launch Audio Demo</span>
              </Link>
              <button
                onClick={openSchedule}
                className="press-scale w-full sm:w-auto py-3.5 px-5 rounded-2xl bg-white border border-nafa-border text-nafa-charcoal font-semibold text-sm hover:bg-stone-50"
              >
                Book Discovery Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Case Studies Teaser (linking to /case-studies) */}
      <section className="py-12 sm:py-16 bg-nafa-canvas-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Proven Results
              </span>
              <h2 className="text-3xl font-extrabold text-nafa-charcoal mt-1">
                Real Impact Across Industries
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="text-xs sm:text-sm font-bold text-nafa-gold hover:text-amber-800 flex items-center gap-1.5"
            >
              <span>View all client case studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="apple-glass-card rounded-3xl p-6 shadow-apple-card border border-white">
              <span className="text-[11px] font-bold uppercase text-nafa-gold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                HVAC & Plumbing
              </span>
              <h4 className="font-extrabold text-nafa-charcoal text-base mt-2 mb-1">
                Tri-County Heating & Plumbing
              </h4>
              <div className="text-2xl font-black text-nafa-charcoal mt-3 mb-0.5">
                +$18,400/mo
              </div>
              <div className="text-xs font-semibold text-emerald-700 mb-3">
                Recovered After-Hours Revenue
              </div>
              <p className="text-xs text-nafa-muted italic">
                "Zero missed emergency weekend calls. Booked appointments straight into ServiceTitan."
              </p>
            </div>

            <div className="apple-glass-card rounded-3xl p-6 shadow-apple-card border border-white">
              <span className="text-[11px] font-bold uppercase text-nafa-gold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                Dental Clinic
              </span>
              <h4 className="font-extrabold text-nafa-charcoal text-base mt-2 mb-1">
                Apex Family Dental
              </h4>
              <div className="text-2xl font-black text-nafa-charcoal mt-3 mb-0.5">
                +34% Bookings
              </div>
              <div className="text-xs font-semibold text-emerald-700 mb-3">
                New Hygiene Appointments
              </div>
              <p className="text-xs text-nafa-muted italic">
                "Our front desk staff can finally focus on patients standing in front of them."
              </p>
            </div>

            <div className="apple-glass-card rounded-3xl p-6 shadow-apple-card border border-white">
              <span className="text-[11px] font-bold uppercase text-nafa-gold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                Legal Firm
              </span>
              <h4 className="font-extrabold text-nafa-charcoal text-base mt-2 mb-1">
                Vanguard Injury Law Group
              </h4>
              <div className="text-2xl font-black text-nafa-charcoal mt-3 mb-0.5">
                &lt; 2 Min Contact
              </div>
              <div className="text-xs font-semibold text-emerald-700 mb-3">
                Speed-to-Lead Response Time
              </div>
              <p className="text-xs text-nafa-muted italic">
                "We reach accident victims before competing billboard attorneys even read the notification."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Preview (linking to /contact / full FAQ) */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-nafa-charcoal">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-nafa-muted mt-1">
              Quick answers about our 24/7 AI systems and setup.
            </p>
          </div>

          <div className="space-y-3">
            <div className="apple-glass-card rounded-2xl p-4 border border-nafa-border/60">
              <h4 className="font-bold text-sm text-nafa-charcoal mb-1">
                Will the AI sound robotic?
              </h4>
              <p className="text-xs text-nafa-muted leading-relaxed">
                No. We use neural conversational speech models with human-like breathing, cadence, and instant 0.3s response times. Test it on our <Link href="/demo" className="text-amber-600 font-bold underline">demo page</Link>.
              </p>
            </div>

            <div className="apple-glass-card rounded-2xl p-4 border border-nafa-border/60">
              <h4 className="font-bold text-sm text-nafa-charcoal mb-1">
                Do I need to change my current phone number?
              </h4>
              <p className="text-xs text-nafa-muted leading-relaxed">
                Never. You keep your existing business number. We provide a simple carrier forward so you can route after-hours, overflow, or all calls seamlessly.
              </p>
            </div>

            <div className="apple-glass-card rounded-2xl p-4 border border-nafa-border/60">
              <h4 className="font-bold text-sm text-nafa-charcoal mb-1">
                How fast can you get our system live?
              </h4>
              <p className="text-xs text-nafa-muted leading-relaxed">
                Most custom AI call agents and websites are fully built, tested, and deployed within 5 to 7 business days.
              </p>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link
              href="/pricing"
              className="text-xs font-bold text-nafa-gold hover:underline"
            >
              Have questions about pricing and bundles? Check our Pricing Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Final High-Impact CTA Band */}
      <section className="py-12 sm:py-20 bg-nafa-charcoal text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-16 p-8 sm:p-14 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            Stop Losing Business Today
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Ready to Turn Every Missed Call Into a Booked Appointment?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto">
            Book a 15-minute discovery consultation or request a custom quote. No fluff, no aggressive salespeople — just direct systems engineering.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={openSchedule}
              className="press-scale w-full sm:w-auto py-3.5 px-8 rounded-2xl bg-nafa-gold hover:bg-nafa-gold-hover text-white font-bold text-sm shadow-apple-gold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 15-Minute Strategy Call</span>
            </button>
            <button
              onClick={() => openQuoteModal()}
              className="press-scale w-full sm:w-auto py-3.5 px-7 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-600 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Request Free Custom Quote</span>
              <ArrowRight className="w-4 h-4 text-stone-400" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
