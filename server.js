const express = require("express");
const app = express();
const drinks = require('./models/drinks');//required by your server.js
const foods = require("./models/foods");
PORT = 3000

function CapitalizeAllDrinksName(drinks){
  drinks.forEach(drink => {
    CapitalizeDrinkName(drink);
  });

  return drinks;
}

function CapitalizeDrinkName(drink){
  drink.name = drink.name.charAt(0).toUpperCase() + drink.name.slice(1);

  return drink;//single
}

// HOME ROUTE
app.get("/", (req, res) => {
  res.send('Welcome to the GitPub App!');

});



// INDEX ROUTE - GET to /drinks - Returns all drinks
app.get('/drinks', (req,res)=>{
  
  res.render("drinks_index.ejs",
  //res.render("drinks_show.ejs",
  {
    allDrinks:CapitalizeAllDrinksName(drinks),//whatever i call it here will have to match my ejs loop
    allFoods: foods
  });
});





// SHOW ROUTE - GET to /drinks/:id
app.get('/drinks/:id', (req, res) => {
res.render("drinks_show.ejs",
  //res.send(req.params.id) 
  {
    allDrinks: CapitalizeDrinkName(drinks[req.params.id])//the individual drink using index. 
  });
})

app.get('/foods/:id', (req, res) => {
  res.render("food_show.ejs",
    
    {
      food: foods[req.params.id] 
    });
  })



app.listen(3000, () => {
  console.log('We are now listening on port 3000');
});