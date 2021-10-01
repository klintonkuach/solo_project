// const db = require('../models/postMessage.js');
import PostMessage from '../models/postMessage.js'
import {ObjectId} from 'bson'

export const getPosts = async (req, res) => {
  try {
    const postMessages =  await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { params } = req
  if (!params?.id) return next({
    status: 400,
    message: { error: 'Please privide an id' }
  });
  try {
    const postMessage =  await PostMessage.findById(params.id);
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res, next) => {
  const body = req.body;
  const newPost = new PostMessage(body);
  
  if(!req.body) return next({
    status: 400,
    message: { error: 'Content cannot be empty!' }
  });
  try {
    await newPost.save();
    res.status(200).json(newPost)
  
  } catch (error) {
    res.status(400).json( { message: error.message });
  }
}

export const updatePost = async (req, res, next) => {
  const { body, params } = req
  if (!body || !params) return next({
    status: 400,
    message: { error: 'Data to update cannot be empty!' }
  });
  try {
    const updated = await PostMessage.findOneAndUpdate({ _id: params.id }, { $set: body }, { new: true })
    res.status(200).json(updated)

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// export const updatePost2 = async (req, res, next) => {
//   const { body, params } = req
//   if (!body || !params) return next({
//     status: 400,
//     message: { error: 'Data to update cannot be empty!' }
//   });

//   body._id = params.id;

//   const newPost = new PostMessage(body);
  
//   if(!req.body) return next({
//     status: 400,
//     message: { error: 'Content cannot be empty!' }
//   });
//   try {
//     newPost.isNew = false;
//     await newPost.save();
//     res.status(200).json(newPost)
  
//   } catch (error) {
//     res.status(400).json( { message: error.message });
//   }
// }

export const deletePost = async (req, res) => {
  const { body, params } = req
  if (!body || !params) return next({
    status: 400,
    message: { error: 'Data to delete cannot be empty!' }
  });
  try {
    const updated = await PostMessage.findOneAndDelete({ _id: params.id })
    res.status(200).json(updated)

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// module.exports = controller;
