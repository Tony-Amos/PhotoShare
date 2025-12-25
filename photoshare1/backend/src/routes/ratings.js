import express from "express";
import auth from "../auth.js";

const router = express.Router();

router.post("/", auth("CONSUMER"), async (req, res) => {
  const { imageId, rating } = req.body;

  await global.db.collection("ratings").insertOne({
    imageId,
    rating,
    createdAt: new Date()
  });

  res.json({ message: "Rating submitted" });
});

export default router;