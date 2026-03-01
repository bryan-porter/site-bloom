import redesignSignsHero from "@assets/blog/blog-hero-redesign-signs.png";
import pageSpeedHero from "@assets/blog/blog-hero-page-speed.png";
import mobileFirstHero from "@assets/blog/blog-hero-mobile-first.png";
import seoFundamentalsHero from "@assets/blog/blog-hero-seo-fundamentals.png";
import slowWebsiteCostHero from "@assets/blog/blog-hero-slow-website-cost.png";
import croQuickWinsHero from "@assets/blog/blog-hero-cro-quick-wins.png";

export interface BlogPostPreview {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  heroAlt: string;
}

interface BlogSectionBase {
  id: string;
  title: string;
}

interface ParagraphSection extends BlogSectionBase {
  kind: "paragraphs";
  paragraphs: string[];
}

interface ChecklistSection extends BlogSectionBase {
  kind: "checklist";
  intro: string;
  items: string[];
  outro: string;
}

interface NumberedListSection extends BlogSectionBase {
  kind: "numbered-list";
  intro?: string;
  items: string[];
}

interface BulletedListSection extends BlogSectionBase {
  kind: "bulleted-list";
  intro?: string;
  items: string[];
}

export type BlogSection =
  | ParagraphSection
  | ChecklistSection
  | NumberedListSection
  | BulletedListSection;

export interface BlogPost extends BlogPostPreview {
  description: string;
  bodyTitle: string;
  lede: string[];
  sections: BlogSection[];
  decisionGuide?: {
    redesign: string[];
    optimization: string[];
  };
  highlightSection?: {
    title: string;
    columns: {
      label: string;
      items: string[];
    }[];
  };
  nextSteps: string[];
  cta: {
    supportingLine: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
}

export const blogPostPreviews: BlogPostPreview[] = [
  {
    slug: "10-signs-your-website-needs-a-redesign",
    title: "10 Signs Your Website Needs a Redesign",
    excerpt:
      "Your website should convert visitors into leads. Here are 10 clear signs it’s holding you back—and what to do next.",
    category: "Design",
    date: "Jan 15, 2025",
    readTime: "5 min",
    image: redesignSignsHero,
    heroAlt: "A modern website redesign illustration in Site Bloom’s purple style.",
  },
  {
    slug: "how-page-speed-affects-your-bottom-line",
    title: "How Page Speed Affects Your Bottom Line",
    excerpt:
      "Every second counts. Page speed impacts conversions, ad efficiency, and search visibility. Here's how to connect it to revenue.",
    category: "Performance",
    date: "Jan 10, 2025",
    readTime: "4 min",
    image: pageSpeedHero,
    heroAlt: "A performance dashboard illustration in Site Bloom’s purple style.",
  },
  {
    slug: "mobile-first-design-why-it-matters-in-2025",
    title: "Mobile-First Design: Why It Matters in 2025",
    excerpt:
      "With mobile traffic dominating, your site must prioritize the mobile experience first. Here's what mobile-first actually means and how to do it.",
    category: "Mobile",
    date: "Jan 5, 2025",
    readTime: "6 min",
    image: mobileFirstHero,
    heroAlt: "A mobile-first design illustration in Site Bloom’s purple style.",
  },
  {
    slug: "seo-fundamentals-every-business-owner-should-know",
    title: "SEO Fundamentals Every Business Owner Should Know",
    excerpt:
      "Demystifying SEO: practical steps to improve your search visibility without technical overwhelm.",
    category: "SEO",
    date: "Dec 28, 2024",
    readTime: "8 min",
    image: seoFundamentalsHero,
    heroAlt: "An SEO fundamentals illustration in Site Bloom’s purple style.",
  },
  {
    slug: "the-true-cost-of-a-slow-website",
    title: "The True Cost of a Slow Website",
    excerpt:
      "Calculate the revenue you are losing every day due to poor website performance and what to fix first.",
    category: "Performance",
    date: "Dec 20, 2024",
    readTime: "5 min",
    image: slowWebsiteCostHero,
    heroAlt: "A slow website cost illustration in Site Bloom’s purple style.",
  },
  {
    slug: "conversion-rate-optimization-quick-wins",
    title: "Conversion Rate Optimization: Quick Wins",
    excerpt:
      "Get more leads from the traffic you already have. These CRO quick wins reduce friction and make your site convert.",
    category: "Growth",
    date: "Dec 12, 2024",
    readTime: "7 min",
    image: croQuickWinsHero,
    heroAlt: "A conversion rate optimization illustration in Site Bloom’s purple style.",
  },
];

export const blogPostsBySlug: Record<string, BlogPost> = {
  "10-signs-your-website-needs-a-redesign": {
    slug: "10-signs-your-website-needs-a-redesign",
    title: "10 Signs Your Website Needs a Redesign",
    bodyTitle: "10 Signs Your Website Needs a Redesign",
    excerpt:
      "Your website should convert visitors into leads. Here are 10 clear signs it’s holding you back—and what to do next.",
    description:
      "Your website should convert visitors into leads. Here are 10 clear signs it’s holding you back—and what to do next.",
    category: "DESIGN",
    date: "Jan 15, 2025",
    readTime: "5 min",
    image: redesignSignsHero,
    heroAlt: "A modern website redesign illustration in Site Bloom’s purple style.",
    lede: [
      "Your website is supposed to be your hardest-working employee: it should explain what you do, build trust, and turn visitors into calls, bookings, or leads—consistently.",
      "But many business websites drift over time. A few quick edits here, a plugin there, a new service added… and suddenly the site “works,” but it doesn’t perform.",
      "Below are 10 clear signs your website likely needs a redesign (or at least a serious tune-up), plus how to confirm each one and what to do next.",
    ],
    sections: [
      {
        id: "not-from-scratch",
        title: "First: “Redesign” doesn’t always mean “start from scratch”",
        kind: "bulleted-list",
        intro: "A redesign can be:",
        items: [
          "Visual + brand refresh (design + messaging)",
          "UX restructuring (navigation, pages, layout, clarity)",
          "Performance overhaul (speed, mobile, technical cleanup)",
          "Conversion upgrade (CTAs, forms, trust elements)",
          "You don’t always need all four—the goal is fixing what’s blocking growth.",
        ],
      },
      {
        id: "dated",
        title: "1) It looks dated (and you can feel it)",
        kind: "checklist",
        intro:
          "Why it matters: People judge credibility fast. If your site looks behind the times, visitors assume your business might be too.",
        items: [
          "Does the site look like it was built 5–10 years ago?",
          "Does it resemble competitors that feel “more modern”?",
        ],
        outro:
          "What to do next: Refresh typography, spacing, layout, and imagery first. Modern often means cleaner and easier to scan—not flashier.",
      },
      {
        id: "mobile",
        title: "2) Your site isn’t truly mobile-friendly",
        kind: "checklist",
        intro:
          "Why it matters: Most prospects meet you on a phone. If the experience is cramped, hard to tap, or confusing, they bounce.",
        items: [
          "Open your Home, top Service page, and Contact page on your phone.",
          "Can you instantly understand what you do and how to contact you?",
          "Are buttons easy to tap? Is text readable without zooming?",
        ],
        outro:
          "What to do next: Design mobile-first: one primary action, larger tap targets, shorter sections, less clutter above the fold.",
      },
      {
        id: "slow",
        title: "3) It feels slow (or looks “heavy”)",
        kind: "checklist",
        intro:
          "Why it matters: Slow sites lose impatient visitors and undercut trust.",
        items: [
          "Does the site take long enough that you notice?",
          "Do images pop in late, or does the layout jump around?",
        ],
        outro:
          "What to do next: Start with image compression, removing unnecessary scripts/plugins, and simplifying fonts.",
      },
      {
        id: "traffic-no-leads",
        title: "4) You’re getting traffic, but not getting leads",
        kind: "checklist",
        intro:
          "Why it matters: Traffic without conversions usually means the site isn’t guiding visitors to action.",
        items: [
          "Are you getting visits (Google, ads, referrals) but few calls/forms/bookings?",
          "Do you know your rough conversion rate?",
        ],
        outro:
          "What to do next: Audit the conversion path: offer clarity, CTA placement, form friction, and trust signals.",
      },
      {
        id: "basic-questions",
        title: "5) People ask basic questions your website should answer",
        kind: "checklist",
        intro:
          "Why it matters: If prospects keep calling to ask “Do you do X?” your site isn’t pre-selling.",
        items: [
          "Look at your last 10 inquiries. How many were basic questions?",
          "Are those answers clearly addressed on your service pages?",
        ],
        outro:
          "What to do next: Add FAQ sections, clarify scope, outline your process, and show pricing ranges or “starting at” when possible.",
      },
      {
        id: "navigation",
        title: "6) Your navigation makes sense to you… but not to customers",
        kind: "checklist",
        intro:
          "Why it matters: Visitors don’t explore like you do. If they can’t find what they came for, they leave.",
        items: [
          "Can a stranger find your key service in 1 click?",
          "Do you have too many menu items or vague labels like “Solutions” or “Offerings”?",
        ],
        outro:
          "What to do next: Simplify to roughly 5–7 top-level items. Prioritize your money pages: Services, Case Studies, Contact.",
      },
      {
        id: "five-second-test",
        title: "7) Your homepage fails the “5-second test”",
        kind: "numbered-list",
        intro: "Why it matters: Visitors should instantly know:",
        items: [
          "what you do",
          "who it’s for",
          "what to do next",
          "Quick check: Show your homepage to someone for 5 seconds, then ask what this company does. If they hesitate, you have a clarity problem.",
          "What to do next: Rewrite the hero with a specific outcome-driven headline, a short supporting subhead, and one primary CTA.",
        ],
      },
      {
        id: "embarrassed",
        title: "8) You’re embarrassed to send people to your site",
        kind: "paragraphs",
        paragraphs: [
          "Why it matters: If you don’t trust your site, your prospects won’t either.",
          "Quick check: Do you ever say “ignore the website” or “we need to update that”?",
          "What to do next: Start with the highest-visibility pages first: Home, core Service page(s), and Contact.",
        ],
      },
      {
        id: "hard-to-update",
        title: "9) It’s hard (or risky) to update anything",
        kind: "checklist",
        intro:
          "Why it matters: If updates require a developer, the site gets stale—and stale sites lose.",
        items: [
          "Can you update text/images without fear?",
          "Does editing the site break layouts?",
        ],
        outro:
          "What to do next: Move to a maintainable setup (or clean up the current CMS): reusable sections, consistent components, and a sane page system.",
      },
      {
        id: "current-business",
        title: "10) Your website doesn’t reflect your current business",
        kind: "checklist",
        intro:
          "Why it matters: Businesses evolve. Websites often don’t.",
        items: [
          "Are you offering new services your site barely mentions?",
          "Is your positioning different than what the site communicates?",
          "Are testimonials or case studies outdated or missing?",
        ],
        outro:
          "What to do next: Update messaging and pages to match your current best customers and most profitable services.",
      },
    ],
    decisionGuide: {
      redesign: [
        "Your site fails mobile, speed, and clarity at the same time.",
        "The structure is wrong and the pages/navigation don’t match how you sell.",
        "The visual design undercuts trust.",
        "Updating the site is painful or brittle.",
      ],
      optimization: [
        "The site looks fine but conversions are low.",
        "The site is good but slow.",
        "SEO basics are missing and the structure or content needs tuning.",
      ],
    },
    nextSteps: [
      "Pick 3 pages: Home, top Service, and Contact.",
      "Check them on mobile.",
      "Ask: Is it clear, fast enough, and easy to take action?",
      "Fix the biggest blocker first: clarity, then mobile, then speed, then conversion.",
    ],
    cta: {
      supportingLine:
        "We’ll identify the biggest conversion blockers and give you a prioritized roadmap.",
      primaryLabel: "Get a Free Site Audit",
      primaryHref: "/free-audit",
      secondaryLabel: "Run Site Grader",
      secondaryHref: "/site-grader",
    },
    // Related post links can be added here once additional post routes exist.
  },
  "how-page-speed-affects-your-bottom-line": {
    slug: "how-page-speed-affects-your-bottom-line",
    title: "How Page Speed Affects Your Bottom Line",
    bodyTitle: "How Page Speed Affects Your Bottom Line",
    excerpt:
      "Every second counts. Page speed impacts conversions, ad efficiency, and search visibility. Here's how to connect it to revenue.",
    description:
      "Every second counts. Page speed impacts conversions, ad efficiency, and search visibility. Here's how to connect it to revenue.",
    category: "PERFORMANCE",
    date: "Jan 10, 2025",
    readTime: "4 min",
    image: pageSpeedHero,
    heroAlt: "A website performance dashboard illustration in Site Bloom's purple style.",
    lede: [
      "When a site feels slow, customers do not wait it out. They leave, compare, or lose confidence. That shows up as fewer leads, lower sales, and wasted ad spend.",
      "Page speed is not a developer vanity metric. It is a business metric. Here is how it directly impacts revenue and how to prioritize improvements without getting lost in technical noise.",
    ],
    sections: [
      {
        id: "revenue-four-places",
        title: "Speed hits revenue in four places",
        kind: "numbered-list",
        items: [
          "Conversions (forms, calls, bookings, checkouts)",
          "Paid traffic efficiency",
          "Search visibility and organic demand",
          "Trust and perceived professionalism",
        ],
      },
      {
        id: "conversions",
        title: "1) Conversions (forms, calls, bookings, checkouts)",
        kind: "checklist",
        intro:
          "Slow pages increase drop-off. The longer someone waits, the more likely they are to abandon the session, especially on mobile.",
        items: [
          "Fewer form submissions",
          "Lower booking completion rates",
          "More messages that say: I tried to contact you but it did not work",
          "Open your Home page on your phone, on cellular. If you notice the load, your customers definitely notice it.",
        ],
        outro:
          "What to do next: Treat any lag before the CTA or form appears as lost momentum.",
      },
      {
        id: "paid-efficiency",
        title: "2) Paid traffic efficiency",
        kind: "paragraphs",
        paragraphs: [
          "If you run ads, speed matters twice: you pay for the click, then you lose the customer if the landing page drags.",
          "Even small speed improvements can reduce wasted spend because more clicks make it far enough to take action.",
        ],
      },
      {
        id: "search-demand",
        title: "3) Search visibility and organic demand",
        kind: "paragraphs",
        paragraphs: [
          "Search engines want to send users to pages that load reliably and create a good experience.",
          "Slow sites can struggle to earn and keep visibility, especially when competitors are faster and cleaner.",
        ],
      },
      {
        id: "trust-professionalism",
        title: "4) Trust and perceived professionalism",
        kind: "paragraphs",
        paragraphs: [
          "A sluggish site feels unmaintained. For many visitors, that is enough to trigger a maybe not reaction, even if your service is great.",
          "Speed is part of modern credibility.",
        ],
      },
      {
        id: "estimate",
        title: "A simple way to estimate what speed is costing you",
        kind: "bulleted-list",
        intro:
          "You do not need perfect analytics to get directional clarity. Use a simple model for monthly lost value:",
        items: [
          "Monthly sessions x current conversion rate x value per lead (or average order value) x drop-off factor",
          "If you do not know conversion rate, use a conservative guess.",
          "The point is to understand magnitude and prioritize.",
          "Example: If you get 2,000 visits per month and your leads are worth about $300 each, even a small lift in conversion rate can pay for performance work quickly.",
        ],
      },
      {
        id: "slow-causes",
        title: "What usually makes a site slow",
        kind: "bulleted-list",
        items: [
          "Unoptimized images (too large, wrong format, no compression)",
          "Too many scripts (trackers, chat widgets, popups, heavy libraries)",
          "Bloated themes or builders, especially with lots of plugins",
          "Font overload (multiple families or weights, blocking loads)",
          "No caching or CDN, or misconfigured caching",
          "Heavy third-party embeds (maps, video, social feeds)",
          "You do not need to remove everything. Keep what pays for itself.",
        ],
      },
      {
        id: "good-speed",
        title: "What good looks like (practical, not obsessive)",
        kind: "bulleted-list",
        intro: "A fast site is one where:",
        items: [
          "The page becomes usable quickly, especially on mobile",
          "Content does not jump around during load",
          "The primary CTA is available without lag",
          "Forms and buttons feel instant",
          "The goal is frictionless, not perfect scores.",
        ],
      },
      {
        id: "prioritization",
        title: "A prioritization rule that works",
        kind: "numbered-list",
        intro: "If you want the highest ROI improvements first:",
        items: [
          "Fix images",
          "Remove or replace unnecessary scripts",
          "Clean up fonts",
          "Improve caching and delivery (CDN)",
          "Then tackle deeper build or theme issues",
          "This sequence solves a big chunk of real-world slowness quickly.",
        ],
      },
    ],
    nextSteps: [
      "Pick one high-intent page (your top Service page) and one conversion page (Contact or Booking).",
      "Check whether it is fast on mobile.",
      "Check whether it feels stable, with no layout shifting.",
      "Check whether the CTA is usable immediately.",
      "If not, speed work is likely one of your highest-leverage improvements.",
    ],
    cta: {
      supportingLine:
        "We'll identify what is slowing your site down and prioritize fixes by ROI, with quick wins first.",
      primaryLabel: "Get a Free Site Audit",
      primaryHref: "/free-audit",
      secondaryLabel: "See Speed Optimization",
      secondaryHref: "/services/speed-optimization",
    },
  },
  "mobile-first-design-why-it-matters-in-2025": {
    slug: "mobile-first-design-why-it-matters-in-2025",
    title: "Mobile-First Design: Why It Matters in 2025",
    bodyTitle: "Mobile-First Design: Why It Matters in 2025",
    excerpt:
      "With mobile traffic dominating, your site must prioritize the mobile experience first. Here's what mobile-first actually means and how to do it.",
    description:
      "With mobile traffic dominating, your site must prioritize the mobile experience first. Here's what mobile-first actually means and how to do it.",
    category: "MOBILE",
    date: "Jan 5, 2025",
    readTime: "6 min",
    image: mobileFirstHero,
    heroAlt: "A mobile-first website layout illustration in Site Bloom's purple style.",
    lede: [
      "For most businesses, a customer's first impression is not your office or storefront. It is your website on a phone.",
      "If your mobile experience is cramped, slow, or unclear, people do not figure it out. They bounce, compare, or move on.",
      "Mobile-first design is not a trend. It is the baseline for modern conversion.",
    ],
    sections: [
      {
        id: "not-responsive",
        title: "Mobile-first is not responsive",
        kind: "bulleted-list",
        intro: "A responsive site technically fits on a phone. Mobile-first is different:",
        items: [
          "It prioritizes what matters most on small screens",
          "It removes clutter and friction",
          "It makes the primary action effortless (call, book, request a quote)",
          "If your mobile site is just your desktop site shrunk down, you are leaving money on the table.",
        ],
      },
      {
        id: "mobile-intent",
        title: "What mobile visitors actually want",
        kind: "bulleted-list",
        intro: "Mobile users are usually in one of these modes:",
        items: [
          "I need a quick answer (pricing, availability, location, services)",
          "I need proof (reviews, examples, credibility)",
          "I want to take action (call, book, submit, get directions)",
          "They are not browsing for fun. They are trying to decide fast.",
        ],
      },
      {
        id: "clarity",
        title: "1) Clarity above the fold",
        kind: "bulleted-list",
        intro: "Within seconds, a visitor should know:",
        items: [
          "what you do",
          "who it is for",
          "why you are the right choice",
          "what to do next",
          "Fix: Use a specific headline + short subhead + one primary CTA.",
        ],
      },
      {
        id: "scannability",
        title: "2) Scannability (short blocks, strong headings)",
        kind: "bulleted-list",
        intro: "Mobile users skim. Long paragraphs feel overwhelming on a phone.",
        items: [
          "Break content into short sections",
          "Use subheads every few lines",
          "Prefer bullets over dense text",
        ],
      },
      {
        id: "tap-friendly",
        title: "3) Tap-friendly UI",
        kind: "bulleted-list",
        intro: "If buttons are tiny or links are crowded, people mis-tap and quit.",
        items: [
          "Make primary buttons large and obvious",
          "Increase spacing between interactive elements",
          "Keep one main CTA per screen",
        ],
      },
      {
        id: "forms",
        title: "4) Frictionless forms",
        kind: "bulleted-list",
        intro: "Most mobile conversions fail at the form.",
        items: [
          "Reduce fields",
          "Use autofill-friendly inputs",
          "Add clear error states and success confirmation",
          "Consider a call or text us option for high-intent users",
        ],
      },
      {
        id: "trust-fast",
        title: "5) Trust fast",
        kind: "bulleted-list",
        intro: "On mobile, trust needs to be immediate.",
        items: [
          "Show reviews or testimonials near the top",
          "Add as featured in or logos if you have them",
          "Show real photos (team, work, results)",
          "Add a clear guarantee or what happens next",
        ],
      },
      {
        id: "speed-stability",
        title: "6) Speed + stability",
        kind: "bulleted-list",
        intro:
          "Mobile networks vary. Even a pretty site fails if it is sluggish or jumps around while loading.",
        items: [
          "Optimize images",
          "Avoid heavy scripts",
          "Prevent layout shifting (stable spacing, reserved image sizes)",
        ],
      },
      {
        id: "mistakes",
        title: "Common mobile-first mistakes (and quick fixes)",
        kind: "bulleted-list",
        items: [
          "Too many CTAs competing -> Choose one primary action per page.",
          "Popups that block content -> Delay them or replace them with inline CTAs.",
          "Huge hero images with tiny text -> Prioritize message first, visuals second.",
          "Service pages that read like brochures -> Make them decision pages: outcomes, proof, steps, pricing guidance.",
        ],
      },
      {
        id: "audit",
        title: "A 10-minute mobile audit you can do today",
        kind: "numbered-list",
        intro: "Open your site on your phone and check:",
        items: [
          "Can you understand what you do in 5 seconds?",
          "Is the main CTA visible without scrolling?",
          "Can you tap buttons easily with one thumb?",
          "Does the page feel fast on cellular?",
          "Can you submit the form without frustration?",
          "If you answer no to two or more, mobile-first improvements are likely high ROI.",
        ],
      },
    ],
    nextSteps: [
      "Start with your highest-intent pages: your top Service page and your Contact or Booking page.",
      "Check the first screenful for clarity, speed, and a clear next step.",
      "Fix mobile friction before you add more traffic.",
    ],
    cta: {
      supportingLine:
        "We'll review your mobile funnel and tell you exactly what to fix first: clarity, speed, and conversion.",
      primaryLabel: "Get a Free Site Audit",
      primaryHref: "/free-audit",
      secondaryLabel: "Mobile Overhaul",
      secondaryHref: "/services/mobile-overhaul",
    },
  },
  "seo-fundamentals-every-business-owner-should-know": {
    slug: "seo-fundamentals-every-business-owner-should-know",
    title: "SEO Fundamentals Every Business Owner Should Know",
    bodyTitle: "SEO Fundamentals Every Business Owner Should Know",
    excerpt:
      "Demystifying SEO: practical steps to improve your search visibility without technical overwhelm.",
    description:
      "Demystifying SEO: practical steps to improve your search visibility without technical overwhelm.",
    category: "SEO",
    date: "Dec 28, 2024",
    readTime: "8 min",
    image: seoFundamentalsHero,
    heroAlt: "An SEO analysis illustration with charts and a magnifying glass in Site Bloom's purple style.",
    lede: [
      "SEO can feel like a black box until you break it into a few simple pieces.",
      "At a high level, SEO is about helping search engines understand what your business does, who it is for, where you operate (if local), and why your site is the best result.",
      "You do not need gimmicks. You need a solid foundation.",
    ],
    sections: [
      {
        id: "pillars",
        title: "The 4 pillars of SEO (simple and practical)",
        kind: "numbered-list",
        items: [
          "Technical foundations (crawlable, indexable, reliable)",
          "On-page clarity (intent match)",
          "Content that earns demand",
          "Authority + trust signals",
        ],
      },
      {
        id: "technical",
        title: "1) Technical foundations (crawlable, indexable, reliable)",
        kind: "bulleted-list",
        intro:
          "If search engines cannot reliably access your pages, nothing else matters. Basics to ensure:",
        items: [
          "Your pages can be crawled (no accidental blocks)",
          "Important pages are indexable",
          "The site loads reliably on mobile",
          "There are no obvious technical errors (broken pages, endless redirects)",
          "Owner-friendly check: Search your brand name on Google. Can you find your site pages easily? If not, investigate indexing and visibility.",
        ],
      },
      {
        id: "on-page",
        title: "2) On-page clarity (intent match)",
        kind: "bulleted-list",
        intro: "Every page should have a job. A strong page:",
        items: [
          "targets one primary topic or intent",
          "answers the key questions a searcher has",
          "makes it easy to take the next step",
          "Examples of high-intent pages: service + city pages, pricing or cost pages, comparison pages, and how it works pages.",
        ],
      },
      {
        id: "content",
        title: "3) Content that earns demand",
        kind: "bulleted-list",
        intro: "Content is not blog for blogging's sake. Good content:",
        items: [
          "answers real questions your customers ask",
          "helps them decide",
          "demonstrates credibility (proof, examples, clarity)",
          "Low-effort, high-ROI content ideas: FAQs, case studies, process pages, and pricing guidance.",
        ],
      },
      {
        id: "authority",
        title: "4) Authority + trust signals",
        kind: "bulleted-list",
        intro: "Search engines and humans both look for trust. For local businesses, trust often comes from:",
        items: [
          "Google Business Profile quality",
          "Reviews volume + recency",
          "Consistent business info (name/address/phone)",
          "Mentions on other sites (local directories, partners, press)",
        ],
      },
      {
        id: "keywords",
        title: "Keyword research without the overwhelm",
        kind: "bulleted-list",
        intro: "You do not need hundreds of keywords. You need the right ones. Start by listing:",
        items: [
          "your core services",
          "your service areas (if relevant)",
          "the problems you solve",
          "Then map them into intent buckets: service intent, cost intent, proof intent, and comparison intent.",
          "Each bucket usually becomes one strong page, not ten thin pages.",
        ],
      },
      {
        id: "structure",
        title: "Site structure that helps you win",
        kind: "bulleted-list",
        intro: "A strong structure often includes:",
        items: [
          "1 clear Home page (positioning + navigation)",
          "1 page per core service (with proof and FAQs)",
          "1 strong Contact / Booking page",
          "Case studies or examples (even short ones)",
          "A How it works page (process + expectations)",
        ],
      },
      {
        id: "mistakes",
        title: "Common SEO mistakes to avoid",
        kind: "bulleted-list",
        items: [
          "Publishing thin pages just to have content",
          "Creating dozens of near-duplicate location pages",
          "Ignoring titles and headings (or making them vague)",
          "Buying spammy backlinks",
          "Forgetting internal links (pages should connect logically)",
        ],
      },
      {
        id: "starter-plan",
        title: "A simple 30-day SEO starter plan",
        kind: "bulleted-list",
        items: [
          "Week 1: Fix fundamentals (indexing, broken pages, mobile issues)",
          "Week 2: Improve your top service page (clarity, proof, FAQs)",
          "Week 3: Create 1-2 high-intent pages (pricing + how it works)",
          "Week 4: Strengthen trust (reviews, Google Business Profile, consistent info)",
          "SEO rewards consistency, not hacks.",
        ],
      },
    ],
    nextSteps: [
      "Start with your highest-intent pages: your top service page, contact or booking, and one pricing guidance page.",
      "Tighten clarity, trust, and internal linking before you chase more content volume.",
      "Build momentum with consistent, practical improvements.",
    ],
    cta: {
      supportingLine:
        "We'll assess your SEO foundation and give you a prioritized plan: pages to build, fixes to make, and what to ignore.",
      primaryLabel: "Get a Free Site Audit",
      primaryHref: "/free-audit",
      secondaryLabel: "SEO & Visibility",
      secondaryHref: "/services/seo-visibility",
    },
  },
  "the-true-cost-of-a-slow-website": {
    slug: "the-true-cost-of-a-slow-website",
    title: "The True Cost of a Slow Website",
    bodyTitle: "The True Cost of a Slow Website",
    excerpt:
      "Calculate the revenue you are losing every day due to poor website performance and what to fix first.",
    description:
      "Calculate the revenue you are losing every day due to poor website performance and what to fix first.",
    category: "PERFORMANCE",
    date: "Dec 20, 2024",
    readTime: "5 min",
    image: slowWebsiteCostHero,
    heroAlt: "A performance chart showing decline and timing icons in Site Bloom's purple style.",
    lede: [
      "A slow website does not just feel bad. It quietly taxes every marketing channel you use: search, ads, referrals, even word of mouth.",
      "And because it is gradual, most business owners do not notice the cost until lead flow drops or ads get expensive.",
      "Here is a simple way to estimate what slowness is costing you and a practical plan to fix it.",
    ],
    sections: [
      {
        id: "channel-tax",
        title: "Slow is a tax on every channel",
        kind: "bulleted-list",
        items: [
          "Organic search: slow or unstable pages make it harder to earn and keep visibility.",
          "Paid ads: you pay for every click, then lose the conversion if the landing page is slow.",
          "Referrals and direct traffic: even warm visitors lose momentum when a site hesitates.",
          "Your team's time: slow sites create failed forms, it is broken messages, extra back-and-forth, and emergency fixes.",
        ],
      },
      {
        id: "cost-calculator",
        title: "A simple cost calculator (directional but useful)",
        kind: "numbered-list",
        intro: "You do not need perfect tracking. Use rough numbers:",
        items: [
          "Monthly sessions (from analytics, or estimate)",
          "Conversion rate (leads / sessions, even a guess)",
          "Value per lead (or average order value)",
          "Performance loss factor (a conservative 10-30% loss if your site feels slow)",
          "Estimated monthly loss: Monthly sessions x conversion rate x value per lead x loss factor",
          "This is not meant to be exact. It is meant to tell you if speed is a top-3 priority.",
        ],
      },
      {
        id: "highest-roi",
        title: "What to fix first (highest ROI)",
        kind: "numbered-list",
        intro: "Most speed work should start here:",
        items: [
          "Images: compress and resize, use modern formats where supported, and do not ship oversized photos to mobile.",
          "Scripts and plugins: remove what you do not need, delay what does not help conversions, and be ruthless with nice-to-have widgets.",
          "Fonts: reduce families and weights, and make sure fonts do not block rendering.",
          "Caching + delivery: use caching correctly and add a CDN (or configure the one you already have).",
          "Theme or build cleanup: if you are on a heavy theme or builder, deeper work may be needed.",
        ],
      },
      {
        id: "fast-enough",
        title: "What fast enough actually means",
        kind: "bulleted-list",
        intro: "A fast site is one where:",
        items: [
          "content appears quickly",
          "the layout does not jump around",
          "buttons feel instant",
          "the page is usable before everything is fully loaded",
          "The goal is real user experience, not chasing perfect lab scores.",
        ],
      },
    ],
    nextSteps: [
      "Pick two pages: your top Service page and your Contact or Booking page.",
      "Test them on your phone, on cellular.",
      "If they feel slow, treat speed work as a high-leverage fix, not a nice-to-have.",
    ],
    cta: {
      supportingLine:
        "We'll run a performance audit and give you a prioritized fix list: quick wins first, bigger lifts second.",
      primaryLabel: "Get a Free Site Audit",
      primaryHref: "/free-audit",
      secondaryLabel: "Speed Optimization",
      secondaryHref: "/services/speed-optimization",
    },
  },
  "conversion-rate-optimization-quick-wins": {
    slug: "conversion-rate-optimization-quick-wins",
    title: "Conversion Rate Optimization: Quick Wins",
    bodyTitle: "Conversion Rate Optimization: Quick Wins",
    excerpt:
      "Get more leads from the traffic you already have. These CRO quick wins reduce friction and make your site convert.",
    description:
      "Get more leads from the traffic you already have. These CRO quick wins reduce friction and make your site convert.",
    category: "GROWTH",
    date: "Dec 12, 2024",
    readTime: "7 min",
    image: croQuickWinsHero,
    heroAlt: "A conversion funnel illustration with checkmarks and upward arrows in Site Bloom's purple style.",
    lede: [
      "If you are getting traffic but not enough leads, you do not always need more visitors. You need a clearer path to action.",
      "Conversion Rate Optimization (CRO) is the practice of improving your site so a higher percentage of visitors become calls, bookings, or form submissions.",
      "And the best part: many CRO improvements are quick wins. They do not require a full redesign or months of experimentation.",
    ],
    sections: [
      {
        id: "remove-friction",
        title: "CRO is mostly removing friction",
        kind: "bulleted-list",
        intro: "Most visitors do not say no. They say not now. Friction looks like:",
        items: [
          "unclear messaging",
          "too many choices",
          "forms that are annoying on mobile",
          "not enough trust",
          "uncertainty about pricing or what happens next",
          "Your job is to reduce hesitation.",
        ],
      },
      {
        id: "headline",
        title: "1) Fix your headline (clarity beats clever)",
        kind: "bulleted-list",
        intro: "Your hero section should answer:",
        items: [
          "What do you do?",
          "Who is it for?",
          "What result do they get?",
          "Good example format: [Outcome] for [customer type] in [location] without [common pain].",
          "Then add a single primary CTA.",
        ],
      },
      {
        id: "one-action",
        title: "2) One page, one primary action",
        kind: "paragraphs",
        paragraphs: [
          "If a page has 4 competing CTAs, most people choose none.",
          "Fix: Pick one primary conversion goal per page and make secondary actions visually quieter.",
        ],
      },
      {
        id: "trust",
        title: "3) Add trust where people hesitate",
        kind: "bulleted-list",
        intro: "Most sites bury proof at the bottom. Fix that by bringing it closer to the decision point:",
        items: [
          "Add 2-3 testimonials near the top",
          "Include logos, certifications, guarantees, or as seen in if real",
          "Add a short What happens next section to reduce uncertainty",
        ],
      },
      {
        id: "forms",
        title: "4) Make forms easier (especially on mobile)",
        kind: "bulleted-list",
        intro: "Forms are where conversions go to die. Fix:",
        items: [
          "Remove unnecessary fields",
          "Use clear labels (not placeholder-only)",
          "Add confirmation states (success message)",
          "Consider offering scheduling or click-to-call for high-intent traffic",
        ],
      },
      {
        id: "decision-pages",
        title: "5) Improve your service pages (turn them into decision pages)",
        kind: "bulleted-list",
        intro: "A strong service page includes:",
        items: [
          "outcomes and benefits",
          "who it is for (and not for)",
          "process steps",
          "FAQs",
          "examples or case studies",
          "pricing guidance (even ranges)",
        ],
      },
      {
        id: "pricing-page",
        title: "6) Create one high-intent pricing page",
        kind: "bulleted-list",
        intro: "If you cannot publish exact prices, publish:",
        items: [
          "typical ranges",
          "what affects cost",
          "how you quote",
          "a starting point",
        ],
      },
      {
        id: "cta-copy",
        title: "7) Use better CTAs (copy matters)",
        kind: "bulleted-list",
        intro: "Submit is weak. Better CTAs are specific:",
        items: [
          "Get a Free Audit",
          "Request a Quote",
          "See Pricing",
          "Book a Call",
          "Match CTA copy to what the visitor actually wants.",
        ],
      },
      {
        id: "measure",
        title: "How to measure without overcomplicating it",
        kind: "bulleted-list",
        intro: "You do not need fancy dashboards to start. Track:",
        items: [
          "form submissions",
          "calls (if possible)",
          "booked meetings",
          "key page visits (Service + Contact)",
          "Make one change at a time and measure for 2-4 weeks.",
        ],
      },
    ],
    nextSteps: [
      "Start with your Home page hero + CTA.",
      "Then improve your top Service page structure.",
      "Then tighten your Contact or Booking flow.",
    ],
    cta: {
      supportingLine:
        "We'll identify your top conversion blockers and set up tracking so you can measure improvements.",
      primaryLabel: "Get a Free Site Audit",
      primaryHref: "/free-audit",
      secondaryLabel: "Analytics",
      secondaryHref: "/services/analytics",
    },
  },
};

export function getBlogPost(slug: string) {
  return blogPostsBySlug[slug];
}
