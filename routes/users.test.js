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
      name: expect.any(String),
      email: expect.any(String),
      password: expect.any(String),
      avatar_bottom: expect.any(String),
      avatar_middle: expect.any(String),
      avatar_top: expect.any(String),
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
      name: expect.any(String),
      email: expect.any(String),
      password: expect.any(String),
      avatar_bottom: expect.any(String),
      avatar_middle: expect.any(String),
      avatar_top: expect.any(String),
      total_score: expect.any(Number),
    },
  });
});

test("Create user", async function () {
  const response = await supertest(app).post(`/api/users`).send({
    id: 103,
    name: "Poppy Smith",
    email: "poppy.smith.93@gmail.com",
    password: "password123",
    avatar_bottom: "purple-alien",
    avatar_middle: "purple-alien",
    avatar_top: "purple-alien",
    total_score: 68,
  });
  expect(response.status).toBe(201);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      id: expect.any(Number),
      name: expect.any(String),
      email: expect.any(String),
      password: expect.any(String),
      avatar_bottom: expect.any(String),
      avatar_middle: expect.any(String),
      avatar_top: expect.any(String),
      total_score: expect.any(Number),
    },
  });
});

test("Update user score", async function () {
  const response = await supertest(app).post(`/api/users/6`).send({
    total_score: 68,
  });
  expect(response.status).toBe(201);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      id: 6,
      name: expect.any(String),
      email: expect.any(String),
      password: expect.any(String),
      avatar_bottom: expect.any(String),
      avatar_middle: expect.any(String),
      avatar_top: expect.any(String),
      total_score: expect.any(Number),
    },
  });
});
