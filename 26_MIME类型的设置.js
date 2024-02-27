/**
 * MIME类型（资源类型）（媒体类型）：[type]/[subtype]
 * 可以通过设置响应头Content-Type，来表示MIME类型，浏览器会根据此类型来处理资源
 * 
 * 常见的MIME：
 * html: 'text/html'
 * css: 'text/css'
 * png: 'image/png'
 * json: 'application/json'
 * 
 * 特别的，浏览器面对未知的资源类型，可以选择application/octet-stream,浏览器对于这种类型,会直接下载响应体,进行存储
 * 
 * */  
const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

let mimes = {
    html:'text/html',
    css: 'text/css',
    png: 'image/png',
    json: 'application/json',
    js: 'text/javascript'

}
const server = http.createServer((request,response)=>{
    let pathName = url.parse(request.url,true).pathname
    let filePath = __dirname + '/24_sourceTest' + pathName
    //用异步读取API
    fs.readFile(filePath,(err,data)=>{
        if(err){
            response.setHeader("content-type","text/html;charset=utf-8")
            response.statusCode = 500
            response.end("文件读取失败")
            return
        }
        //获取文件后缀
        let ext =  path.extname(filePath).slice(1)
        //获取对应的MIME类型
        let type = mimes[ext]
        if(type){
            //匹配到的
            response.setHeader("content-type",type)
        }else{
            //没匹配到的，下载
            response.setHeader("content-type","application/octet-stream")//下载
        }
        response.end(data)//没错误的话，响应结果
    })
})

server.listen(9000,()=>{console.log("运行成功")})