import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paintbrush, Gauge, LineChart, Wrench, Zap, TrendingUp } from "lucide-react";
import redesignImage from "@assets/what-we-do/feature-redesign.png";
import performanceImage from "@assets/what-we-do/feature-performance.png";
import growthImage from "@assets/what-we-do/feature-growth.png";

const valueCards = [
  { icon: Wrench, label: "FIX IT", desc: "Modern design & UX" },
  { icon: Zap, label: "SPEED IT UP", desc: "Blazing performance" },
  { icon: TrendingUp, label: "WATCH IT GROW", desc: "Conversion & SEO" },
];

const features = [
  {
    id: "redesign",
    label: "REDESIGN",
    icon: Paintbrush,
    image: redesignImage,
    title: "Modern Redesign That Converts",
    description: "We strip out the clutter and rebuild your site with clean layouts, sharp visuals, and user flows engineered to turn visitors into customers.",
    highlights: ["Conversion-focused layouts", "Mobile-first design", "Brand-aligned visuals"],
  },
  {
    id: "performance",
    label: "PERFORMANCE",
    icon: Gauge,
    image: performanceImage,
    title: "Speed That Keeps Visitors Around",
    description: "Slow sites bleed traffic. We optimize every asset, script, and server call to deliver sub-2-second load times that search engines reward.",
    highlights: ["Core Web Vitals pass", "Sub-2s load times", "SEO boost"],
  },
  {
    id: "growth",
    label: "GROWTH",
    icon: LineChart,
    image: growthImage,
    title: "Built-In Growth Engine",
    description: "Every page is wired for results. From strategic CTAs to analytics-driven iteration, your site becomes a 24/7 revenue machine.",
    highlights: ["A/B tested CTAs", "Analytics dashboard", "Ongoing optimization"],
  },
];

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("redesign");
  const activeFeature = features.find((f) => f.id === activeTab) || features[0];

  return (
    <section 
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#9333EA]"
      id="features"
      data-testid="section-features"
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="grid-pattern" patternUnits="userSpaceOnUse" width="40" height="40">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span 
            className="text-white/70 text-sm uppercase tracking-wider mb-4 block" 
            style={{ fontFamily: "'VT323', monospace" }}
            data-testid="text-features-label"
          >
            [01] WHAT WE DO
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight"
            data-testid="text-features-heading"
          >
            Fix it. Speed it up. Watch it grow.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex gap-2 mb-12 p-1 bg-white/10 rounded-lg w-fit border border-white/20"
        >
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`px-6 py-2.5 rounded-md text-sm tracking-wider transition-all ${
                activeTab === feature.id
                  ? "bg-white text-[#9333EA]"
                  : "text-white/70 hover:text-white"
              }`}
              style={{ fontFamily: "'VT323', monospace", fontSize: "14px" }}
              data-testid={`button-feature-tab-${feature.id}`}
            >
              {feature.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <activeFeature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 
                className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight"
                data-testid={`text-feature-title-${activeTab}`}
              >
                {activeFeature.title}
              </h3>
              <p 
                className="text-lg text-white/70 mb-8 leading-relaxed"
                data-testid={`text-feature-description-${activeTab}`}
              >
                {activeFeature.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {activeFeature.highlights.map((highlight, idx) => (
                  <span
                    key={highlight}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white/90 text-sm"
                    style={{ fontFamily: "'VT323', monospace" }}
                    data-testid={`badge-feature-highlight-${idx}`}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div 
                className="aspect-[4/3] bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden"
                data-testid={`container-feature-visual-${activeTab}`}
              >
                <img
                  src={activeFeature.image}
                  alt={`${activeFeature.label.toLowerCase()} feature preview`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#9333EA]/25 via-transparent to-white/10 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
