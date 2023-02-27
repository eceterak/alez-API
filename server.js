const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Connect to database
if (process.env.NODE_ENV !== 'test') {
  connectDB();
}

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
