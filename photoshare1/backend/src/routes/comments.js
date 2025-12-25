import express from "express";
import auth from "../auth.js";

const router = express.Router();

router.post("/", auth("CONSUMER"), async (req, res) => {
  const { imageId, comment } = req.body;

  await global.db.collection("comments").insertOne({
    imageId,
    comment,
    createdAt: new Date()
  });

  res.json({ message: "Comment added" });
});

export default router;