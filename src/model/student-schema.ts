import { pool } from "../config/db";

export const createStudenttable = async () => {
  const myQuery = `CREATE TABLE IF NOT EXISTS myOldstudent(
    id SERIAL PRIMARY KEY,
    name TEXT,
    schoolname TEXT,
    mobileNo TEXT,
    age INTEGER
    )`;
  await pool.query(myQuery);
};
