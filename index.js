const path = require('path')
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const config = require('config-lite')(__dirname)
const routes = require('./routes')
const pkg = require('./package')

const app = express()

app.set('view',path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//static files content
app.use(express.static(path.join(__dirname,'public')))

app.use(session({
    name: config.session.key, // 
    secret:config.session.secret,
    resave:true,
    saveUninitialized: false,
    cookie:{
        maxAge:config.session.maxAge
    },
    store: new MongoStore({

        url: config.mongodb
    })
}))

app.use(flash())

routes(app)

//注意：中间件的加载顺序很重要。如上面设置静态文件目录的中间件应该放到 
//routes(app) 之前加载，这样静态文件的请求就不会落到业务逻辑的路由里；
//flash 中间件应该放到 session 中间件之后加载，
//因为 flash 是基于 session 实现的。
app.listen(config.port, function(){
    console.log('${pkg.name} listening on port ${config.port}')
})
