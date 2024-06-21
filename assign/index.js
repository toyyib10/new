const express = require("express");
const app = express();
const ejs = require("ejs");
app.set("view engine","ejs");

let allContacts = [];
let contact;

app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  if (allContacts) {
    res.render("index", {allContacts});
  } else {
    res.render("index");
  }
})
app.post("/", (req, res) => {
 allContacts.push(req.body);
 console.log(allContacts);
 res.redirect("/");
})

app.post("/delete",(req, res) => {
  const {index} = req.body;
  allContacts = allContacts.filter((value,ind) => ind != index );
  console.log(allContacts);
  res.redirect("/")
})

app.post("/edit", (req, res) => {
  const {index} = req.body;
  contact = allContacts.find((value, ind) => ind == index)
  console.log(contact);
  res.redirect("/")
})

const PORT = 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("Server unable to start");
  } else {
    console.log("Server as started");
  }
})