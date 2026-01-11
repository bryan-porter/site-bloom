import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const candidates = [
  {
    id: 1,
    name: "Dean Wiegand",
    role: "Senior Engineer",
    tags: ["Python", "React"],
    avatar: "DW",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Staff Engineer",
    tags: ["TypeScript", "Node.js"],
    avatar: "SC",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Principal Engineer",
    tags: ["Go", "Kubernetes"],
    avatar: "MJ",
  },
];

function CandidateCard({
  id,
  name,
  role,
  tags,
  avatar,
  className,
  animationDelay,
}: {
  id: number;
  name: string;
  role: string;
  tags: string[];
  avatar: string;
  className?: string;
  animationDelay?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className={`absolute bg-white rounded-2xl shadow-xl p-4 w-56 ${className}`}
      style={{
        animation: `float 3s ease-in-out infinite`,
        animationDelay: animationDelay || "0s",
      }}
      data-testid={`card-candidate-${id}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div 
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF5A30] to-orange-400 flex items-center justify-center text-white font-semibold text-sm"
          data-testid={`avatar-candidate-${id}`}
        >
          {avatar}
        </div>
        <div>
          <p className="font-semibold text-slate-900 text-sm" data-testid={`text-candidate-name-${id}`}>{name}</p>
          <p className="text-slate-500 text-xs" data-testid={`text-candidate-role-${id}`}>{role}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag, tagIndex) => (
          <span
            key={tag}
            className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium"
            data-testid={`badge-candidate-${id}-tag-${tagIndex}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden" data-testid="section-hero">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-sm font-medium mb-8"
          data-testid="badge-hero-announcement"
        >
          <span className="w-2 h-2 bg-[#FF5A30] rounded-full"></span>
          New: Try Juicebox Agents
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
          data-testid="text-hero-headline"
        >
          Win the talent war.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          data-testid="text-hero-subhead"
        >
          Juicebox is the AI Recruiting Platform that understands who you're looking for.
          Level up your team with Search, CRM, and Agents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button size="lg" className="rounded-full bg-[#FF5A30] border-[#E54D26]" data-testid="button-hero-try">
            Try for Free
          </Button>
          <Button size="lg" variant="outline" className="rounded-full" data-testid="button-hero-demo">
            Book a Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
          data-testid="container-hero-mockup"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="text-slate-400 text-sm">Juicebox AI Search</span>
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Who are you looking for? e.g. Software Engineers in SF..."
                  className="flex-1 bg-transparent text-slate-900 placeholder:text-slate-400 outline-none text-base"
                  data-testid="input-search"
                />
                <Button size="sm" className="rounded-full bg-[#FF5A30] border-[#E54D26]" data-testid="button-search">
                  Search
                </Button>
              </div>
            </div>

            <div className="relative h-48 md:h-64 mt-8" data-testid="container-candidate-cards">
              <CandidateCard
                {...candidates[0]}
                className="left-4 md:left-8 top-0"
                animationDelay="0s"
              />
              <CandidateCard
                {...candidates[1]}
                className="left-1/2 -translate-x-1/2 top-8 md:top-12"
                animationDelay="0.5s"
              />
              <CandidateCard
                {...candidates[2]}
                className="right-4 md:right-8 top-0"
                animationDelay="1s"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
