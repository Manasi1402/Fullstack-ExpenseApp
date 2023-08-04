// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'your_mongodb_connection_string_here';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB.');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
  });

app.use(bodyParser.json());

// Expense routes
app.use('/api', expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
