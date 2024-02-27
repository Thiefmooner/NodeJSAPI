const http = require('http')

const server = http.createServer((req,res) => {

    console.log(req.method)  //查看请求方法
    console.log(req.url)  //只包含url请求的，路径和查询字符串，不包含IP，端口
    console.log(req.headers)//查看请求头
    res.setHeader("content-type","text/html;charset=utf-8")
    res.end("查看请求行，请求头")
})

server.listen(9000,() => {console.log("服务已经跑起来了")})
