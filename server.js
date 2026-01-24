const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html") //for explaing the page is html
    res.write(`
        <html>
        <head></head>
        <body>
        </body>
        </html
        `)
    res.end('hello')
})
server.listen(4800)