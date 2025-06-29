import express from "express";
import multer from "multer";
import {
  getProducts,
  getProductById,
  addProduct,
  editProduct,
  deleteProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

// Multer config for storing images in uploads folder
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage });

// Routes
productRouter.get("/get-product", getProducts);
productRouter.get("/get-product/:id", getProductById);
productRouter.post("/add-product", upload.single("image"), addProduct);
productRouter.put("/edit-product/:id", upload.single("image"), editProduct);
productRouter.delete("/delete-product/:id", deleteProduct);

export default productRouter;
