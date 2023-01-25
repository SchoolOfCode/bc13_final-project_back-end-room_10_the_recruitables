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
               

          CREATE TABLE IF NOT EXISTS yearTwoCoinsCounting(
            question_id INTEGER,
            img_url VARCHAR, 
            number INTEGER
           );

          INSERT INTO yearTwoCoinsCounting
            (question_id, img_url, number)
            VALUES (1, 'https://i.ibb.co/wzWwTjH/High-FI-Wireframes-13.png', 25),
            (2, 'https://i.ibb.co/vVy3T8z/High-FI-Wireframes-14.png', 60),
            (3, 'https://i.ibb.co/0h1c8Xh/High-FI-Wireframes-10.png', 30),
            (4, 'https://i.ibb.co/N7cG23j/High-FI-Wireframes-9.png', 10),
            (5, 'https://i.ibb.co/YyvLNQB/High-FI-Wireframes-7.png', 10),
            (6, 'https://i.ibb.co/JFccwGN/High-FI-Wireframes-6.png', 6),
            (7, 'https://i.ibb.co/yVgj8d6/High-FI-Wireframes-5.png', 4);

            CREATE TABLE IF NOT EXISTS yearTwoCoinsPlaceValue(
            question_id INTEGER,
            img_url VARCHAR,
            number INTEGER
            );

            INSERT INTO yearTwoCoinsPlaceValue
            (question_id, img_url, number)

            VALUES (1, 'https://i.ibb.co/MnJZbDj/High-FI-Wireframes-18.png', 45),
            (2, 'https://i.ibb.co/L9WDJmT/High-FI-Wireframes-17.png', 27),
            (3, 'https://i.ibb.co/ZxwV9Q1/High-FI-Wireframes-16.png', 25),
            (4, 'https://i.ibb.co/PC7Yb43/High-FI-Wireframes-15.png', 41),
            (5, 'https://i.ibb.co/QCqfPjx/High-FI-Wireframes-12.png', 42),
            (6, 'https://i.ibb.co/pWJFLmJ/High-FI-Wireframes-11.png', 34),
            (7, 'https://i.ibb.co/6mW9fw6/High-FI-Wireframes-8.png', 21);

            CREATE TABLE IF NOT EXISTS yearThreeFractions(
            question_id INTEGER,
            img_url VARCHAR,
            number INTEGER  
            );


            INSERT INTO yearThreeFractions
            (question_id, img_url, number)
            VALUES (1, 'https://i.ibb.co/KF2pptF/1-2-10.png', 25),
            (2, 'https://i.ibb.co/9ZKTrx0/1-3.png', 60),
            (3, 'https://i.ibb.co/vkdBxw1/1-4.png', 30),
            (4, 'https://i.ibb.co/NLWrLDZ/1-7.png', 10),
            (5, 'https://i.ibb.co/Smcf4JP/1-8.png', 10),
            (6, 'https://i.ibb.co/F4kTvY6/2-3.png', 6),
            (7, 'https://i.ibb.co/Bqztr7F/2-5.png', 4),
            (7, 'https://i.ibb.co/frgQ7vf/2-6.png', 4),
            (7, 'https://i.ibb.co/rMPfJ9f/2-8.png', 4),
            (7, 'https://i.ibb.co/rMPfJ9f/2-8.png', 4);         
         `
  );
}

export async function dropAllTables() {
  return await pool.query(
    "DROP TABLE IF EXISTS users, yearOneNumberLines, yearOneCounters, yearOneShapes, yearTwoCoinsCounting, yearTwoCoinsPlaceValue, yearThreeFractions;"
  );
}

export async function resetAllTables() {
  const dropped = await dropAllTables();
  const created = await createAllTables();
  return [dropped, created];
}
