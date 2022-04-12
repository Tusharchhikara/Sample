let express=require('express')
let app=express()
app.get('/',function(req,res)
{
    res.send('Hello From SGT')
}
)
app.listen(3000,function()
{
    console.log('Your Applciation is running on the port number 3000')
}
)
