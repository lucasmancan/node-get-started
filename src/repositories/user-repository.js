'use strict';
const models = require('../models');
const md5 = require('md5');

exports.update = async (userObj) => {
    let User;

    return await models.sequelize.transaction(async (t) => {
    console.log("User Obj S"+userObj);

        let address;

        if(userObj.address){
            if(userObj.address.id){
                address =  await models.addresses.update(userObj.address,{ where: {id: userObj.address.id}});
            }else{
                address = await models.addresses.create(userObj.address);
            }

            
         userObj.address = address;
         userObj.address_id = address.id;
        }


        User = await models.users.update(userObj, {
            where: {
                id: userObj.id
            }
        });
        

    });
}