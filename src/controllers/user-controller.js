'use strict';
const models = require('../models');
const md5 = require('md5');
console.log("MODELSSSS", models);
exports.get = (req, res, next) => {
  console.log(models.User);
  models.users.findAll({
    include: [{
        model: models.profiles,
        required: true
      },
      {
        model: models.emails,
        required: false
      },
      {
        model: models.phones,
        required: false
      }
    ]
  }).then(function (users) {
    res.send({
      success: true,
      message: '',
      data: users
    });
  })
};

exports.getById = (req, res, next) => {
  models.users.findById(req.params.id, {
    include: [models.profiles],
    include: [models.emails],
    include: [models.phones]
  }).then(function (users) {
    res.send({
      success: true,
      message: '',
      data: users
    });
  })
};

exports.post = (req, res, next) => {
  models.users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    cpf: req.body.cpf,
    cnpj: req.body.cnpj,
    password: md5(req.body.password + global.PASSWORD_KEY),
    birthDate: req.body.birthDate,
    gender: req.body.gender,
    emails: [req.body.emails],
    phones: [req.body.phones],
    active: false,
  }, {
    include: [{
      association: models.emails,
      as: 'emails'
    }]
  }, {
    include: [{
      association: models.phones,
      as: 'phones'
    }]
  }).then(function () {
    res.redirect('/users');
  });
};

exports.put = (req, res, next) => {
  User.update(req.body, {
    include: [models.profiles],
    include: [models.emails],
    include: [models.phones]
  }, {
    where: {
      id: customerId
    }
  }).then(() => {
    res.status(200).send("updated successfully a customer with id = " + id);
  });
};

exports.delete = (req, res, next) => {
  models.users.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.status(200).send('deleted successfully a user with id = ' + id);
  });
};
