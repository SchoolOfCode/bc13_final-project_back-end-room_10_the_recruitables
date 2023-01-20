import express from "express";
export const mathsRouter = express.Router();

//import functions from models:
import {
  getRandomNumberLineQ,
  getRandomShape,
  getStarCounter,
} from "../models/mathsQuestions.js";

//get new number line
mathsRouter.get("/numberLines", async function (req, res) {
  const result = await getRandomNumberLineQ();
  res.status(200).json({ success: true, payload: result });
});

//get new shape
mathsRouter.get("/:id", async function (req, res) {
  const result = await getRandomShape(req.params.id);
  res.status(200).json({ success: true, payload: result });
});

//get star counters
mathsRouter.get("/starsCounters", async function (req, res) {
  const result = await getStarCounter();
  res.status(200).json({ success: true, payload: result });
});
