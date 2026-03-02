import User from "../models/User.js";
import bcrypt from "bcryptjs";

const signupUser = async (req,res) => {
       console.log("req.body =", req.body);
    try {
        const { name, email, password } = req.body;
        
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exists"})
        }

        const hashPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            name,
            email,
            password: hashPassword
        });

        // status 201 for success
        res.status(201).json({message : `Welcome, ${name}`});
    }
    catch (error){
        res.status(500).json({message: "Server error", error});
    }
}

export { signupUser };