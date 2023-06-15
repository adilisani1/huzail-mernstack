
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
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors"); // Add this line
const app = express();
const port = process.env.PORT || 5000;
const complaintRouter = require("./router/complaint")
dotenv.config({ path: './config.env' });
require("./db/conn");
// const User = require("./model/userSchema")
app.use(express.json());
app.use(cors());

app.use(require("./router/auth"));
app.use("/c", complaintRouter);

const middleware = (req, res, next) => {
    console.log("Hello, my middleware");
    next();
};

app.get("/", (req, res) => {
    res.send("Hello, world");
});

app.get("/signin", middleware, (req, res) => {
    res.send("Hello, world signin");
});

app.get("/signup", (req, res) => {
    res.send("Hello, world signup");
});

// if (process.env.NODE_ENV == "production") {
//     app.use(express.static("frontend/build"))
// }

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
