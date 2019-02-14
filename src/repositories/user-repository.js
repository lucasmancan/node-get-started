'use strict';
const models = require('../models');
const md5 = require('md5');

exports.update = async (userObj) => {
    let User;

    return await models.sequelize.transaction(async (t) => {
        User = await models.users.update(userObj, {
            where: {
                id: userObj.id
            }
        });
    });
}