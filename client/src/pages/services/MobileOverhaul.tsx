import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { useLocation } from "wouter";
import { Smartphone, TabletSmartphone, MonitorSmartphone, Fingerprint } from "lucide-react";

export default function MobileOverhaul() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <PageLayout title="Mobile Overhaul" description="Make your website work flawlessly on every device.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Mobile Overhaul</h1>
          <p className="text-xl text-white/80 mb-8">Over 60% of web traffic is mobile. We ensure your site delivers a flawless experience on every device.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#9333EA] hover:bg-gray-100" onClick={() => setIsDemoModalOpen(true)}>BLOOM MY SITE</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => setLocation("/free-audit")}>FREE SITE AUDIT</Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Mobile-First Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, title: "Responsive Design", desc: "Fluid layouts that adapt to any screen size" },
              { icon: TabletSmartphone, title: "Touch Optimized", desc: "Buttons and navigation sized for fingers" },
              { icon: MonitorSmartphone, title: "Cross-Device", desc: "Consistent experience across all devices" },
              { icon: Fingerprint, title: "Mobile UX", desc: "Intuitive mobile-specific interactions" },
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
          <h2 className="text-3xl font-bold mb-8">Why Mobile Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl"><p className="text-5xl font-bold text-[#9333EA] mb-2">61%</p><p className="text-gray-600">of users won't return to a mobile site they had trouble accessing</p></div>
            <div className="bg-white p-8 rounded-xl"><p className="text-5xl font-bold text-[#9333EA] mb-2">67%</p><p className="text-gray-600">of shoppers are more likely to buy from mobile-friendly sites</p></div>
            <div className="bg-white p-8 rounded-xl"><p className="text-5xl font-bold text-[#9333EA] mb-2">85%</p><p className="text-gray-600">of adults think mobile sites should be as good or better than desktop</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Mobile Excellence?</h2>
          <p className="text-gray-600 mb-8">Get a free mobile audit and see how your site performs on mobile devices.</p>
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
