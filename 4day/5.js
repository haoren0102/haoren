var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser('111'));
app.get('/',(req,res)=>{
    res.send('首页')
})
app.get('/set',(req,res)=>{
    res.cookie('username','tom',{maxAge:20000,signed:true})
    res.send('cookie设置')
})
app.get('/get',(req,res)=>{
    var name = req.signedCookies.username;
    console.log(name);
    res.send('读取成功'+name)
})
app.listen(3000,'127.0.0.1')