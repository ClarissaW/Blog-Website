module.exports = {
    port : 3000,
    session:{
        secret: 'blog',
        key: 'blog',
        maxAge: 2592000000
      }, //session middleware needs this
      mongodb: 'mongodb://localhost:27017/blog' //blog is the db name
}