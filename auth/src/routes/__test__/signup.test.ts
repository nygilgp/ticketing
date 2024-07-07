import request from 'supertest';
import { app } from '../../app';

it('return a status of 201 on successful singup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'abc123',
    })
    .expect(201);
});

it('return a status of 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'testtest.com',
      password: 'abc123',
    })
    .expect(400);
});

it('return a status of 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'a',
    })
    .expect(400);
});

it('return a status of 400 with missing eamil and password', async () => {
  return request(app).post('/api/users/signup').send({}).expect(400);
});

it('return a status of 400 with missing eamil or password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com' })
    .expect(400);
  await request(app)
    .post('/api/users/signup')
    .send({ password: 'abc123' })
    .expect(400);
});

// Inconsistent test
// it('disallows duplicate emails', async () => {
//   await request(app)
//     .post('/api/users/signup')
//     .send({
//       email: 'test@test.com',
//       password: 'abc123',
//     })
//     .expect(201);
//   await request(app)
//     .post('/api/users/signup')
//     .send({
//       email: 'test@test.com',
//       password: 'abc123',
//     })
//     .expect(201);
// });

it('sets a cookie after a successful signup', async () => {
  const response = await request(app).post('/api/users/signup').send({
    email: 'test@test.com',
    password: 'abc123',
  });
  expect(response.get('Set-Cookie')).toBeDefined();
});
