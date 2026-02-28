import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiNextdotjs, SiVite, SiPostgresql, SiDocker, SiGithub, SiVercel, SiPython, SiGo } from "react-icons/si";

const tools = [
  { name: "React", icon: SiReact, url: "https://react.dev" },
  { name: "TypeScript", icon: SiTypescript, url: "https://www.typescriptlang.org" },
  { name: "Node.js", icon: SiNodedotjs, url: "https://nodejs.org" },
  { name: "Tailwind", icon: SiTailwindcss, url: "https://tailwindcss.com" },
  { name: "Next.js", icon: SiNextdotjs, url: "https://nextjs.org" },
  { name: "Vite", icon: SiVite, url: "https://vite.dev" },
  { name: "PostgreSQL", icon: SiPostgresql, url: "https://www.postgresql.org" },
  { name: "Docker", icon: SiDocker, url: "https://www.docker.com" },
  { name: "GitHub", icon: SiGithub, url: "https://github.com" },
  { name: "Vercel", icon: SiVercel, url: "https://vercel.com" },
  { name: "Python", icon: SiPython, url: "https://www.python.org" },
  { name: "Go", icon: SiGo, url: "https://go.dev" },
];

export function LogoMarquee() {
  return (
    <section 
      className="py-12 bg-[#9333EA] overflow-hidden"
      data-testid="section-logo-marquee"
    >
      <p 
        className="text-center text-white/60 text-sm uppercase tracking-wider mb-6"
      >
        BUILT WITH THE TOOLS THAT POWER THE MODERN WEB
      </p>
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
            <a
              key={`${tool.name}-${index}`}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${tool.name} website`}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors cursor-pointer"
              data-testid={`logo-tool-${index}`}
            >
              <tool.icon className="w-6 h-6" />
              <span className="text-lg tracking-wider">
                {tool.name.toUpperCase()}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
