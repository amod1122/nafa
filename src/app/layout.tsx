import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://nafatechnologies.com"),
  title: "Nafa Technologies — 24/7 AI Call Agents & Speed-to-Lead",
  description:
    "Nafa builds and deploys 24/7 AI call agents, <60-second speed-to-lead follow-up systems, and high-converting websites for local businesses. Fully done for you, with zero fluff.",
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
    title: "Nafa Technologies — 24/7 AI Call Agents & Speed-to-Lead",
    description:
      "Never miss a lead again. Deploy 24/7 AI phone agents and automated response pipelines that answer every call and book appointments while you sleep.",
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
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-black text-white" style={{ background: "#000000", color: "#ffffff" }}>
      <head>
        <link rel="icon" href="/logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Instrument+Serif:ital@1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Nafa Technologies",
              email: "contact@nafatech.site",
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
      <body
        className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black"
        style={{ background: "#000000", color: "#ffffff" }}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
