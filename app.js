const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Route files
const users = require('./routes/users');

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routes
app.use('/api/v1/users', users);

module.exports = app;
