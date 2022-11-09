const express = require("express");
const app = express();
const drinks = require('./models/drinks')//required by your server.js
PORT = 3000


app.get("/", (req, res) => {
  res.send('Welcome to the GitPub App!');
});

app.get('/drinks', (req,res)=>{
  res.send(drinks)
})

//app.use(drinks);//middleware to use the routes the fruits in controller folder

app.listen(3000, () => {
  console.log('We are now listening on port 3000');
});