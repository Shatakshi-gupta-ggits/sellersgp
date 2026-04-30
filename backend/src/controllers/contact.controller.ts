import { Request, Response, NextFunction } from "express";
import { Lead } from "../models/Lead";

export const handleContactSubmit = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, phone, email, business, service, message } = req.body;
    
    const lead = await Lead.create({
      name,
      phone,
      email,
      business,
      service,
      message,
    });

    res.status(201).json({ success: true, lead });
  } catch (error) {
    next(error);
  }
};
