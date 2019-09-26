const express = require('express')
const router = express.Router()
const util = require('../util/server.util')
const uuidv1 = require('uuid/v1')
const sessionDB = require('../sessionDB')
const sql = require('../sql')

router.get('/', function (req, res) {
    if(util.checkLogin(req)) {     // home redirect
        res.redirect('/')
    }
    let userCookie = util.getCookie(req)    
    if (!userCookie.sessionCookie) res.cookie("sessionCookie", uuidv1()) // client 측에 sessionCookie가 없을때만 sessionCookie 제공
    res.render('sign_up')
})
router.post('/', function (req, res) { 
    let userCookie = util.getCookie(req)
    var bodyStr = ''
    req.on("data",function(chunk){
        bodyStr += chunk.toString()
    })
    req.on("end",function(){
        let userInfo = JSON.parse(bodyStr)
        userInfo.admin = 'false'
        userInfo.sessionCookie = userCookie.sessionCookie   // userInfo 에 user의 sessionCookie 값을 추가
    

        // sql.connect();
        sql.query(`
        INSERT INTO users
        VALUES 
        ('12345', '${userInfo.id}', '${userInfo.pw}', '${userInfo.name}', '${userInfo.birthdate[0]}', '${userInfo.email}', '${userInfo.phone}', '${userInfo.interests[0]}', 'false')
        `)
        // sql.end();

        
        console.log("NEW User Registered!")
        console.log(JSON.parse(bodyStr))
        res.send('ok')   // 결과를 받은 client는 '/'으로 redirect (../public/javscripts/Sign_up.js : line 351)
    })
})
// id 중복 체크 요청에 따른 응답
router.post('/check', function (req, res) {
    var bodyStr = ''
    let userInfo;
    req.on("data",function(chunk){
        bodyStr += chunk.toString()
    })
    req.on("end",function(){    // send('ok) if userId is unique. Else send('no') (cannot use that id)
        userInfo = JSON.parse(bodyStr)
        sessionDB.find({ id : `${userInfo.id}`}).value() ? res.send('no') : res.send('ok')
    })
})


module.exports = router