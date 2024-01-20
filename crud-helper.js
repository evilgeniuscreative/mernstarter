
// Connect to our DB
require('dotenv').config();
require('./config/database');


// Require any models
const User = require('./models/users');


// variables for any models we use
let users
let user



