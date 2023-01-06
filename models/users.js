import query from "../db/index.js"

//get all users
export async function getAllUsers(){
    const allUsers = await query("SELECT * FROM users")
    return allUsers.rows
}


//get user by id
export async function getUserById(id){
    const userByID = await query("SELECT * FROM users WHERE id = $1", [id])
        
    return userByID.rows[0]
}

 // create user
 export async function createUser(user) {
    const newUser = await query("INSERT INTO users (name, email, password, avatar_bottom, avatar_middle, avatar_top, total_score) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [user.name, user.email, user.password, user.avatar_bottom, user.avatar_middle, user.avatar_top, user.total_score])
   return newQuestion.rows
}

// Update user by id

 export async function updateUserById (id,updatedUser) {
    const update = await query  ('UPDATE users SET name = $1, email = $2, avatar_bottom = $4, avatar_middle = $5, avatar_top= $6 WHERE id = $3', [updatedUser.name, updatedUser.email, id, user.avatar_bottom, user.avatar_middle, user.avatar_top]);
    return update.rows
}

//Delete a user
export async function deleteUserById(id){
    const deletedUser = await query("DELETE FROM users WHERE id = $1  RETURNING * ", [id])
    return deletedUser.rows[0]
}