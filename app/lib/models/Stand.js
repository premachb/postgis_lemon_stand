const Sequelize = require('sequelize');
const db = require('../db');

const Stand = db.define('stand', {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    postalCode: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '111111'
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '9999999999'
    },
    location: {
        type: Sequelize.GEOMETRY('POINT'),
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 1,
            max: 5
        }
    }
}, {
    freezeTableName: true
});

Stand.sync().then(() => {
}).catch((error) => {
});;

module.exports = Stand;
