import mongoose, { Document, Schema } from "mongoose";

export interface ILead extends Document {
  name: string;
  phone: string;
  email: string;
  business?: string;
  service?: string;
  message?: string;
  status: "new" | "contacted" | "won" | "lost";
  createdAt: Date;
}

const leadSchema = new Schema<ILead>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    business: { type: String },
    service: { type: String },
    message: { type: String },
    status: {
      type: String,
      enum: ["new", "contacted", "won", "lost"],
      default: "new",
    },
  },
  { timestamps: true }
);

// Map _id to id in JSON response to match frontend expectations
leadSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete (ret as any)._id;
  },
});

export const Lead = mongoose.model<ILead>("Lead", leadSchema);
