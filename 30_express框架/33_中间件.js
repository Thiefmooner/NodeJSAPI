//中间件，分为全局中间件，路由中间件，本质是一个回调函数
//使用函数，封装公共操作

const express = require('express')
const app = express()
const fs  = require('fs')
const path = require('path')

//中间件函数，req,res,next三个参数
function getUrlandIP(req,res,next){
    let {url,ip} = req
    //将请求的ip和url存下来，到acess.log文件
    fs.appendFileSync(path.resolve(__dirname,'./acess.log'),`${url} ${ip}\r\n`)

    next()//一定要有放行
}

app.get('/host',(req,res)=>{
    res.send('主界面首页')
})
app.get('/admin',(req,res)=>{
    res.send('登录首页')

})
app.all('*',(req,res)=>{

    res.send('<h1>404</h1>')

})
app.listen(9000,()=>{

})