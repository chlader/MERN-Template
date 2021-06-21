import asyncHandler from 'express-async-handler';
import Blog from '../models/Blog.model.js';

// @desc fetch all blogs
// @route GET /api/blogs
// @access Public
const getBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find();

    res.json(blogs);
});

const getBlogById = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (blog) {
        res.json(blog);
    } else {
        res.status(404);
        throw new Error('Blog not found');
    }
});

export { getBlogs, getBlogById };