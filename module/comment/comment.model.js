const {DataTypes} = require('sequelize');
const {bdd} = require('../../helper/connexion.js');

const Comment = bdd.define('Comment',{
    message: {
        type: DataTypes.STRING(255),
       
    }
})

module.exports = Comment;