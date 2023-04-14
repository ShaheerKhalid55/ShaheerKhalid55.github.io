const express = require("express");
const database = require('./database/SqlConnection');
  
const app = express();
const path = require('path');

//app.use(express.static(path.join(__dirname+'/public')));

app.use('/assets',express.static(path.join(__dirname + '/assets')));
app.use('/images',express.static(path.join(__dirname + '/images')));

app.get('/Home',(req,resp)=>
{
    resp.sendFile(__dirname+'/public/index.html');
});

console.log(__dirname);

app.get('/', function(req,res) {
    res.redirect('/Home');
});

app.listen(5200);