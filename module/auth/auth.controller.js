const bcrypt = require('bcryptjs');
const User = require('../user/user.model');
const jwt = require('jsonwebtoken');
const Role = require('../role/role.model');

exports.login = async (req, res) => {
    try{
        let user = await User.findOne({
            where: {
                email: req.body.email
            },
            include: [{
                model: Role,
                through: "user_has_role"
            }]
        });
        if(!user){
            return res.status(404).json({error: "Utilisateur ou mot de passe invalide."});
        }
        if(!bcrypt.compareSync(req.body.password,user.password)){
            return res.status(404).json({error: "Utilisateur ou mot de passe invalide."});
        }
        let token = jwt.sign({
            id: user.id,
            roles: user.roles
        },"vieuhrg65z4g3s1fr6e5gf416e56fe5g68er")
        return res.status(200).json(token);
    }catch(e){
        res.status(500).json(e);
    }
}

exports.signin = async (req, res) => {
    try {
        if (req.body.email === "") {
            return res.status(400).json({ error: "Email requis" });
        }
        if (req.body.password === "") {
            return res.status(400).json({ error: "Mot de passe requis" });
        }
        let hash = bcrypt.hashSync(req.body.password, 10);
        let member = await Role.findOne({
            where: {
                code: "MBR"
            }
        });
        let user = await User.create({
            email: req.body.email,
            password: hash
        });
        await user.addRole(member);
        res.status(201).json({ success: true });
    }catch(e){
        res.status(500).json(e);
    }
}