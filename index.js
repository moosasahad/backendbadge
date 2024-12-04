require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const router = require('./router/route');
const app = express()
app.use(express.json())
const cookieparser = require('cookie-parser')  

mongoose.connect("mongodb+srv://sahdaccoun32:moosa%40321@cluster0.dgvef.mongodb.net/newdb")
.then(()=>{
    console.log("connected");
    
})
.catch((error)=>{
    console.log('connecting error',error);
    
})
const PORT = 2000
app.listen(PORT,()=>{
    console.log("server runned at ",PORT);
    
})


app.use(router)

