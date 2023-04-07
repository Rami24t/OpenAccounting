import express from 'express';
import { protect, admin } from '../middlewares/authMiddleware.js';
import {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from '../controllers/transactionController.js';

const router = express.Router();

// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Private/Admin
router.get('/', protect, admin, getTransactions);

// @desc    Get transaction by ID
// @route   GET /api/transactions/:id
// @access  Private/Admin
router.get('/:id', protect, admin, getTransactionById);

// @desc    Create a transaction
// @route   POST /api/transactions
// @access  Private
router.post('/', protect, createTransaction);

// @desc    Update a transaction
// @route   PUT /api/transactions/:id
// @access  Private/Admin
router.put('/:id', protect, admin, updateTransaction);

// @desc    Delete a transaction
// @route   DELETE /api/transactions/:id
// @access  Private/Admin
router.delete('/:id', protect, admin, deleteTransaction);


export default router;
