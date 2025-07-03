import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import userRouter from "./routes/userRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import connectDB from "./config/db.js";
import reqRouter from "./routes/requestRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploads folder statically so images are accessible
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/admin", adminRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use("/api/requests", reqRouter);

// ✅ Allowed frontend origins
const allowedOrigins = [
  "http://localhost:3000", // for local dev
  "https://simple-ecommerce-frontend.onrender.com/", // your actual frontend
];

// ✅ CORS setup to allow requests from allowedOrigins
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("✅ Online backend server is working.");
});

const PORT = process.env.PORT || 2020;
app.listen(PORT, () => console.log(`backend running on port ${PORT}`));
