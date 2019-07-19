var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
http.createServer((req,res)=>{
    var datas = {
        "list":[
            {
                name:'tom',
                age:12
            },
            {
                name:'tom1',
                age:22
            }
        ]
    }
    fs.readFile('./3.ejs',(err,data)=>{
      var bb = data.toString()
      console.log(bb)
        var aaa = ejs.render(bb,datas)
        res.end(aaa)
    })
    
}).listen(3000,()=>{
    console.log('服务已经启动')
})