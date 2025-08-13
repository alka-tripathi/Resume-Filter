const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoURL = process.env.URL;

const mongoDb = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log('Connect to the database successfully');
  } catch (err) {
    console.log('Error connecting to the database:', err);
  }
};
module.exports = mongoDb;
