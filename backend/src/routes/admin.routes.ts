import { Router } from "express";
import { getResources, handleAdminAction } from "../controllers/admin.controller";
import { validate } from "../middlewares/validator";
import { toggleServiceSchema, updateLeadStatusSchema, deleteLeadSchema } from "../middlewares/schemas";
import { Request, Response, NextFunction } from "express";

const router = Router();

router.get("/", getResources);

// Basic multiplexer for the generic action endpoint
router.post("/", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { action } = req.body;
    
    // Validate based on the action
    if (action === "toggleService") {
      await validate(toggleServiceSchema)(req, res, () => {});
    } else if (action === "updateLeadStatus") {
      await validate(updateLeadStatusSchema)(req, res, () => {});
    } else if (action === "deleteLead") {
      await validate(deleteLeadSchema)(req, res, () => {});
    }
    
    // Important: check if validation sent a response. If so, stop execution.
    if (res.headersSent) {
      return;
    }

    // Call the controller action
    await handleAdminAction(req, res, next);
  } catch (error) {
    next(error);
  }
});

export default router;
