// server.js

const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/database');

const userRouter = require('./apis/user');
const specialtiesRouter = require('./apis/specialties');
const doctorRoutes = require('./apis/doctordetails');
const mailRoutes = require('./apis/mail');
const healthpackage = require('./apis/healthpackages');
const surgicalpackage = require('./apis/fixed_surgical_packages')
const newsRouter = require('./apis/news');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(cors({
  origin: ['http://localhost:4200', 'https://omni-project-gamma.vercel.app'],
  credentials: true,
}));

// Register routes
app.use('/', userRouter);
app.use('/', specialtiesRouter);
app.use('/', doctorRoutes);
app.use('/', mailRoutes);
app.use('/', healthpackage);
app.use('/', surgicalpackage)
app.use('/', newsRouter);
// Start server
const startServer = async () => {
  try {
    await connectDB();
    console.log('✅ Database successfully connected');

    app.listen(3000, () => {
      console.log('🚀 Server is running on http://localhost:3000');
    });
  } catch (err) {
    console.error('❌ Database connection failed', err);
    process.exit(1);
  }
};

startServer();
