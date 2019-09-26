const express = require('express')
const session = require('express-session')   
const RedisStore = require('connect-redis')(session)        
const router = express.Router()
const carouselData = require('../data/carousel.json')
const sessionDB = require('../sessionDB')
const uuidv1 = require('uuid/v1')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('====req.user===',req.user)
  if(req.user) { // 로그인 화면 뿌리기
      res.render('index', {
        user: req.user.name,
        carouselData: carouselData
      })
  }
  else {
    res.render('index', {
        user: null,
        carouselData: carouselData
    })
  }
})

module.exports = router;
