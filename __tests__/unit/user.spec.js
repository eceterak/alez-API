const request = require('supertest');
const app = require('../../app');
const User = require('../../models/User');

beforeEach(async () => {
  await User.deleteMany();
});

describe('User unit tests', () => {
  const _ROUTE = '/api/v1/users';

  describe('POST /api/v1/users - User registration', () => {
    it('requires a name', async () => {
      const response = await request(app).post(_ROUTE).send({ name: '' });
    });
  });
});
