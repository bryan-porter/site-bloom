import { motion } from "framer-motion";
import { Zap, Brain, MessageSquare, Target, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const agents = [
  {
    id: "search-agent",
    title: "Search Agent",
    description: "Autonomous candidate sourcing that runs 24/7. Set your criteria and let AI find perfect matches while you sleep.",
    icon: Zap,
  },
  {
    id: "learning-agent",
    title: "Learning Agent",
    description: "Gets smarter with every hire. Learns your preferences, team dynamics, and what makes candidates successful.",
    icon: Brain,
  },
  {
    id: "outreach-agent",
    title: "Outreach Agent",
    description: "Personalized messaging at scale. Crafts compelling sequences that feel human and drive 3x response rates.",
    icon: MessageSquare,
  },
  {
    id: "matching-agent",
    title: "Matching Agent",
    description: "Beyond keyword matching. Understands context, career trajectories, and cultural fit for precise recommendations.",
    icon: Target,
  },
  {
    id: "scheduling-agent",
    title: "Scheduling Agent",
    description: "Eliminates scheduling friction. Coordinates interviews across time zones with smart calendar optimization.",
    icon: Clock,
  },
  {
    id: "analytics-agent",
    title: "Analytics Agent",
    description: "Real-time pipeline insights. Track conversion rates, identify bottlenecks, and optimize your hiring funnel.",
    icon: TrendingUp,
  },
];

export function AgentsGrid() {
  return (
    <section 
      className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white"
      id="agents"
      data-testid="section-agents"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span 
            className="text-[#9333EA] text-sm uppercase tracking-wider mb-4 block" 
            style={{ fontFamily: "'VT323', monospace" }}
            data-testid="text-agents-label"
          >
            [02] AGENTS
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 tracking-tight"
            data-testid="text-agents-heading"
          >
            Deploy AI Agents for every task
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto" data-testid="text-agents-subheading">
            Autonomous agents that work around the clock to find, engage, and hire your next great team member.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#9333EA]/30 hover:bg-purple-50/50 transition-all duration-300"
              data-testid={`card-agent-${agent.id}`}
            >
              <div 
                className="w-12 h-12 rounded-lg bg-[#9333EA]/10 flex items-center justify-center mb-5 group-hover:bg-[#9333EA]/20 transition-colors duration-300"
                data-testid={`icon-agent-${agent.id}`}
              >
                <agent.icon className="w-6 h-6 text-[#9333EA]" />
              </div>
              <h3 
                className="text-xl font-semibold text-gray-900 mb-3"
                data-testid={`text-agent-title-${agent.id}`}
              >
                {agent.title}
              </h3>
              <p 
                className="text-gray-500 leading-relaxed text-sm"
                data-testid={`text-agent-description-${agent.id}`}
              >
                {agent.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 uppercase tracking-wider"
            style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
            data-testid="button-agents-cta"
          >
            TRY AGENTS FOR FREE
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
