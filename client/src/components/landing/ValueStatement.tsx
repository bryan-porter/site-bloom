import { motion } from "framer-motion";

export function ValueStatement() {
  return (
    <section 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
      data-testid="section-value-statement"
    >
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight tracking-tight text-center"
          data-testid="text-value-statement"
        >
          <span className="text-gray-400">Stop losing customers to bad design.</span>{" "}
          <span className="text-gray-900">We rebuild websites for{" "}</span>
          <span className="text-[#9333EA]">speed</span>
          <span className="text-gray-900">, </span>
          <span className="text-[#9333EA]">clarity</span>
          <span className="text-gray-900">, and </span>
          <span className="text-[#9333EA]">conversions</span>
          <span className="text-gray-900">.</span>
        </motion.p>
      </div>
    </section>
  );
}
