'use strict';
const models = require('../models');

exports.get = (req, res, next) => {
  models.cities.findAll()
    .then(function (cities) {
      res.send({
        success: true,
        message: '',
        data: cities
      });
    })
};

exports.getById = (req, res, next) => {
  models.cities.findByPk(req.params.id)
    .then(function (cities) {
      res.send({
        success: true,
        message: '',
        data: cities
      });
    })
};

exports.getByState = (req, res, next) => {
  console.log("City Id: ", req.params.id);
    models.cities.findAll({where: {state_id: req.params.id}})
      .then(function (cities) {
        res.send({
          success: true,
          message: '',
          data: cities
        });
      })
  };
  


exports.post = (req, res, next) => {
  models.cities.create(req.body)
    .then(function () {
      res.send({
        success: true,
        message: 'City created',
        data: null
      });
    })
};

exports.put = (req, res, next) => {
  models.cities.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(() => {
    res.status(200).send({
      success: true,
      message: 'City updated!',
      data: null
    });
  });
};

exports.delete = (req, res, next) => {
  models.cities.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.status(200).send({
      success: true,
      message: 'City deleted!',
      data: null
    });
  });
};
