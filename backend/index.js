const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const multer = require("multer");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (Only once)
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ MongoDB Connection Error:", error));

// 📌 Crop Schema & Model for Selling Crops
const cropSchema = new mongoose.Schema({
  cropName: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true },
  image: { type: String }, // To store the image URL
  quality: { type: String, required: true },
  harvestDate: { type: Date, required: true },
});

const Crop = mongoose.model("Crop", cropSchema, "formdata"); // Sell data stored in 'formdata'

// 📌 New Schema & Model for Buy Page Crops (Different Collection)
const buyCropSchema = new mongoose.Schema({
  cropName: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true },
});

const BuyCrop = mongoose.model("BuyCrop", buyCropSchema, "buydata"); // Buy data stored in 'buydata'

// 📌 File upload configuration for images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "images");
    // Ensure the images directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// 📌 API Route to add a new crop (Sell crop)
app.post("/api/sell", upload.single("image"), async (req, res) => {
  const { cropName, quantity, price, location, contact, quality, harvestDate } = req.body;
  const image = req.file ? "/images/" + req.file.filename : null;

  const newCrop = new Crop({
    cropName,
    quantity,
    price,
    location,
    contact,
    image,
    quality,
    harvestDate,
  });

  try {
    await newCrop.save();
    res.status(200).json({ message: "✅ Crop listed successfully!" });
  } catch (err) {
    res.status(500).json({ message: "❌ Failed to list crop.", error: err });
  }
});

// 📌 API Route to fetch crops for Buy Page (from 'formdata' collection)
app.get("/api/crops", async (req, res) => {
  try {
    const crops = await Crop.find();
    res.status(200).json(crops); // This is the actual fetch route for crops to be bought
  } catch (error) {
    res.status(500).json({ message: "❌ Failed to fetch crops", error });
  }
});

// 📌 API Route to add crops for Buy Page (Stores in 'buydata' collection)
app.post("/api/buy", async (req, res) => {
  const { cropName, quantity, price, location, contact } = req.body;

  const newBuyCrop = new BuyCrop({
    cropName,
    quantity,
    price,
    location,
    contact,
  });

  try {
    await newBuyCrop.save();
    res.status(201).json({ message: "✅ Crop added for buying!" });
  } catch (error) {
    res.status(500).json({ message: "❌ Failed to add crop for buying.", error });
  }
});

// 📌 Form Submission Route (Get Involved Form)
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  organization: String,
  message: String,
});

const FormSubmission = mongoose.model("FormSubmission", formSchema);

app.post("/submit-form", async (req, res) => {
  try {
    const newSubmission = new FormSubmission(req.body);
    await newSubmission.save();
    res.status(200).json({ message: "✅ Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "❌ Submission failed", error });
  }
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
