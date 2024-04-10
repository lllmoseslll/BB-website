import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { erroHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;

    if (
        !username || 
        !email || 
        !password ||
        username === "" ||
        email === "" ||
        password === ""
        )  {
            // return res.status(400).json({message:"all fields are required"});
            next(erroHandler(400, "all fields are required"));
        } 

        const hashedPassword = bcryptjs.hashSync(password, 10);


        const newUser = new User({
            username, 
            email, 
            password: hashedPassword
        });

        try {
             await newUser.save();
             res.json("signup successful");
        } catch (error) {
            // res.status(500).json({message: error.message});
            next(error);
            
        }

       
};

export const singin = async (req, res, next) => {
     const {email, password} = req.body;

     if(!email || !password || email === "" || password === "" ){
        next(erroHandler(400, "all fields are required"));
     }

     try {
        const validUser = await User.findOne({ email})
        if (!validUser){
           return next(erroHandler(404, "user not found"));
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
           return next(erroHandler(404, "password incorrect"));
        }

        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET,);
        const {password: pass, ...rest} = validUser._doc;

        res.status(200).cookie("access_token", token, {
            httpOnly: true }).json(rest);
     } catch (error) {
        next(error);
     }

};