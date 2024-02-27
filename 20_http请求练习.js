/**
 * 题目要求：
 * 
 * 请求类型 请求地址 响应体结果
 * get      /login  登录界面
 * get      /reg    注册界面
 */

const http = require('http')
const path = require('path')
const url = require('url')

const server = http.createServer((req,res)=>{
    let method = req.method
    let pathname = url.parse(req.url,true).pathname

    res.setHeader("content-type","text/html;charset=utf-8")
    if(method === 'GET' && pathname === '/login'){
        res.end("登录界面")
    }
    else if(method === 'GET'  && pathname === '/reg'){
        res.end("注册界面")
    }
    else{
        res.end('404 NotFound')
    }
})
server.listen(9000,()=>{

    console.log("server is running at 9000")
})