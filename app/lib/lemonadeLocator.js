const db = require('./db');
const lemonadeStandLocator = {
    getAllLocations : function(query) {
        "use strict";
        let lemonadeStands = [ {
            id: 1,
            lat: 45.2,
            long: 10.1,
            name: "Brien's Lemonade Stand!"
        }, {
            id: 2,
            lat: 20.0,
            long: 5.1,
            name: "The Best Lemonade Stand"
        }
        ];

        if(query) {
            let queryId = query.id;
            return lemonadeStands.filter(function (stand) {
                return queryId === stand.id;
            });
        }

        return lemonadeStands;
    },

    getAllLocationsByDB : function(query) {
    },

    getTopFiveClosest : function(lat, lng) {

    }
};

module.exports = lemonadeStandLocator;
