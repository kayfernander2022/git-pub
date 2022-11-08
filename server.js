const express = require("express");
const app = express();

PORT = 3000


app.get("/", (req, res) => {
  res.send('Welcome to the GitPub App!');
});



app.listen(3000, () => {
  console.log('We are now listening on port 3000');
});