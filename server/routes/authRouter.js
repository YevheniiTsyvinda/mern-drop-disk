const Router = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const config = require("config")
const jwt = require("jsonwebtoken");
const {check, validationResult} = require("express-validator")
const router = new Router();

router.post('/registration', 
[
    check('email',"Incorrect email").isEmail(),
    check('password',"Password must be longer than 3 and shorter than 12")
    .isLength({min:3,max:12})
]
,async (req,res)=>{
    try {
        
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({message: "Incorrect request", errors})
        }
        const {email, password} = req.body;
        const candidate = await User.findOne({email});

        if(candidate){
            return res.status(400).json({message: `User with email ${email} already exist`})
        }
        const hashPassword = await bcrypt.hash(password, 13);
        const user = new User({email,password: hashPassword});
        debugger
        
        await user.save();
        return res.json({message: "User was created!"});
    } catch (e) {
        debugger
        console.dir(e);
    }
})

router.post('/login'
,async (req,res)=>{
    try {
        debugger
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        const isPassValid = bcrypt.compare(password,user.password);
        if(!isPassValid){
            return res.status(400).json({message:"Invalid password"})
        }
        const token = jwt.sign({id: user.id},config.get("jwtSecretKey"),{expiresIn: "1h"});
        return res.json({
            token,user:{
                id: user.id,
                email: email,
                diskSpace: user.diskSpace,
                userSpace: user.userSpace,
                avatar: user.avatar
            }
        })
  
    } catch (e) {
        console.dir(e);
    }
})

module.exports = router;