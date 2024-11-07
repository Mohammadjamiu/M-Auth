import express from "express";
import dotenv from "dotenv";
import colors from "colors";
dotenv.config();

//! Initialize Express App and PORT
const app = express();
const PORT = process.env.PORT || 4500;

//! Listening on the PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.cyan.underline);
});
