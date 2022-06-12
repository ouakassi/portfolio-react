const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const morgan = require("morgan");

const { errorHandler } = require("./middleware/errorMiddleware");
const { mongoConnect } = require("./services/db");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");

const PORT = process.env.PORT || 8000;

mongoConnect();

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

app.use(cors(corsOptions));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, __dirname + "/images/");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, "myimage.jpeg");
  },
});

app.use(express.static(__dirname + "/public"));

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/articles", require("./routes/articlesRoutes"));
app.use("/api/projects", require("./routes/projectsRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}...`);
});
