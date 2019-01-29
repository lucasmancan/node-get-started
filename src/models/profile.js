module.exports = (sequelize, Sequelize) => {

const Profile =  sequelize.define('Profiles', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: { type: Sequelize.STRING(40), allowNull: false },    
    description : {type: Sequelize.STRING},
    permittionLevel : {type: Sequelize.ENUM('USER','ADMIN','GUEST'), allowNull: false},
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
}, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Email);
        User.hasMany(models.Phone);
      }
    }
});

return Profile;
}
