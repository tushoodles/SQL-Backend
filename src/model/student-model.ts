import { pool } from "../config/db";
import { insertQuery , getStudentQuery, updateStudentNameQuery} from "../utils/query";

export interface IStudent {
  id?: number;
  name: String;
  schoolname: String;
  mobileNo: String;
  age: number;
}

export const insertStudent = async (student: IStudent) => {
  const { name, schoolname, mobileNo, age } = student;
  const result = await pool.query(insertQuery, [
    name,
    schoolname,
    mobileNo,
    age,
  ]);
  return result.rows;
};


export const getStudentList = async (page: number = 1, limit: number = 10)=>{
    const offset = (page - 1) * limit;
    const values = [limit, offset];
    const result = await pool.query(getStudentQuery ,values);
    return result.rows;
}

export const updateNameStudent = async (id: number, name: string) => {
    const values = [name, id];
    const result = await pool.query(updateStudentNameQuery, values);
    console.log("result", result);
    return result.rows; 
};

