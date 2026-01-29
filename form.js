// const http = require('http');

// http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":'text/html'})

//      if(req.url == '/')
//      {

//     res.write(`
//        <form action='/submit' method='post'>
//         <input type='text' placeholder='enter Name' name='name'></input> 
//         <input type='text' placeholder='enter Email' name='e-mail'></input> 
//         <button>Submit</button>
//        </form>`
//     )
//    }else if(req.url == '/submit'){
//     res.write('<h1>Data Submitted</h1>')
//    }

//     res.end()
// }).listen(5000)

const http = require('http');
const fs = require('fs');
const queryString = require('querystring')

http.createServer((req,res)=>{
    fs.readFile('html/form.html','utf-8',(error,data)=>{
      
        if(error){
              res.writeHead(500,{"content-type":'text/plain'})
            res.end('server Error')
            return;
        }
        res.writeHead(200,{"content-type":'text/html'})
        if(req.url == '/')
        {
            res.write(data)
        }else if(req.url == '/submit'){
            let dataBody = [];
            req.on('data',(chunk)=>{
                dataBody.push(chunk);
            })

            req.on('end',()=>{
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData);
                let dataString = "My name is " + readableData.name + " my email is " + readableData.e_mail;
                console.log(dataString);
                // fs.writeFileSync("text/"+readableData.name+".txt",dataString); // sync way to create file
                // fs.writeFileSync(readableData.name+".txt",dataString,'utf-8');
                // console.log("file created");

                fs.writeFile("text/" + readableData.name + ".txt", dataString, 'utf-8',(err)=>{
                    if(err)
                    {
                      res.end('server error!')
                      return false
                    }else{
                     console.log('file created')
                    }
                } )
                
            })

            res.write('<h1>Data Submitted</h1>')
           
        }
   res.end()   

})


}).listen(5000)