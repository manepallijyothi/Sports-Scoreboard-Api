const express = require("express");
const dotenv = require("dotenv")
const connectDB= require("./config/db");
const MatchRouters = require("./router/matches.js")
const errorHandler = require("./middleware/errorHandler")


const app = express();
dotenv.config();
const port = process.env.PORT || 6001;


app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "working"
    });
});

app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    
    next();
});

app.use("/matches",MatchRouters);

app.use((req,res)=> {
    res.status(404).json({
        message: "Page not Found"
    })
});

app.use(errorHandler);
app.listen(port, () =>{
    connectDB();
    console.log(`Server is Running on the ${port}`);
})