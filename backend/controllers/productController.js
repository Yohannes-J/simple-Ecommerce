import mongoose from "mongoose";
import Product from "../models/product.js";
import fs from "fs";
import path from "path";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

export const getProductById = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};

export const addProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const image = req.file ? req.file.path : null;

    if (!name || !description || !price || !image) {
      return res
        .status(400)
        .json({ message: "All fields are required including image" });
    }

    const product = new Product({
      name,
      description,
      price,
      image, // e.g. "uploads/12345-image.jpg"
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Failed to add product", error });
  }
};

// Edit product
export const editProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, description, price } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // If new image uploaded, delete old image file
    if (req.file) {
      if (product.image) {
        // Resolve to absolute path using process.cwd()
        const oldImagePath = path.join(process.cwd(), product.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      product.image = req.file.path;
    }

    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Failed to update product", error });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.image) {
      const imagePath = path.join(process.cwd(), product.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await product.deleteOne();

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product", error });
  }
};
