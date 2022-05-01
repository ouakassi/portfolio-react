const Article = require("../models/articleModel");
const asyncHandler = require("express-async-handler");
// Get articles
// Get /api/articles
// Public
const getArticles = asyncHandler(async (req, res) => {
  const article = await Article.find({});
  res.status(200).json(article);
});

// set article
// Post /api/articles
// Private
const setArticle = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.imgurl) {
    res.status(400);
    throw new Error("please fill them all");
  }
  const article = await Article.create(req.body);
  res.status(201).json(article);
});

// update article
// Put /api/articles:id
// Private
const updateArticle = asyncHandler(async (req, res) => {
  const articleId = req.params.id;
  const article = await Article.findById(articleId);

  if (!article) {
    res.status(400);
    throw new Error("article not found");
  }

  const updatedArticle = await Article.findByIdAndUpdate(articleId, req.body, {
    new: true,
  });
  res.status(202).json(updatedArticle);
});

// delete article
// Delete /api/articles:id
// Private
const deleteArticle = asyncHandler(async (req, res) => {
  const articleId = req.params.id;
  const article = await Article.findById(articleId);

  if (!article) {
    res.status(400);
    throw new Error("article not found");
  }

  const deletedArticle = await Article.findByIdAndDelete(articleId);
  res.status(202).json(deletedArticle);
});

module.exports = {
  getArticles,
  setArticle,
  updateArticle,
  deleteArticle,
};
