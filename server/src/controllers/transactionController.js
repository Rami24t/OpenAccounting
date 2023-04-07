import Transaction from "../models/Transaction.js";
import asyncHandler from "express-async-handler";

// @desc    Create a new transaction
// @route   POST /api/transactions
// @access  Private
export const createTransaction = asyncHandler(async (req, res) => {
  const { title, amount, type, category } = req.body;

  const transaction = await Transaction.create({
    title,
    amount,
    type,
    category,
    user: req.user._id,
  });

  if (transaction) {
    res.status(201).json(transaction);
  } else {
    res.status(400);
    throw new Error("Invalid transaction data");
  }
});

// @desc    Get all transactions for a user
// @route   GET /api/transactions
// @access  Private
export const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({ user: req.user._id });
  res.json(transactions);
});

// @desc    Get a single transaction by ID
// @route   GET /api/transactions/:id
// @access  Private
export const getTransactionById = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);

  if (transaction) {
    if (transaction.user.toString() === req.user._id.toString()) {
      res.json(transaction);
    } else {
      res.status(401);
      throw new Error("Not authorized to access this transaction");
    }
  } else {
    res.status(404);
    throw new Error("Transaction not found");
  }
});

// @desc    Update a transaction
// @route   PUT /api/transactions/:id
// @access  Private
export const updateTransaction = asyncHandler(async (req, res) => {
  const { title, amount, type, category } = req.body;

  const transaction = await Transaction.findById(req.params.id);

  if (transaction) {
    if (transaction.user.toString() === req.user._id.toString()) {
      transaction.title = title || transaction.title;
      transaction.amount = amount || transaction.amount;
      transaction.type = type || transaction.type;
      transaction.category = category || transaction.category;

      const updatedTransaction = await transaction.save();

      res.json(updatedTransaction);
    } else {
      res.status(401);
      throw new Error("Not authorized to update this transaction");
    }
  } else {
    res.status(404);
    throw new Error("Transaction not found");
  }
});

// @desc    Delete a transaction
// @route   DELETE /api/transactions/:id
// @access  Private
export const deleteTransaction = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);

  if (transaction) {
    if (transaction.user.toString() === req.user._id.toString()) {
      await transaction.remove();
      res.json({ message: "Transaction removed" });
    } else {
      res.status(401);
      throw new Error("Not authorized to delete this transaction");
    }
  } else {
    res.status(404);
    throw new Error("Transaction not found");
  }
});
