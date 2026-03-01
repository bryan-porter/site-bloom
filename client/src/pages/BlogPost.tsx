import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { getBlogPost } from "@/content/blogPosts";
import { Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

interface BlogPostPageProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostPageProps) {
  const post = getBlogPost(slug);
  const highlightSection = post?.highlightSection
    ? post.highlightSection
    : post?.decisionGuide
      ? {
          title: "Redesign vs. optimization: a quick decision guide",
          columns: [
            {
              label: "You likely need a redesign if",
              items: post.decisionGuide.redesign,
            },
            {
              label: "You might only need optimization if",
              items: post.decisionGuide.optimization,
            },
          ],
        }
      : null;

  if (!post) {
    return (
      <PageLayout
        title="Post Not Found"
        description="The blog post you were looking for could not be found."
      >
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="text-[#9333EA] text-sm uppercase tracking-wider mb-4 block"
              style={{ fontFamily: "'VT323', monospace" }}
            >
              [BLOG]
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Post not found</h1>
            <p className="text-lg text-gray-600 mb-8">
              The article you requested does not exist in this build.
            </p>
            <Link href="/blog">
              <Button size="lg" className="bg-[#9333EA] hover:bg-[#7C3AED] text-white">
                BACK TO BLOG
              </Button>
            </Link>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={post.title}
      description={post.description}
      ogTitle={post.title}
      ogDescription={post.description}
      ogType="article"
    >
      <section className="py-20 px-4 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-10 md:mb-12">
            <span
              className="inline-flex items-center rounded-full bg-[#9333EA]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#9333EA] mb-5"
            >
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-5">
              {post.bodyTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#9333EA]" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#9333EA]" />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden mb-12 md:mb-16">
            <img
              src={post.image}
              alt={post.heroAlt}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-5 mb-10">
              {post.lede.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-10">
              {post.sections.map((section) => (
                <section key={section.id} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                    {section.title}
                  </h2>

                  {section.kind === "paragraphs" && (
                    <div className="space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-base md:text-lg leading-8 text-gray-700">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                  {section.kind === "bulleted-list" && (
                    <div className="space-y-4">
                      {section.intro && (
                        <p className="text-base md:text-lg leading-8 text-gray-700">{section.intro}</p>
                      )}
                      <ul className="space-y-3 rounded-2xl border border-[#9333EA]/10 bg-[#9333EA]/5 p-6 text-gray-700">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-3 text-base md:text-lg leading-8">
                            <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#9333EA]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.kind === "checklist" && (
                    <div className="space-y-4">
                      <p className="text-base md:text-lg leading-8 text-gray-700">{section.intro}</p>
                      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9333EA] mb-3">
                          Quick check
                        </p>
                        <ul className="space-y-3">
                          {section.items.map((item) => (
                            <li key={item} className="flex gap-3 text-base md:text-lg leading-8 text-gray-700">
                              <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#9333EA]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-base md:text-lg leading-8 text-gray-700">{section.outro}</p>
                    </div>
                  )}

                  {section.kind === "numbered-list" && (
                    <div className="space-y-4">
                      {section.intro && (
                        <p className="text-base md:text-lg leading-8 text-gray-700">{section.intro}</p>
                      )}
                      <ol className="space-y-3 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                        {section.items.map((item, index) => (
                          <li key={item} className="flex gap-4 text-base md:text-lg leading-8 text-gray-700">
                            <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#9333EA] border border-[#9333EA]/20">
                              {index + 1}
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {highlightSection && (
              <section className="mt-12 rounded-3xl border border-[#9333EA]/15 bg-[#9333EA]/5 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-5">
                  {highlightSection.title}
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {highlightSection.columns.map((column) => (
                    <div key={column.label} className="rounded-2xl border border-white bg-white/80 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9333EA] mb-3">
                        {column.label}
                      </p>
                      <ul className="space-y-3">
                        {column.items.map((item) => (
                          <li key={item} className="flex gap-3 text-base leading-7 text-gray-700">
                            <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#9333EA]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                What to do next
              </h2>
              <ol className="space-y-4">
                {post.nextSteps.map((item, index) => (
                  <li key={item} className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#9333EA]/10 text-sm font-semibold text-[#9333EA]">
                      {index + 1}
                    </span>
                    <span className="text-base md:text-lg leading-8 text-gray-700">{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-12 rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-3">
                Ready for a sharper, higher-converting site?
              </h2>
              <p className="text-base md:text-lg leading-8 text-gray-600 mb-6">
                {post.cta.supportingLine}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={post.cta.primaryHref}>
                  <Button size="lg" className="bg-[#9333EA] hover:bg-[#7C3AED] text-white w-full sm:w-auto">
                    {post.cta.primaryLabel}
                  </Button>
                </Link>
                <Link href={post.cta.secondaryHref}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    {post.cta.secondaryLabel}
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
