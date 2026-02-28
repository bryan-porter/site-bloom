import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { FileText, Download } from "lucide-react";
import { Link } from "wouter";

const guides = [
  { title: "The Complete Website Redesign Checklist", description: "Everything you need to plan and execute a successful website redesign project.", pages: 24 },
  { title: "Speed Optimization Quick Start Guide", description: "Actionable steps to improve your site speed today, no coding required.", pages: 12 },
  { title: "Mobile-First Design Principles", description: "Best practices for designing websites that work beautifully on every device.", pages: 18 },
  { title: "SEO Fundamentals for Business Owners", description: "Understand SEO without the technical jargon. Practical tips you can implement now.", pages: 30 },
  { title: "Conversion Rate Optimization Playbook", description: "Turn more visitors into customers with these proven optimization strategies.", pages: 22 },
  { title: "Website Security Best Practices", description: "Protect your site and your customers with essential security measures.", pages: 16 },
];

export default function Guides() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <PageLayout title="Guides" description="Free resources to help you improve your website.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Free Guides</h1>
          <p className="text-xl text-white/80">Practical resources to help you improve your website performance and grow your business.</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Browse Our Library</h2>
          <p className="text-gray-600 text-center mb-12">Download any guide instantly — no signup required.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#9333EA]/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-[#9333EA]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{guide.pages} pages</span>
                  <Button variant="ghost" size="sm" className="text-[#9333EA]">
                    <Download className="w-4 h-4 mr-2" /> Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want Personalized Recommendations?</h2>
          <p className="text-gray-600 mb-8">Get a free audit and receive customized advice for your specific website.</p>
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
