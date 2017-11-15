'use strict';

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {Recipes} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

// we're going to add some items to Recipes
// so there's some data to look at
Recipes.create('chocolate milk', ['cocoa', 'milk', 'sugar']);
Recipes.create('egg mcmuffins', ['English muffins', 'eggs', 'Canadian bacon', 'cheese']);
Recipes.create('spagetti', ['spagetti noodles', 'tomato sauce', 'tomato paste', 'garlic', 'basil']);

// when the root of this router is called with GET, return
// all current Recipes items
app.get('/Recipes', (req, res) => {
  res.json(Recipes.get());
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
