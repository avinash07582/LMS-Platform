
const Contact = require("../models/contact-model");
const User = require("../models/user-model")

const getAllUsers = async (req,res,next)=>{
  try {
    const users = await User.find({},{password:0})
    console.log(users);
    
    if(!users || users.length ===0){
        return res.status(404).json({message:"No Users found"})
    }
     return res.status(200).json(users)
    
  } catch (error) {
    next(error)
    
  }

}
// editing or updating the user by admin


 const getUserById = async (req,res,next)=>{
  try {
    const id = req.params.id;
    const data =  await User.findOne({_id:id},{password:0})
    return res.status(200).json(data)
    
  } catch (error) {
    next(error);
    
    
  }
 }

 const updateUserById = async (req,res,next)=>{
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updateData = await User.updateOne({_id:id},{
      $set:updatedUserData,
    })

    return res.status(200).json(updateData)
  } catch (error) {
    next(error)
  }

 }


const deleteUserById = async (req,res,next)=>{
  try {
    const id = req.params.id;
    await User.deleteOne({_id:id})
    return res.status(200).json({message:"User Deleted Sucessfully"})
    
  } catch (error) {
    next(error);
    
    
  }
}



 const getAllContacts = async (req,res,next) =>{
    try {
        const contacts = await Contact.find()
        console.log(contacts);
        if(!contacts || contacts.length ===0){
            return res.status(404).json({message:"No Contact  found"})
        }
         return res.status(200).json(contacts)
        
        
    } catch (error) {
        next(error)
    }

 }


 const deleteContactById = async (req,res,next)=>{
  try {
    const id = req.params.id;
    await Contact.deleteOne({_id:id})
    return res.status(200).json({message:"Contact Deleted Sucessfully"})
    
  } catch (error) {
    next(error);
    
    
  }
}







module.exports ={ getAllUsers,getAllContacts,deleteUserById,getUserById,updateUserById,deleteContactById}