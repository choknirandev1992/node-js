var http = require('http');

http.createServer(function(req,res){
    res.end("Hi, CodeMobile");
}).listen(3000);

console.log("server run");