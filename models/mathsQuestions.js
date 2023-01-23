import query from "../db/index.js";

export async function getRandomNumberLineQ() {
  const numberLineQuestion = await query("SELECT * FROM yearOneNumberLines");
  return numberLineQuestion.rows;
}

export async function getRandomShape(id) {
  const shapeQuestion = await query(
    "SELECT * FROM yearOneShapes WHERE question_id = $1",
    [id]
  );
  return shapeQuestion.rows[0];
}

export async function getStarCounter(id) {
  const counterQuestion = await query(
    "SELECT * FROM yearOneCounters WHERE question_id = $1",
    [id]
  );
  return counterQuestion.rows[0];
}

// year 2 games
// counting in 2,5 and 10
export async function getCoinsCounting() {
  const coinsCounting = await query(
    "SELECT * FROM yearTwoCoinsCounting");
  return coinsCounting.rows;
}

// place value coins
export async function getCoinsPlaceValue() {
  const coinsQuestion = await query(
    "SELECT * FROM yearTwoCoinsPlaceValue");
  return coinsQuestion.rows;
}

