const  Post  = require("../../models/Post");
const router = require("express").Router();
const uploadImage = require("../../middleware/upload");

router.post("/create", uploadImage.single('image'), async (req, res, next) => {
    // req.file will hold the image file 
    // req.body will hold the text fields, if any

    try {
        console.log(req.body)
        const filename = req.file.filename;
        let postData = {
            type: req.file.mimetype,
            name: filename,
            // text: req.body.description
        }
        
        // let post = await Post.create(postData);
        res.status(200).json(postData);
    } catch (err) {
        console.log("Error", err);
        res.status(500).json(err);
    }
});

module.exports = router;
