const cheerio = require("cheerio");
const request = require("request");
const _ = require("lodash");
const express = require("express");
const DB = require("../modules/mongo").getDB();
const router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const titleList = await DB.OutDB.find({})
    .sort({ id: -1 })
    .toArray();

  console.log(titleList);
  res.render("index", { data: titleList });
});

module.exports = router;
