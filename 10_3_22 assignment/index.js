const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret : 'likhi'}));
app.get('/',function(req,res){
    res.sendFile(__dirname + '/pages/error.html');
});
app.get('/login',function(req,res){
    if(req.session.visited){
        res.send("Already logged in");
    }
    else{
        res.sendFile(__dirname+'/pages/loginform.html');
    }
});
app.get('/logout',function(req,res){
    req.session.visited = false;
    res.redirect('/login');
})
app.post('/loginreq',function(req,res){
    if(req.body.username == "likhi" && req.body.userpassword == "1234"){
        req.session.visited = true;
        res.redirect("./pages/loginform.html");
    }
    else{
        res.send("Failure");
    }
});
app.listen(3000, ()=> console.log('Started!'));