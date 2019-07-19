var http = require('http');
var path = require('path');
var fd = require('formidable');
var sd = require('silly-datetime');
var fs = require('fs')
http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return;
    }
    if(req.url=='/dopost'){
        var form = new fd.IncomingForm();
        form.uploadDir = './img'
        form.parse(req,function(err,fields,files){
            var oldpath = files.pic.path;
            var extname = path.extname(files.pic.name)
            var tt = sd.format(new Date(),'YYYYMMDDhhmmss')
            var newpath = 'img/'+tt+extname;
            fs.rename(oldpath,newpath,(err)=>{
                res.end('success')
            })
        })
    }
}).listen(3000,()=>{
    console.log('服务已经启动了')
})