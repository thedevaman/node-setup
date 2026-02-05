const fs = require('fs');
// fs.writeFileSync("files/banana.txt","This is fruit") //for add

// fs.unlinkSync("files/banana.txt"); //for delete files

// const data = fs.readFileSync('files/apple.txt',"utf-8");
// console.log(data)

// fs.appendFileSync("files/apple.txt"," this is good for health"); // update file


// console.log(process.argv[2]);
const operation = process.argv[2];

if(operation == 'write')
{
    const name = process.argv[3];
    const content = process.argv[4];
    const fullname = "files/"+name+".txt";
    console.log(operation,name,content);
    fs.writeFileSync(fullname,content)
}

if(operation == 'read')
{
    const name = process.argv[3];
    // const content = process.argv[4];
    const fullname = "files/"+name+".txt";
    let data = fs.readFileSync(fullname,"utf-8")
   console.log(data)
}

if(operation == 'update')
{
    const name = process.argv[3];
    const content = process.argv[4];
    const fullname = "files/"+name+".txt";
    let data = fs.appendFileSync(fullname,content)
   
}

if(operation == 'delete')
{
    const name = process.argv[3];
    // const content = process.argv[4];
    const fullname = "files/"+name+".txt";
    let data = fs.unlinkSync(fullname)
   
}else{
    console.log("operation not found")
}

