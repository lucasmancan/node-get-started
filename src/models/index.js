
const Sequelize = require('sequelize');
const sequelize = new Sequelize('api-db', 'soft360', 'App360soft', {
  host: 'grupopll.database.windows.net',
  dialect: 'mssql',
  dialectOptions: {
    encrypt: true
  }
});
  
sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

// var models = [
//   'email',
//   'phone',
//   'user',
//   'profile'
// ];

// models.forEach(function(model) {
//   console.log('Directory: ', __dirname + '/' + model);
//   module.exports[model] = sequelize.import(__dirname + '\\' + model);
// });




// export connection
  
//   // force: true will drop the table if it already exists
  // User.sync({force: true}).then(() => {
  //   // Table created
  //   return User.create({
  //     firstName: 'John',
  //     lastName: 'Hancock'
  //   });
  // });
module.exports.sequelize = sequelize;
