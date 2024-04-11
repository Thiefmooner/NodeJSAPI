const express = require('express')
const app = express()

app.get('/login',(req,res)=>{
    //这是响应一个html文件,这个文件有个登录按钮可以发POST请求
    res.sendFile(__dirname + '/form.html')
})




app.post('/login',(req,res)=>{
    res.send('获取用户数据')
})

app.listen(9000,()=>{
    console.log('running')
})