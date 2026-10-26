"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScheduleModal from "@/components/ScheduleModal";
import QuoteModal from "@/components/QuoteModal";
import LeadCardModal from "@/components/LeadCardModal";
import Particles from "@/components/ui/particles";
import SideRays from "@/components/ui/SideRays";
import AsciiFlowTrail from "@/components/ui/AsciiFlowTrail";
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
      {/* SideRays background: active on landing page with smooth fade transition */}
      <div
        className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 ease-in-out ${
          isLandingPage ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <SideRays
          rayColor1="#ffffff"
          rayColor2="#96c8ff"
          blend={0.5}
          origin="top-right"
          speed={2.2}
          intensity={1.8}
          spread={2.2}
          density={6}
          sharpness={0.4}
          glow={1.2}
          saturation={0.8}
          followMouse={true}
          opacity={0.85}
        />
      </div>

      {/* Magic UI Animated Star Background: active on all non-landing pages with smooth fade transition */}
      <div
        className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 ease-in-out ${
          !isLandingPage ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <Particles
          className="w-full h-full"
          quantity={80}
          ease={80}
          color="#ffffff"
        />
      </div>

      {/* Ascii FlowTrail: Interactive ASCII dither trail following the cursor */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        aria-hidden="true"
      >
        <AsciiFlowTrail
          glyphSet={3}
          scale={24}
          radius={26}
          strength={82}
          turbulence={90}
          tint="#FFFFFF"
          mix={75}
          tailLength={90}
          momentum={42}
        />
      </div>

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
