import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { Link } from "wouter";

const footerLinks = {
  Services: [
    { label: "Full Redesign", href: "/services/full-redesign" },
    { label: "Speed Optimization", href: "/services/speed-optimization" },
    { label: "Mobile Overhaul", href: "/services/mobile-overhaul" },
    { label: "SEO & Visibility", href: "/services/seo-visibility" },
    { label: "Analytics", href: "/services/analytics" },
    { label: "Pricing", href: "/pricing" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Free Audit", href: "/free-audit" },
    { label: "Site Grader", href: "/site-grader" },
    { label: "Guides", href: "/guides" },
  ],
  Platforms: [
    { label: "Shopify", href: "/platforms/shopify" },
    { label: "WordPress", href: "/platforms/wordpress" },
    { label: "Webflow", href: "/platforms/webflow" },
    { label: "Custom Sites", href: "/platforms/custom" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <footer className="relative bg-white" data-testid="footer">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200 overflow-hidden"
          data-testid="container-footer-cta"
        >
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 tracking-tight" data-testid="text-footer-cta-heading">
              Your website is costing<br />you customers. Let us fix that.
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto" data-testid="text-footer-cta-subheading">
              Get a free site audit and see exactly where you are losing traffic, leads, and revenue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 uppercase tracking-wider cursor-pointer" onClick={() => setIsDemoModalOpen(true)} data-testid="button-footer-cta">
                BLOOM MY SITE
              </Button>
              <Link href="/free-audit">
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 uppercase tracking-wider cursor-pointer" data-testid="button-footer-demo">
                  FREE SITE AUDIT
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-4">No contracts. No pressure. Just results.</p>
          </div>
        </motion.div>

        <div className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100" data-testid="container-footer-links">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
              <div className="col-span-2 md:col-span-3 lg:col-span-1">
                <Link href="/" className="text-2xl font-bold tracking-tight inline-block mb-4 cursor-pointer">
                  <span className="text-[#9333EA]">SITE</span><span className="text-gray-900">BLOOM</span>
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed" data-testid="text-footer-tagline">
                  We turn underperforming websites into your hardest-working employee.
                </p>
              </div>
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">{category.toUpperCase()}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-gray-500 hover:text-gray-900 transition-colors text-sm cursor-pointer">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm" data-testid="text-footer-copyright">&copy; 2025 Sitebloom. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link href="/privacy" className="text-gray-400 hover:text-gray-900 transition-colors text-sm cursor-pointer">Privacy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-gray-900 transition-colors text-sm cursor-pointer">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <BookDemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </>
  );
}
