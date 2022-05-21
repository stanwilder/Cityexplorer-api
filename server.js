'use strict';


// Requires
// bring in express
const express = require('express');

const movies = require('./modules/movies.js');

const weather = require('./modules/weather.js');

// let weatherData = require('./data/weather.json');

const cors = require('cors');

require('dotenv').config();

// Use
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;
// Routes
app.get('/weather', weather);

app.get('/movies', movies);

// Errors
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

// Listen
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
