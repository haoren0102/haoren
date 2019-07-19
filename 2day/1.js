var path = require("path")
var http = require('http')
http.createServer((req,res)=>{
    var oldPath = path.extname('1.js')
    console.log(oldPath)
    // console.log(path)
    res.end()
}).listen(3000)