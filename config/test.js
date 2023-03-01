const { MongoMemoryServer } = require('mongodb-memory-server');
const { connectDB, disconnectDB } = require('./db');

let mongod = null;

// Create in memory mongoDB instance and connect via mongoose
beforeAll(async () => {
  mongod = await MongoMemoryServer.create();

  const uri = mongod.getUri();

  await connectDB(uri);
});

// Close the connection
afterAll(async () => {
  if (mongod) {
    await mongod.stop();
  }

  await disconnectDB();
});
