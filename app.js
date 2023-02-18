const express = require('express');
const dotenv = require('dotenv');

// Route files
const users = require('./routes/users');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Mount routes
app.use('/api/v1/users', users);

module.exports = app;
