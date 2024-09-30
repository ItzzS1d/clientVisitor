import express from "express";
import { login, logOut, register } from "../controllers/authController.js";
import handleAsyncError from "../utils/handleAsyncError.js";
const router = express.Router();

router.post("/register", handleAsyncError(register));
router.post("/login", handleAsyncError(login));
router.delete("/logout", handleAsyncError(logOut));

export default router;
