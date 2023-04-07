import connectDB from "./config/db.js";
import colors from "colors";
import app from "./app.js";
// import express from "express";
// import dotenv from "dotenv";
// import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
// import userRoutes from "./routes/userRoutes.js";
// import authRoutes from "./routes/authRoutes.js";
// import accountRoutes from "./routes/accountRoutes.js";
// import transactionRoutes from "./routes/transactionRoutes.js";
// dotenv.config();
connectDB();
// const app = express();
// app.use(express.json());
// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/accounts", accountRoutes);
// app.use("/api/transactions", transactionRoutes);
// app.use(notFound);
// app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
