const express = require("express");
const prisma = require("../../utils/client");

const  {signupInput, signinInput} = require('../validation/authValidation');
const bcrypt = require("bcrypt");

const jwt= require("jsonwebtoken");

const router= express.Router(); 

router.post("/signup", async(req,res)=>{
    const body= req.body;

    console.log(body);

    const {success}= signupInput.safeParse(body);

    if(!success){
        return res.status(411).json({
            error: "Invalid input",
        });
    }


    const hashedPassword= await bcrypt.hash(body.password, 10);
    try {
         const user= await prisma.user.create({
            data: {
                email: body.email,
                password: hashedPassword,
                name: body.name,
            }
        });
        
        const token= jwt.sign({userId: user.id}, `${process.env.JWT_SECRET}`);
    
        res.json({
            jwt: token,
            message:"User created successfully",
        });
        
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({
          error: "Internal server error",
        });
      }
    

   
});

router.post("/signin", async(req,res)=>{
    const body= req.body;

    console.log(body);

    const {success}= signinInput.safeParse(body);

    if(!success){
        return res.status(411).json({
            message: "Invalid input",
        });
    }

    const user = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });
    
      if (!user) {
        c.status(403);
        return c.json({ error: "User not found" });
      }
      const passwordMatch= await bcrypt.compare(body.password, user.password);
        if(!passwordMatch){
            return res.status(401).json({
                error: "Invalid password",
            });
        }

    const token= jwt.sign({userId: user.id}, `${process.env.JWT_SECRET}`);
    
    res.json({
        jwt: token,
        message:"User signed in successfully",
    });   
    

   
});


module.exports= router;