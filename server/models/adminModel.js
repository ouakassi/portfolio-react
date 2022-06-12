const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

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

adminSchema.methods.createJWT = function () {
  return jwt.sign({ adminId: this._id }, process.env.JWT_ACCESSTOKEN, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

module.exports = mongoose.model("Admin", adminSchema);
