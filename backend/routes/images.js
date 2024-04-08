// routes/images.js
const express = require("express");
const { upload_file_to_db, get_images } = require("../controllers/images");
const router = express.Router();

const multer = require("multer");
const { S3Client } = require("@aws-sdk/client-s3");
const { fromIni } = require("@aws-sdk/credential-provider-ini");
const multerS3 = require("multer-s3");
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
router.post("/upload", upload.single("file"), upload_file_to_db);

// Get all images
router.get("/", get_images);

module.exports = router;
