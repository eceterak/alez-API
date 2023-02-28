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

describe('Users CRUD', () => {
  const _ROUTE = '/api/v1/users';

  const validUser = {
    name: 'user1',
    email: 'user1@gmail.com',
  };

  describe('POST /api/v1/users - User registration', () => {
    it('returns 201 Created when signup request is valid', async () => {
      await request(app).post(_ROUTE).send(validUser).expect(201);
    });

    it('saves user to database', async () => {
      await request(app).post(_ROUTE).send(validUser);
      const users = await User.find();
      expect(users.length).toBe(1);
    });
  });

  describe('GET /api/v1/users/:id - Display user', () => {
    it('returns 404 when user is not found', async () => {
      await request(app).get(`${_ROUTE}/5`).expect(404);
    });

    it('returns 200 when user is found', async () => {
      const user = await User.create(validUser);
      const response = await request(app).get(`${_ROUTE}/${user.id}`).expect(200);
    });
  });

  describe.skip('GET /api/v1/users - Users listing', () => {
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
});
