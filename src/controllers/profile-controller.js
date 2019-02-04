'use strict';
const models = require('../models');

exports.get = (req, res, next) => {
  models.profiles.findAll()
    .then(function (profiles) {
      res.send({
        success: true,
        message: '',
        data: profiles
      });
    })
};

exports.getById = (req, res, next) => {
  console.log(models.User);
  models.profiles.findById(req.params.id)
    .then(function (profiles) {
      res.send({
        success: true,
        message: '',
        data: profiles
      });
    })
};

exports.post = (req, res, next) => {
  models.profiles.create(req.body)
    .then(function () {
      res.redirect('/profiles');
    })
};

exports.put = (req, res, next) => {
  models.profiles.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(() => {
    res.status(200).send({
      success: true,
      message: 'Profile updated!',
      data: null
    });
  });
};

exports.delete = (req, res, next) => {
  models.profiles.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.status(200).send({
      success: true,
      message: 'Profile deleted!',
      data: null
    });
  });
};
