
'use strict';
const models = require('../models');


exports.post = (req, res, next) => {
    if(!req.body.id){
        req.body.user_id = req.userId;
        console.log("Endereço:", req.body);
        models.addresses.create(req.body)
        .then(function () {
          res.send({
            success: true,
            message: 'Address updated!',
            data: null
          });
        })
    }else{
        models.addresses.update(req.body, {
            where: {
                id: req.body.id
            }
        })
        .then(function () {
          res.send({
            success: true,
            message: 'Address updated!',
            data: null
          });
        })
    }
   
  };

  

exports.delete = async (req, res, next) => {
    try {
      await models.addresses.destroy({
        where: {
          id: req.params.id
        }
      })
  
      return res.status(200).send({
        success: false,
        message: 'Address removed!',
        data: null
      });
    } catch (error) {
      return res.status(500).send({
        success: false,
        message: 'Oops.. An Error Occurred!',
        data: null
      })
    }
  };