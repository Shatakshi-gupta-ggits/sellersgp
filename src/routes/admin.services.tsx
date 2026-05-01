import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/admin/services")({
  component: AdminServices,
});

type Service = { id: string; slug: string; title: string; description: string; active: boolean; createdAt: string };

function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from('services').select('*').order('created_at', { ascending: true })
      .then(({ data, error }) => {
        if (!error && data) {
          setServices(data.map(d => ({ ...d, createdAt: d.created_at })));
        }
        setLoading(false);
      });
  }, []);

  const toggle = async (id: string) => {
    const service = services.find(s => s.id === id);
    if (!service) return;
    
    const newStatus = !service.active;
    const { error } = await supabase.from('services').update({ active: newStatus }).eq('id', id);
    
    if (!error) {
      setServices((s) => s.map((x) => (x.id === id ? { ...x, active: newStatus } : x)));
      toast.success(newStatus ? "Service activated" : "Service paused");
    } else {
      toast.error("Failed to update service");
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Services</p>
      <h1 className="font-display text-3xl md:text-4xl mt-1">Catalog</h1>
      <p className="text-muted-foreground mt-2">Toggle which services are currently active for new clients.</p>

      <div className="mt-8 space-y-3">
        {loading && <p className="text-muted-foreground text-sm">Loading…</p>}
        {services.map((s) => (
          <article key={s.id} className="rounded-2xl border border-border bg-card p-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{s.title}</h3>
                <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${s.active ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"}`}>
                  {s.active ? "Active" : "Paused"}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
              <p className="text-xs text-muted-foreground mt-1 font-mono">/{s.slug}</p>
            </div>
            <button
              onClick={() => toggle(s.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${s.active ? "bg-muted text-foreground hover:bg-muted/70" : "bg-accent text-accent-foreground hover:opacity-90"}`}
            >
              {s.active ? "Pause" : "Activate"}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
