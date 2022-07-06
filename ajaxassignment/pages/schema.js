const mongoose = require("mongoose");
const portfolio = new mongoose.Schema({
    Maths:{
        type:Number,
        require:true
    },
    Science:{
        type:Number,
        require:true
    },
    Social:{
        type:Number,
        require:true
    },
    English:{
        type:Number,
        require:true
    }
});
module.exports = mongoose.model("portfolio" , portfolio);