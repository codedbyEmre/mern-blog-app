// imports
const express = require('express');

// express app
const app = express();

// routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the app!' });
});

// listen for request
app.listen(4000, () => {
  console.log('app listening on port 4000');
});
