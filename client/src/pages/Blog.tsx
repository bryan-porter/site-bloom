import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BookDemoModal } from "@/components/BookDemoModal";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { blogPostPreviews } from "@/content/blogPosts";

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
            {blogPostPreviews.map((post) => {
              const card = (
                <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <img
                    src={post.image}
                    alt={post.heroAlt}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <span className="text-xs font-semibold text-[#9333EA] uppercase tracking-wider">{post.category}</span>
                    <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-gray-400 text-sm">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
                      </div>
                      {post.slug ? <ArrowRight className="w-4 h-4 text-[#9333EA]" /> : <ArrowRight className="w-4 h-4" />}
                    </div>
                  </div>
                </article>
              );

              if (!post.slug) {
                return <div key={post.title}>{card}</div>;
              }

              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full">
                  {card}
                </Link>
              );
            })}
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
