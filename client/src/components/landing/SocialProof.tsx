import { motion } from "framer-motion";

const integrations = [
  "Greenhouse",
  "Workday",
  "Gmail",
  "Lever",
  "Slack",
  "LinkedIn",
];

export function ValueProp() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-xl md:text-2xl text-slate-700 leading-relaxed font-medium"
        >
          Recruiting is being rewritten. AI-led, precision-driven, and built for teams that demand{" "}
          <span className="text-[#FF5A30]">speed</span> and{" "}
          <span className="text-[#FF5A30]">results</span>.
        </motion.p>
      </div>
    </section>
  );
}

export function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Integrates with tools you use
          </h2>
          <p className="text-slate-600 text-lg">
            Seamlessly connect with your existing recruiting stack
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-6 py-3 bg-slate-100 rounded-xl grayscale hover:grayscale-0 transition-all duration-300 hover:bg-slate-50"
              data-testid={`logo-integration-${integration.toLowerCase()}`}
            >
              <span className="text-slate-600 font-semibold text-lg tracking-tight">
                [{integration}]
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
