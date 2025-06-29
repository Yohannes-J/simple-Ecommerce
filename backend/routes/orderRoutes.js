import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrdersByUser,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/user/:userId", getOrdersByUser);
orderRouter.get("/all", getAllOrders);

export default orderRouter;
