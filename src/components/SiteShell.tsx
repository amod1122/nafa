"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import ScheduleModal from "@/components/ScheduleModal";
import QuoteModal from "@/components/QuoteModal";
import LeadCardModal from "@/components/LeadCardModal";
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
    <div className="relative min-h-screen flex flex-col bg-[#07080a] text-white selection:bg-white selection:text-black">
      {/* Scroll Craft Atmospheric Canvas Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Deep ambient radial glow nodes */}
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-sky-500/10 via-indigo-600/5 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[35%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/6 via-orange-500/3 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[65%] -right-[10%] w-[650px] h-[650px] bg-gradient-to-bl from-blue-600/7 via-cyan-500/4 to-transparent blur-[140px] rounded-full" />
        <div className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-t from-indigo-700/8 via-sky-600/4 to-transparent blur-[130px] rounded-full" />
      </div>

      {/* Film grain overlay */}
      <div className="grain" aria-hidden="true" />

      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex-1">{children}</main>

      {/* Global Footer */}
      <Footer />

      {/* Global Persistent Elements */}
      <AIChatWidget onOpenSchedule={openSchedule} onOpenQuote={openQuoteModal} />

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
