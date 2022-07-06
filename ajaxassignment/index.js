var express=require("express");
var app=express();
app.use(express.static("contents"));
const Portfolio = require('./pages/schema');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Likhitha:Likhi1802@cluster0.jx5im.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
}).then(console.log('Connected To Database.'))
const connection = mongoose.connection;
app.get("/",function(req,res){
    res.sendFile(__dirname+"index.html");
});
app.get("/data" , function(req,res){
    Portfolio.findOne({Maths:34},function(err, result){
        if(err || result==null){
            console.log(err)
        }
        else if (result!=undefined){
            res.send(result);
        }
})
});
app.listen(3000, ()=> console.log("Started"));