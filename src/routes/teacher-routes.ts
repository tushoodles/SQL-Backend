import express ,{ Router } from "express";

class teacherRoutes{
     public router: Router;

     constructor() {
        this.router = express.Router();

       }
}

export const studentRoutes = new teacherRoutes().router;