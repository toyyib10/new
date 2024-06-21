const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose")

const URI = "mongodb+srv://toyyibyekeen:<password>@cluster0.ojkawhw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(URI).then(() => {

}).catch(() => {

})

app.set("view engine", "ejs");
const PORT = 3000;
app.use(express.urlencoded({extended:true}));
let allStudents = [];

app.get("/signup", ( req, res) => {
  res.render("index.ejs");
})
app.get("/signin", ( req, res) => {
  res.render("signin.ejs");
})
app.get("/dashboard", ( req, res) => {
  res.render("dashboard", {name : "toyyib", allStudents});
})

app.post("/signup", (req, res) => {
  // console.log("a request was made");
  // res.send("It worked");
  // console.log(req.body);
  allStudents.push(req.body);
  res.redirect("dashboard")
})

app.listen(PORT,(err)=>{
  if (err) {
    console.log("Server unable to start");
  } else {
    console.log("Server started successfully");
  }
})