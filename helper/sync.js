const {bdd} = require('./connexion.js');
const User = require('./../module/user/user.model.js');

const sync = async () => {
    await bdd.sync({force: true});
}

sync();