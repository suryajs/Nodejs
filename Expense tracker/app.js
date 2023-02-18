const express=require('express');

const app=express()

app.get('/Welcome',(req,res)=>{
    res.send("Hello Express");
})

app.listen(3000,()=>{
    console.log('Server is running');
})

