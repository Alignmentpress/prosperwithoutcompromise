import { Suspense } from "react";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export const metadata = {
  title: "CMS Sign in",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <p className="text-center text-gold-400/90 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
          Alignment Press
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-white text-center mb-10">Content studio</h1>
        <Suspense
          fallback={<p className="text-center text-gray-500 text-sm">Loading…</p>}
        >
          <AdminLoginForm />
        </Suspense>
      </div>
    </div>
  );
}
