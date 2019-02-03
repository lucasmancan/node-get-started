'use strict';
const models = require('../models');
const md5 = require('md5');

exports.update = async(userObj, paramId) => {
    let User;

       return await models.sequelize.transaction( async (t) => {

         User = await models.users.update(userObj, {
            where: {
                id: paramId
            }
        });


        if (userObj.phones.length > 0) {
            userObj.phones.forEach(element => {
                element.user = User;
                if (element.id) {
                     models.phones.update(element, {
                        where: {
                            id: element.id
                        }
                    });
                } else {
                     models.phones.create(element);
                }
            });
        }

        if (userObj.addresses.length > 0) {
            userObj.addresses.forEach(element => {
                element.user = User;
                if (element.id) {
                     models.addresses.update(element, {
                        where: {
                            id: element.id
                        }
                    });
                } else {
                     models.addresses.create(element);
                }
            });
        }
    });
}

