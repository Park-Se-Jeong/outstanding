const cheerio = require('cheerio');
const request = require('request');
const _ = require('lodash');
const express = require('express');
const router = express.Router();
const DB = require('../modules/mongo').getDB();

let viewData = [];

/* GET home page. */
router.get('/', (req, res) => {
    res.render('post', {});
});

router.get('/:id', async (req, res) => {
    let postId = req.params.id;
    const item = await DB.OutDB.findOne({ uri: postId });
    res.render('post', { data: item });

    //왜 새로고침해야 데이터가 바뀔까
    //노드는 이벤트 기반 -> request는 던져두고 res.render("")가 실행돼서 이전 데이터가 남아있던 것

    // const item = await DB.OutDB.findOne({ uri: postId });
    // // console.log(item);
    // res.render("post", { data: [item] });
});

module.exports = router;
