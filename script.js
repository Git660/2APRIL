var express=require('express');
var app=express();
var path=require("path")
app.use(express.static(path.join(__dirname,'/public')));
app.set("view engine","ejs");
app.get("/",function(req,res){
res.render("index",{username:"Akash"});

}
)
app.get("/profile",function(req,res){
    console.log(req.query.username)
    res.send("data-send")
})
app.listen(3000)