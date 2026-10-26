"use client";

import React, { createContext, useContext, useState } from "react";
import { LeadData } from "@/components/QuoteFormSection";

interface ModalContextType {
  isScheduleOpen: boolean;
  openSchedule: () => void;
  closeSchedule: () => void;
  isQuoteModalOpen: boolean;
  openQuoteModal: (initialService?: string) => void;
  closeQuoteModal: () => void;
  activeLead: LeadData | null;
  submitLead: (lead: LeadData) => void;
  closeLeadCard: () => void;
  initialServiceForQuote: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [initialServiceForQuote, setInitialServiceForQuote] = useState("Full Growth System (All-in-One)");
  const [activeLead, setActiveLead] = useState<LeadData | null>(null);

  const CALENDLY_URL = "https://calendly.com/ahmadalimalik224/30min";

  const openSchedule = () => {
    if (typeof window !== "undefined") {
      const win = window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
      if (!win) {
        window.location.href = CALENDLY_URL;
      }
    }
  };
  const closeSchedule = () => setIsScheduleOpen(false);

  const openQuoteModal = (initialService?: string) => {
    if (initialService) setInitialServiceForQuote(initialService);
    setIsQuoteModalOpen(true);
  };
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  const submitLead = (lead: LeadData) => {
    setActiveLead(lead);
    setIsQuoteModalOpen(false);
  };

  const closeLeadCard = () => setActiveLead(null);

  return (
    <ModalContext.Provider
      value={{
        isScheduleOpen,
        openSchedule,
        closeSchedule,
        isQuoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        activeLead,
        submitLead,
        closeLeadCard,
        initialServiceForQuote,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useSiteModals() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useSiteModals must be used within a ModalProvider");
  }
  return context;
}
