/**
 * 
 * 使用中间件，获取请求体数据
 * 
 * */

const express = require('express')
//1.导入body-parser
const bodyParser = require('body-parser')
const app = express()
//2.这是，解析json格式请求体的，中间件
const jsonParser = bodyParser.json()
//3.这是，解析querystring格式请求体的，中间件
const urlencodedParser = bodyParser.urlencoded({extended:false})


//4.urlencodedParser放到get请求的参数里
app.get('/login',urlencodedParser,(req,res)=>{
    //这是响应一个html文件的意思
    //且，这个文件有个登录按钮可以发POST请求
    res.sendFile(__dirname + '/form.html')
})
app.post('/login',(req,res)=>{
    console.log(req.body)//5.获取用户名,密码
    res.send('获取用户数据')
})

app.listen(9000,()=>{
    console.log('running')
})