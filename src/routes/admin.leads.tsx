import { useEffect, useState } from "react";
import { Trash2, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  business?: string;
  service?: string;
  message?: string;
  createdAt: string;
  status: "new" | "contacted" | "won" | "lost";
};

const STATUSES: Lead["status"][] = ["new", "contacted", "won", "lost"];

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/leads");
        if (!response.ok) {
          throw new Error("Failed to load leads");
        }
        const data = await response.json();
        setLeads(data.leads || []);
      } catch (error) {
        console.error("Failed to fetch leads:", error);
        toast.error("Unable to load leads. Please refresh.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const updateStatus = async (id: string, status: Lead["status"]) => {
    try {
      const response = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      if (!response.ok) {
        throw new Error("Failed to update lead status");
      }

      setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, status } : l)));
      toast.success(`Marked as ${status}`);
    } catch (error) {
      console.error("Failed to update lead:", error);
      toast.error("Failed to update lead status. Please try again.");
    }
  };

  const remove = (id: string) => {
    if (!confirm("Delete this lead?")) return;
    setLeads((ls) => ls.filter((l) => l.id !== id));
    toast.success("Lead deleted");
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Leads</p>
          <h1 className="font-display text-3xl md:text-4xl mt-1">Inquiries</h1>
          <p className="text-muted-foreground mt-2">{leads.length} total leads from the contact form.</p>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {loading && <p className="text-muted-foreground text-sm">Loading…</p>}
        {!loading && leads.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
            No leads yet. Submissions from the contact form will appear here.
          </div>
        )}
        {leads.map((l) => (
          <article key={l.id} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{l.name}</h3>
                  <StatusBadge status={l.status} />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {l.business || "—"} · {l.service || "—"} · {new Date(l.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={l.status}
                  onChange={(e) => updateStatus(l.id, e.target.value as Lead["status"])}
                  className="text-xs rounded-md border border-input bg-background px-2 py-1.5"
                >
                  {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <button onClick={() => remove(l.id)} className="p-2 rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition" aria-label="Delete">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
              <a href={`tel:${l.phone}`} className="flex items-center gap-1.5 text-foreground/80 hover:text-accent"><Phone className="h-3.5 w-3.5" />{l.phone}</a>
              <a href={`mailto:${l.email}`} className="flex items-center gap-1.5 text-foreground/80 hover:text-accent"><Mail className="h-3.5 w-3.5" />{l.email}</a>
            </div>
            {l.message && <p className="mt-3 text-sm text-muted-foreground border-t border-border pt-3">{l.message}</p>}
          </article>
        ))}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: Lead["status"] }) {
  const map: Record<Lead["status"], string> = {
    new: "bg-accent/10 text-accent",
    contacted: "bg-blue-100 text-blue-700",
    won: "bg-green-100 text-green-700",
    lost: "bg-muted text-muted-foreground",
  };
  return <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${map[status]}`}>{status}</span>;
}
