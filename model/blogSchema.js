const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
 
  description: {
    type: String,
    required: true,
  },
  images: {
    type: Object,
    required: true,
  },
  image_id: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;