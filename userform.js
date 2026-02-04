function useform(req,res)
{
    res.write(`
    <form action='/submit' method='post'>
       <input type='text' placeholder='enter Name' name='name'></input> 
       <input type='text' placeholder='enter Email' name='e_mail'></input> 
       <button>Submit</button>
    </form>
        `)
}
module.exports = useform;