"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCmsAdminUser } from "@/lib/auth/cms-admin";
import { createSupabaseServer } from "@/lib/supabase";
import type { BlogStatus } from "@/lib/types/blog";
import { emptyTiptapDoc } from "@/lib/types/blog";

async function requireAdmin() {
  const user = await getCmsAdminUser();
  if (!user) {
    redirect("/admin/login");
  }
  return user;
}

export type SaveBlogPostInput = {
  id?: string | null;
  title: string;
  slug: string;
  locale: "en" | "fr";
  excerpt: string;
  seo_keywords: string;
  status: BlogStatus;
  content_json: unknown;
  published_at?: string | null;
};

export async function saveBlogPost(input: SaveBlogPostInput) {
  await requireAdmin();
  const supabase = createSupabaseServer();

  const title = input.title?.trim();
  const slug = input.slug?.trim().toLowerCase();
  if (!title || !slug) {
    return { error: "Title and slug are required." };
  }

  const locale = input.locale === "fr" ? "fr" : "en";
  const excerpt = input.excerpt?.trim() || null;
  const seo_keywords = input.seo_keywords?.trim() ?? "";
  const status = input.status;

  const published_at =
    status === "published"
      ? input.published_at?.trim() || new Date().toISOString()
      : null;

  const payload = {
    title,
    slug,
    locale,
    excerpt,
    content_json: input.content_json,
    seo_keywords,
    status,
    published_at,
    updated_at: new Date().toISOString(),
  };

  if (input.id) {
    const { error } = await supabase.from("blog_posts").update(payload).eq("id", input.id);
    if (error) return { error: error.message };
    revalidatePath("/admin/blog");
    revalidatePath(`/${locale}/resources`);
    revalidatePath(`/${locale}/resources/${slug}`);
    return { success: true as const, id: input.id };
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .insert({
      ...payload,
      created_at: new Date().toISOString(),
    })
    .select("id")
    .single();

  if (error) return { error: error.message };
  revalidatePath("/admin/blog");
  revalidatePath(`/${locale}/resources`);
  if (data?.id) {
    revalidatePath(`/${locale}/resources/${slug}`);
  }
  return { success: true as const, id: data?.id };
}

export async function deleteBlogPost(id: string) {
  await requireAdmin();
  const supabase = createSupabaseServer();
  const { data: row } = await supabase.from("blog_posts").select("slug, locale").eq("id", id).maybeSingle();
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/blog");
  if (row) {
    revalidatePath(`/${row.locale}/resources`);
    revalidatePath(`/${row.locale}/resources/${row.slug}`);
  }
  return { success: true as const };
}

export async function createDraftPost(formData: FormData): Promise<void> {
  await requireAdmin();
  const supabase = createSupabaseServer();
  const locale = formData.get("locale") === "fr" ? "fr" : "en";
  const slug = `draft-${Date.now().toString(36)}`;
  const { data, error } = await supabase
    .from("blog_posts")
    .insert({
      slug,
      locale,
      title: "Untitled draft",
      excerpt: null,
      content_json: emptyTiptapDoc,
      seo_keywords: "",
      status: "draft",
      published_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .select("id")
    .single();

  if (error || !data) {
    redirect(`/admin/blog?error=${encodeURIComponent(error?.message ?? "Failed to create draft.")}`);
  }
  redirect(`/admin/blog/${data.id}/edit`);
}
