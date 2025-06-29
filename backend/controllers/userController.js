import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashed });
  try {
    const saved = await user.save();
    res
      .status(201)
      .json({ message: "User registered successfully", userId: saved._id });
  } catch (err) {
    res.status(400).json({ message: "Email already exists" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid email" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid password" });

  res.json({ userId: user._id, user });
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); 
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve users" });
  }
};
