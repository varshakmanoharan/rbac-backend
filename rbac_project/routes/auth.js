// routes/auth.js
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { generateToken } = require("../config/auth");

const router = express.Router();

// User Registration
router.post("/register", async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new User({ username, password: hashedPassword, role });
        await newUser.save();
        
        const token = generateToken(newUser._id, newUser.role);
        
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error registering user" });
    }
});

// User Login
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = generateToken(user._id, user.role);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in" });
    }
});

module.exports = router;
