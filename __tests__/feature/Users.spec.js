const request = require('supertest');
const app = require('../../app');

describe('Users CRUD', () => {
  it('Lists all registered users', async () => {
    const response = await request(app).get('/api/v1/users');
    expect(response.status).toBe(200);
  });
});
