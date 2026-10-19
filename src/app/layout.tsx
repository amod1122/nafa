import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nafatechnologies.com"),
  title: "Nafa Technologies | Never Miss a Lead. Never.",
  description:
    "Nafa builds and deploys 24/7 AI call agents, <5-minute speed-to-lead follow-up systems, and high-converting custom websites for local businesses. Zero fluff, fully done for you.",
  keywords: [
    "AI Call Agent",
    "AI Voice Receptionist",
    "Speed to Lead",
    "Local Business Automation",
    "Appointment Booking AI",
    "High Converting Websites",
    "Nafa Technologies",
  ],
  authors: [{ name: "Nafa Technologies" }],
  openGraph: {
    title: "Nafa Technologies | 24/7 AI Call Agents & Speed-to-Lead",
    description:
      "Never miss a lead again. We deploy AI phone agents and high-converting websites that answer every call and book appointments while you sleep.",
    url: "https://nafatechnologies.com",
    siteName: "Nafa Technologies",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Nafa Technologies Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#FBFBFA",
};

import SiteShell from "@/components/SiteShell";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Nafa Technologies",
              url: "https://nafatechnologies.com",
              logo: "https://nafatechnologies.com/logo.jpg",
              description:
                "AI automation agency providing 24/7 AI call agents, speed-to-lead systems, and high-converting web design for local businesses.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-nafa-canvas text-nafa-charcoal font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
