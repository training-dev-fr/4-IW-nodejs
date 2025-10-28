const User = require("./user.model")

exports.getAll = async (req, res) => {
    try {
        let userList = await User.findAll();
        res.status(200).json(userList);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.getById = async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.create = async (req, res) => {
    try {
        let user = await User.create({
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).json(user);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.update = async (req, res) => {
    try {
        let user = await User.update({
            email: req.body.email
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json(user);
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.delete =  async (req, res) => {
    try {
        let user = await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json(e.message);
    }
}