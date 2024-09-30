import Auth from "../models/authModel.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(401).json({ error: "username and  password required" });
  const user = await Auth.findOne({ username });
  if (!user)
    return res.status(401).json({ error: "invalid username or password" });
  if (!(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ error: "invalid username or  password" });
  generateTokenAndSetCookie(user.id, res);
  const { password: pw, ...userInfo } = user._doc;

  return res.status(200).json(userInfo);
};

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(401).json({ error: "All required fields are required" });

  const isUserExit = await Auth.find({ $or: [{ username }, { email }] });

  if (isUserExit && isUserExit.length > 0)
    return res.status(400).json({
      error: "User already exist",
    });

  await Auth.create({ username, email, password });

  return res.status(201).json({ message: "user created successfully" });
};

export const logOut = async (req, res) => {
  const { auth_token } = req.cookies;
  if (!auth_token)
    return res.status(404).json({ error: "No authenticated user found" });
  res.clearCookie("auth_token");
  return res.status(200).json({ message: "logout success" });
};
