import { createFileRoute } from "@tanstack/react-router";
import { Users, UserCheck, Trophy, XCircle, Wrench, TrendingUp } from "lucide-react";
import { getStats } from "@/server/dummy-store";

export const Route = createFileRoute("/admin/")({
  component: AdminOverview,
});

type Stats = {
  totalLeads: number; newLeads: number; contacted: number; won: number; lost: number;
  activeServices: number; totalServices: number;
};

function AdminOverview() {
  const stats: Stats = getStats();

  return (
    <div className="max-w-6xl mx-auto">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Overview</p>
        <h1 className="font-display text-3xl md:text-4xl mt-1">Welcome back, Admin 👋</h1>
        <p className="text-muted-foreground mt-2">Here's what's happening across Sellers Growth Point today.</p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat title="Total Leads" value={stats.totalLeads} icon={Users} loading={false} />
        <Stat title="New" value={stats.newLeads} icon={TrendingUp} loading={false} accent />
        <Stat title="Contacted" value={stats.contacted} icon={UserCheck} loading={false} />
        <Stat title="Won" value={stats.won} icon={Trophy} loading={false} />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat title="Lost" value={stats.lost} icon={XCircle} loading={false} />
        <Stat title="Active Services" value={stats.activeServices} icon={Wrench} loading={false} />
        <Stat title="Total Services" value={stats.totalServices} icon={Wrench} loading={false} />
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6">
        <h3 className="font-display text-xl">Quick links</h3>
        <p className="text-sm text-muted-foreground mt-1">Use the sidebar to manage leads and services.</p>
        <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
          <a href="/admin/leads" className="rounded-xl border border-border p-4 hover:border-accent/40 hover:bg-muted/40 transition">
            <p className="font-semibold">Manage Leads →</p>
            <p className="text-muted-foreground mt-1">Review inquiries from the contact form.</p>
          </a>
          <a href="/admin/services" className="rounded-xl border border-border p-4 hover:border-accent/40 hover:bg-muted/40 transition">
            <p className="font-semibold">Manage Services →</p>
            <p className="text-muted-foreground mt-1">Toggle which services are currently active.</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value, icon: Icon, loading, accent }: { title: string; value?: number; icon: React.ComponentType<{ className?: string }>; loading: boolean; accent?: boolean }) {
  return (
    <div className={`rounded-2xl border p-5 ${accent ? "border-accent/30 bg-accent/5" : "border-border bg-card"}`}>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{title}</p>
        <Icon className={`h-4 w-4 ${accent ? "text-accent" : "text-muted-foreground"}`} />
      </div>
      <p className="mt-3 font-display text-3xl">
        {loading ? <span className="text-muted-foreground/40">—</span> : value ?? 0}
      </p>
    </div>
  );
}
