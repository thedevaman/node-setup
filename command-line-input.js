const http = require('http')
const arg = process.argv
const port = arg[2]; //its recceved all commands from terminal-*
console.log(arg[2])
http.createServer((req,res)=>{
    res.write('testing input form')
    res.end()
}).listen(port)

