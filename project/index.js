import express from "express";
import userRouter from "./routes/userRoute.js";
import { configDotenv } from "dotenv";
import dbConnect from "./config/db.js";

configDotenv();
dbConnect();

const app = express();
app.use(express.json());

app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("Server is ruuning at port 3000");
});
