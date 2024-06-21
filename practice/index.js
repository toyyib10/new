const express = require("express");
const ejs = require("ejs");
const app = express();
app.set("view engine","ejs");

const PORT = 5000;

let allStudents = [{"name": "toyyib", "Level": "300"},{"name": "ukaasha", "Level": "200"}];

app.get("/",(req,res) => {
  // res.send(allStudents);
  res.sendFile()
  res.render("index.ejs")
})

app.listen(PORT,(err) => {
  if (err) {
    console.log("Error, Server unable to start");
  } else {
    console.log("Server as started");
  }
})