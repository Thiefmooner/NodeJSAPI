//注意，get请求没有请求体，post请求有，此脚本运行后，直接用 16_浏览器查看http报文.html 发post请求

const http = require('http')

const server = http.createServer((req,res) => {
    //1.声明变量
    let body = ''
    //2，req监听data事件
    req.on('data',chunk => {
        body += chunk
    })
    //3.req监听end事件
    req.on('end',()=>{
        console.log(body)
        res.end("请求体结果有了，请打印台查看")   //uname=ag&password=vsa
    })

    
    res.setHeader("content-type","text/html;charset=utf-8")  
})

server.listen(9000,() => {console.log("服务已经跑起来了")})



