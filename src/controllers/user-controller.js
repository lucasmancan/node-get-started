'use strict';
var User  = require('../models').User;
var Profile  = require('../models').Profile;
var Email  = require('../models').Email;
var Phones  = require('../models').Phones;


exports.get =  (req,res, next) => {
    User.findAll({
        include: [ Profile ]
      }).then(function(users) {
        res.render('index', {
          title: 'Sequelize: Express Example',
          users: users
        });
      
})};

exports.post =  (req,res, next) => {
    User.create({
        firstName: req.body.firstName
      }).then(function() {
        res.redirect('/');
      });
};

exports.put =  (req,res, next) => {
 
};

exports.delete =  (req,res, next) => {

};