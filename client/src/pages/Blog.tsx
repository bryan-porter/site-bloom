import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const posts = [
  { title: "10 Signs Your Website Needs a Redesign", category: "Design", date: "Jan 15, 2025", readTime: "5 min", excerpt: "Your website is often the first impression customers have of your business. Learn the warning signs that it is time for a refresh." },
  { title: "How Page Speed Affects Your Bottom Line", category: "Performance", date: "Jan 10, 2025", readTime: "4 min", excerpt: "Every second counts. Discover the direct correlation between load times and conversion rates." },
  { title: "Mobile-First Design: Why It Matters in 2025", category: "Mobile", date: "Jan 5, 2025", readTime: "6 min", excerpt: "With mobile traffic dominating, your site must prioritize the mobile experience first." },
  { title: "SEO Fundamentals Every Business Owner Should Know", category: "SEO", date: "Dec 28, 2024", readTime: "8 min", excerpt: "Demystifying SEO: practical tips to improve your search visibility without technical expertise." },
  { title: "The True Cost of a Slow Website", category: "Performance", date: "Dec 20, 2024", readTime: "5 min", excerpt: "Calculate the revenue you are losing every day due to poor website performance." },
  { title: "Conversion Rate Optimization: Quick Wins", category: "Growth", date: "Dec 15, 2024", readTime: "7 min", excerpt: "Simple changes you can make today to increase the percentage of visitors who become customers." },
];

export default function Blog() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <PageLayout title="Blog" description="Insights and tips on web design, performance, and digital growth.">
      <section className="py-24 px-4 bg-gradient-to-b from-[#9333EA] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Blog</h1>
          <p className="text-xl text-white/80">Insights, tips, and strategies to help your website perform better.</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Latest Articles</h2>
          <p className="text-gray-600 text-center mb-12">Practical advice from our team of web experts.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#9333EA]/10 to-[#7C3AED]/10"></div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#9333EA] uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Website?</h2>
          <p className="text-gray-600 mb-8">Get a free audit and see exactly where your site can improve.</p>
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
