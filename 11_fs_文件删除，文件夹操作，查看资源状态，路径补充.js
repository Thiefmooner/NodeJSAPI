let fs = require ('fs')
let path = require ('path')

//拼接字符串，第二个参数可以不写./
console.log(path.resolve(__dirname,'./index.html'))