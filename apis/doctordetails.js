const express = require('express');
const doctorprofileRoute = express.Router();
const doctordetails = require('../Models/doctors_data');

doctorprofileRoute.post("/doctor_details", async (req, res) => {
    console.log(req.body, 'req body...');
    try {
        const doctordetails = new Specialty({
            id: Number,
            doctor_name: String,
            doctor_profile: String,
            doctor_designation: String,
            doctor_experience: String,
            doctor_qualification: String,
            doctor_bio: String,
            doctor_awards: String,
            doctor_availability: String,
            location: [String]
        });

        const newdoctordetails = await doctordetails.save();
        res.json({
            message: "doctor details added successfully",
            data: newdoctordetails
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
    console.log(req, 'req..');
    try {
        const doctorsData = await doctordetails.find();
        res.json({
            message: "I have got all doctor details",
            doctorsData
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });
    }
});

module.exports = doctorprofileRoute;
