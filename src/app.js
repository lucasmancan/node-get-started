'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index-routes');
const userRoutes = require('./routes/user-routes');

const connStr = "Server=grupopll.database.windows.net;Database=api-db;User Id=soft360;Password=App360soft;encrypt=true";
const sql = require("mssql");

// fazendo a conexão global
sql.connect(connStr)
   .then(conn => global.conn = conn)
   .catch(err => console.log(err));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', indexRoutes);
app.use('/users', userRoutes);


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});



module.exports = app;