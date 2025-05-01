// const jwt = require("jsonwebtoken");
// const User = require("../models/user-model");

// const authMiddleware =  async (req,res,next)=>{
//        const token = req.header('Authorization');
//        if(!token){
//         return res.status(401).json({msg:"Unauthrosied HTTP,Token not provided"})
//        }
      

//     //    const jwtToken = token.replace("Bearer ", "").trim(); // ✅ notice the space after Bearer
//     //    console.log("Token from authMiddleware:", jwtToken);

//        try {
//         const jwtToken = token.replace("Bearer ", "").trim(); // ✅ notice the space after Bearer
//        console.log("Token from authMiddleware:", jwtToken);

//         const isVerfied = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
//         // console.log(isVerfied);
        
//         const userData = await User.findOne({email:isVerfied.email})
//         console.log(userData);
        
//         next();
        
//        } catch (error) {
//         return res.status(401).json({msg:"Unauthorizzed token"})
        
//        }
      
       


// }


const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized HTTP, Token not provided" });
  }

  try {
    const jwtToken = token.replace("Bearer ", "").trim();
    console.log("Token from authMiddleware:", jwtToken);

    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    console.log("Decoded JWT payload:", isVerified);

    const userData = await User.findById(isVerified.userId).select("-password"); 
    // 🔥 note: finding by userId from token
    // 🔥 and not sending password field

    if (!userData) {
      return res.status(404).json({ msg: "User not found" });
    }

    req.user = userData;
    req.token = token;
    req.userId = userData._id; // Attach user to request object
    next();
    
  } catch (error) {
    console.error("JWT verification error:", error);
    return res.status(401).json({ msg: "Unauthorized token" });
  }
};

module.exports = authMiddleware;
