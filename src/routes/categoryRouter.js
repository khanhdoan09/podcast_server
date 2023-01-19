const express = require("express");
const router = express.Router();
const CategoryService = require("../services/categoryService");

router.get("/getAllCategory", async (req, res) =>
  CategoryService.getAllCategory(req, res)
);

module.exports = router;
