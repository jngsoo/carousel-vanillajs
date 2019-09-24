var express = require('express');
var router = express.Router();
const carouselData = require('../data/carousel.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    carouselData : carouselData
  });
});

module.exports = router;
