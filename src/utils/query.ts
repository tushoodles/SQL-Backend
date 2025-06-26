export const insertQuery = `INSERT INTO myOldstudent (name , schoolname , mobileNo , age ) VALUES($1 , $2 , $3 , $4) RETURNING *`;
export const getStudentQuery = `SELECT * FROM myOldstudent ORDER BY id LIMIT $1 OFFSET $2`;
export const getwithOutlimit = `SELECT * FROM myOldstudent`;
export const updateStudentNameQuery = `UPDATE myOldstudent SET name = $1 WHERE id = $2 RETURNING *`;


