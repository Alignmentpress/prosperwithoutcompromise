import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { BlogPostRow } from "@/lib/types/blog";

export type BlogCard = Pick<BlogPostRow, "id" | "slug" | "title" | "excerpt" | "published_at" | "seo_keywords">;

export async function getPublishedPosts(locale: "en" | "fr"): Promise<BlogCard[]> {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, slug, title, excerpt, published_at, seo_keywords")
      .eq("locale", locale)
      .eq("status", "published")
      .order("published_at", { ascending: false, nullsFirst: false });

    if (error || !data) return [];
    return data as BlogCard[];
  } catch {
    return [];
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

    if (error || !data) return null;
    return data as BlogPostRow;
  } catch {
    return null;
  }
}
