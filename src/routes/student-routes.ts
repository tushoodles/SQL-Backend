import express, { Router } from "express";
import { studentController } from "../controller/student-controller";

class StudentRoutes {
  public router: Router;
  public path = `/api/v1/`

  constructor() {
    this.router = express.Router();
    this.initializeStudentRoutes();
  }

  initializeStudentRoutes() {
    this.router.post(
      '/api/v1/register',
      studentController.studentRegisterController.bind(studentController)
    );
    this.router.get(
        '/api/v1/get-student-list',
        studentController.getStudentRegistrationlist.bind(studentController)
    );

    this.router.post(
        `${this.path}update-student-name`,
        studentController.updateStudentName.bind(studentController)
    );
    


  }
}

export const studentRoutes = new StudentRoutes().router;
