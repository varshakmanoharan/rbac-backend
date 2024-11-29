const express = require('express');
const connectDB = require('./config/db');  // Adjust the path if needed

const app = express();

// Connect to the database
connectDB();

// Set a different port
const port = process.env.PORT || 5000;  // Use port 5001 or any available port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
