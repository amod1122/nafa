"use client";

import React, { useState, useEffect } from "react";
import { Calendar, MessageSquareQuote } from "lucide-react";
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
      <div className="rounded-lg border border-white/15 bg-black/90 backdrop-blur-xl p-2 shadow-2xl flex items-center gap-2">
        {/* Quote button */}
        {/* Quote button - Prioritized */}
        <button
          onClick={() => openQuoteModal()}
          className="btn btn-solid flex-[1.25] h-[40px] text-xs font-semibold gap-1.5"
          aria-label="Get a custom quote"
        >
          <MessageSquareQuote className="w-3.5 h-3.5" />
          <span>Get a Quote</span>
        </button>

        {/* Book Call button */}
        <button
          onClick={openSchedule}
          className="btn btn-ghost flex-1 h-[40px] text-xs font-medium gap-1.5"
          aria-label="Book a call"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book a Call</span>
        </button>
      </div>
    </aside>
  );
}
