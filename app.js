import express from "express";
import morgan from "morgan";
import cors from "cors";
import { usersRouter } from "./routes/users.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", usersRouter);

export default app ;