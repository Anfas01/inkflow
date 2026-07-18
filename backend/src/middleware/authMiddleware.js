import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      // Use a more specific message for debugging, but keep it generic for the client.
      return res.status(401).json({ success: false, message: "Not authorized, no token." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to the request object, excluding the password
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ success: false, message: "Not authorized, user not found." });
    }
    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized. Token expired or invalid.",
    });
  }
};

export default authMiddleware;