import express from "express";
import {
  clientRegister,
  createdVisits,
} from "../controllers/clientVisitController.js";
import handleAsyncError from "../utils/handleAsyncError.js";
import isAuth from "../utils/isAuth.js";

const router = express.Router();

router.get("/getRegisterClients", isAuth, handleAsyncError(createdVisits));
router.post("/register", isAuth, handleAsyncError(clientRegister));

export default router;
