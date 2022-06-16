const cheerio = require("cheerio");
const request = require("request");
const _ = require("lodash");
const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("post", {});
});

module.exports = router;
