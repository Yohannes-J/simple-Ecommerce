import mongoose from "mongoose";

const productRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  message: { type: String, default: "" },
  status: { type: String, enum: ["pending", "responded"], default: "pending" },
  response: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("ProductRequest", productRequestSchema);
