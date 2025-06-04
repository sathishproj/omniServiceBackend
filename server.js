const express = require('express');
const axios = require('axios');
const app = express();
const connectDB = require("./Config/database");
const User = require("./Models/user");
const cors = require("cors");
const http = require("http");
const userRouter = require('./apis/user');
const specialtiesRouter = require('./apis/specialties');
const doctorRoutes = require('./apis/doctordetails');
const mailRoutes = require('./apis/mail');
const bodyParser = require("body-parser");




// Middleware
app.use(express.json());

app.use(cors());
app.use(bodyParser.json()) // this will return a valid express middleware for parsing Json data.
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS")
  next();
})

app.use(cors({
  // origin:"http://localhost:4200",
  origin:"https://omni-project-gamma.vercel.app",
  // origin: ['http://localhost:4200', 'https://omni-project-gamma.vercel.app'],
  credentials: true,
}));

app.use("/", userRouter);
app.use("/", specialtiesRouter);
app.use("/", doctorRoutes);
app.use("/", mailRoutes);

// Sample route to hit LeadSquared API
// app.post('/submit', async (req, res) => {
//   console.log('Incoming Request Body:', req.body);

// Connect to Database & Start Server
const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ Database successfully connected");

    app.listen(3000, () => {
      console.log("🚀 Server is running on http://localhost:3000");
    });
  } catch (err) {
    console.error("❌ Database connection failed", err);
    process.exit(1); // Exit process if database fails to connect
  }
};

// Initialize Server
startServer();
