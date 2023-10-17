// imports
const mongoose = require('mongoose');
const Blog = require('../models/blogModels');

// get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a single blog
const getBlog = async (req, res) => {
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
};

// create a new blog
const createBlog = async (req, res) => {
  try {
    const blogs = await Blog.create(req.body);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a blog
const updateBlog = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'There is no such blog!' });
    }

    const blog = await Blog.findByIdAndUpdate({ _id: id }, { ...req.body });

    if (!blog) {
      return res.status(404).json({ error: 'There is no such blog!' });
    }

    const updatedBlog = await Blog.findById(id);

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'There is no such blog!' });
    }

    const blog = await Blog.findByIdAndDelete({ _id: id });

    if (!blog) {
      return res.status(404).json({ error: 'There is no such blog!' });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getBlogs, getBlog, createBlog, updateBlog, deleteBlog };
