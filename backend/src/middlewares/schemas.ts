import { z } from "zod";

export const contactFormSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(1, "Phone is required"),
    email: z.string().email("Invalid email format"),
    business: z.string().optional(),
    service: z.string().optional(),
    message: z.string().optional(),
  }),
});

export const toggleServiceSchema = z.object({
  body: z.object({
    action: z.literal("toggleService"),
    id: z.string().min(1, "Service ID is required"),
  }),
});

export const updateLeadStatusSchema = z.object({
  body: z.object({
    action: z.literal("updateLeadStatus"),
    id: z.string().min(1, "Lead ID is required"),
    status: z.enum(["new", "contacted", "won", "lost"]),
  }),
});

export const deleteLeadSchema = z.object({
  body: z.object({
    action: z.literal("deleteLead"),
    id: z.string().min(1, "Lead ID is required"),
  }),
});
