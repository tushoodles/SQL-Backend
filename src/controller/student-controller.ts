import { Request, Response } from "express";
import { IStudent } from "../model/student-model";
import { studentService } from "../services/student-service";

class StudentController {
  public async studentRegisterController(req: Request, res: Response) {
    try {
      const student: IStudent = req.body;
      const result = await studentService.registerStudent(student);
      res
        .status(201)
        .json({ message: "Student registered successfully", data: result });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  public async getStudentRegistrationlist(req: Request, res: Response) {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const students = await studentService.getRegisterStudent(page, limit);
    res.status(200).json({ students, page, limit });
  }
  public async updateStudentName(req: Request, res: Response) {
    const result = await studentService.studentUpdateName(req);
    res
      .status(200)
      .json({ message: "Field Update Successfully..", data: result });
  }

  public async deleteStudent(req:Request , res:Response){
    const result = await studentService.deleteStudent(req);
  }
}

export const studentController = new StudentController();
