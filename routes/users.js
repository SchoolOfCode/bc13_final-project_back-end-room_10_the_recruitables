import express from "express";
export const usersRouter = express.Router();

//import functions from models:
import {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserScore,
  getUserByEmail,
  getBodyAntHead,
  patchBodyAntHead,
} from "../models/users.js";

// //We have to write our CRUD routes

usersRouter.get("/", async function (req, res) {
  // if (req.query.user !== undefined) {
  //   const result = await getUserById(req.query.id);
  //   return res.json({ success: true, payload: result });
  // }
  const result = await getAllUsers();
  res.status(200).json({ success: true, payload: result });
});

//get by id
usersRouter.get("/:id", async function (req, res) {
  const result = await getUserById(req.params.id);
  res.status(200).json({ success: true, payload: result });
});

//post new user
usersRouter.post("/", async function (req, res) {
  console.log(req.body);
  const result = await createUser(req.body);
  res.status(201).json({ success: true, payload: result });
});

//update score
usersRouter.post("/email/:email", async function (req, res) {
  const result = await updateUserScore(req.body.total_score, req.params.email);
  res.status(201).json({ success: true, payload: result });
});

//get user data by email
usersRouter.get("/email/:email", async function (req, res) {
  const result = await getUserByEmail(req.params.email);
  return res.status(200).json({ success: true, payload: result });
});

//delete
usersRouter.delete("/:id", async function (req, res) {
  const result = await deleteUserById(req.params.id);
  res.json({ success: true, payload: result });
});

//get body, ant and head by email
usersRouter.get("/avatars/:email", async function (req, res) {
  const result = await getBodyAntHead(req.params.email);
  res.status(200).json({ success: true, payload: result });
});

//patch body, ant and head by email
usersRouter.patch("/avatars/:email", async function (req, res) {
  const result = await patchBodyAntHead(
    req.params.email,
    req.body.bodyId,
    req.body.antId,
    req.body.headId,
    req.body.avColour
  );
  res.status(200).json({ success: true, payload: result });
});

export default usersRouter;
