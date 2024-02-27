const http = require('http')

const server = http.createServer((request,response)=>{
    //1.响应状态码的设置
    //  response.statusCode = 200
    //2.响应头的设置
    response.setHeader("content-type","text/html;charset=utf-8")
    //3.响应体的设置
    response.write()//一般有了write()后,那么在end()就不写相同内容了，他们两个都是在“响应体”里面写
    response.end('成功运行在9000端口 is running ...')//end只能有一个
})
server.listen(9000,()=>{console.log("成功运行在9000端口")})