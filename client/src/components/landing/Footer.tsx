import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Product: ["Search", "CRM", "Agents", "Insights", "Integrations", "Pricing"],
  Resources: ["Blog", "Guides", "Case Studies", "Webinars", "API Docs"],
  Partners: ["Agency Program", "ATS Partners", "Referral Program"],
  Company: ["About", "Careers", "Press", "Contact"],
  Security: ["Privacy", "Terms", "GDPR", "SOC 2"],
};

export function Footer() {
  return (
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
            The future of recruiting<br />starts with Juicebox.
          </h2>
          <p 
            className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
            data-testid="text-footer-cta-subheading"
          >
            Join thousands of recruiting teams who are already using AI to find better candidates faster.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 uppercase tracking-wider"
              style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
              data-testid="button-footer-cta"
            >
              GET STARTED FREE
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 uppercase tracking-wider"
              style={{ fontFamily: "'VT323', monospace", fontSize: "16px" }}
              data-testid="button-footer-demo"
            >
              BOOK A DEMO
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100" data-testid="container-footer-links">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <a 
                href="/" 
                className="text-2xl font-bold tracking-tight inline-block mb-4" 
                style={{ fontFamily: "'VT323', monospace" }}
                data-testid="link-footer-logo"
              >
                <span className="text-[#9333EA]">JUICE</span><span className="text-gray-900">BOX</span>
              </a>
              <p 
                className="text-gray-400 text-sm leading-relaxed"
                data-testid="text-footer-tagline"
              >
                The AI Recruiting Platform that helps you win the talent war.
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
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
                        data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link}
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
              © 2025 Juicebox. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-gray-900 transition-colors text-sm"
                data-testid="link-footer-privacy-bottom"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-gray-900 transition-colors text-sm"
                data-testid="link-footer-terms-bottom"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
