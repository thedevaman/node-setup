const http = require('http');
const age = 29;
const name = "aman";
const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html") //for explaing the page is html
    res.write(`
        <html>
        <head>
        <title></title>
        </head>
        <body>
        <h1>
        `+name+`
        </h1>
        <h2>
        `+age+`
        </h2>
        </body>
        </html
        `)
    res.end('hello') //exit the request other wise page will load till
    process.exit() //exit the whole process server will closed
})
server.listen(4800)