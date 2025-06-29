import express from "express";
import {
  registerUser,
  loginUser,
  getUsers,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/get-user", getUsers);

export default userRouter;
