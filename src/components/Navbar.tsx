"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSiteModals } from "@/context/ModalContext";
import PillNav from "@/components/ui/PillNav";
import SpecularButton from "@/components/ui/SpecularButton";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "Process" },
  { href: "/case-studies", label: "Work" },
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
  const { openSchedule } = useSiteModals();

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
      {/* Left: Brand Logo */}
      <Link
        href="/"
        className="logo appear appear--scale inline-flex items-center gap-2.5 justify-self-start text-white no-underline group"
        aria-label="Nafa Technologies home"
      >
        <span className="grid h-[22px] w-[22px] place-items-center text-white transition-transform duration-300 group-hover:scale-110">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="rotate(-30 12 12)">
              <circle cx="7.3" cy="3.2" r="1.45" />
              <rect x="5.5" y="4.7" width="3.6" height="14.6" rx="1.8" />
              <rect x="14.9" y="4.7" width="3.6" height="14.6" rx="1.8" />
              <circle cx="16.7" cy="20.8" r="1.45" />
            </g>
          </svg>
        </span>
        <span className="text-[15.5px] font-semibold tracking-[-0.03em] text-white">
          Nafa<span className="font-normal text-[#A6B4C7]">.tech</span>
        </span>
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
        <SpecularButton
          onClick={openSchedule}
          size="sm"
          radius={7}
          tint="#ffffff"
          tintOpacity={0.08}
          blur={10}
          textColor="#ffffff"
          lineColor="#ffffff"
          baseColor="#525252"
          intensity={1.1}
          idleIntensity={0.35}
          shineSize={10}
          shineFade={30}
          thickness={1.2}
          glow={1}
          followMouse
          proximity={220}
          className="hidden sm:inline-flex h-[38px] px-4 text-xs font-semibold"
        >
          Book Discovery Call
        </SpecularButton>

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
                openSchedule();
              }}
              size="md"
              radius={8}
              tint="#ffffff"
              tintOpacity={0.08}
              blur={12}
              textColor="#ffffff"
              lineColor="#ffffff"
              baseColor="#525252"
              intensity={1.1}
              idleIntensity={0.35}
              className="w-full h-[46px] text-sm font-semibold"
            >
              Book Discovery Call
            </SpecularButton>
            <p className="text-center text-xs text-[#A6B4C7]">
              24/7 Voice & Speed-to-Lead Infrastructure
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
