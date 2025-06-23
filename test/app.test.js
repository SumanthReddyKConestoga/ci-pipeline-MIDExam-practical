// test/app.test.js
const request = require('supertest');
const app     = require('../index');

describe('Root Endpoint (GET /)', () => {

  it('should return HTTP 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('should return JSON body with greeting message', async () => {
    const res = await request(app).get('/');
    expect(res.body).toEqual({
      message: 'Hello from Sumanth (ID: 9040660)!'
    });
  });

  it('should send Content-Type: application/json', async () => {
    const res = await request(app).get('/');
    expect(res.headers['content-type']).toMatch(/application\/json/);
  });

});

describe('Invalid Routes', () => {

  it('should return HTTP 404 for unknown paths', async () => {
    const res = await request(app).get('/this-does-not-exist');
    expect(res.statusCode).toBe(404);
  });

});
