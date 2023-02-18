const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/users', (req, res) => {
  res.status(200).json({});
});

module.exports = app;
