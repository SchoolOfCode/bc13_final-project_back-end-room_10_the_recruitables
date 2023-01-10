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

//  // create user
export async function createUser(updatedUser) {
  const newUser = await query(
    "INSERT INTO users (name, email, password, avatar_bottom, avatar_middle, avatar_top) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [
      updatedUser.name,
      updatedUser.email,
      updatedUser.password,
      updatedUser.avatar_bottom,
      updatedUser.avatar_middle,
      updatedUser.avatar_top,
    ]
  );
  return newUser.rows;
}

// // Update user by id
// export async function updateUserById(id, updatedUser) {
//   const update = await query(
//     "UPDATE users SET name = $1, email = $2, avatar_bottom = $4, avatar_middle = $5, avatar_top= $6 WHERE id = $3",
//     [
//       updatedUser.name,
//       updatedUser.email,
//       id,
//       updatedUser.avatar_bottom,
//       updatedUser.avatar_middle,
//       updatedUser.avatar_top,
//     ]
//   );
//   return update.rows;
// }

//update userScore

export async function updateUserScore(id, score) {
  const update = await query(
    `UPDATE users SET total_score= ($1+total_score) WHERE id = $2 RETURNING *`,
    [score, id]
  );
  console.log(update.rows);
  return update.rows;
}

// //Delete a user
export async function deleteUserById(id) {
  const deletedUser = await query(
    "DELETE FROM users WHERE id = $1  RETURNING * ",
    [id]
  );
  return deletedUser.rows[0];
}
