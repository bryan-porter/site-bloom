import { motion } from "framer-motion";

export function ValueStatement() {
  return (
    <section 
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #06051B 0%, #0D0C1D 100%)",
      }}
      data-testid="section-value-statement"
    >
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-center"
          data-testid="text-value-statement"
        >
          <span className="text-white/40">Recruiting is being rewritten.</span>{" "}
          <span className="text-white">AI-led, precision-driven, and built for teams that demand{" "}</span>
          <span className="text-[#FF5A30]">speed</span>
          <span className="text-white"> and </span>
          <span className="text-[#FF5A30]">results</span>
          <span className="text-white">.</span>
        </motion.p>
      </div>
    </section>
  );
}
