// orderController.js

import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { userId, items, deliveryInfo } = req.body;
    if (!userId || !items || items.length === 0) {
      return res.status(400).json({ message: "UserId and items are required" });
    }
    const order = new Order({
      userId,
      items,
      deliveryInfo,
      createdAt: new Date(),
    });
    const saved = await order.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ message: "Server error while creating order" });
  }
};

export const getOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ message: "UserId parameter missing" });
    }
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: "Server error while fetching orders" });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching all orders:", err);
    res.status(500).json({ message: "Server error while fetching all orders" });
  }
};
