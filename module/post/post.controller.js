const Comment = require("../comment/comment.model");
const User = require("../user/user.model");
const Post = require("./post.model")

exports.getAll = async (req, res) => {
    try {
        let postList = await Post.findAll();
        res.status(200).json(postList);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.getById = async (req, res) => {
    try {
        let post = await Post.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: User,
                attributes: {
                    exclude: ["password"]
                }
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: {
                        exclude: ["password"]
                    }
                }]
            }]
        });
        res.status(200).json(post);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.create = async (req, res) => {
    try {
        let post = await Post.create({
            message: req.body.message,
            userId: req.token.id
        });
        res.status(201).json(post);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.update = async (req, res) => {
    try {
        let post = await Post.findOne({
            where: {
                id: req.params.id
            }
        })
        if(!post){
            return res.status(404).json({error: "Ce post n'existe pas"});
        }
        if(post.userId !== req.token.id){
            return res.status(403).json({error: "Vous n'avez pas les droits pour modifier ce post"});
        }
        post.message = req.body.message;
        await post.save();
        res.status(201).json(post);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.delete = async (req, res) => {
    try {
        let post = await Post.findOne({
            where: {
                id: req.params.id
            }
        })
        if(!post){
            return res.status(404).json({error: "Ce post n'existe pas"});
        }
        if(post.userId !== req.token.id){
            return res.status(403).json({error: "Vous n'avez pas les droits pour supprimer ce post"});
        }
        await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({success: true});
    } catch (e) {
        res.status(400).json(e.message);
    }
}