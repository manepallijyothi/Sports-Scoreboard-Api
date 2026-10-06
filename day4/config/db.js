const mongoose = require("mongoose");

const connectDB = async () =>{
    try{
        const connection = await mongoose.connect(process.env.mongodb_url);
        console.log("DB Connected Successfully");
    }
    catch(err){
        console.log("DB connection failed");
        //console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;