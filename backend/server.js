import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";
dotenv.config();

//! Initialize Express App and PORT
const app = express();
const PORT = process.env.PORT || 4500;

//! Express Middlewares
app.use(express.json()); // To parse the JSON data from Req.body

//! Connection to the MONGO DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB successfully ✔️".cyan.underline);
  })
  .catch((err) => {
    console.log(`Error connecting to DB ❌: ${err}`.red.underline);
  });

//! Listening on the PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.blue.underline);
});

//! Api Route
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

//! Custom Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode,
  });
});
