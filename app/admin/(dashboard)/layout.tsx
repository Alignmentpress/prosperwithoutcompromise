import { redirect } from "next/navigation";
import AdminShell from "@/components/admin/AdminShell";
import { getCmsAdminUser } from "@/lib/auth/cms-admin";

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getCmsAdminUser();
  if (!user?.email) redirect("/admin/login");
  return <AdminShell email={user.email}>{children}</AdminShell>;
}
