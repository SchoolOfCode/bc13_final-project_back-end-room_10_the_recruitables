import { pool } from "../db/index";
import supertest from "supertest";
import app from "../app.js";

afterAll(async function () {
  await pool.end();
});

test("Get all users", async function () {
  const response = await supertest(app).get(`/api/users`);
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: expect.any(Array),
  });
  const userObject = response.body.payload;
  for (let i = 0; i < response.body.payload.length; i++) {
    expect(userObject[i]).toStrictEqual({
      id: expect.any(Number),
      email: expect.any(String),
      total_score: expect.any(Number),
    });
  }
});

test("Get user by id", async function () {
  const response = await supertest(app).get(`/api/users/6`);
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      id: 6,
      email: expect.any(String),
      total_score: expect.any(Number),
    },
  });
});

test("Get user by email", async function () {
  const response = await supertest(app).get(`/api/users/email/lucy@lucy.com`);
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      id: expect.any(Number),
      email: "lucy@lucy.com",
      total_score: expect.any(Number),
    },
  });
});

// test("Create user", async function () {
//   const response = await supertest(app).post(`/api/users`).send({

//     email: "poppy.smith.93@gmail.com",
//     total_score: 68,
//   });
//   expect(response.status).toBe(201);
//   expect(response.body).toStrictEqual({
//     success: true,
//     payload: {
//         id: expect.any(Number),
//         email: "poppy.smith.93@gmail.com",
//         total_score: 68
//     },
//   });
// });

test("Update user score", async function () {
  const response = await supertest(app).post(`/api/users/6`).send({
    total_score: 104,
  });
  expect(response.status).toBe(201);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      id: 6,
      email: expect.any(String),
      total_score: expect.any(Number),
    },
  });
});
