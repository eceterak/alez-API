const request = require('supertest');
const app = require('../../app');

describe('Users CRUD', () => {
  describe('GET /api/v1/users', () => {
    const _ROUTE = '/api/v1/users';

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
