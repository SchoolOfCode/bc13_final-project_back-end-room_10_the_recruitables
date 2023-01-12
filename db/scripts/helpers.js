import { pool } from "../index.js";

export async function createAllTables() {
  return await pool.query(
    `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            email VARCHAR,
            name VARCHAR,
            total_score INT
         );
         INSERT INTO users
            (email,name, total_score)
         VALUES ('lucy@lucy.com', 'Lucy', 54),
         ('seb@seb.com', 'Seb', 48),
         ('jeremy@jeremy.com', 'Jeremy', 53),
         ('louis@louis.com', 'Louis', 55),
         ('emily@emily.com','Emily', 46),
         ('jason@jason.com', 'Jason', 104);`
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
