const express = require("express");
const router = express.Router();


router.get('/login', function(req, res, next) {
  res.send('로그인 페이지')
})
router.get('/signUp', function(req, res, next) {
  res.send('<h2>회원가입 페이지</h2>')
})
module.exports = router;