'use strict';
const models = require('../models');
const md5 = require('md5');

exports.get = (req, res, next) => {
  models.emails.findAll()
    .then(function (emails) {
      res.send({
        success: true,
        message: '',
        data: emails
      });
    })
};

exports.getById = (req, res, next) => {
  console.log(modelss.User);
  models.emails.findById(req.params.id)
    .then(function (emails) {
      res.send({
        success: true,
        message: '',
        data: emails
      });
    })
};

exports.getAllByIdUser = (req, res, next) => {
    console.log(modelss.User);
    models.emails.findAll({where :{ user_id: req.params.userId}})
      .then(function (emails) {
        res.send({
          success: true,
          message: '',
          data: emails
        });
      })
  };

exports.post = (req, res, next) => {
  models.emails.create(req.body)
    .then(function () {
      res.redirect('/emails');
    })
};

exports.put = (req, res, next) => {
  models.emails.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.status(200).send({
      success: true,
      message: 'E-mail updated!',
      data: null
    });
  });
};

exports.delete = (req, res, next) => {
  models.emails.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.status(200).send({
      success: true,
      message: 'E-mail deleted!',
      data: null
    });
  });
};
