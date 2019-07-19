var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer((req,res)=>{
    // res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    // fs.readFile("."+req.url+".txt",(err,data)=>{
    //     res.end(data)
    // })
    var query = url.resolve("./1.txt","")
    res.end(query)
}).listen(3000)