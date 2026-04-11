import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedPostBySlug } from "@/lib/data/blog-public";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { tiptapJsonToHtml } from "@/lib/tiptap/html";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const post = await getPublishedPostBySlug(l === "fr" ? "fr" : "en", slug);
  if (!post) return { title: "Article" };
  const keywords = post.seo_keywords
    .split(/[,;]+/)
    .map((k) => k.trim())
    .filter(Boolean);
  return {
    title: post.title,
    description: post.excerpt ?? post.title,
    keywords: keywords.length ? keywords : undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
    },
  };
}

export default async function ResourceArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const post = await getPublishedPostBySlug(l === "fr" ? "fr" : "en", slug);
  if (!post) notFound();

  const t = getTranslations(l);
  const html = tiptapJsonToHtml(post.content_json);

  return (
    <>
      <section className="pt-nav-lg pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-40 left-1/4 w-[500px] h-[500px] bg-gold-500/[0.04] rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">{t.resources.cmsEyebrow}</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
          {post.published_at && (
            <time dateTime={post.published_at} className="text-gray-500 text-sm">
              {new Date(post.published_at).toLocaleDateString(l === "fr" ? "fr-FR" : "en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </div>
      </section>

      <section className="pb-24 px-4 relative">
        <div className="absolute inset-0 bg-navy-950" />
        <article className="relative z-10 max-w-3xl mx-auto">
          <div className="cms-prose" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href={`/${l}/resources`}
              className="text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {l === "fr" ? "Retour aux ressources" : "Back to Insights"}
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
