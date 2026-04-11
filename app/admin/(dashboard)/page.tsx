import Link from "next/link";
import { createSupabaseServer } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
  const supabase = createSupabaseServer();

  const [leadsRes, postsRes, recentLeads] = await Promise.all([
    supabase.from("leads").select("*", { count: "exact", head: true }),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }),
    supabase.from("leads").select("first_name, email, source, created_at").order("created_at", { ascending: false }).limit(8),
  ]);

  const leadCount = leadsRes.count ?? 0;
  const postCount = postsRes.count ?? 0;
  const leads = recentLeads.data ?? [];

  return (
    <div className="max-w-4xl space-y-10">
      <div>
        <h1 className="font-serif text-3xl text-white">Overview</h1>
        <p className="text-gray-500 mt-2 text-sm">
          Leads from forms and articles published to the Insights section.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-navy-900/50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Newsletter &amp; leads</p>
          <p className="font-serif text-4xl text-white mt-2">{leadCount}</p>
          <p className="text-sm text-gray-500 mt-1">Total sign-ups captured in Supabase</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-navy-900/50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Articles</p>
          <p className="font-serif text-4xl text-white mt-2">{postCount}</p>
          <p className="text-sm text-gray-500 mt-1">Drafts and published posts</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/admin/blog"
          className="inline-flex items-center px-5 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 hover:from-gold-400 hover:to-gold-500 transition-all"
        >
          Manage blog
        </Link>
        <Link
          href="/en/resources"
          className="inline-flex items-center px-5 py-2.5 rounded-lg font-medium border border-white/15 text-gray-300 hover:bg-white/5 transition-colors"
        >
          View Insights (site)
        </Link>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Recent leads</h2>
        <div className="rounded-xl border border-white/10 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-navy-950/80 text-gray-500 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Source</th>
                <th className="px-4 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                    No leads yet, or the `leads` table is not available.
                  </td>
                </tr>
              ) : (
                leads.map((row: { first_name?: string; email?: string; source?: string; created_at?: string }, i: number) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="px-4 py-3 text-gray-200">{row.first_name ?? "—"}</td>
                    <td className="px-4 py-3 text-gray-400">{row.email}</td>
                    <td className="px-4 py-3 text-gray-500">{row.source ?? "—"}</td>
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                      {row.created_at ? new Date(row.created_at).toLocaleString() : "—"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
