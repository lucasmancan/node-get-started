// const sequelize = require('./database').sequelize;
// const Sequelize = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Email =  sequelize.define('emails', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        email: { type: Sequelize.STRING(40), allowNull: false },    
        default : {type: Sequelize.BOOLEAN},
    },
     {
    timestamps: true,
    // underscored: true,
    freezeTableName: true,
    tableName: 'emails',
  });

    return Email;
}
