import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COMPANY_NAME, DOMAIN, TAGLINE, CONTACT_INFO, SOCIAL_LINKS } from "@/content";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rephero.co"),
  title: {
    default: "RepHero — Trained Remote Healthcare Staffing",
    template: "%s | RepHero",
  },
  description:
    "RepHero places trained, HIPAA-compliant remote professionals into US healthcare practices. Front desk, medical billing, clinical support, and after-hours coverage.",
  openGraph: {
    title: "RepHero — Trained Remote Healthcare Staffing",
    description:
      "Trained remote professionals for healthcare practices. 50-60% savings, HIPAA-compliant with signed BAA on every engagement.",
    url: "https://www.rephero.co",
    siteName: "RepHero",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // §7 viewport-fit=cover: paint edge-to-edge under notch/Dynamic Island
  // interactive-widget: keyboard shrinks layout on Android Chrome so dvh works
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
  // §10 theme-color per color-scheme so the status bar matches the dark header
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090E12" },
    { media: "(prefers-color-scheme: light)", color: "#090E12" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: `https://${DOMAIN}`,
    logo: `https://${DOMAIN}/logo.jpg`,
    description: TAGLINE,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_INFO.phone,
      contactType: "customer service",
      email: CONTACT_INFO.email,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "100 Pine Street, Suite 1250",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94111",
      addressCountry: "US",
    },
    sameAs: [
      SOCIAL_LINKS.linkedin,
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-charcoal focus:text-white focus:rounded-[2px] focus:shadow-md"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main-content" className="flex-1 w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
