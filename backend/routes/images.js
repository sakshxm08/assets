// routes/images.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const { S3Client } = require("@aws-sdk/client-s3");
const { fromIni } = require("@aws-sdk/credential-provider-ini");
const multerS3 = require("multer-s3");
const Image = require("../models/Image");
const dotenv = require("dotenv");
dotenv.config();

// Configure AWS S3
const s3 = new S3Client({
  credentials: fromIni(),
  region: process.env.AWS_REGION,
});

// Configure multer to upload files to S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read", // Make uploaded files publicly accessible
    key: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

// Upload image
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const imageUrl = req.file.location.replace(
      /https:\/\/assets\.sakshxm08\.in\.s3\.ap-south-1\.amazonaws\.com/,
      process.env.DOMAIN
    );
    const name = req.file.originalname; // Access title from request body
    const image = new Image({ url: imageUrl, name }); // Create a new Image instance
    await image.save(); // Save the image to MongoDB
    res.status(201).json({ success: true, imageUrl, name }); // Respond with success message
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" }); // Respond with error message
  }
});

// Get all images
router.get("/", async (req, res) => {
  try {
    const images = await Image.find(); // Retrieve all images from MongoDB
    res.status(200).json(images); // Respond with the list of images
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" }); // Respond with error message
  }
});

module.exports = router;
