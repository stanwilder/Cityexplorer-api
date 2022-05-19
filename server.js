'use strict';


// Requires
// bring in express
const express = require('express');

// const weather = require('./modules/weather.js');

let weatherData = require('./data/weather.json');

const cors = require('cors');

require('dotenv').config();

// Use
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;
// Routes
app.get('/weather', (req, res, next) => {
  try {
    // console.log('I fired');
    let searchForCity = req.query.searchQuery;
    if (searchForCity !== 'Seattle' && searchForCity !== 'Amman' && searchForCity !== 'Paris') {
      next(res.error);
    } else {
      let cityChosen = weatherData.find(city => city.city_name === searchForCity);
      let arr = [];
      // array for forecast object
      // console.log(cityChosen.data);
      cityChosen.data.forEach(days => arr.push(new Forecast(days)));
      res.send(arr);
    }

  } catch (error) {
    next(error);
  }
});

class Forecast {
  constructor(forcast) {
    this.date = forcast.valid_date;
    this.description = forcast.weather.description;
  }
}
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

// Errors


// Listen
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
