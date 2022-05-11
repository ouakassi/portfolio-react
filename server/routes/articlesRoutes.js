const express = require("express");
const router = express.Router();

const {
  getArticles,
  getArticle,
  setArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articlesController");

router.route("/").get(getArticles).post(setArticle);
router.route("/:slug").get(getArticle);
router.route("/:id").put(updateArticle).delete(deleteArticle);

module.exports = router;
