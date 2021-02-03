
const express = require('express');

const {getPosts,createPost,getPost,updatePost,deletePost} = require('../Controllers/post');


const validator = require('../validator/index');


const router = express.Router();

router.get('/', getPosts);
router.post('/post', validator.createPostValidator,createPost);
router.get('/post/:id',getPost);
router.put('/update/post/:id',validator.updatePostValidator,updatePost);
router.delete('/post/:id',deletePost);


module.exports = router;
