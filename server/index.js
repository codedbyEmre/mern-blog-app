// imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/blogs', blogRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(port, () => {
      console.log('connected to db & app listening on port', port);
    });
  })
  .catch(err => {
    console.log('err :>> ', err);
  });
