import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getPublishedPosts } from "@/lib/data/blog-public";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  return { title: t.blog.metaTitle, description: t.blog.metaDescription };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const t = getTranslations(l);
  const posts = await getPublishedPosts(l === "fr" ? "fr" : "en");

  return (
    <>
      <section className="pt-nav-lg pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-32 right-1/4 w-[480px] h-[480px] bg-gold-500/[0.05] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05),transparent_72%)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">{t.blog.heroLabel}</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.blog.titlePrefix}
            <span className="text-gradient-gold">{t.blog.titleHighlight}</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">{t.blog.subtitle}</p>
        </div>
      </section>

      <section className="py-24 px-4 relative border-t border-white/5">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative z-10 max-w-6xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/${l}/blog/${post.slug}`}
                  className="group border-glow rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-gold-400/30 flex flex-col text-left"
                >
                  {post.published_at && (
                    <time dateTime={post.published_at} className="text-gray-500 text-xs uppercase tracking-[0.18em] mb-4">
                      {new Date(post.published_at).toLocaleDateString(l === "fr" ? "fr-FR" : "en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-gold-200 transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && <p className="text-gray-400 text-sm leading-relaxed flex-grow line-clamp-4">{post.excerpt}</p>}
                  <span className="mt-6 text-gold-400 font-semibold text-sm inline-flex items-center gap-2">
                    {t.blog.readArticle}
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center border-glow rounded-2xl bg-white/[0.02] p-10">
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">{t.blog.emptyLabel}</p>
              <h2 className="font-serif text-3xl font-bold text-white mb-4">{t.blog.emptyTitle}</h2>
              <p className="text-gray-400 leading-relaxed">{t.blog.emptyDescription}</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.04)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">{t.blog.newsletterTitle}</h2>
          <p className="text-gray-400 text-base mb-8 max-w-md mx-auto">{t.blog.newsletterDescription}</p>
          <div className="max-w-md mx-auto">
            <LeadCaptureForm source="blog-page" compact locale={l} />
          </div>
        </div>
      </section>
    </>
  );
}
