const http = require('http')

http.createServer((req,resp)=>{
    console.log(req.method)//find method
    console.log(req.url) //find url
    console.log(req.headers.host) //find host
    console.log(req.headers) //find headers
    if(req.url == '/')
    {
    resp.write("<h1>/home page</h1>")
    }else if(req.url == '/login')
    {
    resp.write("<h1>login page</h1>")
    }else{
     resp.write("<h1>Dashboard</h1>")    
    }
    resp.end()
}).listen(5100)