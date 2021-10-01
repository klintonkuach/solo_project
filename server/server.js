// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const mongoose = require('mongoose');

import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'

// const postRoutes = require('./routes/posts.js');

import postRoutes from './routes/posts.js';

dotenv.config()

const app = express();
const PORT = process.env.SERVER_PORT || 8080;
const MONGO_URI = process.env.MONGO_URI


// handle parsing request body
app.use(express.json());
// automatically parse urlencoded body content from incoming requests and place it in req.body
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/', postRoutes);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'myFirstDatabase',
})
  .then(() => app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`)))
  .catch((err) => console.log(err));


// // set Express view engine as jsx
// // This means whenver we call res.render, jsx will be used to compile the template
// // jsx templates are located in the client/directory
// app.set('view engine', 'jsx')

// // handle requests for static files
// app.use(express.static(path.resolve('dist')))

// app.get('/', (req, res) => {
//   // don't need to specify that its an ejs file because of line 18
//   res.render('./../client/index');
// });

// // app.listen(PORT, () => {
// //   console.log(`Server listening on http://localhost:${PORT}`)
// // });