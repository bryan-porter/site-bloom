import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { useToast } from "@/hooks/use-toast";

const navLinks = [
  { label: "FEATURES", href: "#features", hasDropdown: true, hasSection: true },
  { label: "PRICING", href: "#pricing", hasDropdown: false, hasSection: false },
  { label: "RESOURCES", href: "#resources", hasDropdown: true, hasSection: false },
  { label: "CUSTOMERS", href: "#testimonials", hasDropdown: false, hasSection: true },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    
    if (link.hasSection) {
      const sectionId = link.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      toast({
        title: "Coming Soon",
        description: `${link.label} page is under construction. Check back soon!`,
      });
    }
    setIsOpen(false);
  };

  const handleSignIn = () => {
    setLocation("/signin");
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200" data-testid="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold tracking-tight text-gray-900 cursor-pointer" style={{ fontFamily: "'VT323', monospace" }} data-testid="link-logo">
                <span className="text-[#9333EA]">JUICE</span>BOX
              </a>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wider cursor-pointer"
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
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 uppercase tracking-wider cursor-pointer"
                style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
                onClick={handleSignIn}
                data-testid="button-signin"
              >
                SIGN IN
              </Button>
              <Button 
                className="bg-gray-900 hover:bg-gray-800 text-white uppercase tracking-wider cursor-pointer"
                style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
                onClick={() => setIsDemoModalOpen(true)}
                data-testid="button-demo"
              >
                BOOK A DEMO
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-900 cursor-pointer"
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
                    className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg tracking-wider cursor-pointer"
                    style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
                    data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 uppercase tracking-wider cursor-pointer"
                    style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
                    onClick={handleSignIn}
                    data-testid="button-mobile-signin"
                  >
                    SIGN IN
                  </Button>
                  <Button 
                    className="w-full justify-center bg-gray-900 hover:bg-gray-800 text-white uppercase tracking-wider cursor-pointer"
                    style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
                    onClick={() => {
                      setIsDemoModalOpen(true);
                      setIsOpen(false);
                    }}
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

      <BookDemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </>
  );
}
