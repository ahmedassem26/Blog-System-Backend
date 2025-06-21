const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db");

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://blog-system-psi.vercel.app",
    credentials: true,
  })
);

// Connect to DB
connectDB()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

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
