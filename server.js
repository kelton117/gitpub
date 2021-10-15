const express = require('express');
const drinks = require('./models/drinks.js');
const food = require('./models/food.js');
const methodOverride = require('method-override')
const app = express();
const logger = require('morgan');

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.static('public'));
app.use(logger('dev'));

//INDUCES

//INDEX
app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {
        allDrinks: drinks
    });
});

//SHOW
app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id],
        index: req.params.id
    })
})

app.get('/foods', (req, res) => {
    res.render('food_index.ejs', {
        allFood: food
    });
});

app.get('/foods/:id', (req, res) => {
    res.render('food_show.ejs', {
        food: food[req.params.id],
        index: req.params.id
    })
})

const port = 3000
app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});