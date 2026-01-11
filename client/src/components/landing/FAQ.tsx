import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./Button";

const faqs = [
  {
    question: "Who can use Juicebox?",
    answer: "Juicebox is designed for recruiting teams of all sizes, from startups to enterprise companies. Whether you're a solo recruiter or a large talent acquisition team, our platform scales to meet your needs.",
  },
  {
    question: "Can I try for free?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. Start finding amazing candidates today.",
  },
  {
    question: "Global data coverage?",
    answer: "Absolutely. Our database includes over 800 million professional profiles from around the world. We have strong coverage in North America, Europe, Asia, and beyond.",
  },
  {
    question: "How does the AI learn my preferences?",
    answer: "Our AI analyzes your hiring patterns, the candidates you engage with, and your feedback to continuously improve recommendations. The more you use Juicebox, the smarter it gets.",
  },
  {
    question: "What integrations do you support?",
    answer: "We integrate with major ATS platforms like Greenhouse, Lever, and Workday, as well as communication tools like Gmail, Outlook, and Slack. We're always adding new integrations.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        className="w-full py-5 flex items-center justify-between text-left group"
        onClick={onClick}
        data-testid={`button-faq-${index}`}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-slate-900 group-hover:text-[#FF5A30] transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-[#FF5A30] transition-colors" />
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
            <p className="pb-5 text-slate-600 leading-relaxed" data-testid={`text-faq-answer-${index}`}>
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Your questions,<br />answered
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Can't find what you're looking for? Our team is here to help you get started.
            </p>
            <Button variant="primary" size="lg" data-testid="button-faq-demo">
              Book a Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-6 md:p-8"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
