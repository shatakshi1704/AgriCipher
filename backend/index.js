// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// import authRoutes from "./routes/authRoutes.js"; // Ensure path is correct

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ MongoDB Connection Error:", error));

// Schema & Model
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  organization: String,
  message: String,
});

const FormSubmission = mongoose.model("FormSubmission", formSchema);

// API Route
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
