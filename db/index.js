import pg from "pg";

const databaseUrl = process.env.POSTGRES_CONNECTION_URL;

if (undefined === databaseUrl) {
  throw new Error(
    "Your database URL is undefined. Please fix this bug before continuing"
  );
}

export const pool = new pg.Pool({
  connectionString: databaseUrl,
});

export default function query(text, params) {
  return pool.query(text, params);
}
