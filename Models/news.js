const mongoose = require('mongoose');
const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    short_desc: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    imageAlt: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { collection: 'news' });
module.exports = mongoose.model('News', newsSchema);