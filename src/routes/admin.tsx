import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Users, Wrench, ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Sellers Growth Point" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminLayout,
});

const NAV = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/admin/leads", label: "Leads", icon: Users },
  { to: "/admin/services", label: "Services", icon: Wrench },
] as const;

function AdminLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex bg-secondary/30">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-card">
        <div className="h-16 px-5 flex items-center gap-2.5 border-b border-border">
          <img src={logo} alt="Logo" className="h-8 w-8 rounded-full ring-1 ring-border" />
          <div className="leading-tight">
            <p className="text-sm font-semibold">Admin Console</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">CLUTCHNEXXT</p>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {NAV.map((n) => {
            const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                  active ? "bg-accent text-accent-foreground font-semibold" : "text-foreground/70 hover:bg-muted hover:text-foreground"
                }`}
              >
                <n.icon className="h-4 w-4" />
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-border">
          <Link to="/" className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to site
          </Link>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="flex-1 flex flex-col">
        <header className="md:hidden h-14 border-b border-border bg-card flex items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-7 w-7 rounded-full ring-1 ring-border" />
            <span className="font-semibold text-sm">Admin</span>
          </Link>
          <nav className="flex gap-1">
            {NAV.map((n) => {
              const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
              return (
                <Link key={n.to} to={n.to} className={`p-2 rounded-md ${active ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}>
                  <n.icon className="h-4 w-4" />
                </Link>
              );
            })}
          </nav>
        </header>
        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
