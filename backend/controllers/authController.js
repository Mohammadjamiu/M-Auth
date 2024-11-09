import UserModel from "../models/UserModel.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new UserModel({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({
      message: "User created successfully!",
    });
  } catch (error) {
    console.error("Signup error:", error);
    // Only send a response if one hasn't been sent already
    if (!res.headersSent) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
