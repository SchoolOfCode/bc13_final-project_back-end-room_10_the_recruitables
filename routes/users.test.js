import { pool } from "../db/index";
import supertest from "supertest";
import app from "../app.js";
import {expect, test} from "@jest/globals";

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
    expect(userObject[i]).toContain({
      id: expect.any(Number),
      year: expect.any(Number),
      email: expect.any(String),
      name: expect.any(String),
      total_score: expect.any(Number),
      headId: expect.any(Number), 
      bodyId: expect.any(Number),
      antId: expect.any(Number),
      avColour: expect.any(String)
    });
  }
});

test("Get user by id", async function () {
  const response = await supertest(app).get(`/api/users/1`);
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      antid: 1, 
        avcolour: "#85C214", 
        bodyid: 1, 
        email: "lucy@lucy.com", 
        headid: 1, 
        id: 1, 
        name: "Lucy", 
        total_score: 254, 
        year: 1
  }});
});

test("Get user by email", async function () {
  const response = await supertest(app).get(`/api/users/email/lucy@lucy.com`);
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      antid: 1, 
        avcolour: "#85C214", 
        bodyid: 1, 
        email: "lucy@lucy.com", 
        headid: 1, 
        id: 1, 
        name: "Lucy", 
        total_score: 254, 
        year: 1
    },
  });
});

test("Create user", async function () {
  const response = await supertest(app).post(`/api/users`).send({
    year: 1,
    email: "poppy.smith.93@gmail.com",
    name: "Poppy",
    total_score: 300,
    headId: 1,
      bodyId: 1,
      antId: 1,
      avColour: "red"

  });
  expect(response.status).toBe(201);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      id: expect.any(Number),
      year: 1,
      name: "Poppy",
      email: "poppy.smith.93@gmail.com",
      total_score: 300,
      headId: 1,
      bodyId: 1,
      antId: 1,
      avColour: "red"

    },
  });
});

test("Update user score", async function () {
  const response = await supertest(app).post(`/api/users/email/lucy@lucy.com`).send({
    total_score: 350,
  });
  expect(response.status).toBe(201);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      id: 1,
      year: 1,
      name: "Lucy",
      email: "lucy@lucy.com",
      total_score: 604,
      headid: 1,
      bodyid: 1,
      antid: 1,
      avcolour: "#85C214"
    },
  });
});
