/**
 * Created by brien on 2017-04-14.
 */
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const portNumber = process.env.SERVER_PORT || 8080;
const lemonadeStandController = require('./controllers/lemonadeStand');

app.use(bodyParser.json({type: 'application/**+json'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use('/stands', lemonadeStandController);
app.listen(portNumber); // for PROD should set the port on
console.log('App is listening on port 3000');