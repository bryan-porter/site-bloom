import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiNextdotjs, SiVite, SiPostgresql, SiDocker, SiGithub, SiVercel, SiPython, SiGo } from "react-icons/si";

const tools = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vite", icon: SiVite },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "GitHub", icon: SiGithub },
  { name: "Vercel", icon: SiVercel },
  { name: "Python", icon: SiPython },
  { name: "Go", icon: SiGo },
];

export function LogoMarquee() {
  return (
    <section 
      className="py-12 bg-[#9333EA] overflow-hidden"
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
          {[...tools, ...tools, ...tools].map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors cursor-default"
              data-testid={`logo-tool-${index}`}
            >
              <tool.icon className="w-6 h-6" />
              <span 
                className="text-lg tracking-wider"
                style={{ fontFamily: "'VT323', monospace" }}
              >
                {tool.name.toUpperCase()}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
