import { drizzle } from "drizzle-orm/node-postgres";

import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

const db = drizzle(pool);

export const fetcher = (...args) => fetch(...args).then(res => res.json())