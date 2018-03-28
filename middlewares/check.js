module.exports = {
    checkLogin: function checkLogin(req,res,next){
        if (!req.session.user){
            req.flash('error','Not Login') //基于 session 实现的用于通知功能的中间件，需结合 express-session 使用
            return res.redirect('/signin')
        }
        next()
    },
    checkNotLogin: function checkNotLogin (req,res,next){
        if (req.session.user) {
            req.flash('error','Have signed in')
            return res.redirect('back')
        }
        next()
    }
}
