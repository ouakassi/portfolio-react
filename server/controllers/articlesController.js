const Article = require("../models/articleModel");
const asyncHandler = require("express-async-handler");

// Get articles
// Get /api/articles
// Public
const getArticles = asyncHandler(async (req, res) => {
  const query = req.query;
  let article = {};

  if (!query) {
    article = await Article.find(query);
  } else {
    article = await Article.find(query);
  }
  res.status(200).json(article);
});

// Get one article
// Get /api/articles/:id
// Public
const getArticle = asyncHandler(async (req, res) => {
  const articleSlug = req.params.slug;
  const article = await Article.findOne({ slug: articleSlug });
  console.log(articleSlug);
  if (!article) {
    res.status(400);
    throw new Error("article not found");
  }
  res.status(200).json(article);
});

// set article
// Post /api/articles
// Private
const setArticle = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.imgUrl) {
    res.status(400);
    throw new Error("please fill them all");
  }
  const article = await Article.create(req.body);
  res.status(201).json(article);
});

// update article
// Put /api/articles/:id
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
// Delete /api/articles/:id
// Private
const deleteArticle = asyncHandler(async (req, res) => {
  const articleId = req.params.id;
  const article = await Article.findById(articleId);

  if (!article) {
    res.status(400);
    throw new Error("article not found");
  }

  const deletedArticle = await Article.findByIdAndDelete(articleId);
  res.status(204).json({ id: deletedArticle.id });
});

module.exports = {
  getArticles,
  getArticle,
  setArticle,
  updateArticle,
  deleteArticle,
};
