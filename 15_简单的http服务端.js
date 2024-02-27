const http = require('http')

//只要有请求到这里，就会执行后面的回调函数
const server = http.createServer((req,res) => {
    res.setHeader("content-type","text/html;charset=utf-8")//解决res.end()中文乱码
    res.end("你好，http server is running!")//响应体，响应体里有中文的话，会乱码
})
server.listen(9000,() => {console.log("服务已经跑起来了")})

/**
 * 1.中文乱码，设置头
 * 2.http协议的默认端口是80，https协议的默认端口是443。在URL中，不标明端口的话，默认都是默认端口
 */
