let fs = require ('fs')


//重命名，移动用法是一样的
//文件重命名
fs.rename('./文件改名/sss.txt','./文件改名/aaa.txt',err => {
    if(err){
        console.log('改名失败！！'+err.message)
        return
    }
    console.log('改名成功！！！！')
})

//文件移动
fs.rename('./文件移动前/kkk.txt','./文件移动后/kkk.txt',err => {
    if(err){
        console.log('移动失败！！')
        return
    }
    console.log('移动成功！！！！')
})