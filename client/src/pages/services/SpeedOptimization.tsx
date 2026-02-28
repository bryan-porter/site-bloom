import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { useLocation } from "wouter";
import { Gauge, Zap, TrendingUp, Clock } from "lucide-react";

export default function SpeedOptimization() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <PageLayout title="Speed Optimization" description="Boost your website performance with sub-2-second load times.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Speed Optimization</h1>
          <p className="text-xl text-white/80 mb-8">Slow websites lose customers. We optimize every asset and server call to deliver sub-2-second load times that search engines reward.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#9333EA] hover:bg-gray-100" onClick={() => setIsDemoModalOpen(true)}>BLOOM MY SITE</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => setLocation("/free-audit")}>FREE SITE AUDIT</Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Improvements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Gauge, title: "Core Web Vitals", desc: "Pass Google's key performance metrics" },
              { icon: Zap, title: "Asset Optimization", desc: "Compressed images, minified code" },
              { icon: TrendingUp, title: "SEO Boost", desc: "Better rankings from faster speeds" },
              { icon: Clock, title: "Sub-2s Load Time", desc: "Lightning-fast page delivery" },
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">The Impact of Speed</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl"><p className="text-5xl font-bold text-[#9333EA] mb-2">53%</p><p className="text-gray-600">of users abandon sites that take longer than 3 seconds to load</p></div>
            <div className="bg-white p-8 rounded-xl"><p className="text-5xl font-bold text-[#9333EA] mb-2">2x</p><p className="text-gray-600">conversion rate increase with 1 second faster load time</p></div>
            <div className="bg-white p-8 rounded-xl"><p className="text-5xl font-bold text-[#9333EA] mb-2">+15%</p><p className="text-gray-600">higher search rankings with optimized Core Web Vitals</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Speed Up Your Site?</h2>
          <p className="text-gray-600 mb-8">Get a free performance audit and discover your optimization opportunities.</p>
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
