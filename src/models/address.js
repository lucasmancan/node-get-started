module.exports = (sequelize, Sequelize) => {

  const Address = sequelize.define('addresses', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    street: {
      type: Sequelize.STRING(255),
      allowNull: false
    },zipCode: {
      field: 'zip_code',
      type: Sequelize.STRING(255),
      allowNull: false
    },
    number: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    neighborhood: {
      type: Sequelize.STRING(255),
      allowNull: true
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
    tableName: 'addresses',

  })

  Address.associate = function (models) {
    Address.belongsTo(models.cities);
  };

  return Address;
}