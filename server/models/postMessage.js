// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  date: String,
  description: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  run_time: {
    type: String,
    required: true,
  },
  pace: String,
});

// module.exports = mongoose.model('PostMessage', postSchema);
const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;