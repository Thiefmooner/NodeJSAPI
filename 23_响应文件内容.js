const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    //读取文件内容
    let html = fs.readFileSync(__dirname + '/htmlTest/test.html')//注意是"+" 不是","

    res.end(html)//res.end接的，可以是buffer
})
server.listen(9000,()=>{
    console.log("server is running ")
})
