'use strict';
const models = require('../models');

exports.get = (req, res, next) => {
  models.countries.findAll()
    .then(function (countries) {
      res.send({
        success: true,
        message: '',
        data: countries
      });
    })
};

exports.getById = (req, res, next) => {
   models.countries.findById(req.params.id)
    .then(function (countries) {
      res.send({
        success: true,
        message: '',
        data: countries
      });
    })
};


exports.post = (req, res, next) => {
  models.countries.create(req.body)
    .then(function () {
      res.send({
        success: true,
        message: 'Country created',
        data: null
      });
    })
};

exports.put = (req, res, next) => {
  models.countries.update(req.body, {
    where: {
        id: req.body.id
    }
  }).then(() => {
    res.status(200).send({
      success: true,
      message: 'Country updated!',
      data: null
    });
  });
};

exports.delete = (req, res, next) => {
  models.countries.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.status(200).send({
      success: true,
      message: 'Country deleted!',
      data: null
    });
  });
};
