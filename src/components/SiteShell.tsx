"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import ScheduleModal from "@/components/ScheduleModal";
import QuoteModal from "@/components/QuoteModal";
import LeadCardModal from "@/components/LeadCardModal";
import Particles from "@/components/ui/particles";
import { ModalProvider, useSiteModals } from "@/context/ModalContext";

function ShellInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
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
      {/* Magic UI Animated Star Background (available on all other pages of the website) */}
      {!isLandingPage && (
        <Particles
          className="fixed inset-0 pointer-events-none z-0"
          quantity={80}
          ease={80}
          color="#ffffff"
        />
      )}

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
