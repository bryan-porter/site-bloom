import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { useLocation } from "wouter";
import { Target, Heart, Zap, Users } from "lucide-react";

export default function About() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <PageLayout title="About Us" description="Learn about SiteBloom and our mission to transform websites.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About SiteBloom</h1>
          <p className="text-xl text-white/80">We turn underperforming websites into your hardest-working employee.</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-lg text-gray-600 text-center mb-12">We believe every business deserves a website that actually works. Not just one that looks good, but one that converts visitors into customers, ranks in search results, and loads fast on every device.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: "Results-Driven", desc: "Every decision we make is backed by data and focused on improving your bottom line." },
              { icon: Heart, title: "Client-Focused", desc: "Your success is our success. We treat your website like it is our own business." },
              { icon: Zap, title: "Modern Tech", desc: "We use cutting-edge tools and frameworks to build fast, secure, scalable sites." },
              { icon: Users, title: "Expert Team", desc: "Designers, developers, and strategists who have shipped hundreds of projects." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl bg-gray-50">
                <item.icon className="w-8 h-8 text-[#9333EA] flex-shrink-0" />
                <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Track Record</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div><p className="text-5xl font-bold text-[#9333EA] mb-2">500+</p><p className="text-gray-600">Websites Transformed</p></div>
            <div><p className="text-5xl font-bold text-[#9333EA] mb-2">98%</p><p className="text-gray-600">Client Satisfaction</p></div>
            <div><p className="text-5xl font-bold text-[#9333EA] mb-2">2.1s</p><p className="text-gray-600">Avg Load Time</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 mb-8">Get a free audit and see how we can help your website perform better.</p>
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
