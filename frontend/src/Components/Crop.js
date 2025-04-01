// server/models/Crop.js
const mongoose = require("mongoose");

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

// Create a model from the schema
const Crop = mongoose.model("Crop", cropSchema);

module.exports = Crop;
