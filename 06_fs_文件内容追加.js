let fs =  require('fs')
//异步追加，和异步写入参数一样
fs.appendFile('./你好.txt','既来之则安之',err => {
    if(err){
        console.log('追加内容失败！')
        return
    }
    console.log('追加内容成功！')
})