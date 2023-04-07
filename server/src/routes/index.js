import express from 'express';
import userRoutes from './userRoutes.js';
import accountRoutes from './accountRoutes.js';
import transactionRoutes from './transactionRoutes.js';
import authRoutes from './authRoutes.js';

// import colors from "colors";
// import connectDB from "../config/db.js";

const router = express.Router();
router.use('/users', userRoutes);
router.use('/accounts', accountRoutes);
router.use('/transactions', transactionRoutes);
router.use('/auth', authRoutes);
export default router;

// connectDB();
// const app = express();
// const PORT = process.env.PORT || 5000;
// app.listen(
//   PORT,
//   console.log(
//     `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
//   )
// );
