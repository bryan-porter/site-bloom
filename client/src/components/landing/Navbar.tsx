import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "FEATURES", href: "#features", hasDropdown: true },
  { label: "PRICING", href: "#pricing", hasDropdown: false },
  { label: "RESOURCES", href: "#resources", hasDropdown: true },
  { label: "CUSTOMERS", href: "#customers", hasDropdown: false },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "'VT323', monospace" }} data-testid="link-logo">
              <span className="text-[#9333EA]">JUICE</span>BOX
            </a>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wider"
                style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
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
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 uppercase tracking-wider"
              style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
              data-testid="button-signin"
            >
              SIGN IN
            </Button>
            <Button 
              className="bg-gray-900 hover:bg-gray-800 text-white uppercase tracking-wider"
              style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
              data-testid="button-demo"
            >
              BOOK A DEMO
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-900"
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
            className="md:hidden bg-white border-b border-gray-200"
            data-testid="mobile-menu"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg tracking-wider"
                  style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button 
                  variant="ghost" 
                  className="w-full justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 uppercase tracking-wider"
                  style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
                  data-testid="button-mobile-signin"
                >
                  SIGN IN
                </Button>
                <Button 
                  className="w-full justify-center bg-gray-900 hover:bg-gray-800 text-white uppercase tracking-wider"
                  style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
                  data-testid="button-mobile-demo"
                >
                  BOOK A DEMO
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
