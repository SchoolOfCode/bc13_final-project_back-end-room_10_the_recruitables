// import pg from 'pg';

// const databaseUrl = process.env.POSTGRES_CONNECTION_URL;

// if (databaseUrl === undefined) {
//     throw new Error("This project requires a database URL.");
// }

// const pool = new pg.Pool({
//     connectionString: databaseUrl
// });

// export { pool };


import * as pg from 'pg'
const { Pool } = pg.default

const databaseUrl = process.env.POSTGRES_CONNECTION_URL;

if (databaseUrl === undefined) {
    throw new Error("This project requires a database URL.");
}

const pool = new Pool({
  connectionString: databaseUrl,
});

export default function query(text, params) {
    return pool.query(text, params);
  }