const Comment = require("../module/comment/comment.model");
const Post = require("../module/post/post.model");
const User = require("../module/user/user.model");
const Role = require("../module/role/role.model");


const associate = async () => {
    await Post.belongsTo(User, {foreignKey: "userId"});
    await User.hasMany(Post, {foreignKey: "userId"});
    await Comment.belongsTo(User, {foreignKey: "userId"});
    await Post.hasMany(Comment, {foreignKey: "postId"});
    await User.belongsToMany(Role,{through: "user_has_role"});
}

module.exports = associate;