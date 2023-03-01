const mongoose = require('mongoose');

const connectDB = async (uri) => {
  mongoose.set('strictQuery', false);
  const conn = await mongoose.connect(uri, {
    useNewUrlParser: true,
  });

  if (process.env.NODE_ENV !== 'test') {
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  }
};

const disconnectDB = async () => {
  await mongoose.disconnect();
};

module.exports = { connectDB, disconnectDB };
