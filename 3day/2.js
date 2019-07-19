var fs = require('fs');
var http = require('http');
http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return;
    }
    // fs.readFile('./1.txt',(err,data)=>{
    //     fs.writeFile('./2.txt',data,{flag:'a'},(err)=>{
    //         res.end('success')
    //     })
    // })
    // fs.copyFile('./1.txt','./2.txt',(err)=>{
    //     res.end('success')
    // })
    // fs.rename('./2.txt','./22.txt',(err)=>{
    //     res.end('success')
    // })
    // fs.unlink('./22.txt',(err)=>{
    //     res.end('success')
    // })
    // fs.mkdir('./aa',(err)=>{
    //     res.end('success')
    // })
    // fs.rmdir('./aa',(err)=>{
    //     res.end('success')
    // })
    // fs.readdir('../3day',(err,data)=>{
    //     console.log(data);
    //     res.end()
    // })
    var str = fs.createReadStream('./1.txt')
    var content = '';
    str.on('data',(chunk)=>{
        content+=chunk;
    })
    str.on('end',(chunk)=>{
        console.log('数据接收完毕')
        // fs.readFile('./1.txt',(err,str)=>{
        //     var a = str.toString;
        //     console.log(content);
        //     res.end()
        // })
        res.end(content)
    })
    
}).listen(3000,()=>{
    console.log('服务器打开成功')
})