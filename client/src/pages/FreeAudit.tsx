import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Gauge, Search, Smartphone, Shield } from "lucide-react";

export default function FreeAudit() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      websiteUrl: formData.get("websiteUrl"),
      name: formData.get("name"),
      email: formData.get("email"),
      notes: formData.get("notes"),
    };

    try {
      const response = await fetch("/api/free-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({ title: "Audit Request Submitted!", description: "We will send your free audit within 48 hours." });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout title="Free Site Audit" description="Get a comprehensive analysis of your website performance, SEO, and more.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Free Website Audit</h1>
          <p className="text-xl text-white/80">Get a comprehensive analysis of your website. Discover exactly where you are losing traffic, leads, and revenue.</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">What You Will Get</h2>
              <p className="text-gray-600 mb-8">Our expert team will analyze your website and deliver a detailed report covering:</p>
              <div className="space-y-6">
                {[
                  { icon: Gauge, title: "Performance Analysis", desc: "Page speed, load times, and Core Web Vitals assessment" },
                  { icon: Search, title: "SEO Review", desc: "On-page optimization, meta tags, and search visibility" },
                  { icon: Smartphone, title: "Mobile Audit", desc: "Responsive design and mobile user experience" },
                  { icon: Shield, title: "Security Check", desc: "SSL, security headers, and vulnerability scan" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#9333EA]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#9333EA]" />
                    </div>
                    <div><h3 className="font-semibold">{item.title}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <p className="font-semibold mb-2">100% Free. No Strings Attached.</p>
                <p className="text-gray-600 text-sm">Your audit will be delivered within 48 hours. No credit card required. No obligation to purchase anything.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Request Submitted!</h3>
                  <p className="text-gray-600">We will analyze your website and send your free audit within 48 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6">Request Your Free Audit</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Website URL <span className="text-red-500">*</span></label>
                      <Input name="websiteUrl" type="url" placeholder="https://yourwebsite.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name <span className="text-red-500">*</span></label>
                      <Input name="name" placeholder="John Smith" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address <span className="text-red-500">*</span></label>
                      <Input name="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Additional Notes <span className="text-gray-400">(optional)</span></label>
                      <Textarea name="notes" placeholder="Any specific concerns or areas you would like us to focus on?" rows={3} />
                    </div>
                    <Button type="submit" className="w-full bg-[#9333EA] hover:bg-[#7C3AED] text-white text-lg py-6" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Get My Free Audit"}
                    </Button>
                    <p className="text-xs text-gray-400 text-center">By submitting, you agree to our Privacy Policy. We will never spam you.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
