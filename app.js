import express from "express";
import morgan from "morgan";
import cors from "cors";
import { usersRouter } from "./routes/users.js";
import { mathsRouter } from "./routes/mathsQuestions.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use("/api/users", usersRouter);
app.use("/api/mathsQuestions", mathsRouter);

export default app;
