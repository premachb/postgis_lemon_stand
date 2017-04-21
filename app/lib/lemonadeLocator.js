const db = require('./db');
const Stand = require('./models/Stand');

const lemonadeStandLocator = {
    getTopFiveClosest : function(lat, lng, callback) {
        Stand.findAll({
            limit: 5,
            order: 'location <-> st_setsrid(st_makepoint(' + lat + ',' + lng + ') ,4326)'
        }).then((results) => {
            callback(null, results);
        }).catch((error) => {
            callback(error);
        });
    }
};

module.exports = lemonadeStandLocator;
