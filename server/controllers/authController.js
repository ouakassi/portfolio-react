const Admin = require("../models/adminModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// Register
// Post /api/auth/register
// Private
const registerAdmin = asyncHandler(async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400);
    throw new Error("please fill them all");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const foundAdmin = await Admin.create({
    email: req.body.email,
    password: hashedPassword,
  });
  const token = foundAdmin.createJWT();

  const { password, ...others } = foundAdmin._doc;
  res.status(201).json({ others, token });
});

// Login
// Post /api/auth/login
// Private
const loginAdmin = asyncHandler(async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400);
    throw new Error("wrong credentials ! ");
  }
  const foundAdmin = await Admin.findOne({
    email: req.body.email,
  });

  if (!foundAdmin) {
    res.status(401); // Unauthorized
    throw new Error("user not found!");
  }

  const validatedPassword = await bcrypt.compare(
    req.body.password,
    foundAdmin.password
  );
  if (!validatedPassword) {
    res.status(400);
    throw new Error("wrong password");
  }
  const accessToken = foundAdmin.createJWT();

  const { password, ...others } = foundAdmin._doc;
  res.status(200).json({ others, accessToken });
});

module.exports = {
  registerAdmin,
  loginAdmin,
};
