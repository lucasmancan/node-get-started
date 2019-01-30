
module.exports = (sequelize, Sequelize) => {

const User =  sequelize.define('users', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },  
    cpf: { type: Sequelize.STRING(11), allowNull: true },   
    cnpj: { type: Sequelize.STRING(20), allowNull: true },         
    birthDate: { type: Sequelize.DATE},
    gender: { type: Sequelize.ENUM('M', 'F'), allowNull: false },    
    active: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
    loggedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
}, 
{
    timestamps: true,
    // underscored: true,
    freezeTableName: true,
    tableName: 'users',
  }
  );

  User.associate = function(models) {
    User.hasMany(models.emails);
        User.hasMany(models.phones);
        User.belongsTo(models.profiles);
  };

    return User;
}
   