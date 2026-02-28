import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { BookDemoModal } from "@/components/BookDemoModal";
import { Link } from "wouter";

function AsciiCharGrid() {
  const chars = useMemo(() => {
    const result = [];
    const cols = 100;
    const rows = 50;
    const centerX = cols / 2;
    const centerY = rows / 2;
    const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
    const asciiChars = ['*', '+', '.', '#', '~', '^', ':', ';', '`', "'", '"', '|', '/', '\\', '-', '='];
    
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const distFromCenter = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
        );
        const normalizedDist = distFromCenter / maxDist;
        
        if (normalizedDist > 0.25) {
          const opacity = Math.min(0.9, (normalizedDist - 0.25) * 1.2);
          const charIndex = (x + y) % asciiChars.length;
          
          result.push({
            x: (x / cols) * 100,
            y: (y / rows) * 100,
            opacity,
            char: asciiChars[charIndex],
            key: `${x}-${y}`,
          });
        }
      }
    }
    return result;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0"
        style={{ fontFamily: "'VT323', monospace", fontSize: "12px", lineHeight: "1" }}
      >
        {chars.map((item) => (
          <span
            key={item.key}
            className="absolute"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              color: `rgba(147, 51, 234, ${item.opacity})`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {item.char}
          </span>
        ))}
      </div>
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 50% 60% at center, white 0%, white 50%, transparent 70%)",
        }}
      />
    </div>
  );
}

export function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  

  

  return (
    <>
      <section 
        className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
        data-testid="section-hero"
      >
        <AsciiCharGrid />

        <div className="relative max-w-4xl mx-auto text-center pt-16 z-10">
          <motion.a
            href="#agents"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("agents")?.scrollIntoView({ behavior: "smooth" });
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200 text-gray-600 text-sm mb-8 hover:bg-gray-200 transition-colors cursor-pointer"
            style={{ fontFamily: "'VT323', monospace", fontSize: "14px", letterSpacing: "0.05em" }}
            data-testid="badge-hero-announcement"
          >
            <span className="px-2 py-0.5 bg-gray-900 rounded text-white text-xs" style={{ fontFamily: "'VT323', monospace" }}>NEW</span>
            SEE HOW WE TRANSFORM SITES &gt;
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 tracking-tight leading-[1.1] mb-6"
            data-testid="text-hero-headline"
          >
            Your website should work harder.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
            data-testid="text-hero-subhead"
          >
            If it's slow, confusing, or ugly — <span className="text-gray-900 font-medium">we fix it.</span> Sitebloom turns underperforming websites into modern, high-converting digital storefronts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 uppercase tracking-wider cursor-pointer"
              style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
              onClick={() => setIsDemoModalOpen(true)}
              data-testid="button-hero-try"
            >
              BLOOM MY SITE
            </Button>
            <Link href="/free-audit"><Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 uppercase tracking-wider cursor-pointer" data-testid="button-hero-demo">FREE SITE AUDIT</Button></Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm text-gray-400 mt-4"
            data-testid="text-hero-microcopy"
          >
            Free audit. No pressure.
          </motion.p>
        </div>

        <div 
          className="absolute bottom-0 right-0 w-16 h-16 border-l border-t border-gray-300"
          style={{ transform: "rotate(45deg) translate(50%, 50%)" }}
        />
      </section>

      <BookDemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </>
  );
}
