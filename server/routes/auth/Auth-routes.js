const express = require("express");
const router = express.Router();
const {registerUser,logoutUser,authMiddleware} = require("../../controllers/auth/authController")
const {loginUser} = require("../../controllers/auth/authController")


router.post("/register",registerUser);
router.post("/login", loginUser);
router.get("/logout",authMiddleware,logoutUser);
router.get('/check-auth', authMiddleware, (req,res)=>{
  user=req.user;
  res.status(200).json({
    success:true,
    message:"User authenticated",
    user
  })
})
module.exports = router