const {DataTypes} = require('sequelize');
const {bdd} = require('./../../helper/connexion.js');

const Role = bdd.define('role',{
    name: {
        type: DataTypes.STRING(255),
    },
    code: {
        type: DataTypes.STRING(255)
    }
})

module.exports = Role;