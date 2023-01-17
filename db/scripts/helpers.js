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
         ('jason@jason.com', 'Jason', 104);
         
         CREATE TABLE IF NOT EXISTS yearOneNumberLines(
          question_id INTEGER,
          img_url VARCHAR, 
          answer INTEGER
         );

         INSERT INTO yearOneNumberLines
          (question_id, img_url, answer)
          VALUES (1, '../images/NumberLines/2.png', 2),
          (2, '../images/NumberLines/5.png', 5),
          (3, '../images/NumberLines/10.png', 10),
          (4, '../images/NumberLines/21.png', 21),
          (5, '../images/NumberLines/30.png', 30),
          (6, '../images/NumberLines/38.png', 38),
          (7, '../images/NumberLines/52.png', 52),
          (8, '../images/NumberLines/66.png', 66),
          (9, '../images/NumberLines/78.png', 78);

          CREATE TABLE IF NOT EXISTS yearOneShapes(
            question_id INTEGER,
            img_url VARCHAR, 
            answer VARCHAR
           );

           INSERT INTO yearOneShapes
          (question_id, img_url, answer)
          VALUES (1, '../images/Shapes/square.png', "square"),
          (2, '../images/Shapes/circle.png', "circle"),
          (3, '../images/Shapes/rectangle.png', "rectangle"),
          (4, '../images/Shapes/hexagoni.png', "hexagon"),
          (5, '../images/Shapes/hexagon.png', "hexagon"),
          (6, '../images/Shapes/triangle.png', "triangle"),
          (7, '../images/Shapes/square.png', "square"),
          (8, '../images/Shapes/octagon.png', "octagon");

          CREATE TABLE IF NOT EXISTS yearOneCounters(
            question_id INTEGER 
            img_url VARCHAR, 
            number INTEGER
           );

           INSERT INTO yearOneShapes
          (question_id, img_url, answer)
          VALUES (1, '../images/StarCounters/one.png', 1),
          (2, '../images/StarCounters/two.png', 2),
          (3, '../images/StarCounters/three.png', 3),
          (4, '../images/StarCounters/four.png', 4),
          (5, '../images/StarCounters/five.png', 5),
          (6, '../images/StarCounters/six.png', 6),
          (7, '../images/StarCounters/seven.png', 7),
          (8, '../images/StarCounters/eight.png', 8),
          (9, '../images/StarCounters/nine.png', 9);
          
         `
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
