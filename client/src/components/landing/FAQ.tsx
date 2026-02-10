import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";

const faqs = [
  {
    id: "who-is-this-for",
    question: "Who is Sitebloom for?",
    answer: "Any business owner who knows their website isn't pulling its weight. Whether you're a local shop, e-commerce brand, or professional service firm, if your site is slow, outdated, or not converting, we're built for you.",
  },
  {
    id: "how-long",
    question: "How long does a transformation take?",
    answer: "Most projects launch in 2-4 weeks. We move fast without cutting corners. You'll see initial designs within days, not months.",
  },
  {
    id: "what-platforms",
    question: "Do you work with my current platform?",
    answer: "Yes. We work across all major platforms, including Shopify, WordPress, Webflow, Squarespace, WooCommerce, and custom-built sites. If it's on the web, we can fix it.",
  },
  {
    id: "how-much",
    question: "What does it cost?",
    answer: "Every project is scoped individually based on complexity. We start with a free audit so you know exactly what needs fixing before committing a dollar. No surprises, no hidden fees.",
  },
  {
    id: "what-if-happy",
    question: "What if I'm happy with my current design?",
    answer: "Great design is just one piece. If your site looks good but loads slowly, ranks poorly, or doesn't convert, we can focus purely on performance, SEO, and conversion optimization without touching the design.",
  },
  {
    id: "ongoing-support",
    question: "Do you offer ongoing support?",
    answer: "Absolutely. We offer monthly growth plans that include performance monitoring, content updates, A/B testing, and ongoing optimization. Your site keeps improving long after launch.",
  },
];

function FAQItem({
  id,
  question,
  answer,
  isOpen,
  onClick,
}: {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-white/20 last:border-b-0">
      <button
        className="w-full py-5 flex items-center justify-between text-left group cursor-pointer"
        onClick={onClick}
        data-testid={`button-faq-${id}`}
        aria-expanded={isOpen}
      >
        <span 
          className="text-lg font-semibold text-white group-hover:text-white/80 transition-colors pr-4"
          data-testid={`text-faq-question-${id}`}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p 
              className="pb-5 text-white/70 leading-relaxed" 
              data-testid={`text-faq-answer-${id}`}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section 
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[#9333EA]"
        id="faq"
        data-testid="section-faq"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <span 
                className="text-white/70 text-sm uppercase tracking-wider mb-4 block"
                style={{ fontFamily: "'VT323', monospace" }}
                data-testid="text-faq-label"
              >
                [04] FAQ
              </span>
              <h2 
                className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight"
                data-testid="text-faq-heading"
              >
                Got questions?<br />We've got answers.
              </h2>
              <p 
                className="text-lg text-white/70 mb-8 leading-relaxed"
                data-testid="text-faq-subheading"
              >
                Still not sure? Let's talk. We'll audit your site for free and show you exactly what's holding it back.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-[#9333EA] hover:bg-white/90 px-8 uppercase tracking-wider cursor-pointer"
                style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
                onClick={() => setIsDemoModalOpen(true)}
                data-testid="button-faq-demo"
              >
                FIX MY WEBSITE
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/20"
              data-testid="container-faq-list"
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  id={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <BookDemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </>
  );
}
