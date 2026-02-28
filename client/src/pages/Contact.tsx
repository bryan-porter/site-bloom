import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookDemoModal } from "@/components/BookDemoModal";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({ title: "Message Sent!", description: "We will get back to you within 24 hours." });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageLayout title="Contact" description="Get in touch with the SiteBloom team.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/80">Have a question or ready to get started? We would love to hear from you.</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4"><Mail className="w-6 h-6 text-[#9333EA]" /><div><p className="font-semibold">Email</p><p className="text-gray-600">hello@sitebloom.com</p></div></div>
                <div className="flex items-center gap-4"><MessageSquare className="w-6 h-6 text-[#9333EA]" /><div><p className="font-semibold">Live Chat</p><p className="text-gray-600">Available Mon-Fri 9am-6pm EST</p></div></div>
                <div className="flex items-center gap-4"><Clock className="w-6 h-6 text-[#9333EA]" /><div><p className="font-semibold">Response Time</p><p className="text-gray-600">Usually within 24 hours</p></div></div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div><label className="block text-sm font-medium mb-2">Name</label><Input placeholder="Your name" required /></div>
                <div><label className="block text-sm font-medium mb-2">Email</label><Input type="email" placeholder="you@example.com" required /></div>
                <div><label className="block text-sm font-medium mb-2">Website URL</label><Input type="url" placeholder="https://yoursite.com" /></div>
                <div><label className="block text-sm font-medium mb-2">Message</label><Textarea placeholder="How can we help you?" rows={4} required /></div>
                <Button type="submit" className="w-full bg-[#9333EA] hover:bg-[#7C3AED] text-white" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Website?</h2>
          <p className="text-gray-600 mb-8">Skip the form and get started right away.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#9333EA] hover:bg-[#7C3AED] text-white" onClick={() => setIsDemoModalOpen(true)}>BLOOM MY SITE</Button>
            <Link href="/free-audit"><Button size="lg" variant="outline">REQUEST FREE AUDIT</Button></Link>
          </div>
        </div>
      </section>

      <BookDemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </PageLayout>
  );
}
