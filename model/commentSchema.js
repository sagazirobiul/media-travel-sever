const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
 
  postId: {
    type: String,
    required: true,
  }

});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;