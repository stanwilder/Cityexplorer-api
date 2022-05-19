'use strict';

// REQUIRE
let weatherData = require('../data/weather.json');
//USE

function weather(req, res, next) {
  try {
    console.log('I fired');
    let searchForCity = req.query.searchQuery;
    if (searchForCity !== 'Seattle' && searchForCity !== 'Amman' && searchForCity !== 'Paris') {
      next(res.error);
    } else {
      let cityChosen = weatherData.find(city => city.city_name === searchForCity);
      let arr = [];
      // array for forecast object
      console.log(cityChosen.data);
      cityChosen.data.forEach(days => arr.push(new Forecast(days)));
      res.send(arr);
    }

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
module.exports = weather;
