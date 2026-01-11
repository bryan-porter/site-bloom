import { motion } from "framer-motion";

const companies = [
  "Coinbase", "Stripe", "Figma", "Linear", "Vercel", 
  "Notion", "Slack", "Asana", "Dropbox", "Plaid",
];

export function LogoMarquee() {
  return (
    <section 
      className="py-12 bg-[#06051B] border-y border-white/5 overflow-hidden"
      data-testid="section-logo-marquee"
    >
      <div className="relative">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-16 items-center whitespace-nowrap"
        >
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="text-white/30 hover:text-white/60 transition-colors text-xl font-semibold tracking-tight cursor-default"
              data-testid={`logo-company-${index}`}
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
