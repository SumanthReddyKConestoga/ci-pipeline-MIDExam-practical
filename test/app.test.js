// test/app.test.js
const request = require('supertest');
const app     = require('../index');

describe('GET /', () => {
  it('returns status ok', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
