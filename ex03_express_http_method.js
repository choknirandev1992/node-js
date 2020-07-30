var express = require('express');
var app = express();

//HTTP GET (call-back function standard javascript)
app.get('/', function(req, res) {
    res.end('home');
});

//HTTP GET (call-back function lambda)
app.get('/profile', (req, res) => {
    res.end('profile');
});

//http GET (call-back function lambda)
app.get('/login', (req, res) => {
    res.end('username: '+ req.query.username + " password: "+ req.query.password);
});

//http POST (call-back function lambda)
app.get('/post', (req, res) => {
    res.end('username: '+ req.body.username + " password: "+ req.body.password);
});

var server = app.listen(3000,function(){ 
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listen at http://%s:%s",host, port);
})