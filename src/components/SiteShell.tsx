"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
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
    <div className="min-h-screen flex flex-col bg-nafa-canvas text-nafa-charcoal selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Global Persistent Elements */}
      <MobileStickyBar />
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
