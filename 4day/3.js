var express = require('express');
var art  = require('express-art-template');
var app = express();
app.engine('art',art);
app.get('/',(req,res)=>{
    res.render('new.art',{
        list:['1','2','3']
    })
})
app.listen(3000)