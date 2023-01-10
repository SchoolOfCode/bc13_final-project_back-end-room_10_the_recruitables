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
    "INSERT INTO users (email, total_score) VALUES ($1, $2) RETURNING *",
    [newUsers.email, newUsers.total_score]
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

export async function updateUserScore(id, score) {
  const update = await query(
    `UPDATE users SET total_score= ($1+total_score) WHERE id = $2 RETURNING *`,
    [score, id]
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
