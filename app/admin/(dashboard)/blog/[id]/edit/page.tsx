import { notFound } from "next/navigation";
import BlogEditorForm from "@/components/admin/BlogEditorForm";
import { createSupabaseServer } from "@/lib/supabase";
import type { BlogPostRow } from "@/lib/types/blog";

export const dynamic = "force-dynamic";

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = createSupabaseServer();
  const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id).maybeSingle();

  if (error || !data) notFound();

  return <BlogEditorForm post={data as BlogPostRow} />;
}
