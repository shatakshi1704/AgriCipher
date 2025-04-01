const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
  cropName: String,
  quantity: Number,
  pricePerKg: Number,
  location: String,
  quality: String,
  harvestDate: Date,
});

module.exports = mongoose.model("Crop", cropSchema);
