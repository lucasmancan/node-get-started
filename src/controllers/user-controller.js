'use strict';
const models = require('../models');
const md5 = require('md5');
const repository = require('../repositories/user-repository');
const email = require('../mail');
const jwt = require('jsonwebtoken');
const config = require('../config');
const azure = require('azure-storage');


exports.getById = (req, res, next) => {
  models.users.findByPk(req.userId, {
    include: [{
      model: models.phones,
      required: false
    }, {
      model: models.addresses,
      required: false,
      include: [{
        model: models.cities,
        required: false,
        include: [{
          model: models.states,
          required: false,
          include: [{
            model: models.countries,
            required: false
          }]
        }]
      }]
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
        coverImage:"https://lfmsyssotrage.blob.core.windows.net/cover-images/default.jpg",
        profileImage:"https://lfmsyssotrage.blob.core.windows.net/profile-images/default.jpg",
        password: md5(req.body.password + global.API_KEY),
        active: true
      })

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
    console.log("Erro ao upar imagem: ", error);
    return res.status(500).send({
      success: false,
      message: 'Oops.. An Error Occurred!',
      data: error
    })
  }

};

exports.updateProfileImage = async (req, res, next) => {
  try {
    // Cria o Blob Service
    const blobSvc = azure.createBlobService(config.development.storage);

    let filename = req.params.id + new Date().getMilliseconds() +'.jpg';
    let profileImage = req.body.profileImage;

    // let matches = profileImage.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    // let type = matches[1];
    let buffer = new Buffer(profileImage, 'base64');

    // Salva a imagem
    await blobSvc.createBlockBlobFromText('profile-images', filename, buffer, {
      contentType: "image/jpeg"
    }, function (error, result, response) {
      if (error) {
        filename = 'default-image.png'
      }
    });


    models.users.update({
      profileImage: 'https://lfmsyssotrage.blob.core.windows.net/profile-images/' + filename
    }, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).send({
      success: true,
      message: 'Profile Picture Updated!',
      data: null
    });
  } catch (error) {
    console.log("Erro ao upar imagem: ", error);
    return res.status(500).send({
      success: false,
      message: 'Oops.. An Error Occurred!',
      data: null
    })
  }
}


exports.updateCoverImage = async (req, res, next) => {
  try {
    // Cria o Blob Service
    const blobSvc = azure.createBlobService(config.development.storage);

    let filename = req.params.id + new Date().getMilliseconds() +'.jpg';
    let coverImage = req.body.coverImage;

    // let matches = profileImage.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    // let type = matches[1];
    let buffer = new Buffer(coverImage, 'base64');

    // Salva a imagem
    await blobSvc.createBlockBlobFromText('cover-images', filename, buffer, {
      contentType: "image/jpeg"
    }, function (error, result, response) {
      if (error) {
        filename = 'default-image.png'
      }
    });

    models.users.update({
      coverImage: 'https://lfmsyssotrage.blob.core.windows.net/cover-images/' + filename
    }, {
      where: {
        id: req.params.id
      }
    });

    return res.status(200).send({
      success: true,
      message: 'Cover Picture Updated!',
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



exports.put = async (req, res, next) => {
  try {

    await repository.update(req.body)
    return res.status(200).send({
      success: true,
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