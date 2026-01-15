import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

function AsciiDotGrid() {
  const dots = useMemo(() => {
    const result = [];
    const cols = 80;
    const rows = 40;
    const centerX = cols / 2;
    const centerY = rows / 2;
    const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
    
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const distFromCenter = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
        );
        const normalizedDist = distFromCenter / maxDist;
        const opacity = Math.max(0, normalizedDist * 0.8);
        const size = 2 + normalizedDist * 2;
        
        if (normalizedDist > 0.3) {
          result.push({
            x: (x / cols) * 100,
            y: (y / rows) * 100,
            opacity,
            size,
            key: `${x}-${y}`,
          });
        }
      }
    }
    return result;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid slice"
      >
        {dots.map((dot) => (
          <circle
            key={dot.key}
            cx={dot.x}
            cy={dot.y}
            r={dot.size * 0.08}
            fill={`rgba(147, 51, 234, ${dot.opacity})`}
          />
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section 
      className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
      data-testid="section-hero"
    >
      <AsciiDotGrid />

      <div className="relative max-w-4xl mx-auto text-center pt-16">
        <motion.a
          href="#agents"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200 text-gray-600 text-sm mb-8 hover:bg-gray-200 transition-colors cursor-pointer"
          style={{ fontFamily: "'VT323', monospace", fontSize: "14px", letterSpacing: "0.05em" }}
          data-testid="badge-hero-announcement"
        >
          <span className="px-2 py-0.5 bg-gray-900 rounded text-white text-xs" style={{ fontFamily: "'VT323', monospace" }}>NEW</span>
          TRY JUICEBOX AGENTS &gt;
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 tracking-tight leading-[1.1] mb-6"
          data-testid="text-hero-headline"
        >
          Win the talent war.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          data-testid="text-hero-subhead"
        >
          Juicebox is the <span className="text-gray-900 font-medium">AI Recruiting Platform</span> that understands who you're looking for. Level up your team with Search, CRM, and Agents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 uppercase tracking-wider"
            style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
            data-testid="button-hero-try"
          >
            TRY FOR FREE
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 uppercase tracking-wider"
            style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
            data-testid="button-hero-demo"
          >
            BOOK A DEMO
          </Button>
        </motion.div>
      </div>

      <div 
        className="absolute bottom-0 right-0 w-16 h-16 border-l border-t border-gray-300"
        style={{ transform: "rotate(45deg) translate(50%, 50%)" }}
      />
    </section>
  );
}
