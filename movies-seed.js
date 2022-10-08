const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const Movie = require('./models/movie');

const movies = require('./movies');

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    return Movie.create(movies);
  })
  .then(() => {
    console.log('Seeded movies collection');
    return mongoose.disconnect();
  })
  .catch((error) => {
    console.log('There was an error connecting to the database');
    console.log(error);
  });
