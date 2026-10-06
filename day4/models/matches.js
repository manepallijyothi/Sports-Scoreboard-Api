const mongoose = require("mongoose");

const MatchSchema = new mongoose.Schema({
    team: {
        type: String,
        required: true,
        trim: true 
    },
    points: {
        type: Number,
        required: true,
        min: 0
    },
    sport:{
        type: String,
        required: true,
        trim: true 
    },
    won:{
        type: Boolean,
        required: true,
        trim: true 
    },
    matchDate:{
        type: String,
        required: true,
        trim: true 
    }
},{
    timestamps : true
});

module.exports = mongoose.model("Match",MatchSchema)