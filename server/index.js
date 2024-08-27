// server/index.js or server/server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
// Connect Database
connectDB();

// Define Routes
app.use("/api", require("./routes/api"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
