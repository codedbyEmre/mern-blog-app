// imports
const express = require('express');
const { getBlogs, getBlog, createBlog } = require('../controllers/blogControllers');

const router = express.Router();

// GET all blogs
router.get('/', getBlogs);

// GET a single blog
router.get('/:id', getBlog);

// POST a new blog
router.post('/', createBlog);

// UPDATE a blog
router.patch('/:id', (req, res) => {
  res.json({ message: 'UPDATE a blog!' });
});

// DELETE a blog
router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a blog!' });
});

module.exports = router;
