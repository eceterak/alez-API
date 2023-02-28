const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const User = require('../../models/User');

const connectDB = async (uri) => {
  mongoose.set('strictQuery', false);
  const conn = await mongoose.connect(uri, {
    useNewUrlParser: true,
  });
};

let mongod = null;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();

  const uri = mongod.getUri();

  await connectDB(uri);
});

beforeEach(async () => {
  await User.deleteMany();
});

afterAll(async () => {
  if (mongod) {
    await mongod.stop();
  }

  await mongoose.disconnect();
});

describe('User unit tests', () => {
  const _ROUTE = '/api/v1/users';

  describe('POST /api/v1/users - User registration', () => {
    it('requires a name', async () => {
      const response = await request(app).post(_ROUTE).send({ name: '' });
    });
  });
});
