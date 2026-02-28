import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";

const jobs = [
  { title: "Senior Frontend Developer", location: "Remote", type: "Full-time", department: "Engineering" },
  { title: "UX/UI Designer", location: "Remote", type: "Full-time", department: "Design" },
  { title: "SEO Specialist", location: "Remote", type: "Full-time", department: "Marketing" },
  { title: "Project Manager", location: "Remote", type: "Full-time", department: "Operations" },
];

export default function Careers() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <PageLayout title="Careers" description="Join the SiteBloom team and help transform websites worldwide.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Careers at SiteBloom</h1>
          <p className="text-xl text-white/80">Help businesses succeed online. Work remotely with talented people who care about quality.</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Open Positions</h2>
          <p className="text-gray-600 text-center mb-12">We are always looking for talented people to join our growing team.</p>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border border-gray-200 hover:border-[#9333EA] transition-colors">
                <div>
                  <span className="text-xs font-semibold text-[#9333EA] uppercase tracking-wider">{job.department}</span>
                  <h3 className="text-xl font-semibold mt-1">{job.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{job.type}</span>
                  </div>
                </div>
                <Button className="mt-4 md:mt-0 bg-[#9333EA] hover:bg-[#7C3AED] text-white">Apply Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why SiteBloom?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div><Briefcase className="w-12 h-12 text-[#9333EA] mx-auto mb-4" /><h3 className="font-semibold mb-2">Remote-First</h3><p className="text-gray-600 text-sm">Work from anywhere in the world</p></div>
            <div><Briefcase className="w-12 h-12 text-[#9333EA] mx-auto mb-4" /><h3 className="font-semibold mb-2">Competitive Pay</h3><p className="text-gray-600 text-sm">Salary that matches your skills</p></div>
            <div><Briefcase className="w-12 h-12 text-[#9333EA] mx-auto mb-4" /><h3 className="font-semibold mb-2">Growth</h3><p className="text-gray-600 text-sm">Learn and advance your career</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Do Not See Your Role?</h2>
          <p className="text-gray-600 mb-8">We are always interested in hearing from talented people. Send us your resume or get in touch.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#9333EA] hover:bg-[#7C3AED] text-white" onClick={() => setIsDemoModalOpen(true)}>BLOOM MY SITE</Button>
            <Link href="/contact"><Button size="lg" variant="outline">CONTACT US</Button></Link>
          </div>
        </div>
      </section>

      <BookDemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </PageLayout>
  );
}
