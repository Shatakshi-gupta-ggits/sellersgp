import { Request, Response, NextFunction } from "express";
import { Lead } from "../models/Lead";
import { Service } from "../models/Service";

export const getResources = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { resource } = req.query;

    if (resource === "services") {
      const services = await Service.find().sort({ createdAt: -1 });
      res.json({ services });
      return;
    }

    if (resource === "leads") {
      const leads = await Lead.find().sort({ createdAt: -1 });
      res.json({ leads });
      return;
    }

    if (resource === "stats") {
      const totalLeads = await Lead.countDocuments();
      const newLeads = await Lead.countDocuments({ status: "new" });
      const contacted = await Lead.countDocuments({ status: "contacted" });
      const won = await Lead.countDocuments({ status: "won" });
      const lost = await Lead.countDocuments({ status: "lost" });

      const totalServices = await Service.countDocuments();
      const activeServices = await Service.countDocuments({ active: true });

      res.json({
        stats: {
          totalLeads,
          newLeads,
          contacted,
          won,
          lost,
          activeServices,
          totalServices,
        },
      });
      return;
    }

    res.status(400).json({ error: "Invalid resource requested" });
  } catch (error) {
    next(error);
  }
};

export const handleAdminAction = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { action, id, status } = req.body;

    if (action === "toggleService") {
      const service = await Service.findById(id);
      if (!service) {
        res.status(404).json({ error: "Service not found" });
        return;
      }
      service.active = !service.active;
      await service.save();
      res.json({ service });
      return;
    }

    if (action === "updateLeadStatus") {
      const lead = await Lead.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
      if (!lead) {
        res.status(404).json({ error: "Lead not found" });
        return;
      }
      res.json({ lead });
      return;
    }

    if (action === "deleteLead") {
      const lead = await Lead.findByIdAndDelete(id);
      if (!lead) {
        res.status(404).json({ error: "Lead not found" });
        return;
      }
      res.json({ success: true });
      return;
    }

    res.status(400).json({ error: "Invalid action" });
  } catch (error) {
    next(error);
  }
};
