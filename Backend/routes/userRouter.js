const jwt = require("jsonwebtoken");
const express = require("express")
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res
                .status(200)
                .send({ message: "User already exists", success: false });
        }

        const password = req.body.password;
        if (!password) {
            return res.status(400).send({ message: "Password is required", success: false });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword; 
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({ message: "User created successfully", success: true });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error creating user", success: false, error });
    }
});
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.send("Invalid Email or Password");
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.send("Invalid Email or Password");
        } else {
            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
                expiresIn: "1d",
            });
            console.log(token)
            res.send({ token, user }); 
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error logging in", success: false, error });
    }
});

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new Error('Invalid token');
    }
};

const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'User not allowed' });
    }

    try {
        const decodedToken = verifyToken(token);

        req.user = decodedToken;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Invalid token' });
    }
};
router.use(authenticateUser);

module.exports=router;