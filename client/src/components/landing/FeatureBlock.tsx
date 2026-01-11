import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BarChart3, Send } from "lucide-react";

const features = [
  {
    id: "search",
    label: "search",
    icon: Search,
    title: "AI-Powered Talent Search",
    description: "Search across 800M+ profiles with natural language. Our AI understands context, skills, experience, and cultural fit to surface the perfect candidates.",
    highlights: ["Natural language queries", "800M+ profiles", "Contextual matching"],
  },
  {
    id: "insights",
    label: "insights",
    icon: BarChart3,
    title: "Real-Time Market Insights",
    description: "Get instant access to compensation benchmarks, talent pool analytics, and competitive intelligence for any role or market.",
    highlights: ["Compensation data", "Market trends", "Competitive intel"],
  },
  {
    id: "engagement",
    label: "engagement",
    icon: Send,
    title: "Automated Outreach That Works",
    description: "Craft personalized sequences that feel human. Our AI writes messages that resonate and drive 3x higher response rates.",
    highlights: ["Personalized at scale", "3x response rates", "Smart sequencing"],
  },
];

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("search");
  const activeFeature = features.find((f) => f.id === activeTab) || features[0];

  return (
    <section 
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0D0C1D 0%, #1C1252 50%, #0D0C1D 100%)",
      }}
      id="features"
      data-testid="section-features"
    >
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
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
          <span className="text-[#FF5A30] text-sm font-medium uppercase tracking-wider mb-4 block" data-testid="text-features-label">
            [01] features
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            data-testid="text-features-heading"
          >
            How it works: Humans + Agents
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex gap-2 mb-12 p-1 bg-white/5 rounded-full w-fit border border-white/10"
        >
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === feature.id
                  ? "bg-white text-[#0D0C1D]"
                  : "text-white/60 hover:text-white"
              }`}
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF5A30] to-orange-600 flex items-center justify-center">
                  <activeFeature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 
                className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
                data-testid={`text-feature-title-${activeTab}`}
              >
                {activeFeature.title}
              </h3>
              <p 
                className="text-lg text-white/60 mb-8 leading-relaxed"
                data-testid={`text-feature-description-${activeTab}`}
              >
                {activeFeature.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {activeFeature.highlights.map((highlight, idx) => (
                  <span
                    key={highlight}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm"
                    data-testid={`badge-feature-highlight-${idx}`}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div 
                className="aspect-[4/3] bg-[#1a1930]/50 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden"
                data-testid={`container-feature-visual-${activeTab}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF5A30]/5 to-[#3AC8F0]/5" />
                <div className="relative z-10 p-8">
                  <div className="w-full max-w-sm mx-auto">
                    <div className="bg-[#0D0C1D]/80 rounded-xl border border-white/10 p-4 mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-white/10 rounded w-3/4" />
                        <div className="h-3 bg-white/10 rounded w-1/2" />
                        <div className="h-3 bg-[#FF5A30]/30 rounded w-2/3" />
                      </div>
                    </div>
                    <div className="bg-[#0D0C1D]/60 rounded-xl border border-white/10 p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                        <div className="flex-1">
                          <div className="h-2.5 bg-white/20 rounded w-24 mb-1" />
                          <div className="h-2 bg-white/10 rounded w-16" />
                        </div>
                        <span className="text-[#3AC8F0] text-xs">98%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
