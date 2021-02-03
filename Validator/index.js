
exports.createPostValidator = (req,res,next) => {
    //title
    req.check('title','Write a title').notEmpty();
    req.check('title','title must be between 4 to 150 characters').isLength({
        min: 4, max: 150
    });

    //body
    req.check('description','Write a description').notEmpty();
    req.check('description','description must be between 4 to 2000 characters').isLength({
        min: 4, max: 2000
    });

    //check for errors
    const errors = req.validationErrors();

    if (errors) {
        const firstError = errors.map((error)=>error.msg)[0]
        return res.status(400).json({error: firstError})
    }
    //proceed to next middleware
    next();

}

exports.updatePostValidator = (req,res,next) => {
    //title
    if (req.body.title){
        req.check('title','title must be between 4 to 150 characters').isLength({
            min: 4, max: 150
        });
    }

    //body
    if (req.body.description) {
        req.check('description', 'description must be between 4 to 2000 characters').isLength({
            min: 4, max: 2000
        });
    }
    //check for errors
    const errors = req.validationErrors();

    if (errors) {
        const firstError = errors.map((error)=>error.msg)[0]
        return res.status(400).json({error: firstError})
    }
    //proceed to next middleware
    next();

}