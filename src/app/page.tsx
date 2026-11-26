import type { Metadata } from "next";
import Link from "next/link";
import {
  BRAND_NAME,
  TAGLINE,
  CTA_LABELS,
  HOW_IT_WORKS_STEPS,
  INDUSTRIES,
  FAQ_ITEMS,
  TESTIMONIAL_BANNERS,
  filterApprovedTestimonials,
  SEO_METADATA,
} from "@/content";
import { TrustStrip } from "@/components/TrustStrip";
import { SuccessStoryBanner } from "@/components/SuccessStoryBanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { IndustryCard } from "@/components/IndustryCard";
import GradientBlinds from "@/components/GradientBlinds";

export const metadata: Metadata = {
  title: { absolute: SEO_METADATA.home.title },
  description: SEO_METADATA.home.description,
  alternates: { canonical: SEO_METADATA.home.canonical },
  openGraph: {
    title: SEO_METADATA.home.title,
    description: SEO_METADATA.home.description,
    url: SEO_METADATA.home.canonical,
    siteName: BRAND_NAME,
    type: "website",
  },
};

export default function HomePage() {
  const approvedTestimonials = filterApprovedTestimonials(TESTIMONIAL_BANNERS);
  const homeFaqs = FAQ_ITEMS.slice(0, 5);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-slate">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero ── */}
      <section
        id="hero"
        className="bg-ink text-white py-16 sm:py-24 px-5 sm:px-8 text-center relative overflow-hidden min-h-[480px] sm:min-h-[560px] flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0 pointer-events-auto opacity-90">
          <GradientBlinds
            gradientColors={["#0F3554", "#1E4B75", "#090E12"]}
            angle={22}
            blindCount={18}
            blindMinWidth={55}
            spotlightRadius={0.55}
            spotlightSoftness={1.1}
            shine={0.35}
            relief={0.45}
            glow={0.3}
            sway={0.25}
            speed={0.8}
            hoverTilt={0.5}
            clickEffect="ripple"
            noise={0.25}
            lightColor="#C6DDF5"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/60 via-transparent to-ink pointer-events-none" />

        <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10 gap-5">
          <h1 className="font-serif text-[36px] sm:text-[56px] md:text-[68px] leading-[1.05] tracking-[-0.02em] font-normal text-white">
            {TAGLINE}
          </h1>
          {/* §7: safe-area padding so CTA buttons aren't under the notch */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto pb-[env(safe-area-inset-bottom,0px)]">
            <Link
              href="/book-a-call"
              className="w-full sm:w-auto inline-flex items-center justify-center font-medium px-7 py-3.5 rounded-[2px] bg-white text-ink shadow-sm active:scale-[0.98] active:bg-mist transition-transform"
            >
              {CTA_LABELS.primary}
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center font-medium px-7 py-3.5 rounded-[2px] bg-white/10 text-white border border-white/20 active:scale-[0.98] active:bg-white/20 transition-transform"
            >
              {CTA_LABELS.secondaryServices}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <TrustStrip variant="light" showProofPoints showLogos />

      {/* ── Services ── */}
      <section id="services-overview" className="py-12 sm:py-16 px-5 sm:px-8 max-w-5xl mx-auto">
        <h2 className="font-serif text-[28px] sm:text-[40px] text-charcoal text-center mb-8">
          Specialized Staffing for Every Workflow
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              label: "Admin & Clinical",
              body: "Front desk, appointment scheduling, patient intake, and medical assistants.",
              href: "/services#admin-and-executive",
              cta: "Explore →",
            },
            {
              label: "Revenue Cycle",
              body: "Medical billing, coding, RCM management, and credentialing.",
              href: "/services#revenue-cycle-and-compliance",
              cta: "Explore →",
            },
            {
              label: "After-Hours & Creative",
              body: "24/7 call answering, clinical triage routing, and clinic marketing.",
              href: "/services#extended-and-creative",
              cta: "Explore →",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="p-6 border border-line rounded-[2px] bg-white flex flex-col justify-between gap-4"
            >
              <div>
                <h3 className="text-base font-semibold text-charcoal">{card.label}</h3>
                <p className="text-sm text-slate mt-2 leading-relaxed">{card.body}</p>
              </div>
              <Link
                href={card.href}
                className="text-xs text-navy font-medium hover:underline"
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-flex items-center justify-center font-medium px-6 py-3 rounded-[2px] bg-charcoal text-white text-sm active:bg-ink transition-colors"
          >
            {CTA_LABELS.secondaryServices}
          </Link>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section
        id="how-it-works"
        className="py-12 sm:py-16 px-5 sm:px-8 bg-mist border-y border-line"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-[28px] sm:text-[40px] text-charcoal text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-4 bg-white border border-line rounded-[2px] flex flex-col gap-1"
              >
                <span className="text-xs font-mono font-bold text-navy">0{step.step}</span>
                <h3 className="text-sm font-semibold text-charcoal leading-snug">{step.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center font-medium px-6 py-3 rounded-[2px] bg-charcoal text-white text-sm active:bg-ink transition-colors"
            >
              See Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* ── Savings Calculator Teaser ── */}
      <section id="savings-calculator" className="py-12 sm:py-16 px-5 sm:px-8 max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-[28px] sm:text-[40px] text-charcoal mb-3">
          See Your Savings
        </h2>
        <p className="text-slate text-sm sm:text-base mb-6">
          Most practices save 50–60% vs. local hiring. Try the calculator.
        </p>
        <Link
          href="/savings-calculator"
          className="inline-flex items-center justify-center font-medium px-6 py-3 rounded-[2px] bg-charcoal text-white text-sm active:bg-ink transition-colors"
        >
          {CTA_LABELS.secondaryCalculator}
        </Link>
      </section>

      {/* ── Industries ── */}
      <section
        id="industries"
        className="py-12 sm:py-16 px-5 sm:px-8 bg-mist border-y border-line"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-[28px] sm:text-[40px] text-charcoal text-center mb-8">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} variant="card" />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/industries"
              className="inline-flex items-center justify-center font-medium px-6 py-3 rounded-[2px] bg-charcoal text-white text-sm active:bg-ink transition-colors"
            >
              View All Industries
            </Link>
          </div>
        </div>
      </section>

      {/* ── Success Stories ── */}
      {approvedTestimonials.length > 0 && (
        <section id="success-stories" className="py-12 sm:py-16 px-5 sm:px-8 max-w-5xl mx-auto">
          <h2 className="font-serif text-[28px] sm:text-[40px] text-charcoal text-center mb-8">
            Client Stories
          </h2>
          <div className="flex justify-center">
            <SuccessStoryBanner testimonial={approvedTestimonials[0]} />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/success-stories"
              className="inline-flex items-center justify-center font-medium px-6 py-3 rounded-[2px] bg-charcoal text-white text-sm active:bg-ink transition-colors"
            >
              More Stories
            </Link>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section id="faq" className="py-12 sm:py-16 px-5 sm:px-8 bg-mist border-t border-line">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-[28px] sm:text-[40px] text-charcoal text-center mb-8">
            FAQs
          </h2>
          <FAQAccordion items={homeFaqs} allowMultiple={false} />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        id="cta"
        className="py-16 sm:py-20 px-5 sm:px-8 bg-ink text-white text-center relative overflow-hidden"
        style={{ paddingBottom: "calc(4rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-navy/40 via-sky/20 to-peach/10 blur-3xl rounded-full pointer-events-none -z-0" />
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="font-serif text-[30px] sm:text-[44px] leading-tight mb-4">
            Give Your Practice Its Time Back
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8">
            15-minute discovery call. No commitment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/book-a-call"
              className="w-full sm:w-auto inline-flex items-center justify-center font-medium px-7 py-3.5 rounded-[2px] bg-white text-ink shadow-sm active:scale-[0.98] active:bg-mist transition-transform"
            >
              {CTA_LABELS.primary}
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center font-medium px-7 py-3.5 rounded-[2px] bg-white/10 text-white border border-white/20 active:scale-[0.98] active:bg-white/20 transition-transform"
            >
              {CTA_LABELS.secondaryServices}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
