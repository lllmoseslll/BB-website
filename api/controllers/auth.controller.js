import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { erroHandler } from "../utils/error.js";

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