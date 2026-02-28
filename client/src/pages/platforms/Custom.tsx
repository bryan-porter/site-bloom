import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { useLocation } from "wouter";
import { Code2, Server, Rocket, Shield } from "lucide-react";

export default function Custom() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <PageLayout title="Custom Development" description="Bespoke web development for unique business requirements.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Custom Development</h1>
          <p className="text-xl text-white/80 mb-8">When off-the-shelf solutions are not enough, we build custom websites tailored to your exact requirements. Modern tech stack, scalable architecture.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#9333EA] hover:bg-gray-100" onClick={() => setIsDemoModalOpen(true)}>BLOOM MY SITE</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => setLocation("/free-audit")}>FREE CONSULTATION</Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Custom Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code2, title: "Modern Stack", desc: "React, Next.js, TypeScript, and more" },
              { icon: Server, title: "Scalable", desc: "Architecture that grows with you" },
              { icon: Rocket, title: "Performance", desc: "Optimized for speed from day one" },
              { icon: Shield, title: "Secure", desc: "Security best practices built in" },
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
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Unique Project in Mind?</h2>
          <p className="text-gray-600 mb-8">Let us discuss your requirements and create a custom solution.</p>
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
