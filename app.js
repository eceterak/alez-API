const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

module.exports = app;
