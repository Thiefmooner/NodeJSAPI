//1.alloc将内存区域清零，写值
let buf = Buffer.alloc(30)
console.log(buf)

//2.allocUnsafe不用清零，直接写，速度快，但是不安全
let buf2 = Buffer.allocUnsafe(111)
console.log(buf2)

//3.from 可以字符串，数组转为Buffer
let buf3 = Buffer.from("hello")
let buf4 = Buffer.from([1,2,3,4])
console.log(buf3)