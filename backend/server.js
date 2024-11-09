import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
dotenv.config();

//! Initialize Express App and PORT
const app = express();
const PORT = process.env.PORT || 4500;

//! Express Middlewares
app.use(express.json()); // To parse the JSON data from Req.body
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Allow only this origin
//   })
// );
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend origin
    credentials: true, // Allow cookies to be sent
  })
);

//! Connection to the MONGO DB
mongoose
  .connect(process.env.MONGO_URI, {
    connectTimeoutMS: 20000, // Increase timeout to 20 seconds
  })
  .then(() => {
    console.log("✔️  Connected to DB successfully".cyan.underline);
  })
  .catch((err) => {
    console.log(`❌  Error connecting to DB: ${err}`.red.underline);
  });

//! Listening on the PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.blue.underline);
});

//! Api Route
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

//! Custom Middleware
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error";
//   return res.status(statusCode).json({
//     success: false,
//     error: message,
//     statusCode,
//   });
// });

// Custom error-handling middleware
app.use((err, req, res, next) => {
  // Only send a response if headers haven't been sent already
  if (!res.headersSent) {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
      success: false,
      error: message,
      statusCode,
    });
  } else {
    next(err); // Pass along if headers have already been sent
  }
});
