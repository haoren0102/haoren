var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return;
    }
    // fs.readdir('./aa',(err,data)=>{
    //     console.log(data);
    //     data.forEach((ele,i) => {
    //         console.log(data[i])
    //         console.log(ele);
    //         fs.stat('./aa/'+ele,(err,stats)=>{
    //             console.log(stats.isDirectory(ele));
    //         //    if(stats.isDirectory()){
    //         //        console.log(ele)
    //         //    }
    //         })
    //     });
    // })
    // fs.readdir('./aa',(err,data)=>{
    //     console.log(data);
    //     data.forEach((ele,i) => {
    //         console.log(data[i])
    //         console.log(ele);
    //         fs.stat('./aa/'+ele,(err,stats)=>{
    //             console.log(stats.isDirectory(ele));
    //         //    if(stats.isDirectory()){
    //         //        console.log(ele)
    //         //    }
    //         })
    //     });
    // })
   
}).listen(3000,()=>{
    console.log('服务器启动成功');
})