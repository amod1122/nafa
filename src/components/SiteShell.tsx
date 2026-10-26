"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScheduleModal from "@/components/ScheduleModal";
import QuoteModal from "@/components/QuoteModal";
import LeadCardModal from "@/components/LeadCardModal";
import Threads from "@/components/ui/Threads";
import { ModalProvider, useSiteModals } from "@/context/ModalContext";

function ShellInner({ children }: { children: React.ReactNode }) {
  const {
    isScheduleOpen,
    closeSchedule,
    openSchedule,
    isQuoteModalOpen,
    closeQuoteModal,
    openQuoteModal,
    activeLead,
    submitLead,
    closeLeadCard,
    initialServiceForQuote,
  } = useSiteModals();

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white selection:bg-white selection:text-black">
      {/* React Bits Threads: dynamic waving silk thread filaments background */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <Threads
          color="#ffffff"
          lineCount={90}
          thickness={0.55}
          softness={1.3}
          amplitude={1.7}
          distance={0.4}
          waves={1.05}
          speed={1.4}
          split={0.04}
          fray={0.5}
          angle={25}
          taper={0.85}
          brightness={0.85}
          parting={0.15}
          enableMouseInteraction={true}
          fade={0}
          opacity={0.42}
        />
      </div>

      {/* Subtle depth vignette to protect text legibility and keep background subtle */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 35% 40%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Film grain overlay */}
      <div className="grain" aria-hidden="true" />

      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex-1">{children}</main>

      {/* Global Footer */}
      <Footer />

      {/* Global Modals */}
      <ScheduleModal isOpen={isScheduleOpen} onClose={closeSchedule} />
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
        onLeadSubmitted={submitLead}
        defaultService={initialServiceForQuote}
      />
      <LeadCardModal
        lead={activeLead}
        onClose={closeLeadCard}
        onOpenSchedule={openSchedule}
      />
    </div>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <ShellInner>{children}</ShellInner>
    </ModalProvider>
  );
}
