const express = require('express');
const app = express();
const mongoDB = require('./db.js');
const dotenv = require('dotenv');
dotenv.config();
mongoDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`${PORT} is Running...`);
});
