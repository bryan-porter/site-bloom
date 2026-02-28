import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Gauge, Smartphone, Search, Shield } from "lucide-react";

export default function SiteGrader() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [, setLocation] = useLocation();
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/free-audit");
  };

  return (
    <PageLayout title="Site Grader" description="Get an instant grade on your website performance.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Free Site Grader</h1>
          <p className="text-xl text-white/80 mb-8">Get an instant analysis of your website performance, SEO, and mobile-friendliness.</p>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex gap-4">
            <Input type="url" placeholder="Enter your website URL" value={url} onChange={(e) => setUrl(e.target.value)} className="bg-white text-gray-900" required />
            <Button type="submit" className="bg-white text-[#9333EA] hover:bg-gray-100 whitespace-nowrap">Grade My Site</Button>
          </form>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Analyze</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Gauge, title: "Performance", desc: "Page speed, load times, and Core Web Vitals" },
              { icon: Smartphone, title: "Mobile", desc: "Responsive design and mobile usability" },
              { icon: Search, title: "SEO", desc: "On-page optimization and meta tags" },
              { icon: Shield, title: "Security", desc: "SSL, security headers, and best practices" },
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
          <h2 className="text-3xl font-bold mb-4">Want a More Detailed Analysis?</h2>
          <p className="text-gray-600 mb-8">Our free audit provides a comprehensive review with actionable recommendations from our experts.</p>
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
