const Sequelize = require('sequelize');
const db = require('../db');

const Stand = sequelize.define('stand', {
    address: {
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
        allowNull: false
    },
    location: {
        type: Sequelize.GEOMETRY('POINT'),
        allowNull: false
    },
    rating: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
            isDecimal: true,
            min: 1.0,
            max: 5.0
        }
    }
}, {
    freezeTableName: true
});

Stand.sync().then(() => {
    console.log("Synced Stand Table");
}).catch((error) => {
    console.log("Received error when syncing Stand table ", error);
});;

module.exports = Stand;
