import express from "express";
import auth from "../auth.js";
import { container } from "../storage.js";

const router = express.Router();

router.post("/upload", auth("CREATOR"), async (req, res) => {
  const { title, caption, image } = req.body;

  const blobName = `${Date.now()}.jpg`;
  const blob = container.getBlockBlobClient(blobName);
  await blob.uploadData(Buffer.from(image, "base64"));

  await global.db.collection("images").insertOne({
    title,
    caption,
    imageUrl: blob.url,
    createdAt: new Date()
  });

  res.json({ message: "Image uploaded successfully" });
});

router.get("/", async (_, res) => {
  const images = await global.db
    .collection("images")
    .find()
    .sort({ createdAt: -1 })
    .toArray();
  res.json(images);
});

export default router;