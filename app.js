const express = require('express');
const userRouter = require('./module/user/user.route.js');
const app = express();
const {connect} = require('./helper/connexion.js');

const launchBdd = async () => {
    await connect();
}
launchBdd();

app.use(express.json());
app.use('/User',userRouter);

module.exports = app;