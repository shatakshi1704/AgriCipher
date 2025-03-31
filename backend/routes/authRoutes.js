import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const router = express.Router();

// REGISTER USER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    // Create new user
    user = new User({ name, email, password });
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, "yourSecretKey", { expiresIn: "7d" });

    res.status(201).json({ message: "User registered successfully", token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// LOGIN USER
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user in DB
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Register, can't find account." });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Incorrect password. Forgot password?" });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, "yourSecretKey", { expiresIn: "7d" });

    res.json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
