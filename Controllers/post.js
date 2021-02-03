const Post = require('../models/post');


// get all post data
exports.getPosts = async (req,res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json({success: true, data: posts});
    } catch (err) {
        res.status(400).json({success: false});
    }
}

//get single post
exports.getPost = async(req,res,next) => {
      try {
          const post = await Post.findById(req.params.id)
          res.status(200).json({success: true, data: post})
      } catch (err) {
          res.status(400).json({success: false});
      }
}

//create post
exports.createPost = (req,res) => {
    const post = new Post(req.body)
    post.save()
        .then(result=>{
            res.status(200).json({
                post: result
            })
        })
}

//update post
exports.updatePost = async(req,res,next) => {
   const post = await Post.findOneAndUpdate(req.param.id, req.body ,{
       new: true,
       runValidators: true
   });
   if (!post) {
       return res.status(400).json({success: false})
   }
   res.status(200).json({success: true, data: post})
}


//delete post
exports.deletePost = async(req,res,next) => {
       try {
           const post = await Post.findByIdAndDelete(req.params.id)
           if (!post) {
               return res.status(400).json({success: false})
           }
           res.status(200).json({success: true});
       } catch (err) {
           res.status(400).json({success: false});
       }
}

