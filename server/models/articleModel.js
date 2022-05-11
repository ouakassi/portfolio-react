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
    imgurl: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    tags: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

id = 0;
articleSchema.pre("validate", async function (next) {
  const sameArticlesTitle = await Article.find({ title: this.title });
  console.log(sameArticlesTitle);
  if (sameArticlesTitle.length === 0) {
    this.slug = await slugify(this.title, {
      lower: true,
      strict: true,
    });
  }
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
