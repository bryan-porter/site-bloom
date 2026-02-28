import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { Link } from "wouter";

export default function Terms() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <PageLayout title="Terms of Service" description="SiteBloom terms of service and usage agreement.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-white/80">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
          <p className="text-gray-600 mb-6">By accessing or using SiteBloom services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.</p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Services</h2>
          <p className="text-gray-600 mb-6">SiteBloom provides website design, development, optimization, and related digital services. The specific scope of work for each project will be outlined in a separate agreement or proposal.</p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Payment Terms</h2>
          <p className="text-gray-600 mb-6">Payment terms will be specified in your project agreement. Generally, we require a deposit before work begins, with the balance due upon project completion. All fees are non-refundable unless otherwise specified.</p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Intellectual Property</h2>
          <p className="text-gray-600 mb-6">Upon full payment, you will own the final deliverables created specifically for your project. We retain ownership of any pre-existing tools, frameworks, or code libraries used in the creation of your project.</p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">SiteBloom shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific service in question.</p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Termination</h2>
          <p className="text-gray-600 mb-6">Either party may terminate the service agreement with written notice. In the event of termination, you will be responsible for payment for all work completed up to the termination date.</p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Contact</h2>
          <p className="text-gray-600 mb-6">If you have any questions about these Terms, please contact us at legal@sitebloom.com.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">Let us transform your website into a growth engine.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#9333EA] hover:bg-[#7C3AED] text-white" onClick={() => setIsDemoModalOpen(true)}>BLOOM MY SITE</Button>
            <Link href="/free-audit"><Button size="lg" variant="outline">REQUEST FREE AUDIT</Button></Link>
          </div>
        </div>
      </section>

      <BookDemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </PageLayout>
  );
}
