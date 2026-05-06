import { supabase } from '../src/integrations/supabase/client'

export default async function handler(req: any, res: any) {
  if (req.method !== "DELETE") {
    res.setHeader("Allow", "DELETE");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const id = url.pathname.split('/').pop();

    if (!id) {
      return res.status(400).json({ error: "Lead ID is required." });
    }

    const { error } = await supabase
      .from('leads')
      .delete()
      .eq('id', id);

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: "Failed to delete lead" });
    }

    console.log("Lead deleted:", id);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Delete lead API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}