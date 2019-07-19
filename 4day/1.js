var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var ss = path.resolve(__dirname,'ss')
var app = express();
// 处理json数据的请求
app.use(bodyParser.json())
// 对字符串的数据请求
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send('首页')
})
app.use(express.static(ss))
app.post('/dopost',(req,res)=>{
    var body = req.body;
    console.log(body);
    res.send('post数据请求')
})
app.listen(3000)