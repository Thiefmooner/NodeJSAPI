const express = require('express')
const app = express()

//此为静态资源中间件
//访问127.0.0.1:3000/css/app.css
//访问127.0.0.1:3000/img/kkk.jpg
//就可以访问静态资源
app.use(express.static(__dirname + '/public'))

app.listen(9000,()=>{

    console.log('run ')
})