'use strict';
let weatherData = require('./data/weather.json');

function weather(req, res, next) {
  try {
    let searchForCity = req.query.searchQuery;
    if (searchForCity !== 'Seattle' && searchForCity !== 'Amman' && searchForCity !== 'Paris') {
      next(res.error);
    } else {
      let cityChosen = weatherData.find(city => city.city_name === city);
      let arr = [];
      // array for forecast object
      cityChosen.data.forEach(days => arr.push(new Forecast(days)));
      res.send(arr);
    }

  } catch (error) {
    (error);
  }
}

app.use((error, req, res,) => {
  res.status(500).send(error.message);

});



// Class

class Forecast {
  constructor(forcast) {
    this.date = forcast.valid_date;
    this.description = forcast.weather.description;
  }
}

module.exports = weather;
