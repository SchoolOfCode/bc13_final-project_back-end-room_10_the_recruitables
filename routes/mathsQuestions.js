import express from "express";
export const mathsRouter = express.Router();

//import functions from models:
import {
  getRandomNumberLineQ,
  getCoinsCounting,
  getCoinsPlaceValue,
} from "../models/mathsQuestions.js";

//get new number line
mathsRouter.get("/numberLines", async function (req, res) {
  const result = await getRandomNumberLineQ();
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
