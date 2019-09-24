var express = require('express');
var router = express.Router();
const util = require('../util/server.util')
const carouselData = require('../data/carousel.json')
const uuidv1 = require('uuid/v1')
const sessionDB = require('../sessionDB')

/* GET home page. */
router.get('/', function(req, res, next) {
  let userCookie = util.getCookie(req)
  if(util.checkLogin(req,sessionDB)) {     // 자동 로그인
      console.log('Welcome!!')
      res.render('index', {
        user : `${sessionDB.get(`${userCookie.sessionCookie}`).value().name}`,
        carouselData : carouselData
      })
  }
  else {
      // client 측에 sessionCookie가 없을때만 sessionCookie 제공
      console.log('not logged in!!')
      if (!userCookie.sessionCookie) res.cookie("sessionCookie", uuidv1())
      res.render('index', {
        user : null,
        carouselData : carouselData
      })
  }
})

module.exports = router;
