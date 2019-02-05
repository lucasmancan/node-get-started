'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index-routes');
const userRoutes = require('./routes/user-routes');
const profileRoutes = require('./routes/profile-routes');
const phoneRoutes = require('./routes/phone-routes');
const countryRoutes = require('./routes/country-routes');
const stateRoutes = require('./routes/state-routes');

const authRoutes = require('./routes/auth-routes');

const cors = require('cors')

const app = express();

app.use(cors({credentials: true, origin: true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/phones', phoneRoutes);
app.use('/profiles', profileRoutes);
app.use('/auth', authRoutes);
app.use('/countries', countryRoutes);
app.use('/states', stateRoutes);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});



module.exports = app;