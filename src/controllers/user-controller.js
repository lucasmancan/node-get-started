'use strict';
const models = require('../models');
const md5 = require('md5');
const repository = require('../repositories/user-repository');
const email = require('../mail');
const jwt = require('jsonwebtoken');

exports.get = (req, res, next) => {
  models.users.findAll({
    include: [{
        model: models.profiles,
        required: true
      }, {
        model: models.addresses,
        required: false,
        include: {
          model: models.states,
          required: true,
          include: {
            model: models.countrys,
            required: true
          }
        }
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
  models.users.findByPk(req.params.id, {
    include: [{
      model: models.profiles,
      required: false
    }, {
      model: models.addresses,
      required: false,
      include: {
        model: models.cities,
        required: false,
        include: {
          model: models.states,
          required: false,
          include: {
            model: models.countries,
            required: false
          }
        }
      }
    }, {
      model: models.phones,
      required: false
    }]
  }).then(function (users) {
    res.send({
      success: true,
      message: '',
      data: users
    });
  })
};



exports.post = async (req, res, next) => {
  let User;
  try {
    await models.sequelize.transaction(async (t) => {

      User = await models.users.findOne({
        where: {
          email: req.body.email
        }
      });

      if (User) {
        return res.status(200).send({
          success: false,
          message: 'User already exists!',
          data: null
        });
      }

      User = await models.users.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: md5(req.body.password + global.API_KEY),
        active: true
      })


      if (req.body.profile) {
        User.profile = req.body.profile
      }

      if (req.body.phones && req.body.phones.length > 0) {
        req.body.phones.forEach(element => {
          element.user = User;
          models.phones.create(element);
        })
      }

      if (req.body.addresses && req.body.addresses.length > 0) {
        req.body.addresses.forEach(element => {
          element.user = User;
          models.addresses.create(element);
        })
      }


      const id = User.id;
      const token = jwt.sign({
        id
      }, global.API_KEY, {
        //  expiresIn: 1800 // expires in 5min
      });

      const resp = {}
      resp.user = User;
      resp.token = token;
      email.sendEmail(User.email);

      return res.status(201).send({
        success: true,
        message: 'User created!',
        data: resp
      });
    });


  } catch (error) {

    console.error(error);
    return res.status(500).send({
      success: false,
      message: 'Oops.. An Error Occurred!',
      data: error
    })
  }

};

exports.put = async (req, res, next) => {
  try {

    await repository.update(req.body)

    return res.status(200).send({
      success: false,
      message: 'User updated!',
      data: null
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Oops.. An Error Occurred!',
      data: null
    })
  }
}

exports.delete = async (req, res, next) => {
  try {
    await models.users.destroy({
      where: {
        id: req.params.id
      }
    })

    return res.status(200).send({
      success: false,
      message: 'User deleted!',
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