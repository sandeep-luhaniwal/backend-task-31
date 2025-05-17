const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

// Middlewares
app.use(cors({
  origin: 'https://frontend-task-31.vercel.app/',
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Connect to DB and start server
connectDB().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
});
