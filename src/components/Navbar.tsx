"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import { useSiteModals } from "@/context/ModalContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openSchedule, openQuoteModal } = useSiteModals();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/demo", label: "Live Demo" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "apple-glass py-2.5 shadow-apple-card"
            : "bg-nafa-canvas/85 backdrop-blur-md py-3.5 border-b border-nafa-border/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Nafa Technologies Home"
            >
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-nafa-border/60 shadow-xs flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Nafa Technologies"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  priority
                />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-extrabold tracking-tight text-nafa-charcoal text-base sm:text-lg">
                  &lt; Nafa <span className="font-medium text-nafa-charcoal-muted">Technologies</span> &gt;
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 text-[13px] font-semibold text-nafa-charcoal-muted">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors duration-150 py-1 ${
                      isActive
                        ? "text-nafa-charcoal font-bold border-b-2 border-nafa-gold"
                        : "hover:text-nafa-charcoal"
                    } ${link.href === "/demo" ? "flex items-center gap-1.5" : ""}`}
                  >
                    {link.href === "/demo" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={() => openQuoteModal()}
                className="press-scale px-3.5 py-1.5 text-xs font-bold rounded-full border border-nafa-charcoal/20 text-nafa-charcoal hover:bg-black/5 transition-all"
              >
                Free Quote
              </button>
              <button
                onClick={openSchedule}
                className="press-scale px-4 py-1.5 text-xs font-bold rounded-full bg-nafa-gold hover:bg-nafa-gold-hover text-white shadow-apple-gold flex items-center gap-1.5 transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Meeting
              </button>
            </div>

            {/* Mobile Menu & Quick Action Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={openSchedule}
                className="press-scale px-3 py-1.5 text-xs font-bold rounded-full bg-nafa-gold text-white shadow-xs flex items-center gap-1.5"
                aria-label="Book a call"
              >
                <Calendar className="w-3 h-3" />
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-nafa-charcoal hover:bg-black/5 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Sheet */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 border-t border-nafa-border/50 bg-nafa-canvas/98 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2 pt-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-nafa-charcoal px-3 py-2 rounded-xl hover:bg-black/5"
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold px-3 py-2 rounded-xl flex items-center justify-between ${
                    pathname === link.href
                      ? "bg-amber-100/60 text-amber-950 font-bold"
                      : "text-nafa-charcoal hover:bg-black/5"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.href === "/demo" && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                      Audio Test
                    </span>
                  )}
                </Link>
              ))}

              <div className="pt-3 border-t border-nafa-border/50 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuoteModal();
                  }}
                  className="w-full py-2.5 rounded-xl border border-nafa-charcoal/20 text-nafa-charcoal font-bold text-xs hover:bg-black/5 flex items-center justify-center gap-2"
                >
                  Request a Free Custom Quote
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openSchedule();
                  }}
                  className="w-full py-2.5 rounded-xl bg-nafa-gold text-white font-bold text-xs shadow-apple-gold flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Book 15-Min Discovery Call
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
