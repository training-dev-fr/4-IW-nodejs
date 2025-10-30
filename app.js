const express = require('express');
const userRouter = require('./module/user/user.route.js');
const postRouter = require('./module/post/post.route.js');
const commentRouter = require('./module/comment/comment.route.js');
const authRouter = require('./module/auth/auth.route.js');
const roleRouter = require('./module/role/role.route.js');
const app = express();
const { connect } = require('./helper/connexion.js');
const associate = require('./helper/associate.js');
const auth = require('./module/auth/auth.middleware.js');

const launchBdd = async () => {
    await connect();
    await associate();
}
launchBdd();

app.use(express.json());
app.use('/User', userRouter);
app.use('/Post', auth, postRouter);
app.use('/Comment', commentRouter);
app.use('/Auth', authRouter);
app.use('/Role', roleRouter);

module.exports = app;