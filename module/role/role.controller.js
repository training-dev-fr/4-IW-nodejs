const Post = require("../post/post.model");
const Role = require("./role.model")

exports.getAll = async (req, res) => {
    try {
        let roleList = await Role.findAll({attributes: {exclude: ['password']}});
        res.status(200).json(roleList);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.getById = async (req, res) => {
    try {
        let role = await Role.findOne({
            where: {
                id: req.params.id
            },
            include: [Post]
        });
        res.status(200).json(role);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.create = async (req, res) => {
    try {
        let role = await Role.create({
            name: req.body.name,
            code: req.body.code
        });
        res.status(201).json(role);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.update = async (req, res) => {
    try {
        let role = await Role.update({
            name: req.body.name,
            code: req.body.code
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json(role);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.delete =  async (req, res) => {
    try {
        let role = await Role.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(role);
    } catch (e) {
        res.status(400).json(e.message);
    }
}