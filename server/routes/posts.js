// const express = require('express');
// const { getPosts } = require('../controllers/posts.js');
import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/posts.js'

const router = express.Router();

// 8085/posts
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/newentry', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);



// router.get('/posts', (req, res) => {
//   res.send("Hello world!")
// });

// module.exports = router;
export default router;