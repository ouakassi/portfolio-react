const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: "oussama",
    },
    lastName: {
      type: String,
      default: "ouakassi",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", adminSchema);
