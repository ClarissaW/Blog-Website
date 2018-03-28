const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

router.get('/',function (req,res,next){
   res.send('Front Page')
})

router.post('/create',checkLogin,function(req,res,next){
    res.send('Post new blog')
})

router.get('/create', checkLogin, function(req,res,next){
    res.send('Get blog page')
})

router.get('/:postId',function(req,res,next){
    res.send('Detail of the blog')

})
router.get('/:postId/edit',checkLogin,function(req,res,next){
    res.send('get the edited page')
})
router.post('/:postId/edit',checkLogin,function(req,res,next){
    res.send('edit the blog')
})
// why not post
router.get('/:postId/remove',checkLogin,function(req,res,next){
    res.send('Remove posts')
})

module.exports = router