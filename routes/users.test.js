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
    payload: expect.any(Object),
  });
  const userObject = response.body.payload;
  for (let i = 0; i < response.body.payload.length; i++) {
    expect(userObject[i]).toStrictEqual({
      id: expect.any(Number),
      year: expect.any(Number),
      email: expect.any(String),
      name: expect.any(String),
      total_score: expect.any(Number),
    });
  }
});

test("Get user by id", async function () {
  const response = await supertest(app).get(`/api/users/1`);
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      id: 1,
      year: 1,
      name: "Lucy",
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
      year: 1,
      name: "Lucy",
      email: "lucy@lucy.com",
      total_score: expect.any(Number),
    },
  });
});

test("Create user", async function () {
  const response = await supertest(app).post(`/api/users`).send({
    email: "poppy.smith.93@gmail.com",
    name: "Poppy",
    total_score: 300,
  });
  expect(response.status).toBe(201);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      id: expect.any(Number),
      year: expect.any(Number),
      name: "Poppy",
      email: "poppy.smith.93@gmail.com",
      total_score: 300,
    },
  });
});

test("Update user score", async function () {
  const response = await supertest(app).post(`/api/users/57`).send({
    total_score: 350,
  });
  expect(response.status).toBe(201);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      id: expect(57),
      year: expect.any(Number),
      name: "Poppy",
      email: expect.any(String),
      total_score: expect.any(Number),
    },
  });
});
