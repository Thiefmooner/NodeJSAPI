/**
 * 新建一个文件，你好.txt，写入内容
 */

//导入fs模块
let fs = require ('fs')

//writeFile异步写入，四个参数(文件名，待写入的数据，options(可选)，callback)
//当第三个参数为{flag:'a'}时候，为异步追加
fs.writeFile('./你好.txt','XXXXXXXXXXXXXXXXX',err=>{
    if(err){  //err的值，如果是写入失败：值为错误对象；如果写入成功：值为null
        console.log('写入失败！')
        return
    }
    console.log('写入成功！')
})

//writeFileSync同步写入，无回调函数
fs.writeFileSync('./data.txt','test')