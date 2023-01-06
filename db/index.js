import pg from 'pg';

const pool = new pg.Pool({
    connectionString: process.env.POSTGRES_CONNECTION_URL
});

export { pool };