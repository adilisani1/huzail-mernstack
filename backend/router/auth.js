// const express = require("express");
// const router = express.Router();
// const User = require("../model/userSchema");
// require("../db/conn");

// router.get("/", (req, res) => {
//     res.send("hello world dear");
// });

// router.post("/register", async (req, res) => {
//     const { name, email, password, cpassword } = req.body;

//     if (!name || !email || !password || !cpassword) {
//         return res.status(422).json({ error: "Please fill in all the fields properly" });
//     }

//     try {
//         const userExist = await User.findOne({ email: email });
//         if (userExist) {
//             return res.status(422).json({ error: "Email already exists" });
//         }

//         const user = new User({ name, email, password, cpassword });

//         const userRegister = await user.save();

//         if (userRegister) {
//             res.status(201).json({ message: "Registration successful" });
//         } else {
//             res.status(500).json({ error: "Failed to register" });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: "Failed to register" });
//     }
// });

// router.post("/signin", async (req, res) => {

//     try {
//         const { email, password } = req.body
//         if (!email || !password) {
//             return res.status(400).json({ error: "Plz fill the data" })
//         }
//         const userLogin = await user.findOne({ email: email });
//         console.log(userLogin)

//         if (!userLogin) {
//             res.json({ error: "user error " })
//         }
//         else {
//             res.json({ message: "user sigin successfully" })
//         }

//     } catch (error) {
//         console.log(error)
//     }
// })
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
});

// Create the User model
const User = mongoose.model("User", userSchema);

// Define the route handler for user registration
router.post("/register", (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.cpassword, // Make sure this value is a string
    });


    // Save the user document
    user
        .save()
        .then(() => {
            res.status(201).json({ message: "User registered successfully!" });
        })
        .catch((err) => {
            res.status(500).json({ error: "Failed to register user." });
        });
});

router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please provide both name and password" });
        }

        const user = await User.findOne({ email: email, password: password });

        if (user) {
            return res.status(200).json({ message: "User signed in successfully!" });
        } else {
            return res.status(401).json({ error: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to sign in" });
    }
});



// Save the user document




module.exports = router;
