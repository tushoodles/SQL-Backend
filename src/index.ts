import express, { Request, Response } from "express";
import routes from "./routes/index";
import { createStudenttable } from "./model/student-schema";
const app = express();

app.use(express.json());

routes.forEach((route) => {
  app.use("/", route);
});

app.use("/health", (req: Request, res: Response) => {
  res.json({ message: "Good" });
});
app.use('admin-health',(req:Request , res:Response)=>{
	res.json({message:"Working Admin"})
});

app.use('/check-connection',(req:Request , res:Response)=>{
	res.json({message:'Check Connection'})
});

app.listen(5050, async () => {
  await createStudenttable();
  console.log(`Server is Running 5050`);
});
