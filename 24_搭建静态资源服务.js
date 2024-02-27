const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const server = http.createServer((request,response)=>{
    //此为手动ifelse，很麻烦
    /*
    let pathName = url.parse(request.url,true).pathname
    if(pathName === '/index.html'){
        let html = fs.readFileSync(__dirname + '/24_sourceTest/index.html')
        response.end(html)
    }
    else if(pathName === '/index.css'){
        let css = fs.readFileSync(__dirname + '/24_sourceTest/index.css')
        response.end(css)
    } 
    */
    let pathName = url.parse(request.url,true).pathname
    let filePath = __dirname + '/24_sourceTest' + pathName
    //用异步读取API
    fs.readFile(filePath,(err,data)=>{
        if(err){
            response.statusCode = 500
            response.end("文件读取失败")
            return
        }
        response.end(data)//没错误的话，响应结果
    })
})

server.listen(9000,()=>{console.log("运行成功")})