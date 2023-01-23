import express from "express";
export const mathsRouter = express.Router();

//import functions from models:
import {
  getRandomNumberLineQ,
  getRandomShape,
  getStarCounter,
  getCoinsCounting,
  getCoinsPlaceValue,
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
mathsRouter.get("/:id", async function (req, res) {
  const result = await getStarCounter(req.params.id);
  res.status(200).json({ success: true, payload: result });
});

//get coins counting
mathsRouter.get("/coinCounting", async function (req, res) {
  const result = await getCoinsCounting();
  res.status(200).json({ success: true, payload: result });
});

//get coins place value
mathsRouter.get("/coinsPlaceValue", async function (req, res) {
  const result = await getCoinsPlaceValue();
  res.status(200).json({ success: true, payload: result });
});
