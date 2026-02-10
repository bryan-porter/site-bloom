import { motion } from "framer-motion";

const techStack = [
  { id: "react", name: "REACT" },
  { id: "nextjs", name: "NEXT.JS" },
  { id: "shopify", name: "SHOPIFY" },
  { id: "wordpress", name: "WORDPRESS" },
  { id: "webflow", name: "WEBFLOW" },
  { id: "squarespace", name: "SQUARESPACE" },
  { id: "woocommerce", name: "WOOCOMMERCE" },
  { id: "stripe", name: "STRIPE" },
];

export function SocialProof() {
  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#9333EA]"
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
            className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight"
            data-testid="text-integrations-heading"
          >
            We work with every platform
          </h2>
          <p className="text-white/70 text-lg" data-testid="text-integrations-subheading">
            Whatever you're built on, we make it better
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
        >
          {techStack.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-md text-white/70 hover:text-white hover:border-white/40 hover:bg-white/20 transition-all duration-300 cursor-default"
              style={{ fontFamily: "'VT323', monospace" }}
              data-testid={`logo-integration-${platform.id}`}
            >
              <span className="text-sm tracking-wider">
                {platform.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
