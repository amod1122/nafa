"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Calendar, ArrowUp } from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function Footer() {
  const { openSchedule, openQuoteModal } = useSiteModals();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-nafa-charcoal text-white pt-14 pb-24 sm:pb-14 border-t border-nafa-charcoal/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b border-white/10">
          {/* Brand Col */}
          <div className="space-y-3.5 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/20 flex-shrink-0">
                <Image src="/logo.jpg" alt="Nafa Technologies" fill className="object-cover" />
              </div>
              <span className="font-extrabold tracking-tight text-white text-lg">
                &lt; Nafa <span className="font-light text-stone-400">Technologies</span> &gt;
              </span>
            </Link>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Nafa Technologies builds and deploys 24/7 AI call agents, &lt;5-minute speed-to-lead systems, and high-converting websites. Fully done for you, with zero fluff.
            </p>

            <div className="pt-1">
              <span className="text-[11px] uppercase font-extrabold tracking-wider text-amber-400 block mb-0.5">
                Tagline:
              </span>
              <p className="text-sm sm:text-base font-bold text-white italic">
                "Never Miss a Lead. Never."
              </p>
            </div>
          </div>

          {/* Solutions Col */}
          <div className="space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-stone-400">
              Solutions
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-stone-300">
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services/ai-call-agent" className="hover:text-amber-400 transition-colors">
                  AI Call Agent
                </Link>
              </li>
              <li>
                <Link href="/services/speed-to-lead" className="hover:text-amber-400 transition-colors">
                  Speed-to-Lead Agent
                </Link>
              </li>
              <li>
                <Link href="/services/ai-website" className="hover:text-amber-400 transition-colors">
                  AI Websites
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-amber-400 transition-colors">
                  Pricing & Bundles
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-amber-400 transition-colors">
                  Interactive Audio Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Proof Col */}
          <div className="space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-stone-400">
              Company
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-stone-300">
              <li>
                <Link href="/how-it-works" className="hover:text-amber-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-amber-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-amber-400 transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Nafa
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-400 transition-colors">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Actions Col */}
          <div className="space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-stone-400">
              Get Started
            </h4>
            <div className="space-y-2">
              <button
                onClick={openSchedule}
                className="press-scale w-full py-2.5 px-3 rounded-xl bg-nafa-gold hover:bg-nafa-gold-hover text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book 15-Min Call</span>
              </button>
              <button
                onClick={() => openQuoteModal()}
                className="press-scale w-full py-2 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <span>Request Free Quote</span>
              </button>
            </div>

            <div className="pt-2 text-[11px] text-stone-400 space-y-0.5">
              <div>United States • English Only</div>
              <div>Direct Engineers • Zero Outsourcing</div>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Footer Note */}
        <div className="pt-6 text-[11px] text-stone-400 space-y-2.5 leading-relaxed">
          <div className="flex items-center gap-1.5 text-stone-300 font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Compliance & TCPA Disclosure</span>
          </div>
          <p>
            Nafa Technologies deploys custom AI voice receptionists and speed-to-lead automation. Automated outbound communications and call recordings comply with federal TCPA regulations and state-level disclosure requirements.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10 text-stone-400">
            <div>
              © {new Date().getFullYear()} Nafa Technologies. All rights reserved. Founded 2025.
            </div>

            <div className="flex items-center gap-4 text-xs">
              <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-amber-400 transition-colors underline">
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
