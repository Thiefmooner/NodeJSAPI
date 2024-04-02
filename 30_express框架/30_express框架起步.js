const express = require('express')
const app = express()
app.get('/request',(req,res)=>{
    //express获取报文和原始http重叠的部分
    console.log(req.method)
    console.log(req.url)
    console.log(req.httpVersion)
    console.log(req.headers)

    //*****express独有的******
    console.log(req.path)//获取请求路径  比如/inidex
    console.log(req.query)//获取查询字符串，就是路径后的参数 a=100&&b=221
    console.log(req.get('host'))//获取指定的请求头
    console.log(req.ip)

    res.send("请求报文的获取")
})

app.post('/login',(req,res)=>{
    res.setHeader("content-type","text/html;charset=utf-8")//有先后顺序的问题 
    res.end("post请求发送OK")
})
//3000端口好像被别的占用了，用9000
app.listen(9000,()=>{
    console.log('已经启动了')
})