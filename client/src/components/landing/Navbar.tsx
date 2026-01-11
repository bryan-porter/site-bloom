import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "features", href: "#features", hasDropdown: true },
  { label: "pricing", href: "#pricing", hasDropdown: false },
  { label: "resources", href: "#resources", hasDropdown: true },
  { label: "customers", href: "#customers", hasDropdown: false },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06051B]/90 backdrop-blur-xl border-b border-white/5" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold tracking-tight text-white" data-testid="link-logo">
              <span className="text-[#FF5A30]">juice</span>box
            </a>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 px-4 py-2 text-white/70 hover:text-white font-medium transition-colors text-sm"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-white/5"
              data-testid="button-signin"
            >
              Sign In
            </Button>
            <Button 
              className="rounded-full bg-[#FF5A30] hover:bg-[#FF5A30]/90 border-none text-white shadow-[0_0_20px_rgba(255,90,48,0.3)]"
              data-testid="button-demo"
            >
              book a demo
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#06051B] border-b border-white/10"
            data-testid="mobile-menu"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg font-medium"
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Button 
                  variant="ghost" 
                  className="w-full justify-center text-white/70 hover:text-white hover:bg-white/5"
                  data-testid="button-mobile-signin"
                >
                  Sign In
                </Button>
                <Button 
                  className="w-full justify-center rounded-full bg-[#FF5A30] hover:bg-[#FF5A30]/90 border-none text-white"
                  data-testid="button-mobile-demo"
                >
                  book a demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
