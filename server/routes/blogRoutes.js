// imports
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../models/blogModels');

const router = express.Router();

// GET all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET a single blog
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'There is no such blog!' });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ error: 'There is no such blog!' });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// POST a new blog
router.post('/', async (req, res) => {
  try {
    const blogs = await Blog.create(req.body);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// UPDATE a blog
router.patch('/:id', (req, res) => {
  res.json({ message: 'UPDATE a blog!' });
});

// DELETE a blog
router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a blog!' });
});

module.exports = router;
