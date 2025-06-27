import {
  insertStudent,
  IStudent,
  getStudentList,
  updateNameStudent,
} from "../model/student-model";

class StudentService {
  public async registerStudent(student: IStudent) {
    return await insertStudent(student);
  }

  public async getRegisterStudent(page: number, limit: number) {
    return await getStudentList(page, limit);
  }
  public async studentUpdateName(req: any) {
    const { id, name } = req.body;
    return await updateNameStudent(id, name);
  }
  public async deleteStudent(req: any) {
    console.log("req:any", req.body);
  }
}

export const studentService = new StudentService();
