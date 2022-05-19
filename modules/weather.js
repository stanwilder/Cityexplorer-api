'use strict';

// REQUIRE
let weatherData = process.env.WEATHER_API_KEY;
const express = require('express');
const axios = require('axios');
//USE
const app = express();
function weather, async (req, res, next) {
  const { lat, lon } = req.query;
  try {
    let weatherUrl = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lang=en&lat=${lat}&lon=${lon}&days=3`;
    
    let weather = await axios.get(weatherData)
  } catch (error) {
    next(error);
  }
}





// Class

class Forecast {
  constructor(forcast) {
    this.date = forcast.valid_date;
    this.description = forcast.weather.description;
  }
}

app.use((error, req, res,) => {
  res.status(500).send(error.message);
});
module.exports = weather;

// let searchForCity = req.query.searchQuery;
// if (searchForCity !== 'Seattle' && searchForCity !== 'Amman' && searchForCity !== 'Paris') {
//   next(res.error);
// } else {
//   let cityChosen = weatherData.find(city => city.city_name === searchForCity);
//   let arr = [];
//   // array for forecast object
//   cityChosen.data.forEach(days => arr.push(new Forecast(days)));
//   res.send(arr);
// }
