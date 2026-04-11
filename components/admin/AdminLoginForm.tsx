"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createBrowserSupabase } from "@/lib/supabase/client";

export default function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const err = searchParams.get("error");

  useEffect(() => {
    if (err === "forbidden") {
      createBrowserSupabase().auth.signOut();
    }
  }, [err]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(
    err === "forbidden" ? "This account is not authorized for the CMS." : null
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      const supabase = createBrowserSupabase();
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setMessage(error.message);
        setLoading(false);
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setMessage("Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <label htmlFor="cms-email" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
          Email
        </label>
        <input
          id="cms-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-navy-900/80 px-4 py-3 text-white"
        />
      </div>
      <div>
        <label
          htmlFor="cms-password"
          className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2"
        >
          Password
        </label>
        <input
          id="cms-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-navy-900/80 px-4 py-3 text-white"
        />
      </div>
      {message && (
        <p className="text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">{message}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-lg font-semibold bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 hover:from-gold-400 hover:to-gold-500 shadow-lg shadow-gold-500/20 transition-all disabled:opacity-60"
      >
        {loading ? "Signing in…" : "Sign in to CMS"}
      </button>
      <p className="text-xs text-gray-500 text-center leading-relaxed">
        Use the email listed in <code className="text-gold-400/80">CMS_ADMIN_EMAILS</code>. Create the user in
        Supabase Authentication with email & password.
      </p>
    </form>
  );
}
