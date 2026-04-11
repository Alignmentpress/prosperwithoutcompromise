import Link from "next/link";
import { signOutCms } from "@/app/actions/cms-auth";

const nav = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/blog", label: "Blog & insights" },
] as const;

export default function AdminShell({
  email,
  children,
}: {
  email: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#050816]">
      <aside className="lg:w-64 shrink-0 border-b lg:border-b-0 lg:border-r border-white/10 bg-navy-900/80 backdrop-blur-xl flex flex-col lg:min-h-screen">
        <div className="p-6 border-b border-white/5">
          <Link href="/admin" className="font-serif text-xl text-white tracking-wide">
            Alignment Press
          </Link>
          <p className="text-xs text-gold-400/90 mt-1 uppercase tracking-wider">Content studio</p>
        </div>
        <nav className="p-3 flex lg:flex-col gap-1 overflow-x-auto flex-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 whitespace-nowrap transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/5">
          <p className="text-xs text-gray-500 truncate mb-3" title={email}>
            {email}
          </p>
          <form action={signOutCms}>
            <button
              type="submit"
              className="w-full text-left px-4 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              Sign out
            </button>
          </form>
          <Link
            href="/en"
            className="block mt-2 px-4 py-2 text-sm text-gold-400/90 hover:text-gold-300 transition-colors"
          >
            View site →
          </Link>
        </div>
      </aside>
      <main className="flex-1 min-w-0 p-6 sm:p-8 lg:p-10">{children}</main>
    </div>
  );
}
