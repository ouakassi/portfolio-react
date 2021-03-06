const mongoose = require("mongoose");
const slugify = require("slugify");

const articleSchema = mongoose.Schema(
  {
    slug: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: Date,
      default: Date.now(),
    },
    readTime: {
      type: Number,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

// add slug

articleSchema.pre("validate", async function (next) {
  const sameArticlesTitle = await Article.find({ title: this.title });
  if (sameArticlesTitle.length === 0) {
    this.slug = await slugify(this.title, {
      lower: true,
      strict: true,
    });
  }

  // check if there is a duplicate slug

  if (
    sameArticlesTitle.length > 0 &&
    this.title === sameArticlesTitle[0].title
  ) {
    this.slug = await slugify(`${this.title}-${sameArticlesTitle.length}`, {
      lower: true,
      strict: true,
    });
  }

  next();
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
