import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    id: "who-can-use",
    question: "Who can use Juicebox?",
    answer: "Juicebox is designed for recruiting teams of all sizes, from startups to enterprise companies. Whether you're a solo recruiter or a large talent acquisition team, our platform scales to meet your needs.",
  },
  {
    id: "free-trial",
    question: "Can I try for free?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. Start finding amazing candidates today.",
  },
  {
    id: "global-data",
    question: "Global data coverage?",
    answer: "Absolutely. Our database includes over 800 million professional profiles from around the world. We have strong coverage in North America, Europe, Asia, and beyond.",
  },
  {
    id: "ai-learning",
    question: "How does the AI learn my preferences?",
    answer: "Our AI analyzes your hiring patterns, the candidates you engage with, and your feedback to continuously improve recommendations. The more you use Juicebox, the smarter it gets.",
  },
  {
    id: "integrations",
    question: "What integrations do you support?",
    answer: "We integrate with major ATS platforms like Greenhouse, Lever, Workday, and Ashby, as well as communication tools like Gmail, Outlook, and Slack. We're always adding new integrations.",
  },
  {
    id: "security",
    question: "Is my data secure?",
    answer: "Yes, security is our top priority. We're SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit.",
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
        className="w-full py-5 flex items-center justify-between text-left group"
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

  return (
    <section 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#9333EA]"
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
              Your questions,<br />answered
            </h2>
            <p 
              className="text-lg text-white/70 mb-8 leading-relaxed"
              data-testid="text-faq-subheading"
            >
              Can't find what you're looking for? Our team is here to help you get started.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#9333EA] hover:bg-white/90 px-8 uppercase tracking-wider"
              style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
              data-testid="button-faq-demo"
            >
              BOOK A DEMO
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
  );
}
