import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import mongoose from "mongoose";
dotenv.config();

//! Initialize Express App and PORT
const app = express();
const PORT = process.env.PORT || 4500;

//! Connection to the MONGO DB
mongoose
  .connect(process.env.MONGO_URIu)
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
