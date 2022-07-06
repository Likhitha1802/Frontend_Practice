const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
mongoose.connect("mongodb+srv://Likhitha:Likhi1802@cluster0.jx5im.mongodb.net/miniproject?retryWrites=true&w=majority").then(()=>{
    console.log('connected to mongo');
});                               
const connection = mongoose.connection;

/////////Books///////
const book = new mongoose.Schema({
    book : {
        type:String,
        required:true
    },
    author : {
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    }
});
const Details = connection.model('Details',book);

//////user details/////////
var user = new mongoose.Schema({
    user_name : {
        type:String,
        required:true
    },
    user_email : {
        type:String,
        required:true
    }
});
var Users= connection.model('Users',user);


//showing all books
app.get('/',function(req,res){
    
    Details.find({},function(err,result){
        if(err){
            console.log("Error :"+err);
        }
        else{
            console.log(result);
        }
    });


    res.sendFile(__dirname+'/pages/index.html')
});
//subscribe to library
app.get('/subscribe',function(req,res){
    res.sendFile(__dirname+'/pages/subscribe.html')
});
app.post('/subscribe',function(req,res){
    //user schema
Users.create({user_name:req.body.username,user_email:req.body.useremail},function(err){
    if(err){
        console.log("Something went wrong :"+err);
    }
       
    else{
        console.log("user added");
        res.redirect('/');
    }
});
});
//Borrowing a book
app.post('/borrow',function(req,res){
});
app.listen(4000,()=>{
    console.log("Running")
});