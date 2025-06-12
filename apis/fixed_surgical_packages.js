const express = require('express');
const fixedsurgicalpackagesdetailsRoute = express.Router();
const fixedsurgicalpackage = require('../Models/fixed_surgical_packages');

healthpackagesdetailsRoute.post("/updatefixedsuricalpackages", async (req, res) => {
    try {
        const newsurgical = new Healthpackage(req.body);
        const savedsurgicalPackage = await newsurgical.save();
        res.json({
            message: "Fixed Surgical Packages details Updated successfully",
            data: savedsurgicalPackage
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });
    }
});

fixedsurgicalpackagesdetailsRoute.get("/getfixedsurgicalpackages", async (req, res) => {
    console.log(res, 'res');
    try {
        const surgicalpackage = await fixedsurgicalpackage.find();
        res.json({
            message: "Health Packages details fetched successfully",
            data: surgicalpackage
        });
        console.log(res['data'], 'data...')
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });
    }
});

module.exports = fixedsurgicalpackagesdetailsRoute;