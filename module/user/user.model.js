const {DataTypes} = require('sequelize');
const bdd = require('./../../helper/connexion.js');

const User = bdd.define('User',{
    email: {
        type: DataTypes.STRING(255),
        unique: true
    },
    password: {
        type: DataTypes.STRING(255)
    }
})

module.exports = User;