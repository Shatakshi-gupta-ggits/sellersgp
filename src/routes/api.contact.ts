import { createFileRoute } from "@tanstack/react-router";
import { createLead, listLeads } from "@/server/dummy-store";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      GET: async () => Response.json({ leads: listLeads() }),
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { name, phone, email, business, service, message } = body ?? {};
          if (!name || !phone || !email) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400, headers: { "Content-Type": "application/json" } });
          }
          const lead = createLead({
            name: String(name).slice(0, 200),
            phone: String(phone).slice(0, 50),
            email: String(email).slice(0, 200),
            business: business ? String(business).slice(0, 200) : undefined,
            service: service ? String(service).slice(0, 200) : undefined,
            message: message ? String(message).slice(0, 2000) : undefined,
          });
          return Response.json({ ok: true, lead }, { status: 201 });
        } catch {
          return new Response(JSON.stringify({ error: "Bad request" }), { status: 400, headers: { "Content-Type": "application/json" } });
        }
      },
    },
  },
});
