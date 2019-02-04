module.exports = (sequelize, Sequelize) => {

    const State = sequelize.define('states', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(255),
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
      tableName: 'states',
  
    })

    State.associate = function (models) {
        State.belongsTo(models.countries);
    };
  
    return State;
  }
  