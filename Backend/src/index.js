const express=require('express')
const app=express()

if (process.env.NODE_ENV!=='PRODUCTION'){
    require('dotenv').config({
        path:'./src/config/.env',
    });
}
const PORT=process.env.PORT;
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.listen(PORT,()=>{
    console.log(`The server has started in the port     ${PORT}`)
})