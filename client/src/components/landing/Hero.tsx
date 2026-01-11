import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const candidates = [
  {
    id: 1,
    name: "Dean Wiegand",
    role: "Senior Engineer at Acme",
    description: "Dean Wiegand is currently a Senior Software Engineer at Acme.xyz, focusing on front-end development with Javascript and Vue-js...",
    avatar: "DW",
    match: "100%",
  },
  {
    id: 2,
    name: "Krystal Hahn",
    role: "Senior Engineer at Stark",
    description: "Krystal Hahn is currently a Software Engineer at Stark focusing on front-end development with JavaScript and Vue.js...",
    avatar: "KH",
    match: "95%",
  },
  {
    id: 3,
    name: "Wade Walter",
    role: "Software Engineer III at Vial",
    description: "Wade Walter is a Senior Software Engineer in San Francisco with skills in Python and Node.js...",
    avatar: "WW",
    tags: ["Development", "Agile", "Cloud"],
  },
];

function CandidateCard({
  id,
  name,
  role,
  description,
  avatar,
  match,
  tags,
  className,
  animationDelay,
}: {
  id: number;
  name: string;
  role: string;
  description?: string;
  avatar: string;
  match?: string;
  tags?: string[];
  className?: string;
  animationDelay?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 + id * 0.15 }}
      className={`absolute bg-[#1a1930]/90 backdrop-blur-xl rounded-xl border border-white/10 p-4 w-64 shadow-2xl ${className}`}
      style={{
        animation: `float 4s ease-in-out infinite`,
        animationDelay: animationDelay || "0s",
      }}
      data-testid={`card-candidate-${id}`}
    >
      <div className="flex items-start gap-3">
        <div 
          className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0"
          data-testid={`avatar-candidate-${id}`}
        >
          {avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="font-semibold text-white text-sm truncate" data-testid={`text-candidate-name-${id}`}>
              {name}
            </p>
            {match && (
              <span className="text-[#3AC8F0] text-xs font-medium flex-shrink-0">{match}</span>
            )}
          </div>
          <p className="text-white/50 text-xs" data-testid={`text-candidate-role-${id}`}>{role}</p>
        </div>
      </div>
      {description && (
        <p className="text-white/40 text-xs mt-3 line-clamp-3 leading-relaxed">
          {description}
        </p>
      )}
      {tags && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.map((tag, idx) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-white/5 text-white/60 text-[10px] rounded border border-white/10"
              data-testid={`badge-candidate-${id}-tag-${idx}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section 
      className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #06051B 0%, #1C1252 50%, #06051B 100%)",
      }}
      data-testid="section-hero"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, #FF5A30 0%, transparent 70%)" }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "radial-gradient(circle, #3AC8F0 0%, transparent 70%)" }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-[150px]"
          style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.a
          href="#agents"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white/80 text-sm font-medium mb-8 hover:bg-white/10 transition-colors cursor-pointer"
          data-testid="badge-hero-announcement"
        >
          <span className="px-2 py-0.5 bg-[#FF5A30] rounded text-white text-xs font-semibold">new</span>
          Try Juicebox Agents
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-6"
          data-testid="text-hero-headline"
        >
          Win the talent war.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed"
          data-testid="text-hero-subhead"
        >
          Juicebox is the <span className="text-white font-medium">AI Recruiting Platform</span> that understands who you're looking for.
          Level up your team with Search, CRM, and Agents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button 
            size="lg" 
            className="rounded-full bg-[#FF5A30] hover:bg-[#FF5A30]/90 border-none text-white px-8 shadow-[0_0_30px_rgba(255,90,48,0.4)]"
            data-testid="button-hero-try"
          >
            try for free
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full border-white/20 text-white hover:bg-white/5 px-8 backdrop-blur-sm"
            data-testid="button-hero-demo"
          >
            book a demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
          data-testid="container-hero-mockup"
        >
          <div className="bg-[#0D0C1D]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl">
            <div className="text-center mb-4">
              <p className="text-white/40 text-sm">try it out or scroll down</p>
            </div>

            <div className="relative mb-6">
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <span className="text-white/60 text-sm">Who are you looking for?</span>
                <div className="flex-1" />
                <div className="w-px h-6 bg-white/20 animate-pulse" />
              </div>
            </div>

            <div className="relative h-72 md:h-80" data-testid="container-candidate-cards">
              <CandidateCard
                {...candidates[0]}
                className="left-0 md:left-4 top-0"
                animationDelay="0s"
              />
              <CandidateCard
                {...candidates[1]}
                className="left-1/2 -translate-x-1/2 top-16 md:top-20 z-10"
                animationDelay="0.5s"
              />
              <CandidateCard
                {...candidates[2]}
                className="right-0 md:right-4 top-4"
                animationDelay="1s"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
