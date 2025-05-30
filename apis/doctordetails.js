const express = require('express');
const doctorprofileRoute = express.Router();
const Doctor = require('../Models/doctors_data');

doctorprofileRoute.post("/doctor_details", async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    const savedDoctor = await newDoctor.save();
    res.json({
      message: "Doctor details added successfully",
      data: savedDoctor
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message
    });
  }
});

doctorprofileRoute.get("/getdoctordetails", async (req, res) => {
    console.log(res,'res');
  try {
    const doctors = await Doctor.find();
    res.json({
      message: "All doctor details fetched successfully",
      data: doctors
    });
    console.log(res['data'],'data...')
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message
    });
  }
});

module.exports = doctorprofileRoute;