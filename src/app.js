'use strict';
global.API_KEY = 'L!t(kg"6&<mAl@[u,9I{n?fFg-cBB:/X$@Dy9Mg|AQ&AV:(itx?XCAe>A#v/;|_';

const express = require('express');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index-routes');
const userRoutes = require('./routes/user-routes');
const profileRoutes = require('./routes/profile-routes');
const emailRoutes = require('./routes/email-routes');
const phoneRoutes = require('./routes/phone-routes');
const authRoutes = require('./routes/auth-routes');

console.log("App Key: ", global.API_KEY);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/emails', emailRoutes);
app.use('/phones', phoneRoutes);
app.use('/profiles', profileRoutes);
app.use('/auth', authRoutes);


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});



module.exports = app;