import { Router } from "express";
import { handleContactSubmit } from "../controllers/contact.controller";
import { validate } from "../middlewares/validator";
import { contactFormSchema } from "../middlewares/schemas";

const router = Router();

router.post("/", validate(contactFormSchema), handleContactSubmit);

export default router;
