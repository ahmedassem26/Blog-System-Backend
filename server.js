const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db");

const app = express();

// Connect to DB before handling requests
let isDBConnected = false;

app.use(async (req, res, next) => {
  if (!isDBConnected) {
    try {
      await connectDB();
      isDBConnected = true;
      console.log("Database connected successfully");
    } catch (err) {
      console.error("Database connection error:", err);
      return res.status(500).json({ error: "Database connection failed" });
    }
  }
  next();
});

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://blog-system-psi.vercel.app",
    credentials: true,
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Blog System API");
});
app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));

// Test route
app.get("/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

module.exports = app;
