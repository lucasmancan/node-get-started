'use strict';
const models = require('../models');

exports.get = (req, res, next) => {
  models.phones.findAll()
    .then(function (phones) {
      res.send({
        success: true,
        message: '',
        data: phones
      });
    })
};

exports.getById = (req, res, next) => {
  models.phones.findById(req.params.id)
    .then(function (phones) {
      res.send({
        success: true,
        message: '',
        data: phones
      });
    })
};

exports.getAllByIdUser = (req, res, next) => {
  models.phones.findAll({
      where: {
        user_id: req.params.userId
      }
    })
    .then(function (phones) {
      res.send({
        success: true,
        message: '',
        data: phones
      });
    })
};

exports.post = (req, res, next) => {
  models.phones.create(req.body)
    .then(function () {
      res.send({
        success: true,
        message: 'Phone created',
        data: null
      });
    })
};

exports.put = (req, res, next) => {
  models.phones.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(() => {
    res.status(200).send({
      success: true,
      message: 'Phone updated!',
      data: null
    });
  });
};

exports.delete = (req, res, next) => {
  models.phones.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.status(200).send({
      success: true,
      message: 'Phone deleted!',
      data: null
    });
  });
};