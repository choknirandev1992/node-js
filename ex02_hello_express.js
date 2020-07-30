var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.end('Hi');
});

app.get('/profile', function(req, res){
    res.end('Hi, my name is chok');
});

var server = app.listen(3000,function(){ 
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listen at http://%s:%s",host, port);
})