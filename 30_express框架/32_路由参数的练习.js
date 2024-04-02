const express = require ('express')
const {singer} = require ('./singer.json')//引入json数据,要{}解构赋值后，才是[]
//console.log(singer)
const app = express()

app.get('/singer/:id.html',(req,res)=>{
    let result = singer.find(item=>{
        if(item.id === Number(req.params.id)){
            return true 
        }
    })
    //console.log(result)
    res.end(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>${result.singer_name}</h1>
                <img src= "${result.singer_pic}"/>
            </body>
         </html> 
    
    `)
})
app.listen(9000,()=>{console.log("9000端口正在运行")})