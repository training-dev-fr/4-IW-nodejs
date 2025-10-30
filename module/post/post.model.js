const {DataTypes} = require('sequelize');
const {bdd} = require('../../helper/connexion.js');

const Post = bdd.define('Post',{
    message: {
        type: DataTypes.STRING(255),
       
    }
})

module.exports = Post;