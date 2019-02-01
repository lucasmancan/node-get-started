module.exports = (sequelize, Sequelize) => {

  const Profile = sequelize.define('profiles', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    description: {
      type: Sequelize.STRING
    },
    permittionLevel: {
      field: 'permittion_level',
      type: Sequelize.ENUM('USER', 'ADMIN', 'MANAGER', 'GUEST'),
      allowNull: false
    },
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      field: 'updated_at',
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
  }, {
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'profiles',
  });


  return Profile;
}
