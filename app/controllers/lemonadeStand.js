const express = require('express');
const winston = require('winston');
const standRouter = express.Router();
const lemonadeLocator = require('../lib/lemonadeLocator');
const Stand = require('../lib/models/Stand');

standRouter.get('/nearest', function (req, res) {
    let latitude = req.query.lat;
    let longitude = req.query.lng;

    if(!latitude || !longitude) {
        return res.send('Improper parameters lat and lng required');
    }

    lemonadeLocator.getTopFiveClosest(latitude, longitude, (err, results) => {
        if(err) {
            return res.json(err);
        }
        res.json(results);
    });
});

standRouter.get('/regional', function (req, res) {
    res.send('WIP');
});

module.exports = standRouter;
