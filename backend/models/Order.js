import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      name: String,
      price: Number,
      quantity: { type: Number, default: 1 }
    }
  ],
  deliveryInfo: {
    fullName: String,
    phone: String,
    address: String
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
