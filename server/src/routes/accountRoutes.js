import express from "express";
import {
  getAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
} from "../controllers/accountController.js";
import { protect, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, isAdmin, getAccounts)
  .post(protect, createAccount);
router
  .route("/:id")
  .get(protect, isAdmin, getAccountById)
  .put(protect, updateAccount)
  .delete(protect, isAdmin, deleteAccount);

export default router;
