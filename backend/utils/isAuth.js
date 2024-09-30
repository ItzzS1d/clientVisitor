import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  const { auth_token } = req.cookies;
  if (!auth_token) {
    return res.status(401).json({ error: "You are not authenticated" });
  }
  jwt.verify(auth_token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token or expired token" });
      
    }
    req.user = decoded.userId;
    next();
  });
};

export default isAuth;
