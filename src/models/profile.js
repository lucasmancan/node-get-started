module.exports = (sequelize, Sequelize) => {

const Profile =  sequelize.define('profiles', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: { type: Sequelize.STRING(40), allowNull: false },    
    description : {type: Sequelize.STRING},
    permittionLevel : {type: Sequelize.ENUM('USER','ADMIN','GUEST'), allowNull: false}
}, {
  timestamps: true,
    // underscored: true,
    freezeTableName: true,
  tableName: 'profiles',
});


return Profile;
}
