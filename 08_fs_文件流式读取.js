let fs = require ('fs')

let rs = fs.createReadStream('./abc.mp4')  //创建读取流对象，假设有一个mp4文件

//绑定data事件，chunk这个回调函数，每读完一块chunk，就会执行一次
rs.on('data',chunk => {
    console.log(chunk.length)//每读一次内容，就打印本次读取的chunk大小
})

//end可选事件
rs.on('end',()=>{
    console.log('读取完毕！')
})