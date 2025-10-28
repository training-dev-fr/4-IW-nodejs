const express = require('express');
const userRouter = require('./module/user/user.route.js');
const app = express();


app.use('/User',userRouter);

module.exports = app;