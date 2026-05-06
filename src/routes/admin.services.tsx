import { useState } from "react";
import { toast } from "sonner";

type Service = {
  id: string;
  title: string;
  description: string;
  slug: string;
  active: boolean;
};

const INITIAL_SERVICES: Service[] = [
  { id: "service-1", title: "Marketplace Management", description: "End-to-end account management on Amazon, Flipkart, Meesho, Myntra & more.", slug: "marketplace-management", active: true },
  { id: "service-2", title: "Performance Advertising", description: "Meta Ads, Google Ads & marketplace PPC optimized for ROI.", slug: "performance-advertising", active: true },
  { id: "service-3", title: "Web & D2C Development", description: "Conversion-focused websites and direct-to-consumer funnels.", slug: "web-d2c-development", active: false },
];

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);

  const toggle = (id: string) => {
    setServices((items) =>
      items.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item,
      ),
    );
  };

  return (
    <div className="max-w-5xl mx-auto">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Services</p>
      <h1 className="font-display text-3xl md:text-4xl mt-1">Catalog</h1>
      <p className="text-muted-foreground mt-2">Toggle which services are currently active for new clients.</p>

      <div className="mt-8 space-y-3">
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
