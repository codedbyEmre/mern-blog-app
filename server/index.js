// imports
require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 8000;
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// routes
app.use('/api/blogs', blogRoutes);

// listen for request
app.listen(port, () => {
  console.log('app listening on port', port);
});
