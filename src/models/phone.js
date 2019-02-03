module.exports = (sequelize, Sequelize) => {

  const Phone = sequelize.define('phones', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    phone: {
      type: Sequelize.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    ddd: {
      type: Sequelize.STRING(4),
      allowNull: false
    },
    ddi: {
      type: Sequelize.STRING(4),
      allowNull: true
    },
    default: {
      type: Sequelize.BOOLEAN
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
    tableName: 'phones',

  })

  return Phone;
}
