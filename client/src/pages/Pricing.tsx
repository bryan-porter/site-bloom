import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { useLocation } from "wouter";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "2,500",
    description: "Perfect for small businesses ready to upgrade their online presence",
    features: ["5-page website redesign", "Mobile responsive design", "Basic SEO optimization", "Contact form integration", "2 rounds of revisions", "30-day support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "5,000",
    description: "For businesses serious about converting visitors into customers",
    features: ["10-page website redesign", "Advanced mobile optimization", "Full SEO audit & implementation", "Analytics dashboard setup", "A/B testing setup", "Speed optimization", "4 rounds of revisions", "90-day support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-service solution for established businesses with complex needs",
    features: ["Unlimited pages", "Custom functionality", "E-commerce integration", "Advanced analytics", "Ongoing optimization", "Dedicated account manager", "Priority support", "Quarterly strategy reviews"],
    popular: false,
  },
];

export default function Pricing() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <PageLayout title="Pricing" description="Transparent pricing for website redesign and optimization services.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-white/80 mb-8">No hidden fees. No surprises. Just results-driven website services that deliver ROI.</p>
        </div>
      </section>

      <section className="py-20 px-4" id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={plan.popular ? "rounded-2xl p-8 bg-[#9333EA] text-white ring-4 ring-[#9333EA]/20" : "rounded-2xl p-8 bg-gray-50"}>
                {plan.popular && <span className="text-xs uppercase tracking-wider bg-white text-[#9333EA] px-3 py-1 rounded-full font-semibold">Most Popular</span>}
                <h3 className={plan.popular ? "text-2xl font-bold mt-4 text-white" : "text-2xl font-bold mt-4 text-gray-900"}>{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className={plan.popular ? "text-4xl font-bold text-white" : "text-4xl font-bold text-gray-900"}>{plan.price === "Custom" ? "" : "$"}{plan.price}</span>
                  {plan.price !== "Custom" && <span className={plan.popular ? "text-white/70" : "text-gray-500"}> one-time</span>}
                </div>
                <p className={plan.popular ? "mb-6 text-white/80" : "mb-6 text-gray-600"}>{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className={plan.popular ? "w-5 h-5 text-white" : "w-5 h-5 text-[#9333EA]"} />
                      <span className={plan.popular ? "text-white/90" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={plan.popular ? "w-full bg-white text-[#9333EA] hover:bg-gray-100" : "w-full bg-[#9333EA] text-white hover:bg-[#7C3AED]"} onClick={() => setIsDemoModalOpen(true)}>
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Plan is Right?</h2>
          <p className="text-gray-600 mb-8">Get a free site audit and we will recommend the best solution for your needs.</p>
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
