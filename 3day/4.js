var express = require('express');
var path = require('path');
var app = express();

var publicpath = path.resolve(__dirname,'public')
console.log(publicpath)
app.use(express.static(publicpath));
app.listen(3000)