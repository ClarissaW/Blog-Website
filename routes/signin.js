const express = require('express')
const router = express.Router()
const checkNotLogin = require('../middlewares/check').checkNotLogin

router.get('/',checkNotLogin,function(res,req,next){
    res.send('Login page')
})
router.post('/',checkNotLogin,function(res,req,next){
    res.send('Login')
})

module.exports = router