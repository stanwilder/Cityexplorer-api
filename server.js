'use strict';


// Requires
// bring in express
const express = require('express');

const weather = require('./modules/weather.js');

const cors = require('cors');

require('dotenv').config();

// Use
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;
// Routes
app.get('/weather', weather);


// Errors



// Listen
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
