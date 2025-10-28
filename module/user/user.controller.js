const User = require("./user.model")

exports.getAll = () => {

}

exports.getById = () => {

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

exports.update = () => {

}

exports.delete = () => {

}