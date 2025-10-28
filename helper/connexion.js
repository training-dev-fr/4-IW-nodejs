const Sequelize = require('sequelize');

const bdd = new Sequelize("4IW-nodejs","root","",{
    dialect:"mysql",
    host:"localhost",
    port: 3306
});

let connect = async () => {
    try{
        await bdd.authenticate();
        console.log('Connected to the database');
    }catch(e){
        console.error('Unable to connect to the database ' + e.message);
    }
}

module.exports = {connect,bdd};