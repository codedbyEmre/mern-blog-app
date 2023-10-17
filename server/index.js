// imports
require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 8000;

// express app
const app = express();

// routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the app!' });
});

// listen for request
app.listen(port, () => {
  console.log('app listening on port', port);
});
