import { motion } from "framer-motion";
import { Button } from "./Button";

interface FeatureBlockProps {
  title: string;
  description: string;
  ctaText: string;
  imagePosition?: "left" | "right";
  index: number;
}

export function FeatureBlock({
  title,
  description,
  ctaText,
  imagePosition = "right",
  index,
}: FeatureBlockProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-16`}
    >
      <div className="flex-1 max-w-xl">
        <motion.div
          initial={{ opacity: 0, x: isImageLeft ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-[#FF5A30] font-semibold text-sm uppercase tracking-wider mb-3">
            Feature {index + 1}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {title}
          </h3>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            {description}
          </p>
          <Button variant="primary" size="md" data-testid={`button-feature-cta-${index}`}>
            {ctaText}
          </Button>
        </motion.div>
      </div>

      <div className="flex-1 w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF5A30]/5 to-orange-100/20"></div>
          <div className="relative z-10">
            <div className="w-32 h-32 rounded-2xl bg-white shadow-lg flex items-center justify-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FF5A30] to-orange-400 opacity-80"></div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FF5A30]/10 rounded-full blur-2xl"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const features = [
  {
    title: "Search & CRM",
    description: "Talent discovery across 800M+ profiles. Find the perfect candidates with AI-powered search that understands context, skills, and cultural fit.",
    ctaText: "Try AI Talent Search",
  },
  {
    title: "Insights",
    description: "Real-time insights for every talent pool. Understand market trends, compensation benchmarks, and competitive intelligence at a glance.",
    ctaText: "Try AI Talent Insights",
  },
  {
    title: "Engagement",
    description: "Boost replies with automated outreach. Personalized sequences that feel human and drive 3x higher response rates.",
    ctaText: "Try AI Sequencing",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" id="product">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Everything you need to recruit smarter
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our AI-powered platform gives you the tools to find, engage, and hire top talent faster than ever.
          </p>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <FeatureBlock
              key={feature.title}
              {...feature}
              imagePosition={index % 2 === 0 ? "right" : "left"}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
