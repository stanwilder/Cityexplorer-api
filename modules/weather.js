'use strict';

// REQUIRE
const axios = require('axios');
//USE

async function weather(req, res, next) {
  try {
    // let searchForCity = req.query.searchQuery;
    let lon = req.query.lon;
    let lat = req.query.lat;
    let weatherData = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lang=en&lat=${lat}&lon=${lon}&days=3`;
    console.log(weatherData);
    let weather = await axios.get(weatherData);
    console.log(weather);
    let arr = [];
    // empty array for the forecast. 
    weather.data.data.forEach(days => arr.push(new Forecast(days)));

    res.send(arr);
  } catch (error) {
    next(error);
  }

}
class Forecast {
  constructor(forcast) {
    this.date = forcast.valid_date;
    this.description = forcast.weather.description;
    this.low = forcast.low_temp;
    this.high = forcast.max_temp;
  }
}






// Class

module.exports = weather;
