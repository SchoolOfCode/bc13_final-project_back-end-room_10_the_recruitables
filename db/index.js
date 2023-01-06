import pg from 'pg';

const databaseUrl = process.env.POSTGRES_CONNECTION_URL;

if (databaseUrl === undefined) {
    throw new Error("This project requires a database URL.");
}

const pool = new pg.Pool({
    connectionString: databaseUrl
});

export { pool };