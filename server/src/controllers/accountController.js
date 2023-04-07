import asyncHandler from "express-async-handler"; // Using asyncHandler can make the code cleaner and easier to read, as we don't have to write try-catch blocks or error handling code in each individual route handler
import Account from "../models/Account.js";
import Transaction from "../models/Transaction.js";

// @desc    Get all accounts
// @route   GET /api/accounts
// @access  Private/Admin
export const getAccounts = asyncHandler(async (req, res) => {
  const accounts = await Account.find({}).populate("user", "id name");
  res.json(accounts);
});

// @desc    Get logged in user accounts
// @route   GET /api/accounts/myaccounts
// @access  Private
export const getMyAccounts = asyncHandler(async (req, res) => {
  const accounts = await Account.find({ user: req.user._id });
  res.json(accounts);
});

// @desc    Create an account
// @route   POST /api/accounts
// @access  Private
export const createAccount = asyncHandler(async (req, res) => {
  const { accountType, balance } = req.body;

  const account = new Account({
    user: req.user._id,
    accountType,
    balance,
  });

  const createdAccount = await account.save();
  res.status(201).json(createdAccount);
});

// @desc    Get account by ID
// @route   GET /api/accounts/:id
// @access  Private
export const getAccountById = asyncHandler(async (req, res) => {
  const account = await Account.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (account) {
    res.json(account);
  } else {
    res.status(404);
    throw new Error("Account not found");
  }
});

// @desc    Update account
// @route   PUT /api/accounts/:id
// @access  Private
export const updateAccount = asyncHandler(async (req, res) => {
  const { accountType, balance } = req.body;

  const account = await Account.findById(req.params.id);

  if (account) {
    account.accountType = accountType;
    account.balance = balance;

    const updatedAccount = await account.save();
    res.json(updatedAccount);
  } else {
    res.status(404);
    throw new Error("Account not found");
  }
});

// @desc    Delete account
// @route   DELETE /api/accounts/:id
// @access  Private/Admin
export const deleteAccount = asyncHandler(async (req, res) => {
  const account = await Account.findById(req.params.id);

  if (account) {
    // remove all transactions for this account
    await Transaction.deleteMany({ account: account._id });

    await account.remove();
    res.json({ message: "Account removed" });
  } else {
    res.status(404);
    throw new Error("Account not found");
  }
});
