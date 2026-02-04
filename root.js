const http = require('http');
const useform = require('./userform');
const userDataSubmit = require('./userDataSubmit');
http.createServer((req,res)=>{
 res.writeHead(200,{"content-type":'text/html'})   
 if(req.url == "/")
 {
 useform(req,res)
 }else if(req.url == "/submit")
 {
    userDataSubmit(req,res)
 }

 res.end();
}).listen(3200)