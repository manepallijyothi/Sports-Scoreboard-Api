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
        min: 0,
        max: 500
    },
    sport:{
        type: String,
        required: true,
        enum: ['Cricket', 'kabaddi', 'football', 'other'] 
    },
    won:{
        type: Boolean,
        default: false
    },
    matchDate:{
        type: String,
        required: true,
    }
},{
    timestamps : true
});

module.exports = mongoose.model("Match",MatchSchema, 'matches');