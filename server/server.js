const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const { errorHandler } = require("./middleware/errorMiddleware");
const { mongoConnect } = require("./services/db");

const PORT = process.env.PORT || 8000;

mongoConnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost/:" + PORT);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
