"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { useCallback, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { saveBlogPost, deleteBlogPost } from "@/app/actions/cms-blog";
import { tiptapExtensions } from "@/lib/tiptap/extensions";
import type { BlogPostRow } from "@/lib/types/blog";
import { slugify } from "@/lib/slug";
import type { BlogStatus } from "@/lib/types/blog";

function ToolbarButton({
  onClick,
  active,
  children,
  title,
}: {
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <button
      type="button"
      title={title}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={`min-h-[36px] px-2.5 rounded-md text-sm font-medium transition-colors ${
        active ? "bg-gold-500/20 text-gold-300" : "text-gray-300 hover:bg-white/10 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

export default function BlogEditorForm({ post }: { post: BlogPostRow }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [title, setTitle] = useState(post.title);
  const [slug, setSlug] = useState(post.slug);
  const [slugManual, setSlugManual] = useState(false);
  const [excerpt, setExcerpt] = useState(post.excerpt ?? "");
  const [seo, setSeo] = useState(post.seo_keywords);
  const [locale, setLocale] = useState<"en" | "fr">(post.locale);
  const [status, setStatus] = useState<BlogStatus>(post.status);
  const [publishedAt, setPublishedAt] = useState(
    post.published_at ? post.published_at.slice(0, 16) : ""
  );
  const [msg, setMsg] = useState<string | null>(null);

  const editor = useEditor({
    extensions: tiptapExtensions("Write with headings, lists, links, and images…"),
    content: post.content_json as object,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "admin-editor-prose focus:outline-none min-h-[360px] px-4 py-4 text-gray-100 text-base leading-relaxed",
      },
    },
  });

  const syncSlugFromTitle = useCallback(() => {
    if (!slugManual && title) setSlug(slugify(title));
  }, [slugManual, title]);

  const save = () => {
    if (!editor) return;
    setMsg(null);
    startTransition(async () => {
      const r = await saveBlogPost({
        id: post.id,
        title,
        slug,
        locale,
        excerpt,
        seo_keywords: seo,
        status,
        content_json: editor.getJSON(),
        published_at:
          status === "published"
            ? publishedAt
              ? new Date(publishedAt).toISOString()
              : new Date().toISOString()
            : null,
      });
      if ("error" in r && r.error) setMsg(r.error);
      else {
        setMsg("Saved successfully.");
        router.refresh();
      }
    });
  };

  const remove = () => {
    if (!confirm("Delete this article permanently?")) return;
    startTransition(async () => {
      const r = await deleteBlogPost(post.id);
      if ("error" in r && r.error) setMsg(r.error);
      else router.push("/admin/blog");
    });
  };

  if (!editor) {
    return (
      <div className="rounded-xl border border-white/10 bg-navy-900/50 p-12 text-center text-gray-400">
        Loading editor…
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl text-white">Edit article</h1>
          <p className="text-sm text-gray-500 mt-1">
            Rich content, SEO keywords, and locale — published posts appear under Insights.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={remove}
            disabled={pending}
            className="px-4 py-2.5 rounded-lg text-sm font-medium text-red-400/90 hover:bg-red-500/10 border border-red-500/20 transition-colors disabled:opacity-50"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={save}
            disabled={pending}
            className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 hover:from-gold-400 hover:to-gold-500 shadow-lg shadow-gold-500/15 transition-all disabled:opacity-60"
          >
            {pending ? "Saving…" : "Save"}
          </button>
        </div>
      </div>

      {msg && (
        <p
          className={`text-sm rounded-lg px-4 py-3 border ${
            msg.includes("success") || msg.includes("Saved")
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
              : "border-red-500/30 bg-red-500/10 text-red-300"
          }`}
        >
          {msg}
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Title</span>
          <input
            className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900/80 px-4 py-3 text-white placeholder:text-gray-600"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={syncSlugFromTitle}
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">URL slug</span>
          <input
            className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900/80 px-4 py-3 text-white font-mono text-sm"
            value={slug}
            onChange={(e) => {
              setSlugManual(true);
              setSlug(e.target.value);
            }}
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Language</span>
          <select
            className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900/80 px-4 py-3 text-white"
            value={locale}
            onChange={(e) => setLocale(e.target.value === "fr" ? "fr" : "en")}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Excerpt</span>
          <textarea
            rows={3}
            className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900/80 px-4 py-3 text-white resize-y min-h-[5rem]"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Short summary for cards and SEO."
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            SEO keywords
          </span>
          <input
            className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900/80 px-4 py-3 text-white"
            value={seo}
            onChange={(e) => setSeo(e.target.value)}
            placeholder="alignment, prosperity, faith, leadership (comma-separated)"
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Status</span>
          <select
            className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900/80 px-4 py-3 text-white"
            value={status}
            onChange={(e) => setStatus(e.target.value as BlogStatus)}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
        {status === "published" && (
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Publish date
            </span>
            <input
              type="datetime-local"
              className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900/80 px-4 py-3 text-white"
              value={publishedAt}
              onChange={(e) => setPublishedAt(e.target.value)}
            />
          </label>
        )}
      </div>

      <div className="rounded-xl border border-gold-500/20 bg-navy-900/40 overflow-hidden">
        <div className="flex flex-wrap gap-1 p-2 border-b border-white/10 bg-navy-950/80">
          <ToolbarButton
            title="Bold"
            active={editor.isActive("bold")}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <strong>B</strong>
          </ToolbarButton>
          <ToolbarButton
            title="Italic"
            active={editor.isActive("italic")}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <em>I</em>
          </ToolbarButton>
          <ToolbarButton
            title="Underline"
            active={editor.isActive("underline")}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            <span className="underline">U</span>
          </ToolbarButton>
          <span className="w-px h-6 bg-white/10 self-center mx-1" aria-hidden />
          <ToolbarButton
            title="Heading 2"
            active={editor.isActive("heading", { level: 2 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          >
            H2
          </ToolbarButton>
          <ToolbarButton
            title="Heading 3"
            active={editor.isActive("heading", { level: 3 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          >
            H3
          </ToolbarButton>
          <span className="w-px h-6 bg-white/10 self-center mx-1" aria-hidden />
          <ToolbarButton
            title="Bullet list"
            active={editor.isActive("bulletList")}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            • List
          </ToolbarButton>
          <ToolbarButton
            title="Numbered list"
            active={editor.isActive("orderedList")}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
            1. List
          </ToolbarButton>
          <span className="w-px h-6 bg-white/10 self-center mx-1" aria-hidden />
          <ToolbarButton
            title="Link"
            active={editor.isActive("link")}
            onClick={() => {
              const prev = editor.getAttributes("link").href as string | undefined;
              const url = window.prompt("Link URL", prev ?? "https://");
              if (url === null) return;
              if (url === "") {
                editor.chain().focus().unsetLink().run();
                return;
              }
              editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
            }}
          >
            Link
          </ToolbarButton>
          <ToolbarButton
            title="Image from URL"
            onClick={() => {
              const url = window.prompt("Image URL (https://…)");
              if (url) editor.chain().focus().setImage({ src: url }).run();
            }}
          >
            Image
          </ToolbarButton>
          <ToolbarButton title="Undo" onClick={() => editor.chain().focus().undo().run()}>
            Undo
          </ToolbarButton>
          <ToolbarButton title="Redo" onClick={() => editor.chain().focus().redo().run()}>
            Redo
          </ToolbarButton>
        </div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
