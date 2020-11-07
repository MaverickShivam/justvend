const express=require("express")
const app=express()
const PORT=process.env.PORT || 3200

app.set('views',__dirname+'/public')
app.engine('html',require('ejs').renderFile);
app.get("/",(req, res)=>
{
    res.render('test.html');
})
app.listen(PORT,()=>{
    console.log('Listening on port '+PORT);
})