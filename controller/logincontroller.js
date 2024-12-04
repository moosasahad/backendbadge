
const user = require('../model/signup')
const jwt = require('jsonwebtoken')
const signup = async (req,res)=>{
   try {
    console.log("body",req.body);
    const {name,email,password} = req.body;
    console.log("detail",{name,email,password});
    const newuser = new user({
        name,
        email,
        password
    })
   await newuser.save()
      
    res.send("signup succses")
   } catch (error) {
    console.log("signup",error)
   }
   res.end()
}

const logincntrller = async (req,res)=>{
    try{
        const {email,password}=req.body
    const login =await user.findOne({email})
    console.log("login",login);
    if(!login){
    res.send('login faild')
    }  
    if(login.password!==password) {
        res.send("password not match")   
    }
    console.log("process.env.JWT_TOKEN",process.env.JWT_TOKEN);
    
    const token = jwt.sign({id:login._id,name:login.name},process.env.JWT_TOKEN,{ expiresIn: "1d" })
    console.log("token",token);

    res.cookie("totken",token,{
        httpOnly:true,
        scure:true,
        sameSite:true,
        maxAge:1*24*60*60*1000
    })
    
    res.status(200).json({message:"login sucsses",tokan:token})            
    }catch(error){
        console.log('login error',error);
        
    }
    res.end()
}    

module.exports={
    logincntrller,
    signup,
}