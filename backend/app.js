
// // const User = require("./model/userSchema")
// app.use(express.json())
// app.use(cors());

// app.use(require("./router/auth"))

// const middleware = (req, res, next) => {
//     console.log("Hello, my middleware");
//     next();
// };

// app.get("/", (req, res) => {
//     res.send("Hello, world");
// });

// app.get("/signin", middleware, (req, res) => {
//     res.send("Hello, world signin");
// });

// app.get("/signup", (req, res) => {
//     res.send("Hello, world signup");
// });

// const start = async () => {
//     try {
//         app.listen(port, () => {
//             console.log(`Server is running on port ${port}`);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };

// start();


const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors"); // Add this line
const port = process.env.PORT || 5000;

const complaintRouter = require("./router/complaint")
const app = express();


// require("./db/conn");
// const User = require("./model/userSchema")
dotenv.config({ path: './config.env' });

mongoose.connect("mongodb+srv://adil:aadil%400321@cluster0.1ijveb9.mongodb.net/huzail")
    .then(() => console.log("DBConnection Successfull"))
    .catch((err) => console.log(err))


app.use(express.json());
app.use(cors());
app.use(require("./router/auth"));
app.use("/c", complaintRouter);

// const middleware = (req, res, next) => {
//     console.log("Hello, my middleware");
//     next();
// };

// app.get("/", (req, res) => {
//     res.send("Hello, world");
// });

// app.get("/signin", middleware, (req, res) => {
//     res.send("Hello, world signin");
// });

// app.get("/signup", (req, res) => {
//     res.send("Hello, world signup");
// });


// const start = async () => {
//     try {
//         app.listen(port, () => {
//             console.log(`Server is running on port ${port}`);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };

// start();
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
});