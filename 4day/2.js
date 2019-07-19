var express = require('express');
var fs =require('fs');
var app = express();
// app.engine('views engine','ejs');
app.set('view engine','ejs');
app.set('views',__dirname+'/views')
console.log(app)
app.get('/',(req,res)=>{
    console.log(res)
    var list = ['1','2','3'];
    res.render('index',{
        list:['1','2','3']
    })
})
app.listen(3000)
