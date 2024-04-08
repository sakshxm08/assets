const Image = require("../models/Image");
const dotenv = require("dotenv");
dotenv.config();

const upload_file_to_db = async (req, res) => {
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
};

const get_images = async (req, res) => {
  try {
    const images = await Image.find(); // Retrieve all images from MongoDB
    res.status(200).json(images); // Respond with the list of images
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" }); // Respond with error message
  }
};

module.exports = { upload_file_to_db, get_images };
