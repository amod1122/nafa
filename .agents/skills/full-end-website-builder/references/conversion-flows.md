# Conversion Flows & Architecture Reference

## 1. Central Modal Architecture (`ModalContext.tsx`)
```tsx
"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  openSchedule: () => void;
  isQuoteModalOpen: boolean;
  openQuoteModal: (initialService?: string) => void;
  closeQuoteModal: () => void;
  initialServiceForQuote: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [initialServiceForQuote, setInitialServiceForQuote] = useState("Full Growth System");

  const CALENDLY_URL = "https://calendly.com/<YOUR_LINK>";

  const openSchedule = () => {
    if (typeof window !== "undefined") {
      const win = window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
      if (!win) window.location.href = CALENDLY_URL;
    }
  };

  const openQuoteModal = (initialService?: string) => {
    if (initialService) setInitialServiceForQuote(initialService);
    setIsQuoteModalOpen(true);
  };
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        openSchedule,
        isQuoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        initialServiceForQuote,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useSiteModals() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useSiteModals must be used within ModalProvider");
  return context;
}
```

## 2. Formspree API Integration Checklist
- Method: `POST`
- Headers:
  ```json
  {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
  ```
- Always include `name`, `email`, `phone`, `businessName`, `serviceNeeded`, `message`.
- On success: clear inputs and call `router.push('/thank-you')`.
