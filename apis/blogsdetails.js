const express = require('express');
const blogsRoute = express.Router();
const Blogs = require('../Models/blogsdetails');

blogsRoute.post("/blogsdetails", async (req, res) => {
    try {
        const newBlog = new Blogs(req.body);
        const savedBlog = await newBlog.save();
        res.json({
            message: "Blog details added successfully",
            data: savedBlog
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });
    }
});

blogsRoute.get("/getblogdetails", async (req, res) => {
    console.log(res, 'res');
    try {
        const blogs = await Blogs.find();
        res.json({
            message: "All Blogs details fetched successfully",
            data: blogs
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

module.exports = blogsRoute;