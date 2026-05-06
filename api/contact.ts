import { supabase } from '../src/integrations/supabase/client'

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
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
      name?: string;
      phone?: string;
      email?: string;
      business?: string;
      service?: string;
      message?: string;
    };

    if (!payload.name || !payload.phone || !payload.email) {
      return res.status(400).json({ error: "Name, phone, and email are required." });
    }

    const { data: lead, error } = await supabase
      .from('leads')
      .insert({
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        business: payload.business,
        service: payload.service,
        message: payload.message,
        status: 'new'
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: "Failed to save lead" });
    }

    console.log("Contact submission saved:", lead);
    return res.status(201).json({ success: true, lead });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
