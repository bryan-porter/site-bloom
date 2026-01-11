import { motion } from "framer-motion";

const integrations = [
  { id: "greenhouse", name: "Greenhouse" },
  { id: "workday", name: "Workday" },
  { id: "lever", name: "Lever" },
  { id: "gmail", name: "Gmail" },
  { id: "slack", name: "Slack" },
  { id: "linkedin", name: "LinkedIn" },
  { id: "outlook", name: "Outlook" },
  { id: "ashby", name: "Ashby" },
];

export function SocialProof() {
  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #06051B 0%, #0D0C1D 100%)",
      }}
      data-testid="section-social-proof"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            data-testid="text-integrations-heading"
          >
            Integrates with your stack
          </h2>
          <p className="text-white/50 text-lg" data-testid="text-integrations-subheading">
            Connect seamlessly with the tools you already use
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white/40 hover:text-white/80 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-default"
              data-testid={`logo-integration-${integration.id}`}
            >
              <span className="font-semibold text-sm tracking-tight">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
