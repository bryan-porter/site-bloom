import { motion } from "framer-motion";
import { Search, Brain, Send } from "lucide-react";

const agents = [
  {
    title: "AI Search",
    description: "Search on autopilot. Let AI find candidates while you focus on what matters.",
    icon: Search,
  },
  {
    title: "Agentic Learning",
    description: "Gets better with every hire. Our AI learns your preferences and improves over time.",
    icon: Brain,
  },
  {
    title: "Automated Outreach",
    description: "Outreach that feels personal. Craft messages that resonate and get responses.",
    icon: Send,
  },
];

export function AgentsGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Deploy AI Agents for every recruiter
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Autonomous agents that work around the clock to find and engage your next great hire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              data-testid={`card-agent-${index}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF5A30] to-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <agent.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {agent.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {agent.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
