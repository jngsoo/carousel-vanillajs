const express = require('express')
const router = express.Router()
const util = require('../util/server.util')
const uuidv1 = require('uuid/v1')
const sessionDB = require('../sessionDB')

router.get('/', function (req, res, next) {
    if(util.checkLogin(req, sessionDB)) {   // 유저가 이미 로그인한 상태라면 메인 화면으로 redirect
        res.redirect('/')
    }
    let userCookie = util.getCookie(req)    
    if (!userCookie.sessionCookie) res.cookie("sessionCookie", uuidv1()) // client 측에 sessionCookie가 없을때만 sessionCookie 제공
    res.render('login')
})
router.post('/', function(req,res, next) {
    const userId = req.body.id
    const userPw = req.body.pw
    if (sessionDB.find({ id : `${userId}`}).value()) {      // id 일치
        if (sessionDB.find({ pw : `${userPw}`}).value()){   // 비밀번호 일치
            res.cookie("sessionCookie", sessionDB.find({ id : `${userId}`}).value().sessionCookie)
            res.redirect('/')
        }
        else {              
            res.render('login',{msg : '비밀번호를 확인해주세요.'})
        }
    }
    else {
        res.render('login',{ msg : '존재하지 않는 아이디입니다.'})
    }
})
router.post('/logout', function(req,res, next) {
    let userCookie = util.getCookie(req)
    res.cookie('sessionCookie', userCookie.sessionCookie, { expires: new Date(Date.now()), httpOnly: true }); // delete client sessionCookie 
    res.redirect('/')
})

module.exports = router