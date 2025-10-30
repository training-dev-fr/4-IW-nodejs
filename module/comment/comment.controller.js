const User = require("../user/user.model");
const Comment = require("./comment.model")

exports.getAll = async (req, res) => {
    try {
        let commentList = await Comment.findAll();
        res.status(200).json(commentList);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.getById = async (req, res) => {
    try {
        let comment = await Comment.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: User,
                attributes: {
                    exclude: ["password"]
                }
            }]
        });
        res.status(200).json(comment);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.create = async (req, res) => {
    try {
        let comment = await Comment.create({
            message: req.body.message,
            userId: req.body.userId,
            postId: req.body.postId
        });
        res.status(201).json(comment);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.update = async (req, res) => {
    try {
        let comment = await Comment.update({
            message: req.body.message
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json(comment);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.delete =  async (req, res) => {
    try {
        let comment = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(comment);
    } catch (e) {
        res.status(400).json(e.message);
    }
}