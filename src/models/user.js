
module.exports = (sequelize, Sequelize) => {

const User =  sequelize.define('Users', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },    
    birthDate: { type: Sequelize.DATE},
    gender: { type: Sequelize.ENUM('M', 'F'), allowNull: false },    
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    active: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
    loggedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
}, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Email);
        User.hasMany(models.Phone);
      }
    }
});

    return User;
}
   