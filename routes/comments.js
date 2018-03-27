const express = require('express')
const router = express.Router()
const checkLogin = require('../middlewares/check').checkLogin
router.post('/',checkLogin,function(res,req,next){
    res.send('Get the comment Page')
})
router.get('/:commentId/remove',checkLogin,function(res,req,next){
    res.send('remove the comment')
})

module.exports = router