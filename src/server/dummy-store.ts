/**
 * DUMMY IN-MEMORY DATA STORE
 * --------------------------
 * This is a placeholder for your real database (MongoDB or SQL).
 *
 * To swap in a real DB:
 *   1. Replace the arrays below with DB queries (e.g. `await db.collection("leads").find()`).
 *   2. Keep the same exported function signatures so the API routes don't need to change.
 *   3. The TypeScript types below already mirror a clean schema you can use to build your tables/collections.
 *
 * Example SQL schemas:
 *   CREATE TABLE leads (
 *     id UUID PRIMARY KEY,
 *     name TEXT NOT NULL, phone TEXT NOT NULL, email TEXT NOT NULL,
 *     business TEXT, service TEXT, message TEXT,
 *     status TEXT DEFAULT 'new',
 *     created_at TIMESTAMPTZ DEFAULT NOW()
 *   );
 *   CREATE TABLE services (
 *     id UUID PRIMARY KEY, slug TEXT UNIQUE, title TEXT, description TEXT,
 *     active BOOLEAN DEFAULT true, created_at TIMESTAMPTZ DEFAULT NOW()
 *   );
 *
 * NOTE: Because this lives in module scope on a serverless runtime,
 *       data resets between cold starts. For demos / local dev only.
 */

export type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  business?: string;
  service?: string;
  message?: string;
  status: "new" | "contacted" | "won" | "lost";
  createdAt: string;
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  active: boolean;
  createdAt: string;
};

const leads: Lead[] = [
  { id: "ld_1", name: "Rohit Sharma", phone: "+91 9876543210", email: "rohit@brandx.in", business: "BrandX Apparel", service: "Amazon Account Management", message: "We do 5L/month offline, want to launch on Amazon.", status: "new", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString() },
  { id: "ld_2", name: "Priya Mehta", phone: "+91 9123456780", email: "priya@kitchenco.in", business: "KitchenCo", service: "Flipkart / Meesho Management", message: "Looking for end-to-end management on Flipkart.", status: "contacted", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() },
  { id: "ld_3", name: "Arjun Kumar", phone: "+91 9988776655", email: "arjun@trendline.co", business: "Trendline Fashion", service: "Myntra / Ajio (Fashion)", status: "won", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString() },
];

const services: Service[] = [
  { id: "sv_1", slug: "amazon-management", title: "Amazon Account Management", description: "End-to-end Amazon ops, ads & growth.", active: true, createdAt: new Date().toISOString() },
  { id: "sv_2", slug: "flipkart-meesho", title: "Flipkart & Meesho Management", description: "Listings, ads & fulfilment for budget marketplaces.", active: true, createdAt: new Date().toISOString() },
  { id: "sv_3", slug: "fashion-myntra-ajio", title: "Myntra & Ajio (Fashion)", description: "Brand onboarding, lookbooks & seasonal campaigns.", active: true, createdAt: new Date().toISOString() },
  { id: "sv_4", slug: "meta-ads", title: "Meta Ads (FB & Instagram)", description: "ROI-focused creative + targeting.", active: true, createdAt: new Date().toISOString() },
  { id: "sv_5", slug: "web-d2c", title: "Web Development & D2C", description: "Conversion-focused websites & funnels.", active: true, createdAt: new Date().toISOString() },
  { id: "sv_6", slug: "online-selling-program", title: "Online Selling Program", description: "Structured training for sellers.", active: false, createdAt: new Date().toISOString() },
];

// LEADS
export function listLeads(): Lead[] {
  return [...leads].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
export function createLead(input: Omit<Lead, "id" | "status" | "createdAt">): Lead {
  const lead: Lead = {
    id: `ld_${Math.random().toString(36).slice(2, 9)}`,
    status: "new",
    createdAt: new Date().toISOString(),
    ...input,
  };
  leads.unshift(lead);
  return lead;
}
export function updateLeadStatus(id: string, status: Lead["status"]): Lead | null {
  const lead = leads.find((l) => l.id === id);
  if (!lead) return null;
  lead.status = status;
  return lead;
}
export function deleteLead(id: string): boolean {
  const i = leads.findIndex((l) => l.id === id);
  if (i === -1) return false;
  leads.splice(i, 1);
  return true;
}

// SERVICES
export function listServices(): Service[] {
  return [...services].sort((a, b) => a.title.localeCompare(b.title));
}
export function toggleService(id: string): Service | null {
  const s = services.find((x) => x.id === id);
  if (!s) return null;
  s.active = !s.active;
  return s;
}

// STATS
export function getStats() {
  return {
    totalLeads: leads.length,
    newLeads: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    won: leads.filter((l) => l.status === "won").length,
    lost: leads.filter((l) => l.status === "lost").length,
    activeServices: services.filter((s) => s.active).length,
    totalServices: services.length,
  };
}
