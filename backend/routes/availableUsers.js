import express from "express";
import { User } from "../models/index.js";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

const router = express.Router();

// Middleware to verify JWT and extract user ID
const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
  
    if (!token) {
      console.log("No token provided");
      return res.status(401).json({ message: "Unauthorized - No token provided" });
    }
  
    try {
      const secretKey = "digamber"; // Ensure this matches PHP's secret key
      const decoded = jwt.verify(token, secretKey);
  
      console.log("Decoded Token:", decoded); // Debugging step
  
      if (!decoded || !decoded.user || !decoded.user.id) {
        console.log("Invalid Token Structure:", decoded);
        return res.status(403).json({ message: "Invalid token structure", receivedToken: decoded });
      }
  
      req.userId = decoded.user.id; // Extract user ID correctly
      next();
    } catch (error) {
      console.error("JWT Verification Error:", error.message);
      return res.status(403).json({ message: "Forbidden - Invalid token", error: error.message });
    }
  };
  
// Route to fetch all available users except the logged-in user
router.get("/available-users", authenticateUser, async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "username", "avatar"],
      where: { id: { [Op.ne]: req.userId } }, // Exclude logged-in user
    });

    res.json(users);
  } catch (error) {
    console.error("Error fetching available users:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
