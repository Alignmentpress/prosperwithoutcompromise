export type BlogStatus = "draft" | "published";

export type BlogPostRow = {
  id: string;
  slug: string;
  locale: "en" | "fr";
  title: string;
  excerpt: string | null;
  content_json: unknown;
  seo_keywords: string;
  status: BlogStatus;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export const emptyTiptapDoc = {
  type: "doc",
  content: [{ type: "paragraph" }],
} as const;
