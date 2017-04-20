var Sequelize = require('sequelize');
var sequelize = new Sequelize('lemonade_stand_locator', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,

    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    }
});


module.exports = sequelize;
