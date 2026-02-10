import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { useToast } from "@/hooks/use-toast";

const footerLinks = {
  Services: [
    { label: "Full Redesign", section: "features" },
    { label: "Speed Optimization", section: "agents" },
    { label: "Mobile Overhaul", section: "agents" },
    { label: "SEO & Visibility", section: null },
    { label: "Analytics", section: null },
    { label: "Pricing", section: null },
  ],
  Resources: [
    { label: "Blog", section: null },
    { label: "Case Studies", section: "testimonials" },
    { label: "Free Audit", section: null },
    { label: "Site Grader", section: null },
    { label: "Guides", section: null },
  ],
  Platforms: [
    { label: "Shopify", section: null },
    { label: "WordPress", section: null },
    { label: "Webflow", section: null },
    { label: "Custom Sites", section: null },
  ],
  Company: [
    { label: "About", section: null },
    { label: "Careers", section: null },
    { label: "Contact", section: null },
  ],
  Legal: [
    { label: "Privacy", section: null },
    { label: "Terms", section: null },
  ],
};

export function Footer() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { toast } = useToast();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { label: string; section: string | null }) => {
    e.preventDefault();
    
    if (link.section) {
      const element = document.getElementById(link.section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      toast({
        title: "Coming Soon",
        description: `${link.label} page is under construction. Check back soon!`,
      });
    }
  };

  return (
    <>
      <footer 
        className="relative bg-white"
        data-testid="footer"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200 overflow-hidden"
          data-testid="container-footer-cta"
        >
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 tracking-tight"
              data-testid="text-footer-cta-heading"
            >
              Your website is costing<br />you customers. Let's fix that.
            </h2>
            <p 
              className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
              data-testid="text-footer-cta-subheading"
            >
              Get a free site audit and see exactly where you're losing traffic, leads, and revenue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 uppercase tracking-wider cursor-pointer"
                style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
                onClick={() => setIsDemoModalOpen(true)}
                data-testid="button-footer-cta"
              >
                BLOOM MY SITE
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 uppercase tracking-wider cursor-pointer"
                style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
                onClick={() => {
                  toast({
                    title: "Free Site Audit",
                    description: "Our free audit tool is launching soon. Get on the list!",
                  });
                }}
                data-testid="button-footer-demo"
              >
                FREE SITE AUDIT
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">No contracts. No pressure. Just results.</p>
          </div>
        </motion.div>

        <div className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100" data-testid="container-footer-links">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
              <div className="col-span-2 md:col-span-3 lg:col-span-1">
                <a 
                  href="/" 
                  className="text-2xl font-bold tracking-tight inline-block mb-4 cursor-pointer" 
                  style={{ fontFamily: "'VT323', monospace" }}
                  data-testid="link-footer-logo"
                >
                  <span className="text-[#9333EA]">SITE</span><span className="text-gray-900">BLOOM</span>
                </a>
                <p 
                  className="text-gray-400 text-sm leading-relaxed"
                  data-testid="text-footer-tagline"
                >
                  We turn underperforming websites into your hardest-working employee.
                </p>
              </div>

              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} data-testid={`container-footer-column-${category.toLowerCase()}`}>
                  <h3 
                    className="text-sm text-gray-400 uppercase tracking-wider mb-4"
                    style={{ fontFamily: "'VT323', monospace" }}
                    data-testid={`text-footer-category-${category.toLowerCase()}`}
                  >
                    {category.toUpperCase()}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.section ? `#${link.section}` : "#"}
                          onClick={(e) => handleLinkClick(e, link)}
                          className="text-gray-500 hover:text-gray-900 transition-colors text-sm cursor-pointer"
                          data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <p 
                className="text-gray-400 text-sm"
                data-testid="text-footer-copyright"
              >
                &copy; 2025 Sitebloom. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, { label: "Privacy Policy", section: null })}
                  className="text-gray-400 hover:text-gray-900 transition-colors text-sm cursor-pointer"
                  data-testid="link-footer-privacy-bottom"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, { label: "Terms of Service", section: null })}
                  className="text-gray-400 hover:text-gray-900 transition-colors text-sm cursor-pointer"
                  data-testid="link-footer-terms-bottom"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <BookDemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </>
  );
}
