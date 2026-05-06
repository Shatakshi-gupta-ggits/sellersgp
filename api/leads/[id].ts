import { supabase } from '../src/integrations/supabase/client'

export default async function handler(req: any, res: any) {
  if (req.method !== "PATCH") {
    res.setHeader("Allow", "PATCH");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = await new Promise<string>((resolve, reject) => {
      let data = "";
      req.on("data", (chunk: Buffer) => {
        data += chunk.toString();
      });
      req.on("end", () => resolve(data));
      req.on("error", reject);
    });

    const payload = JSON.parse(body || "{}") as {
      id: string;
      status: "new" | "contacted" | "won" | "lost";
    };

    if (!payload.id || !payload.status) {
      return res.status(400).json({ error: "Lead ID and status are required." });
    }

    const { data: lead, error } = await supabase
      .from('leads')
      .update({ status: payload.status })
      .eq('id', payload.id)
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: "Failed to update lead" });
    }

    if (!lead) {
      return res.status(404).json({ error: "Lead not found" });
    }

    console.log("Lead status updated:", lead);
    return res.status(200).json({ success: true, lead });
  } catch (error) {
    console.error("Update lead API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}