import { createFileRoute } from "@tanstack/react-router";
import { deleteLead, getStats, listLeads, listServices, toggleService, updateLeadStatus, type Lead } from "@/server/dummy-store";

// GET /api/admin?resource=leads | services | stats
// POST /api/admin  { action: "updateLeadStatus" | "deleteLead" | "toggleService", id, status? }
export const Route = createFileRoute("/api/admin")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const resource = url.searchParams.get("resource") ?? "stats";
        if (resource === "leads") return Response.json({ leads: listLeads() });
        if (resource === "services") return Response.json({ services: listServices() });
        return Response.json({ stats: getStats() });
      },
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { action, id, status } = body ?? {};
          if (action === "updateLeadStatus" && id && status) {
            const lead = updateLeadStatus(String(id), status as Lead["status"]);
            return lead ? Response.json({ ok: true, lead }) : new Response("Not found", { status: 404 });
          }
          if (action === "deleteLead" && id) {
            const ok = deleteLead(String(id));
            return Response.json({ ok });
          }
          if (action === "toggleService" && id) {
            const s = toggleService(String(id));
            return s ? Response.json({ ok: true, service: s }) : new Response("Not found", { status: 404 });
          }
          return new Response(JSON.stringify({ error: "Unknown action" }), { status: 400, headers: { "Content-Type": "application/json" } });
        } catch {
          return new Response(JSON.stringify({ error: "Bad request" }), { status: 400, headers: { "Content-Type": "application/json" } });
        }
      },
    },
  },
});
