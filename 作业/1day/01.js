var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer((req,res)=>{
    if(url.req=="/favicon.ico"){
        return
    }
    fs.readFile("./01.html",(err,data)=>{
        res.end(data)
    })
    var uul = url.parse(req.url,true).query;
    if(uul.username!=undefined){
        res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
        
        console.log(uul)
        var data = {
            username:123456,
            password:123456
        }
        if(uul.username==data.username&&uul.password==data.password){
                res.end('登录成功')
            }else{
                res.end('登录失败')
            }
    }
}).listen(3000)