const asyncHandler = require("express-async-handler");
// Get articles
// Get /api/articles
// Public
const getArticles = asyncHandler(async (req, res) => {
  res.status(200).json({ article: "get articles" });
});

// set article
// Post /api/articles
// Private
const setArticle = asyncHandler(async (req, res) => {
  if (!req.body.article) {
    res.status(400);
    throw new Error("please add an article");
  }
  res.status(200).json({ article: "set article" });
});

// update article
// Put /api/articles:id
// Private
const updateArticle = asyncHandler(async (req, res) => {
  res.status(200).json({ article: `update article number ${req.params.id}` });
});

// delete article
// Delete /api/articles:id
// Private
const deleteArticle = asyncHandler(async (req, res) => {
  res.status(200).json({ article: `delete article number ${req.params.id}` });
});

module.exports = {
  getArticles,
  setArticle,
  updateArticle,
  deleteArticle,
};
