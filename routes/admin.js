var express = require('express');
var router = express.Router();
const util = require('../util/server.util')

/* GET users listing. */
router.get('/', function(req, res, next) {
    if(util.checkAdminAuthority(req)) {   // admin 권한 check 
        res.render('admin',{
            user: req.user.name
        });
    }
    res.redirect('/')
});

module.exports = router;
