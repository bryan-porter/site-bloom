import { motion } from "framer-motion";
import { Paintbrush, Gauge, Code, Smartphone, ShieldCheck, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { useState } from "react";

const services = [
  {
    id: "redesign",
    title: "Full-Site Redesign",
    description: "From wireframe to launch. We tear down what's broken and rebuild your site with modern design, clear navigation, and conversion-focused layouts.",
    icon: Paintbrush,
  },
  {
    id: "speed",
    title: "Speed Optimization",
    description: "Slow pages kill sales. We audit every bottleneck and deliver blazing-fast load times that keep visitors engaged and search engines happy.",
    icon: Gauge,
  },
  {
    id: "development",
    title: "Custom Development",
    description: "Need something beyond templates? We build custom features, integrations, and functionality tailored to how your business actually works.",
    icon: Code,
  },
  {
    id: "mobile",
    title: "Mobile Overhaul",
    description: "Over half your traffic is mobile. We make sure every tap, scroll, and checkout feels effortless on any screen size.",
    icon: Smartphone,
  },
  {
    id: "seo",
    title: "SEO & Visibility",
    description: "Beautiful sites that nobody finds are useless. We bake in technical SEO, structured data, and content strategy from day one.",
    icon: ShieldCheck,
  },
  {
    id: "analytics",
    title: "Analytics & Growth",
    description: "Data-driven decisions, not guesswork. We set up tracking, heatmaps, and dashboards so you know exactly what's working and what's not.",
    icon: BarChart3,
  },
];

export function AgentsGrid() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section 
        className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white"
        id="agents"
        data-testid="section-agents"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span 
              className="text-[#9333EA] text-sm uppercase tracking-wider mb-4 block" 
              style={{ fontFamily: "'VT323', monospace" }}
              data-testid="text-agents-label"
            >
              [02] SERVICES
            </span>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 tracking-tight"
              data-testid="text-agents-heading"
            >
              Everything your site needs to bloom
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto" data-testid="text-agents-subheading">
              We handle the full transformation. You handle the growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#9333EA]/30 hover:bg-purple-50/50 transition-all duration-300 cursor-pointer"
                data-testid={`card-agent-${service.id}`}
              >
                <div 
                  className="w-12 h-12 rounded-lg bg-[#9333EA]/10 flex items-center justify-center mb-5 group-hover:bg-[#9333EA]/20 transition-colors duration-300"
                  data-testid={`icon-agent-${service.id}`}
                >
                  <service.icon className="w-6 h-6 text-[#9333EA]" />
                </div>
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-3"
                  data-testid={`text-agent-title-${service.id}`}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-gray-500 leading-relaxed text-sm"
                  data-testid={`text-agent-description-${service.id}`}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 uppercase tracking-wider cursor-pointer"
              style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
              onClick={() => setIsDemoModalOpen(true)}
              data-testid="button-agents-cta"
            >
              START MY TRANSFORMATION
            </Button>
            <p className="text-sm text-gray-400 mt-3">No commitment. Let's talk about your site.</p>
          </motion.div>
        </div>
      </section>

      <BookDemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </>
  );
}
