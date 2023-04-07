import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { protect } from "./middlewares/authMiddleware.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import mainRouter from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use(protect);

app.use("/api", mainRouter);

app.use(notFound);
app.use(errorHandler);

export default app;