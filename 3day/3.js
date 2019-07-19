var express = require('express');
var app = express();
app.get('/',(req,res)=>{
    res.send('success')
})
// app.get('/p:id',(req,res)=>{
//     res.send('路由的动态参数：'+req.params.id)
// })
app.get('./new',(req,res)=>{
    console.log(req.query)
    res.send('获取成功')
})
// app.get('/',(req,res)=>{
//     res.send('success')
// })
app.listen(3000)