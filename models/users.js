import query from "../db/index.js";

//get all users
export async function getAllUsers() {
  const allUsers = await query("SELECT * FROM users");
  return allUsers.rows;
}

// //get user by id
export async function getUserById(id) {
  const userByID = await query("SELECT * FROM users WHERE id = $1", [id]);

  return userByID.rows[0];
}

// create user
export async function createUser(newUsers) {
  const newUser = await query(
    "INSERT INTO users (email,name, total_score) VALUES ($1, $2, $3) RETURNING *",
    [newUsers.email, newUsers.name, newUsers.total_score]
  );
  return newUser.rows[0];
}

//get user by email
export async function getUserByEmail(email) {
  console.log(email);
  const userByEmail = await query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return userByEmail.rows[0];
}

//update userScore

export async function updateUserScore(score, email) {
  const update = await query(
    `UPDATE users SET total_score= ($1+total_score) WHERE email = $2 RETURNING *`,
    [score, email]
  );
  console.log(update.rows);
  return update.rows[0];
}

// //Delete a user
export async function deleteUserById(id) {
  const deletedUser = await query(
    "DELETE FROM users WHERE id = $1  RETURNING * ",
    [id]
  );
  return deletedUser.rows[0];
}

// get body_id, ant_id and head_id from email
export async function getBodyAntHead(email) {
  const bodyAntHead = await query(
    `SELECT bodyId, antId, headId, avColour FROM users WHERE email = $1`,
    [email]
  );
  return bodyAntHead.rows[0];
}

// patchrequest for body, ant and head
export async function patchBodyAntHead(email, bodyId, antId, headId, avColour) {
  const patch = await query(
    `UPDATE users SET bodyId = $1, antId = $2, headId = $3, avColour = $4  WHERE email = $5 RETURNING *`,
    [bodyId, antId, headId, avColour, email]
  );
  return patch.rows[0];
}
