let buf = Buffer.from([105,108,111,118])
console.log(buf.toString())  //toString默认是按照utf-8的编码方式进行转换的

//读写
let buf_16 = Buffer.from('hello')
buf_16[0] = 43
console.log(buf_16.toString())  //>> +ello

//溢出
let buf_O = Buffer.from('hello')
buf_O[0] = 361  //舍弃高位的数字，0001 0110 1001 => 0110 1001
console.log(buf_O)  // <Buffer 69 65 6c 6c 6f>


