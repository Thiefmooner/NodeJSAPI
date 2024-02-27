let fs = require('fs')
//异步读取，参数：文件路径，options(可选)，callback
fs.readFile('./kkk.txt',(err,data) => {
    if(err){
        console.log('读取失败！')
        return
    }
    console.log(data.toString())
})

//同步读取
console.log(fs.readFileSync('./kkk.txt').toString())