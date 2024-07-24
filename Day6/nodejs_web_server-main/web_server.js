const express = require('express')
const app = express()
const path = require('path')
const port = 3000;

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"))
})

app.get("/404(.html)?", (req, res) => {
  res.redirect(301, "new-page.html");
  // res.sendFile(path.join(__dirname, "views", "404.html"))
})


// Handling Routes

// app.get("/hi", (req, res, next) => {
//   console.log("/hi Route");
//   next();
// }, (req, res, next) => {
//   console.log("Next method")
//   next();
// }, (req, res) => {
//   console.log("Third Nex Method")
// })



app.listen(port)



//----------------------------------------------------

// CHAINING METHODS

const one = (req, res) => {
  console.log("Method 1")
  res.send("ONE")

}

const two = (req, res) => {
  console.log("Method 2")

}

const three = (req, res) => {
  console.log("Method 3")

}

app.get("/chain", [one, two, three]);