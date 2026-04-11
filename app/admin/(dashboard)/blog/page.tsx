import Link from "next/link";
import { createDraftPost } from "@/app/actions/cms-blog";
import { createSupabaseServer } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function AdminBlogListPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error: createError } = await searchParams;
  const supabase = createSupabaseServer();
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("id, slug, title, locale, status, published_at, updated_at")
    .order("updated_at", { ascending: false });

  const rows = posts ?? [];

  return (
    <div className="max-w-5xl space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-white">Blog &amp; insights</h1>
          <p className="text-gray-500 mt-2 text-sm max-w-xl">
            Published articles appear on the public Insights page for each language. Use SEO keywords for discoverability.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <form action={createDraftPost}>
            <input type="hidden" name="locale" value="en" />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 hover:from-gold-400 hover:to-gold-500 shadow-lg shadow-gold-500/15 transition-all"
            >
              New article (EN)
            </button>
          </form>
          <form action={createDraftPost}>
            <input type="hidden" name="locale" value="fr" />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg font-medium border border-white/15 text-gray-200 hover:bg-white/5 transition-colors"
            >
              New article (FR)
            </button>
          </form>
        </div>
      </div>

      {createError && (
        <p className="text-sm text-red-300 bg-red-500/10 border border-red-500/25 rounded-lg px-4 py-3">
          {decodeURIComponent(createError)}
        </p>
      )}

      {error && (
        <p className="text-sm text-amber-300 bg-amber-500/10 border border-amber-500/25 rounded-lg px-4 py-3">
          Could not load posts. Run the SQL migration for <code className="text-gold-400">blog_posts</code> in Supabase.
        </p>
      )}

      <div className="rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full text-sm text-left min-w-[640px]">
          <thead className="bg-navy-950/80 text-gray-500 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Locale</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Updated</th>
              <th className="px-4 py-3 font-medium w-28" />
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-gray-500">
                  No articles yet. Create one in English or French.
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={row.id} className="hover:bg-white/[0.02]">
                  <td className="px-4 py-3">
                    <p className="text-gray-100 font-medium">{row.title}</p>
                    <p className="text-xs text-gray-500 font-mono mt-0.5">{row.slug}</p>
                  </td>
                  <td className="px-4 py-3 text-gray-400 uppercase">{row.locale}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        row.status === "published"
                          ? "bg-emerald-500/15 text-emerald-300"
                          : "bg-white/5 text-gray-400"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                    {row.updated_at ? new Date(row.updated_at).toLocaleString() : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/blog/${row.id}/edit`}
                      className="text-gold-400 hover:text-gold-300 font-medium"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
