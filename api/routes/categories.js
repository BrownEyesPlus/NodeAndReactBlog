const router = require("express").Router();
const Category = require("../models/Category");


//create cate 
router.post("/", async (req, res) => {
    const newCat = new Category(req.body);
    try{
        const saveCat = await newCat.save();
        res.status(200).json(saveCat);
    } catch (err){
        res.status(500).json(err);
    }
});

//update cate 
router.get("/", async (req, res) => {
    
    try{
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (err){
        res.status(500).json(err);
    }
});


//delete post 
router.delete("/:id", async (req, res) => {
        try {
            const post = await  Post.findById(req.params.id);
            if (post.username === req.body.username) {
                try {
                    await post.delete();
                    res.status(200).json("Post has been deleted...");
                }
                catch(err){
                    res.status(500).json(err);
                }
            }
            else {
                res.status(401).json("You can only delete your post!")
            }
        }
        catch (err) {
            res.status(404).json(err)
        }
    }
);

//get post 
router.get("/:id", async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch (err){
        res.status(500).json(err);
    }
})
 
//Get all post 
router.get("/", async (req,res)=>{
    const username = req.query.user;
    const catName = req.query.cat;

    try {
        let posts;
        if (username) {
            posts = await Post.find({username}) //or username:username
        } else if (catName) {
            posts = await Post.find({categories:{
                $in:[catName],
            },
        });
        } else {
            posts = await Post.find();
        }

        res.status(200).json(posts);
    }catch (err){
        res.status(500).json(err);
    }
})

module.exports = router

