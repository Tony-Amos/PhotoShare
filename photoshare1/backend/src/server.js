import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import connectDB from "./db.js";
import imageRoutes from "./routes/images.js";
import commentRoutes from "./routes/comments.js";
import ratingRoutes from "./routes/ratings.js";

dotenv.config();
await connectDB();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.post("/login", (req, res) => {
  const token = jwt.sign(req.body, process.env.JWT_SECRET);
  res.json({ token });
});

app.use("/images", imageRoutes);
app.use("/comments", commentRoutes);
app.use("/ratings", ratingRoutes);

app.listen(process.env.PORT, () =>
  console.log(`API running on port ${process.env.PORT}`)
);