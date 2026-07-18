import { supabase } from '../src/integrations/supabase/client'

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { data: leads, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: "Failed to fetch leads" });
    }

    const normalizedLeads = (leads || []).map((lead) => ({
      ...lead,
      createdAt: (lead as any).created_at,
    }));

    return res.status(200).json({ leads: normalizedLeads });
  } catch (error) {
    console.error("Leads API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
