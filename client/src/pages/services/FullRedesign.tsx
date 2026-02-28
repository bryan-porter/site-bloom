import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { useLocation } from "wouter";
import { Paintbrush, Layout, Smartphone, Zap } from "lucide-react";

export default function FullRedesign() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <PageLayout title="Full Redesign" description="Transform your outdated website into a modern, conversion-focused powerhouse.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Full Website Redesign</h1>
          <p className="text-xl text-white/80 mb-8">Transform your outdated website into a modern, conversion-focused powerhouse that turns visitors into customers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#9333EA] hover:bg-gray-100" onClick={() => setIsDemoModalOpen(true)}>BLOOM MY SITE</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => setLocation("/free-audit")}>FREE SITE AUDIT</Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Paintbrush, title: "Modern Design", desc: "Clean, professional aesthetics that reflect your brand" },
              { icon: Layout, title: "UX Optimization", desc: "Intuitive navigation and user flows that convert" },
              { icon: Smartphone, title: "Mobile-First", desc: "Responsive design that works on every device" },
              { icon: Zap, title: "Performance", desc: "Fast load times and optimized assets" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-gray-50">
                <item.icon className="w-12 h-12 text-[#9333EA] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Discovery", desc: "We analyze your current site, competitors, and goals to create a strategic roadmap." },
              { step: "02", title: "Design", desc: "Our designers create mockups that align with your brand and conversion objectives." },
              { step: "03", title: "Development", desc: "We build your new site with clean code, fast performance, and SEO best practices." },
              { step: "04", title: "Launch", desc: "After thorough testing, we launch your site and monitor performance metrics." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start bg-white p-6 rounded-xl">
                <span className="text-4xl font-bold text-[#9333EA]/20">{item.step}</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Website?</h2>
          <p className="text-gray-600 mb-8">Get a free audit and see exactly what's holding your site back.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#9333EA] hover:bg-[#7C3AED] text-white" onClick={() => setIsDemoModalOpen(true)}>BLOOM MY SITE</Button>
            <Button size="lg" variant="outline" onClick={() => setLocation("/free-audit")}>REQUEST FREE AUDIT</Button>
          </div>
        </div>
      </section>

      <BookDemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </PageLayout>
  );
}
