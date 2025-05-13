const express = require("express");
const userRouter = express.Router();
const User = require("../Models/user");

userRouter.post("/signup", async (req,res) =>{

  try{
    const {firstName,lastName,emailId,password,age,phoneNumber,gender} = req.body;

    const user = new User({
      firstName,
      lastName,
      emailId,
      password,
      age,
      phoneNumber,
      gender
    });

    const newUser = await user.save();
    res.json({
      message:"User added successfully",
      data:newUser
    });

  }
  catch(err){
    console.error(err);
       res.status(500).json({
      message: "Internal Server Error",
      error: err.message
    });
  }
});

userRouter.get("/getusers", async (req,res)=>{
    try{
        const userData = await User.find();
        res.json({
            message:"I have got all user",
            userData
        })
    }
    catch(err){
        console.error(err);
    }
})

userRouter.get("/getuserbyid", async (req,res)=>{
    try{
        const {emailId} = req.body;
         
        const findUser = await User.findById({emailId});
        
        res.json({
            message:"I have got the user",
            findUser
        })
    }
    catch(err){
        console.error(err);
    }
})

module.exports = userRouter;

