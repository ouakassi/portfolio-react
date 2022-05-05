const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const { errorHandler } = require("./middleware/errorMiddleware");
const { mongoConnect } = require("./services/db");

const PORT = process.env.PORT || 8000;

mongoConnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/articles", require("./routes/articlesRoutes"));
app.use("/api/projects", require("./routes/projectsRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}...`);
});
