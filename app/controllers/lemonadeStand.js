/**
 * Created by brien on 2017-04-14.
 */
const express = require('express');
const standRouter = express.Router();
const lemonadeLocator = require('../lib/lemonadeLocator');

standRouter.get('/', function (req, res) {
    let lemonadeStands = lemonadeLocator.getAllLocations();
    return res.json(lemonadeStands);
});

standRouter.get('/:id', function (req, res) {
    let standId = req.params.id;
    let lemonadeStands = lemonadeLocator.getAllLocations({id: parseInt(standId)});
    return res.json(lemonadeStands);
});

module.exports = standRouter;