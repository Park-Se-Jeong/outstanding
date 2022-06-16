const cheerio = require("cheerio");
const request = require("request");
const _ = require("lodash");
const express = require("express");
const router = express.Router();

let titleList = [];

request("https://outstanding.kr", {}, (err, res, body) => {
  if (err) return;

  let $ = cheerio.load(res.body);

  const json = JSON.parse($("#__NEXT_DATA__").html());
  const postList = json.props.pageProps.apolloState;
  // console.log(postList);

  _.filter(postList, (obj) => {
    if (obj.thumbnailUrl) {
      titleList.push({
        title: obj.title,
        text: obj.text,
        thumbnailUrl: obj.thumbnailUrl,
      });
    }
  });
});
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { data: titleList });
});



module.exports = router;
