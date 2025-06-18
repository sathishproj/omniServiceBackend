const mongoose = require('mongoose');

const blogsDetailsSchema = new mongoose.Schema({
    id: Number,
    blog_main_title: String,
    blog_title_one: String,
    blog_title_two: String,
    blog_title_poniters: [Object],
    blog_short_desc: String,
    blog_one_desc: String,
    blog_title_two_desc: String,
    posted_date: String,
    conclusion: String,
    blog_category: String,
    blog_type_title: String,
    blog_type_desc: String,
    blog_points: [
        {
            point_label: String,
            content_heading: String,
            content_desc: String,
            content_image: String
        }
    ],
    faqs: [Object]
});

module.exports = mongoose.model('blogsdetails', blogsDetailsSchema);