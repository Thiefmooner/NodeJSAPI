//运行脚本，地址栏输入http://127.0.0.1:9000/search?keyword=132412，控制台输出132412

const http = require('http') 
const url = require('url')                          

const server = http.createServer((req,res) => {
    let r = url.parse(req.url,true)
    let pathname = r.pathname
    let keyword = r.query.keyword
    console.log(pathname)
    console.log(keyword)
    res.setHeader("content-type","text/html;charset=utf-8")
    res.end('获取地址栏url中的，路径和查询字符串')
})

server.listen(9000,()=>{
    console.log('服务跑起来了！')
})