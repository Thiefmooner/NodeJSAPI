let fs = require ('fs')

//流式操作
let rs = fs.createReadStream('./mp4移动前/面试.mp4')
let ws = fs.createWriteStream('./MP4移动后/面试.mp4')
//rs绑定data事件
rs.on('data',(chunk)=>{
    ws.write(chunk)
})