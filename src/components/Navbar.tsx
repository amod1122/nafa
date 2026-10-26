"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSiteModals } from "@/context/ModalContext";
import PillNav from "@/components/ui/PillNav";
import SpecularButton from "@/components/ui/SpecularButton";
import { AnimatedShinyButton } from "@/components/eldoraui/animated-shiny-button";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const mobileExtraItems = [
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openSchedule, openQuoteModal } = useSiteModals();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      {/* Left: Official Brand Logo & Name */}
      <Link
        href="/"
        className="logo appear appear--scale inline-flex items-center gap-3 justify-self-start text-white no-underline group"
        aria-label="Nafa Technologies home"
      >
        <div className="relative w-8 h-8 rounded-[6px] overflow-hidden border border-white/20 bg-white/[0.04] backdrop-blur-md flex items-center justify-center p-0.5 shrink-0 transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/nafa-logo-white.png"
            alt="Nafa Technologies Logo"
            width={32}
            height={32}
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[15px] font-semibold tracking-[-0.03em] text-white leading-tight">
            Nafa
          </span>
          <span className="text-[10px] font-mono tracking-wider uppercase text-[#A6B4C7] leading-none">
            Technologies
          </span>
        </div>
      </Link>

      {/* Center: React Bits PillNav with liquid glass styling */}
      <div className="hidden lg:flex items-center justify-self-center">
        <PillNav
          items={navItems}
          activeHref={pathname.startsWith("/services") ? "/services" : pathname}
          linkComponent={Link}
          itemStyle="pill"
          hoverEffect="fill"
          indicator="dot"
          surface="glass"
          theme="dark"
          size="md"
          collapse="never"
        />
      </div>

      {/* Right: SpecularButton CTA & Mobile Burger */}
      <div className="flex items-center gap-3 justify-self-end">
        <span className="hidden xl:inline-block text-[11px] font-mono tracking-wider uppercase text-[#A6B4C7] px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03]">
          Nafa Technologies
        </span>
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={openSchedule}
            className="btn btn-ghost h-[38px] px-3 text-xs font-medium text-white/80 hover:text-white"
          >
            Book a Call
          </button>
          <SpecularButton
            onClick={() => openQuoteModal()}
            size="sm"
            radius={8}
            tint="#ffffff"
            tintOpacity={0.06}
            blur={10}
            textColor="#ffffff"
            lineColor="#ffffff"
            baseColor="#525252"
            intensity={1.1}
            idleIntensity={0.35}
            shineSize={12}
            shineFade={32}
            thickness={1.3}
            glow={1}
            followMouse={true}
            autoAnimate={true}
            speed={0.35}
            proximity={220}
            className="h-[38px] px-4 text-xs font-semibold"
          >
            Get a Quote
          </SpecularButton>
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`burger-btn ${menuOpen ? "is-active" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span className="burger-bar" />
          <span className="burger-bar" />
          <span className="burger-bar" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-[65px] bottom-0 z-50 bg-black/95 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between overflow-y-auto border-t border-white/10"
        >
          <div className="grid gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A6B4C7] mb-2 px-2">
              Navigation
            </p>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.08] min-h-[44px]"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#A6B4C7]">→</span>
              </Link>
            ))}

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A6B4C7] mt-4 mb-2 px-2">
              Explore More
            </p>
            {mobileExtraItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-md border border-white/5 bg-transparent px-4 py-3 text-sm text-[#A6B4C7] transition-colors hover:border-white/20 hover:text-white min-h-[44px]"
              >
                <span>{item.label}</span>
                <span className="text-xs text-white/50">→</span>
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 grid gap-3 mt-6">
            <SpecularButton
              onClick={() => {
                setMenuOpen(false);
                openQuoteModal();
              }}
              size="md"
              radius={8}
              tint="#ffffff"
              tintOpacity={0.06}
              blur={12}
              textColor="#ffffff"
              lineColor="#ffffff"
              baseColor="#525252"
              intensity={1.1}
              idleIntensity={0.35}
              followMouse={true}
              autoAnimate={true}
              speed={0.35}
              className="w-full h-[46px] text-sm font-semibold"
            >
              Get a Quote
            </SpecularButton>
            <button
              onClick={() => {
                setMenuOpen(false);
                openSchedule();
              }}
              className="btn btn-ghost w-full h-[42px] text-xs font-medium text-white/90"
            >
              Book a Call
            </button>
            <p className="text-center text-xs text-[#A6B4C7]">
              24/7 Voice & Speed-to-Lead Infrastructure
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
