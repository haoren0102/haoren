var fs = require('fs');
var http = require('http');
var art = require('art-template');
http.createServer((req,res)=>{
    var Data = {
        'list':[
            '1','2','3'
        ]
    }
    fs.readFile('./1.art',(err,data)=>{
        var str = data.toString();
        var newData = art.render(str,Data)
        res.end(newData)
    })
}).listen(3000,()=>{
    console.log('服务器启动成功');
})