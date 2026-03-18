import jwt from "jsonwebtoken";

const validateToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const jwtSecret = "await@123";

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, jwtSecret);

    req.user = decoded; // { id, email }

    next();
  } catch (error) {
    console.log("Token error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default validateToken;