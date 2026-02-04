const queryString = require('querystring');
const fs = require('fs');

function userDataSubmit(req,res)
{
     let dataBody = [];

     req.on('data',(chunk)=>{
                dataBody.push(chunk);
            })

      req.on('end',()=>{
                    let rawData = Buffer.concat(dataBody).toString();
                    let readableData = queryString.parse(rawData);
                    let dataString = "My name is " + readableData.name + " my email is " + readableData.e_mail;
                    console.log(dataString);
        
            
                })

    res.write(`



        <h1>You Can get data from form</h1>
        `)
}
module.exports = userDataSubmit;