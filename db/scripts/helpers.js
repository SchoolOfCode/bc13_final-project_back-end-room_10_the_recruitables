import { pool } from "../index.js";

export async function createAllTables() {
  return await pool.query(
    `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            email VARCHAR,
            total_score INT
         );
         INSERT INTO users
            (email, total_score)
         VALUES ('lucy@lucy.com', 54),
         ('seb@seb.com', 48),
         ('jeremy@jeremy.com', 53),
         ('louis@louis.com', 55),
         ('emily@emily.com', 46),
         ('jason@jason.com', 104);`
  );
}

export async function dropAllTables() {
  return await pool.query("DROP TABLE IF EXISTS users;");
}

export async function resetAllTables() {
  const dropped = await dropAllTables();
  const created = await createAllTables();
  return [dropped, created];
}
