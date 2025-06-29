import express from "express";
import {
  getRequset,
  response,
  sendRequest,
} from "../controllers/requestController.js";
const reqRouter = express.Router();

// POST: User sends request
reqRouter.post("/", sendRequest);

// GET: Admin fetches all requests
reqRouter.get("/", getRequset);

// PUT: Admin responds to request
reqRouter.put("/:id/respond", response);

export default reqRouter;
