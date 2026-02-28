import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { useLocation } from "wouter";
import { BarChart3, PieChart, TrendingUp, Activity } from "lucide-react";

export default function Analytics() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <PageLayout title="Analytics" description="Data-driven insights to optimize your website performance.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Analytics & Insights</h1>
          <p className="text-xl text-white/80 mb-8">Make data-driven decisions with comprehensive analytics that reveal exactly how visitors interact with your site.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#9333EA] hover:bg-gray-100" onClick={() => setIsDemoModalOpen(true)}>BLOOM MY SITE</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => setLocation("/free-audit")}>FREE SITE AUDIT</Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Track</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BarChart3, title: "Traffic Analysis", desc: "Understand where your visitors come from" },
              { icon: PieChart, title: "User Behavior", desc: "See how visitors navigate your site" },
              { icon: TrendingUp, title: "Conversion Tracking", desc: "Measure what matters to your business" },
              { icon: Activity, title: "Real-Time Data", desc: "Monitor site performance as it happens" },
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
          <h2 className="text-3xl font-bold mb-8">Analytics Dashboard</h2>
          <p className="text-gray-600 mb-8">Get access to a custom dashboard showing the metrics that matter most to your business. No more drowning in data — just clear, actionable insights.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl"><p className="text-5xl font-bold text-[#9333EA] mb-2">24/7</p><p className="text-gray-600">Real-time monitoring and alerts</p></div>
            <div className="bg-white p-8 rounded-xl"><p className="text-5xl font-bold text-[#9333EA] mb-2">50+</p><p className="text-gray-600">Key metrics tracked automatically</p></div>
            <div className="bg-white p-8 rounded-xl"><p className="text-5xl font-bold text-[#9333EA] mb-2">Weekly</p><p className="text-gray-600">Reports delivered to your inbox</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Understand Your Data?</h2>
          <p className="text-gray-600 mb-8">Get a free analytics audit and discover insights hiding in your data.</p>
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
