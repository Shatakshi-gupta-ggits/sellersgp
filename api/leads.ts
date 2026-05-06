import { listLeads } from "../src/server/dummy-store";

export default function handler(req: any, res: any) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const leads = listLeads();
  return res.status(200).json({ leads });
}
