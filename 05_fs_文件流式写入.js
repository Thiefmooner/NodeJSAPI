let fs = require ('fs')
/**
 *流式写入：适合大文件，或者频繁写入
 */

let ws = fs.createWriteStream('./kkk.txt')  //创建写入流对象

ws.write('11111\r\n')  //开始write
ws.write('2222\r\n')
ws.write('33333331\r\n')
ws.write('44444\r\n')
ws.write('55555\r\n')
ws.write('66666\r\n')

ws.close()  //关闭通道