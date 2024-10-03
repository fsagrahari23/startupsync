const UserModel = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// nodemailer
const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (email, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  console.log(process.env.EMAIL, process.env.PASSWORD);
  const options = {
    from: process.env.EMAIL,
    to: email,
    subject: subject,
    text: text,
  };
  await transporter.sendMail(options);
}

// register
const registerUser = async (req, res) => {
  const {username, email, password} = req.body;
  try{
    const checkUser = await UserModel.findOne({email});
    if(checkUser){
      return res.json({
        success: false,
        message: "User already exists",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newuser = await UserModel.create({
      username,
      email,
      password:hashPassword,
    })
    
    res.status(201).json({
      success: true,
      newuser,
      message: "User created successfully",
    })
    sendEmail(email,'Welcome to StartupSync' ,`Dear ,

Welcome to StartupSync! We're excited to have you join our platform for startup success.

To get started:

Log in to your account
Go to your Profile section
Complete the KYC (Know Your Customer) form
Completing your KYC is crucial for accessing all StartupSync features and ensuring a secure environment for all users.

If you need help, contact us at support@startupsync.com.

Let's accelerate your startup journey!

Best regards,
The StartupSync Team`);
  }catch(err){
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
  
}

// login

const loginUser = async (req, res) => {
  const {email, password} = req.body;
  console.log(email, password);
  
  try{
    const users = await UserModel.findOne({email});
    if(!users){
      return res.json({
        success: false,
        message: "User not found",
      });
    }
    const isMatch = await bcrypt.compare(password, users.password);
    if(!isMatch){
      return res.json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({id: users._id,role:users.role,email:users.email,username:users.username}, process.env.JWT_SECRET, {
      expiresIn: "1d",  // 1 day
    });
    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    }).json({
      success: true,
      message: "Login successful",
      user:{
        id: users._id,
        username: users.username,
        email: users.email,
        role: users.role
      },
      token,
    });
    
  }catch(err){
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
  
}




// logout
const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.json({
    success: true,
    message: "Logout successful",
  });
}

// auth-middleware
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if(!token){
    return res.json({
      success: false,
      message: "Unauthorized",
    });
  }
try{
  const user = jwt.verify(token, process.env.JWT_SECRET);
  req.user = user;
} catch(err){
  console.log(err);
  return res.json({
    success: false,
    message: "Unauthorized",
  });
}
  
  next();
}

module.exports = {registerUser, loginUser, logoutUser, authMiddleware};