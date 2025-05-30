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

// Middleware
app.use(express.json());
app.use(cors({
  origin:"http://localhost:4200",
  credentials: true,
}));

app.use("/", userRouter);
app.use("/", specialtiesRouter);
app.use("/", doctorRoutes);

// Sample route to hit LeadSquared API
// app.post('/submit', async (req, res) => {
//   console.log('Incoming Request Body:', req.body);

//   const accessKey = 'u$r56afea08b32d556818ad1a5f69f0e7f0';
//   function callingtesting(){
    
//   }
//   const secretKey = '8d7f86d677dadaba209b4dead3cfcc4ab019031b';
//   console.log(secretKey,'secretkey..');
  
//   return
//   const apiUrl = `https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=${accessKey}&secretKey=${secretKey}`;

//   const postData = req.body;

//   try {
//     const response = await axios.post(apiUrl, postData, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     console.log('LeadSquared API Response:', response.data);
//     res.status(201).json({
//       message: 'Lead submitted successfully',
//       data: response.data
//     });
//   } catch (error) {
//     console.error('LeadSquared API Error:', error.response ? error.response.data : error.message);
//     res.status(500).json({
//       message: 'Failed to submit lead',
//       error: error.response ? error.response.data : error.message
//     });
//   }
// });
// connecting to DB


connectDB().
then(()=>{
  console.log("Database successfully connected");
  app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

}).
catch((err)=>{
  console.error("Database is not connected");
})
