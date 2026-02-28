import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { useLocation } from "wouter";
import { Search, TrendingUp, Target, BarChart3 } from "lucide-react";

export default function SeoVisibility() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <PageLayout title="SEO & Visibility" description="Get found by customers searching for what you offer.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">SEO & Visibility</h1>
          <p className="text-xl text-white/80 mb-8">Get found by customers who are actively searching for what you offer. We optimize your site for search engines and conversions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#9333EA] hover:bg-gray-100" onClick={() => setIsDemoModalOpen(true)}>BLOOM MY SITE</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => setLocation("/free-audit")}>FREE SITE AUDIT</Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">SEO Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Search, title: "Keyword Research", desc: "Find the terms your customers actually search for" },
              { icon: TrendingUp, title: "On-Page SEO", desc: "Optimized titles, meta descriptions, and content" },
              { icon: Target, title: "Technical SEO", desc: "Site structure, speed, and crawlability" },
              { icon: BarChart3, title: "Analytics", desc: "Track rankings and organic traffic growth" },
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
          <h2 className="text-3xl font-bold text-center mb-8">Our SEO Approach</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "SEO Audit", desc: "We analyze your current search presence and identify quick wins and long-term opportunities." },
              { step: "02", title: "Keyword Strategy", desc: "We research and prioritize keywords based on search volume, competition, and intent." },
              { step: "03", title: "On-Page Optimization", desc: "We optimize every page for target keywords while maintaining great user experience." },
              { step: "04", title: "Ongoing Monitoring", desc: "We track rankings, traffic, and conversions to continuously improve results." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start bg-white p-6 rounded-xl">
                <span className="text-4xl font-bold text-[#9333EA]/20">{item.step}</span>
                <div><h3 className="font-semibold text-lg mb-1">{item.title}</h3><p className="text-gray-600">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Found?</h2>
          <p className="text-gray-600 mb-8">Get a free SEO audit and discover your visibility opportunities.</p>
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
