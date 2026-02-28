import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { useLocation } from "wouter";
import { TrendingUp, Clock, Users } from "lucide-react";

const cases = [
  { company: "Coastal Coffee Co.", industry: "Food & Beverage", challenge: "Outdated design driving customers away", results: { traffic: "+156%", speed: "3.2s to 1.1s", conversions: "+89%" }, quote: "Our online orders tripled within two months of launch." },
  { company: "Summit Legal Group", industry: "Professional Services", challenge: "Poor mobile experience losing leads", results: { traffic: "+203%", speed: "4.5s to 0.9s", conversions: "+124%" }, quote: "We went from 2 inquiries a week to 15. Game changer." },
  { company: "Verde Wellness Spa", industry: "Health & Beauty", challenge: "Site too slow, high bounce rate", results: { traffic: "+178%", speed: "5.1s to 1.3s", conversions: "+95%" }, quote: "Bookings increased 40% and we finally rank on Google." },
];

export default function CaseStudies() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <PageLayout title="Case Studies" description="Real results from real clients. See how we transform websites.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Case Studies</h1>
          <p className="text-xl text-white/80">Real results from real businesses. See the transformation for yourself.</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Client Transformations</h2>
          <p className="text-gray-600 text-center mb-16">See the measurable impact we have delivered for businesses like yours.</p>
        </div>
        <div className="max-w-6xl mx-auto space-y-16">
          {cases.map((study, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <span className="text-sm font-semibold text-[#9333EA] uppercase tracking-wider">{study.industry}</span>
                  <h3 className="text-3xl font-bold mt-2 mb-4">{study.company}</h3>
                  <p className="text-gray-600 mb-6"><strong>Challenge:</strong> {study.challenge}</p>
                  <blockquote className="border-l-4 border-[#9333EA] pl-4 italic text-gray-700">"{study.quote}"</blockquote>
                </div>
                <div className="bg-gray-50 p-8 md:p-12">
                  <h4 className="font-semibold text-lg mb-6">Results</h4>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4"><TrendingUp className="w-8 h-8 text-[#9333EA]" /><div><p className="text-3xl font-bold text-[#9333EA]">{study.results.traffic}</p><p className="text-gray-600 text-sm">Organic Traffic</p></div></div>
                    <div className="flex items-center gap-4"><Clock className="w-8 h-8 text-[#9333EA]" /><div><p className="text-3xl font-bold text-[#9333EA]">{study.results.speed}</p><p className="text-gray-600 text-sm">Load Time</p></div></div>
                    <div className="flex items-center gap-4"><Users className="w-8 h-8 text-[#9333EA]" /><div><p className="text-3xl font-bold text-[#9333EA]">{study.results.conversions}</p><p className="text-gray-600 text-sm">Conversions</p></div></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-gray-600 mb-8">Get a free audit and see your sites potential.</p>
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
