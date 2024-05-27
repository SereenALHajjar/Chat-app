import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenSetCookie from "../../utils/generateToken.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect)
            return res.status(400).json({ error: "Invalid Email or Password" });
        generateTokenSetCookie(user._id, res) ;
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            gender: user.gender
        });

    } catch (error) {
        res.status(500).json({ error: error.msg });
    }
}
export const signup = async (req, res) => {
    try {
        const { fullName, email, password, confirmPassword, gender } = req.body;
        if (password !== confirmPassword)
            return res.status(400).json({ error: "Password don't match." });
        const user = await User.findOne({ email });
        if (user)
            return res.status(400).json({ error: "Email already exists." });
        //hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ fullName, email, password: hashedPassword, gender });
        if (newUser) {
            generateTokenSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                password: newUser.password,
                gender: newUser.gender
            });
        }
        else {
            res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        res.status(500).json({ error: error.msg });
    }
}
export const logout = async (req, res) => {
    try{
        res.cookie('jwt', '', {maxAge: 0});
        res.status(200).json({message: "Logout successfully"});
    }
    catch(error)
    {
        res.status(500).json({ error: error.msg });
    }

}