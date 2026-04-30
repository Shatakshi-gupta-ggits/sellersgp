import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import { errorHandler } from "./middlewares/errorHandler";
import contactRoutes from "./routes/contact.routes";
import adminRoutes from "./routes/admin.routes";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Call generic Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

// Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
