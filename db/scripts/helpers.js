import { pool } from "../index.js";

export async function createAllTables() {
  return await pool.query(
    `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            email VARCHAR,
            name VARCHAR,
            total_score INT, 
            headId INT, 
            bodyId INT,
            antId INT, 
            avColour VARCHAR
         );
         INSERT INTO users
            (email,name, total_score, headId, bodyId, antId, avColour)
         VALUES ('lucy@lucy.com', 'Lucy', 254, 1, 1, 1, '#85C214'),
         ('seb@seb.com', 'Seb', 248, 1, 1, 1, '#85C214'),
         ('jeremy@jeremy.com', 'Jeremy', 253, 1, 1, 1, '#85C214'),
         ('louis@louis.com', 'Louis', 255, 1, 1, 1, '#85C214'),
         ('emily@emily.com','Emily', 246, 1, 1, 1, '#85C214'),
         ('jason@jason.com', 'Jason', 204, 1, 1, 1, '#85C214');
         
         CREATE TABLE IF NOT EXISTS yearOneNumberLines(
          question_id INTEGER,
          img_url VARCHAR, 
          answer INTEGER
         );

         INSERT INTO yearOneNumberLines
          (question_id, img_url, answer)
          VALUES (1, 'https://i.ibb.co/Mchz9rD/2.png', 2),
          (2, 'https://i.ibb.co/p0RRKNP/5.png', 5),
          (3, 'https://i.ibb.co/dbhcHv6/10.png', 10),
          (4, 'https://i.ibb.co/R4WyJ07/21.png', 21),
          (5, 'https://i.ibb.co/TtpyKSH/30.png', 30),
          (6, 'https://i.ibb.co/R2hvxGh/38.png', 38),
          (7, 'https://i.ibb.co/nP22D5g/52.png', 52),
          (8, 'https://i.ibb.co/0js2Cfp/66.png', 66),
          (9, 'https://i.ibb.co/BZBKyND/78.png', 78),
          (10, 'https://i.ibb.co/pdtvxVn/90.png', 90);

          CREATE TABLE IF NOT EXISTS yearOneShapes(
            question_id INTEGER,
            img_url VARCHAR, 
            answer VARCHAR
           );

           INSERT INTO yearOneShapes
          (question_id, img_url, answer)
          VALUES (1, '../images/Shapes/square.png', 'square'),
          (2, '../images/Shapes/circle.png', 'circle'),
          (3, '../images/Shapes/rectangle.png', 'rectangle'),
          (4, '../images/Shapes/hexagoni.png', 'hexagon'),
          (5, '../images/Shapes/hexagon.png', 'hexagon'),
          (6, '../images/Shapes/triangle.png', 'triangle'),
          (7, '../images/Shapes/square.png', 'square'),
          (8, '../images/Shapes/octagon.png', 'octagon');

          CREATE TABLE IF NOT EXISTS yearOneCounters(
            question_id INTEGER,
            img_url VARCHAR, 
            number INTEGER
           );

           INSERT INTO yearOneCounters
          (question_id, img_url, number)
          VALUES (1, '../images/StarCounters/one.png', 1),
          (2, '../images/StarCounters/two.png', 2),
          (3, '../images/StarCounters/three.png', 3),
          (4, '../images/StarCounters/four.png', 4),
          (5, '../images/StarCounters/five.png', 5),
          (6, '../images/StarCounters/six.png', 6),
          (7, '../images/StarCounters/seven.png', 7),
          (8, '../images/StarCounters/eight.png', 8),
          (9, '../images/StarCounters/nine.png', 9);

          CREATE TABLE IF NOT EXISTS yearTwoCoinsCounting
            (question_id, img_url, number)
            VALUES (1, 'https://i.ibb.co/JdZHJ8v/High-FI-Wireframes-13.png', 25),
            (2, 'https://i.ibb.co/bBk0CKj/High-FI-Wireframes-14.png', 60),
            (3, 'https://i.ibb.co/sHfHv4x/High-FI-Wireframes-10.png', 30),
            (4, 'https://i.ibb.co/8Nkgsqw/High-FI-Wireframes-9.png', 10),
            (5, 'https://i.ibb.co/TwSBxcc/High-FI-Wireframes-7.png', 10),
            (6, 'https://i.ibb.co/ZfDqcnL/High-FI-Wireframes-6.png', 6),
            (7, 'https://i.ibb.co/20rrDZR/High-FI-Wireframes-5.png', 4);

            CREATE TABLE IF NOT EXISTS yearTwoCoinsPlaceValue
            (question_id, img_url, number)
            VALUES (1, 'https://ibb.co/DRKfCK6', 45),
            (2, 'https://ibb.co/M6c5kmq', 27),
            (3, 'https://ibb.co/KXXLYpb', 25),
            (4, 'https://ibb.co/Tr9s75f', 41),
            (5, 'https://ibb.co/FxF6hpb', 42),
            (6, 'https://ibb.co/PTvMmxJ', 34),
            (7, 'https://ibb.co/3sQ0Rch', 21);

            CREATE TABLE IF NOT EXISTS yearThreeFractions
            (question_id, img_url, number)
            VALUES (1, 'https://ibb.co/r4xRRB4', 25),
            (2, 'https://ibb.co/z69R43g', 60),
            (3, 'https://ibb.co/QMHcFb9', 30),
            (4, 'https://ibb.co/XzFDz0S', 10),
            (5, 'https://ibb.co/s1CWdt2', 10),
            (6, 'https://ibb.co/7txmcpv', 6),
            (7, 'https://ibb.co/Rzv9BMd', 4),
            (7, 'https://ibb.co/GC6FjTy', 4),
            (7, 'https://ibb.co/nf28Sp8', 4),
            (7, 'https://ibb.co/nf28Sp8', 4);
          
         `
  );
}

export async function dropAllTables() {
  return await pool.query(
    "DROP TABLE IF EXISTS users, yearOneNumberLines, yearOneCounters, yearOneShapes;"
  );
}

export async function resetAllTables() {
  const dropped = await dropAllTables();
  const created = await createAllTables();
  return [dropped, created];
}
