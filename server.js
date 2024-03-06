// server.js
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const notesRoutes = require('./routes/notes');

const app = express();

// Middleware
app.use(express.json());
mongoose.set("strictQuery", true);
app.use(morgan("dev"));

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });




// Routes
app.use('/api/notes', notesRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
