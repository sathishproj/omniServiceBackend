const mongoose = require('mongoose');

const healthpackagesSchema = new mongoose.Schema({
    id: Number,
    package_title: String,
    oldPrice: Number,
    newPrice: Number,
    description: String,
    image: String,
    location: String,
    package_details: [String]
});

module.exports = mongoose.model('healthpackages', healthpackagesSchema);