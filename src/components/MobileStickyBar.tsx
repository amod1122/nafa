"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneCall, Calendar, MessageSquareQuote } from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);
  const { openSchedule, openQuoteModal } = useSiteModals();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick mobile booking actions"
      className="fixed bottom-3 left-3 right-3 z-30 sm:hidden animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="apple-glass rounded-2xl p-2 shadow-apple-float border border-white/80 flex items-center gap-2">
        {/* Quote button */}
        <button
          onClick={() => openQuoteModal()}
          className="press-scale flex-1 py-3 px-3 rounded-xl bg-white/95 text-nafa-charcoal border border-nafa-border text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs"
          aria-label="Get a free quote"
        >
          <MessageSquareQuote className="w-3.5 h-3.5 text-nafa-gold" />
          <span>Free Quote</span>
        </button>

        {/* Book Meeting button */}
        <button
          onClick={openSchedule}
          className="press-scale flex-[1.4] py-3 px-3 rounded-xl bg-nafa-charcoal text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
          aria-label="Book discovery meeting"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>Book Call (15m)</span>
        </button>

        {/* Demo Quick Jump */}
        <Link
          href="/demo"
          className="press-scale w-11 h-11 rounded-xl bg-nafa-gold-light border border-nafa-gold/30 text-nafa-gold flex items-center justify-center flex-shrink-0"
          title="Try Live Demo"
          aria-label="Go to interactive demo"
        >
          <PhoneCall className="w-4 h-4 text-nafa-gold" />
        </Link>
      </div>
    </aside>
  );
}
