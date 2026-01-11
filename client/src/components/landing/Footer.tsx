import { motion } from "framer-motion";
import { Button } from "./Button";

const footerLinks = {
  Product: ["Search", "CRM", "Agents", "Insights", "Integrations"],
  Resources: ["Blog", "Guides", "Case Studies", "Webinars", "API Docs"],
  Partners: ["Agency Program", "ATS Partners", "Referral Program"],
  Company: ["About", "Careers", "Press", "Contact"],
  Security: ["Privacy", "Terms", "GDPR", "SOC 2"],
};

export function Footer() {
  return (
    <footer className="bg-slate-900" id="company">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The future of recruiting<br />starts with Juicebox.
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Join thousands of recruiting teams who are already using AI to find better candidates faster.
          </p>
          <Button variant="primary" size="lg" data-testid="button-footer-cta">
            Get Started
          </Button>
        </div>
      </motion.div>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <a href="/" className="text-2xl font-bold text-white tracking-tight" data-testid="link-footer-logo">
                Juicebox
              </a>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                The AI Recruiting Platform that helps you win the talent war.
              </p>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-slate-400 hover:text-white transition-colors text-sm"
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

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © 2025 Juicebox. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#privacy"
                className="text-slate-500 hover:text-white transition-colors text-sm"
                data-testid="link-footer-privacy"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="text-slate-500 hover:text-white transition-colors text-sm"
                data-testid="link-footer-terms"
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
