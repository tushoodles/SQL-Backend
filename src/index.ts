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

app.listen(5050, async () => {
  await createStudenttable();
  console.log(`Server is Running 5050`);
});
