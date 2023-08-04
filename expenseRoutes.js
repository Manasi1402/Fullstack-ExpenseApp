// routes/expenseRoutes.js
const express = require('express');
const expenseController = require('../controllers/expenseController');

const router = express.Router();

// Create a new expense
router.post('/expenses', expenseController.createExpense);

// Get all expenses
router.get('/expenses', expenseController.getExpenses);

// Delete an expense
router.delete('/expenses/:id', expenseController.deleteExpense);

// [Bonus] Update an expense
router.put('/expenses/:id', expenseController.updateExpense);

module.exports = router;
