const express = require('express')
const app = express()

app.get('/admin',(req,res)=>{
    res.send("admin界面")
})
//中间件，放到路由请求的第二个参数上
let checkCodeMiddleware = (req,res,next) =>{
    //判断URL中是否code参数为521,这是中间件写法
    if(req.query.code === '521'){
        next()//这个很重要
    }
    else{
        res.send("code参数呢？？？？？？？")
    }
}

app.get('/setting',checkCodeMiddleware,(req,res)=>{
    //判断URL中是否code参数为521,这是放到路由的写法，主要看的是中间件写法
    //if(req.query.code === '521'){
        //res.send("code参数确实是521")
    //}
    //else{
        //res.send("code参数呢？？？？？？？")
    //}
    res.send("setting界面")
})


app.listen(9000,()=>{
    console.log('服务动了')
})