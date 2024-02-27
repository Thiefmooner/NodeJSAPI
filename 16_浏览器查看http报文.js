/**
 * 16_两个，先把服务跑起来，再在html发post请求
 * 发送get请求后，载荷位置可以看到，表单数据
 */
const http = require('http')

const server = http.createServer((req,res) => {
    res.setHeader("content-type","text/html;charset=utf-8")
    res.end("你好，http server is running!")
})

server.listen(9000,() => {console.log("服务已经跑起来了")})