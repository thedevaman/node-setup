const http = require('http');
http.createServer((req,res)=>{
    res.write('<h1>this is write</h1>')
    res.end('hello')
}).listen(4800)