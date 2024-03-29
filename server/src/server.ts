import express from "express";
import cors from "cors";
import logger from "pino-http";
import pretty from "pino-pretty";
import { expressjwt as jwt } from "express-jwt";
import dotenv from 'dotenv';
dotenv.config();

// import { Request, Response} from "express";

import router from "./router";
import { login } from "./handlers/login";
import { createPatient } from "./handlers/patient";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const stream = pretty({
  colorize: true
});

app.use(logger(stream));

/* Test Route for checking whether server responds
// While using this test route uncomment the above import { Request, Response } from 'express'

app.get('/', (req: Request, res: Response) => {
  res.json({message: 'Hello'})
})

*/

// TODO: Login and SignUp Routes.
app.post("/login/:role", login);
app.post("/signup", createPatient);


// TODO: Need to add express-jwt at the end.
app.use("/api", jwt({secret: process.env.SECRET_KEY as string, algorithms: ["HS256"]}),router);
// app.use("/api", router);
export default app;