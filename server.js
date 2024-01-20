const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const usersRouter = require('./routes/api/users');

// should always be on top
require('dotenv').config();
require('./config/database');

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(express.json());

// Express View setup


// ROUTES MIDDLEWARE STARTS HERE:
app.use('/api/users', usersRouter);

const port = process.env.PORT || 3001

app.listen(
  port,
  ()=>{
    console.log(`Server running on port ${port}`);
  }
)