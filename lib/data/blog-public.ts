import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { BlogPostRow } from "@/lib/types/blog";
import { STATIC_BLOG_POSTS } from "./static-blog-posts";

export type BlogCard = Pick<BlogPostRow, "id" | "slug" | "title" | "excerpt" | "published_at" | "seo_keywords">;

function staticCardsForLocale(locale: "en" | "fr"): BlogCard[] {
  return STATIC_BLOG_POSTS.filter((p) => p.locale === locale).map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    published_at: p.published_at,
    seo_keywords: p.seo_keywords,
  }));
}

function mergeBySlug(db: BlogCard[], extra: BlogCard[]): BlogCard[] {
  const slugs = new Set(db.map((p) => p.slug));
  return [...db, ...extra.filter((p) => !slugs.has(p.slug))];
}

function sortByPublishedDesc(cards: BlogCard[]): BlogCard[] {
  return [...cards].sort((a, b) => {
    const ta = a.published_at ? new Date(a.published_at).getTime() : 0;
    const tb = b.published_at ? new Date(b.published_at).getTime() : 0;
    return tb - ta;
  });
}

export async function getPublishedPosts(locale: "en" | "fr"): Promise<BlogCard[]> {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, slug, title, excerpt, published_at, seo_keywords")
      .eq("locale", locale)
      .eq("status", "published")
      .order("published_at", { ascending: false, nullsFirst: false });

    const fromDb = error || !data ? [] : (data as BlogCard[]);
    const merged = mergeBySlug(fromDb, staticCardsForLocale(locale));
    return sortByPublishedDesc(merged);
  } catch {
    return sortByPublishedDesc(staticCardsForLocale(locale));
  }
}

export async function getPublishedPostBySlug(
  locale: "en" | "fr",
  slug: string
): Promise<BlogPostRow | null> {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("locale", locale)
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();

    if (!error && data) return data as BlogPostRow;
  } catch {
    /* fall through to static */
  }

  const local = STATIC_BLOG_POSTS.find((p) => p.locale === locale && p.slug === slug);
  return local ?? null;
}
