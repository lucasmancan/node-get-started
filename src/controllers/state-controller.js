'use strict';
const models = require('../models');

exports.get = (req, res, next) => {
  models.states.findAll()
    .then(function (states) {
      res.send({
        success: true,
        message: '',
        data: states
      });
    })
};

exports.getById = (req, res, next) => {
  models.states.findById(req.params.id)
    .then(function (states) {
      res.send({
        success: true,
        message: '',
        data: states
      });
    })
};

exports.getByCountry = (req, res, next) => {
  console.log("Country: ", req.params.id);
    models.states.findAll({where: {country_id: req.params.id}})
      .then(function (states) {
        res.send({
          success: true,
          message: '',
          data: states
        });
      })
  };
  


exports.post = (req, res, next) => {
  models.states.create(req.body)
    .then(function () {
      res.send({
        success: true,
        message: 'State created',
        data: null
      });
    })
};

exports.put = (req, res, next) => {
  models.states.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(() => {
    res.status(200).send({
      success: true,
      message: 'State updated!',
      data: null
    });
  });
};

exports.delete = (req, res, next) => {
  models.states.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.status(200).send({
      success: true,
      message: 'State deleted!',
      data: null
    });
  });
};
