/**
 * commonJS规范
 * module.exports = {   ,    }
 * const aaa = require('./xxx.js')
 * 
 * 如果导入的路径是文件夹，首先会检测文件夹下的package.json中的main属性对应的文件
 * 如没，检测文件夹下的index.js和index.json
 * 再没，报错
 */