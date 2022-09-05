const mongoose = require("mongoose");
const slugify = require("slugify");

const projectSchema = mongoose.Schema(
  {
    slug: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    markdown: {
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
    tags: {
      type: [String],
      default: [],
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// add slug

projectSchema.pre("validate", async function (next) {
  const sameProjectTitle = await Project.find({ title: this.title });
  if (sameProjectTitle.length === 0) {
    this.slug = await slugify(this.title, {
      lower: true,
      strict: true,
    });
  }

  // check if there is a duplicate slug

  if (sameProjectTitle.length > 0 && this.title === sameProjectTitle[0].title) {
    this.slug = await slugify(`${this.title}-${sameProjectTitle.length}`, {
      lower: true,
      strict: true,
    });
  }

  next();
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
