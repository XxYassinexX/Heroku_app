import express from "express";
import bodyParser from "body-parser";
import Mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import carRouter from "./routes/car.js";
import userRoutes from "./routes/user.js";
import routerPosts from "./routes/posts.js";
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/car", carRouter);
app.use("/api/user", userRoutes);
app.use("/api/posts", routerPosts);

Mongoose.connect(process.env.MONGOURL);
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is Running");
});
