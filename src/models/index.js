
const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(__filename);
const config    = require('../config');
var Sequelize = require('sequelize');


// const sequelize = new Sequelize('api-db', 'soft360', 'App360soft', {
//   host: 'grupopll.database.windows.net',
//   dialect: 'mssql',
//   dialectOptions: {
//     encrypt: true
//   }
// });
  
// sequelize.authenticate()
// .then(() => {
//   console.log('Connection has been established successfully.');
// })
// .catch(err => {
//   console.error('Unable to connect to the database:', err);
// });

const db  = {};

console.log("Variables: ", config.development.password);

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config.production);
} else {
  var sequelize = new Sequelize(config.development);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });


Object.keys(db).forEach(modelName => {
  console.log("Model Name: ",modelName, modelName.associate);

  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
