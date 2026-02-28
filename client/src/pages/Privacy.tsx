import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { Link } from "wouter";

export default function Privacy() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <PageLayout title="Privacy Policy" description="SiteBloom privacy policy and data handling practices.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-white/80">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-6">We collect information you provide directly to us, such as when you create an account, request a quote, or contact us for support. This may include your name, email address, website URL, and any other information you choose to provide.</p>

          <h2 className="text-2xl font-bold mb-4 mt-8">How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.</p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Information Sharing</h2>
          <p className="text-gray-600 mb-6">We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.</p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Data Security</h2>
          <p className="text-gray-600 mb-6">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Cookies</h2>
          <p className="text-gray-600 mb-6">We use cookies to enhance your experience on our site. You can set your browser to refuse cookies, but some features of our site may not function properly without them.</p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>
          <p className="text-gray-600 mb-6">If you have any questions about this Privacy Policy, please contact us at privacy@sitebloom.com.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-8">We are happy to answer any questions about how we handle your data.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#9333EA] hover:bg-[#7C3AED] text-white" onClick={() => setIsDemoModalOpen(true)}>BLOOM MY SITE</Button>
            <Link href="/contact"><Button size="lg" variant="outline">CONTACT US</Button></Link>
          </div>
        </div>
      </section>

      <BookDemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </PageLayout>
  );
}
