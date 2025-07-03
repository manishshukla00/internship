import express from "express";
import connectDB from "./DB/dbConnect.js";

connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Server Side");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
