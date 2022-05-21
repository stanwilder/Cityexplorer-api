'use strict';

const axios = require('axios');

async function movies(req, res, next) {
  try {

    let movieCity = req.query.searchQuery;
    let movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${movieCity}&include_adult=false`;
    let movieResults = await axios.get(movieUrl);
    let sendData = movieResults.data.map(movieInfo => new Movie(movieInfo));


    res.send(sendData);
  } catch (error) {
    next(error);
  }

}
class Movie {
  constructor(movie) {
    this.title = movie.title;
    this.overview = movie.overview;
    this.poster_path = `https://www.themoviedb.org/t/p/w440_and_h660_face` + `${movie.poster_path}`;


  }
}


module.exports = movies;
