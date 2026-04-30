import mongoose, { Document, Schema } from "mongoose";

export interface IService extends Document {
  slug: string;
  title: string;
  description: string;
  active: boolean;
  createdAt: Date;
}

const serviceSchema = new Schema<IService>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Map _id to id in JSON response to match frontend expectations
serviceSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete (ret as any)._id;
  },
});

export const Service = mongoose.model<IService>("Service", serviceSchema);
