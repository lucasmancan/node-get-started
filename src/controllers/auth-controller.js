'use strict';
const models = require('../models');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

exports.post = ((req, res, next) => {
    console.log("App Key Auth Controller: ", global.API_KEY);

    models.users.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then((user) => {

        if (user) {
            const id = user.id;
            const token = jwt.sign({
                id
            }, global.API_KEY, {
                expiresIn: 1800 // expires in 5min
            });

            res.status(200).send({
                success: true,
                message: "Successfully authenticated!",
                data: token
            });
        } else {

            res.status(500).send({
                success: false,
                message: 'Username or password may be incorrect!',
                data: null
            });

        }


    });
});
