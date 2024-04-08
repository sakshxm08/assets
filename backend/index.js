const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routes/auth");
const imagesRouter = require("./routes/images");
const db = require("./db");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies

// Enable CORS
app.use(cors());

const PORT = process.env.PORT || 3000;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/images", imagesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
