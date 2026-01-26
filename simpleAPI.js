const http = require('http');
const userData = [
    {
    name:"aman",
    age:30,
    email:'aman@gmail.com'
    },
    {
    name:"rahul",
    age:15,
    email:'rahul@gmail.com'
    },
    {
    name:'akash',
    age:25,
    email:'akash@gmail.com'
    }
]
http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json')
    res.write(JSON.stringify(userData));
    res.end()
}).listen(5000)
