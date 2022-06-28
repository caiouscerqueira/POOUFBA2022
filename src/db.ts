import { Pool } from 'pg';

const db = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'postgres',
  password: 'root',
  port: 5432,
});

export default db;
