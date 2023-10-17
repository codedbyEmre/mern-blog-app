// imports
const express = require('express');
const { getBlogs, getBlog, createBlog, updateBlog, deleteBlog } = require('../controllers/blogControllers');

const router = express.Router();

// GET all blogs
router.get('/', getBlogs);

// GET a single blog
router.get('/:id', getBlog);

// POST a new blog
router.post('/', createBlog);

// UPDATE a blog
router.patch('/:id', updateBlog);

// DELETE a blog
router.delete('/:id', deleteBlog);

module.exports = router;
