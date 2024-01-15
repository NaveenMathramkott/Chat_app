import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import { createServer } from "http";
import connectDb from "./config/db.js";
import authRoute from "./routes/authRoutes.js";
import morgan from "morgan";

dotenv.config();
const app = express();

// connect to database
connectDb();

//middleWare
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//api routes
app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Chat Gram API is working Successfully");
});

// starting server
app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
