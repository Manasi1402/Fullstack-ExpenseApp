// controllers/expenseController.js
const Expense = require('../models/expense');

// Create a new expense
exports.createExpense = async (req, res) => {
  try {
    const { description, amount, date } = req.body;
    const expense = new Expense({ description, amount, date });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create expense.' });
  }
};

// Get all expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch expenses.' });
  }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExpense = await Expense.findByIdAndRemove(id);
    if (!deletedExpense) {
      return res.status(404).json({ error: 'Expense not found.' });
    }
    res.status(200).json({ message: 'Expense deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete expense.' });
  }
};

// [Bonus] Update an expense
exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, amount, date } = req.body;
    const updatedExpense = await Expense.findByIdAndUpdate(id, { description, amount, date }, { new: true });
    if (!updatedExpense) {
      return res.status(404).json({ error: 'Expense not found.' });
    }
    res.status(200).json(updatedExpense);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update expense.' });
  }
};
