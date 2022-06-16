const express = require("express");
const router = express.Router();


router.get('/login', function(req, res, next) {
  res.render('login', {})
})
router.get('/signUp', function(req, res, next) {
  res.render('signUp', {})
})
module.exports = router;