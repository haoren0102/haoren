var ejs = require('ejs');
var http = require('http');
var fs = require('fs');
var fd = require('formidable');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    if(req.url=='/favicon.ico'){
        return
    }
    var datas = {
        'list':[
            {
                name:'教师',
                id:110
            }
        ]
    }
    var datas1 = {
        'list':[
            {
                name:'学生',
                id:120
            }
        ]
    }
    var form = new fd.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        console.log(fields.username)
        fs.readFile('./1.ejs',(err,data)=>{
            var aa = data.toString()
            console.log(aa)
            console.log(fields.username)
            console.log(fields.username=='教师')
            if(fields.username=='教师'){
                var bb = ejs.render(aa,datas)
            }else if(fields.username=='学生'){
                var bb = ejs.render(aa,datas1)
            }
            res.end(bb)
        })
    })
// res.end()
}).listen(3000,()=>{
    console.log('服务器请求成功');
})