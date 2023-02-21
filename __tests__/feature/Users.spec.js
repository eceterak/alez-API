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

  // console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
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
  if (mongod !== null) {
    mongod.stop();
  }
});

describe('Users CRUD', () => {
  const _ROUTE = '/api/v1/users';

  describe('GET /api/v1/users', () => {
    it('Returns 200 OK even if there is no registered users', async () => {
      const response = await request(app).get(_ROUTE);
      expect(response.status).toBe(200);
    });

    it('Returns object as response body', async () => {
      const response = await request(app).get(_ROUTE);
      expect(response.body).toEqual({
        success: true,
        data: {},
        message: '',
      });
    });
  });

  describe('POST /api/v1/users', () => {
    fit('Creates a new user', async () => {
      await User.create({
        username: 'Marek',
        email: 'marek@bartula.com',
      });

      const users = await User.find();
      console.log(users);
      // const response = await request(app).post(_ROUTE);
    });

    // it('Returns all registered users ', async () => {
    //   for (let i = 0; i < 10; i++) {
    //     await User.create({
    //       username: `user${i}`,
    //       email: `user${i}@gmail.com`,
    //     });

    //     const response = await request(app).get(_ROUTE);
    //     expect(response.body.data.length).toBe(10);
    //   }
    // });
  });
});
