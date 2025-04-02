const express = require("express");
const Crop = require("../models/Crop");
const router = express.Router();

router.post("/sell", async (req, res) => {
  try {
    const newCrop = new Crop(req.body);
    await newCrop.save();
    res.status(201).json({ message: "✅ Crop listed successfully!" });
  } catch (error) {
    res.status(500).json({ message: "❌ Failed to list crop", error });
  }
});

router.get("/buy", async (req, res) => {
  try {
    const crops = await Crop.find();
    res.json(crops);
  } catch (error) {
    res.status(500).json({ message: "❌ Failed to fetch crops", error });
  }
});

module.exports = router;
