'use strict';
var models = require('../models');

console.log("MODELSSSS",models);
exports.get =  (req,res, next) => {
  console.log(models.User);
  models.users.findAll({
    include: [
      { model: models.profiles, required: true},
      { model: models.emails, required: false},
      { model: models.phones, required: false}
        ]
  }
  ).then(function(users) {
    res.send({
      success: true,
      message: '',
      data: users
    });
})};

exports.getById =  (req,res, next) => {
  models.users.findById(req.params.id, {
    include: [ models.profiles ],
    include: [ models.emails ],
    include: [ models.phones ]
  }).then(function(users) {
    res.send({
      success: true,
      message: '',
      data: users
    });
})};

exports.post =  (req,res, next) => {
  models.users.create({

  }).then(function() {
        res.redirect('/');
      });
};

exports.put =  (req,res, next) => {
  User.update( req.body, 
				 { where: {id: customerId} }
			   ).then(() => {
				 res.status(200).send("updated successfully a customer with id = " + id);
			   });
};

exports.delete =  (req,res, next) => {
  models.users.destroy({
    where: { id: req.params.id }
  }).then(() => {
    res.status(200).send('deleted successfully a user with id = ' + id);
  });
};