const User = require("../models/user-model");
const bcrypt = require("bcrypt")

 const home = async (req, res) => {
    try {
      res.status(200).send("hello bro router");
    } catch (error) {
      console.log(error);
    }
  };
  const register = async (req,res,next)=>{
 try {
    const {username,email,phone,password} = req.body
    // console.log("Incoming body:", req.body);

    const userExist =    await User.findOne({email:email})
    if(userExist){
        return res.status(400).json({msg:"User already registered"})
         }
        //  const saltRound = 10;
        //  const hashedpasswword = await bcrypt.hash(password,saltRound)
       const  userCreated = await User.create({
        username,
        email,
        phone,
        password
})
console.log("User Created:", userCreated);
   
    
    res.status(200).send({
        message:"User Registered Sucessfully",
         userCreated,
         token: await
          userCreated.generateToken(),
        userId:userCreated._id.toString()
    })
 } catch (error) {
  res.status(500).json({ message: "Internal server error" });
     next(error)
    
   
     
    
    
    
 }
}




const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const userExist = await User.findOne({email})
        if(!userExist){

          return  res.status(400).json({message:"Invalid Email or Password"})
        }
        // const isMatch = bcrypt.compare(password,userExist.password)

         const isMatch = await userExist.comparePassword(password)
        if(isMatch){
            res.status(200).json({
                msg:"Logged in Sucessfully",
                token: await
                userExist.generateToken(),
                userId:userExist._id.toString()
            })
        } else{
            return res.status(402).json({message:"Invalid Email or Password"})
        }

        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
        
    }









};
// to send user data

const user = async (req,res)=>{
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({userData})
    
    
    
  } catch (error) {
    console.log(  "Error from user Route:" ,error.message);
    return res.status(500).json({ message: "Internal Server Error" });
    
  }



}
  module.exports ={home ,register,login,user}