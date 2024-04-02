const express = require ('express')
const app = express()
//  :id是路由参数的位置,占位符
app.get('/:id.html',(req,res)=>{
    console.log(req.params.id)//params后的id要和:id.html的id占位符一致
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end("页面详情")
})
app.listen(9000,()=>{
    console.log("9000正在监听")
})

/**
 * http://localhost:9000/egerh.html
 * http://localhost:9000/ads.html
 * http://localhost:9000/sfa.html
 * 均可访问
 */
