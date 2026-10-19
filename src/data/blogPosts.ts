export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "the-5-minute-rule-why-speed-wins-leads",
    title: "The 5-Minute Rule: Why Speed Wins Leads for Local Businesses",
    excerpt:
      "Harvard Business Review research proves that responding to a lead within 5 minutes makes you 21x more likely to qualify them. Here is how local contractors and clinics are leveraging instant outbound automation.",
    category: "Lead Follow-Up",
    readTime: "4 min read",
    date: "October 14, 2026",
    author: "Nafa Automation Team",
  },
  {
    slug: "how-much-does-a-missed-call-cost-your-business",
    title: "How Much Does a Missed Call Actually Cost Your Business?",
    excerpt:
      "More than 60% of incoming calls to small businesses go unanswered. When callers reach voicemail, 85% hang up and call a competitor. Calculate the true compounding annual cost to your bottom line.",
    category: "Missed Calls",
    readTime: "5 min read",
    date: "October 08, 2026",
    author: "Nafa Automation Team",
  },
  {
    slug: "why-ai-voice-receptionists-beat-traditional-answering-services",
    title: "Why AI Voice Receptionists Are Replacing Outdated Answering Services",
    excerpt:
      "Traditional call centers put callers on hold, misquote emergency rates, and cost thousands in staffing overhead. Explore how conversational AI provides sub-second 24/7 responsiveness at a fraction of the cost.",
    category: "AI for Local Business",
    readTime: "6 min read",
    date: "September 29, 2026",
    author: "Nafa Automation Team",
  },
  {
    slug: "5-ways-modern-websites-turn-traffic-into-booked-appointments",
    title: "5 Architectural Secrets of High-Converting Local Websites",
    excerpt:
      "Why digital brochure websites bleed money, and how mobile-first layouts, instant click-to-call triggers, and pre-wired AI lead capture turn clicks into customers in under 10 seconds.",
    category: "Websites",
    readTime: "5 min read",
    date: "September 18, 2026",
    author: "Nafa Automation Team",
  },
];
