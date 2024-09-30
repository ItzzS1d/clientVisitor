import express from "express";
import clientVisitRoute from "./routes/clientVisitRoute.js";
import authRoute from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import connectToMongoDB from "./utils/mongoConnetion.js";
import cors from "cors";

configDotenv();
const app = express();
connectToMongoDB();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/clientvisit", clientVisitRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res) => {
  const { status = 500, message = "Something went wrong" } = err;
  return res.status(status).json({ message });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
