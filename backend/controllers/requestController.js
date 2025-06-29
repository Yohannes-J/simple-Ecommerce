import productRequest from "../models/productRequest.js";

export const sendRequest = async (req, res) => {
  const { userId, productId, message } = req.body;
  try {
    const request = await productRequest.create({ userId, productId, message });
    res.json(request);
  } catch (err) {
    res.status(500).json({ message: "Failed to create request." });
  }
};

export const getRequset = async (req, res) => {
  try {
    const requests = await ProductRequest.find().populate("userId productId");
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch requests." });
  }
};

export const response = async (req, res) => {
  const { response } = req.body;
  try {
    const updated = await ProductRequest.findByIdAndUpdate(
      req.params.id,
      { status: "responded", response },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to respond." });
  }
};
