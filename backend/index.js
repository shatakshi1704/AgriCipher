import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const cropSchema = new mongoose.Schema({
  cropName: String,
  quantity: Number,
  price: Number,
  location: String,
  contact: String,
  image: String,
  quality: String,
  harvestDate: Date,
});

const Crop = mongoose.model("Crop", cropSchema);

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

app.get("/api/crops", async (req, res) => {
  try {
    const crops = await Crop.find();
    res.json(crops);
  } catch (error) {
    console.error("Error fetching crops:", error);
    res.status(500).json({ error: "Error fetching crops" });
  }
});

app.post("/api/sell", upload.single("image"), async (req, res) => {
  try {
    console.log("Received form data:", req.body); // Debugging

    const { cropName, quantity, price, location, contact, quality, harvestDate } = req.body;
    if (!cropName || !quantity || !price || !location || !contact) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const imagePath = req.file ? `/uploads/${req.file.filename}` : "";

    const newCrop = new Crop({ cropName, quantity, price, location, contact, image: imagePath, quality, harvestDate });
    await newCrop.save();
    
    console.log("Crop listed successfully:", newCrop);
    res.json({ message: "Crop listed successfully!" });
  } catch (error) {
    console.error("Error listing crop:", error);
    res.status(500).json({ error: "Error listing crop" });
  }
});

app.post("/api/buy", async (req, res) => {
  try {
    const { cropName, quantity } = req.body;
    const crop = await Crop.findOne({ cropName });

    if (!crop || crop.quantity < quantity) {
      return res.status(400).json({ message: "Insufficient stock or crop unavailable." });
    }

    crop.quantity -= quantity;
    if (crop.quantity === 0) {
      await Crop.deleteOne({ _id: crop._id });
    } else {
      await crop.save();
    }

    res.json({ message: "Crop purchased successfully!" });
  } catch (error) {
    console.error("Error processing purchase:", error);
    res.status(500).json({ error: "Error processing purchase" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
